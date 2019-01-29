<template>
  <div class="chat-box">
    <UserChat :chat="currentChat"></UserChat>
  </div>
</template>
<script>
import UserChat from '@/components/chat/Chat';
import WebsocketHeartbeatJs from '@/utils/libs/heartbeat';
import conf from '@/conf';
import {
  ChatListUtils,
  ErrorType,
  imageLoad,
  logout,
  MessageInfoType,
  MessageTargetType,
  timeoutFetch
} from '@/utils/chat';
import HttpApiUtils from '@/api/http';

export default {
  components: {
    UserChat
  },
  data () {
    return {};
  },
  computed: {
    currentChat: {
      get: function () {
        console.log('currentChat内容：' + this.$store.state.currentChat)
        return this.$store.state.currentChat;
      },
      set: function (currentChat) {
        this.$store.commit('setCurrentChat', currentChat);
      }
    },
    chatList: {
      get: function () {
        return this.$store.state.chat.chatList;
      },
      set: function (chatList) {
        this.$store.commit('setChatList', chatList);
      }
    }
  },
  methods: {
    showChat: function (chat) {
      this.$store.commit('resetUnRead');
      this.currentChat = chat;
      // 每次滚动到最底部
      this.$nextTick(() => {
        imageLoad('message-box');
      });
    },
    delChat (chat) {
      this.$store.commit('delChat', chat);
    }
  },
  activated: function () {
    let self = this;
    // 当前聊天室
    if (self.$route.query.chat) {
      self.$store.commit('setCurrentChat', this.$route.query.chat);
    }
    // 重新设置chatList
    self.$store.commit('setChatList', ChatListUtils.getChatList(self.$store.state.user.id));
    // 每次滚动到最底部
    this.$nextTick(() => {
      imageLoad('message-box');
    });
  },
  mounted: function () {
    let self = this;
    let websocketHeartbeatJs = new WebsocketHeartbeatJs({
      url: conf.getWsUrl()
    });
    websocketHeartbeatJs.onopen = function () {
      websocketHeartbeatJs.send('{"code":' + MessageInfoType.MSG_READY + '}');
    };
    websocketHeartbeatJs.onmessage = function (event) {
      let data = event.data;
      let sendInfo = JSON.parse(data);
      // 真正的消息类型
      if (sendInfo.code === MessageInfoType.MSG_MESSAGE) {
        winControl.flashIcon();
        let message = sendInfo.message;
        if (message.avatar && message.avatar.indexOf('http') === -1) {
          message.avatar = conf.getHostUrl() + message.avatar;
        }
        message.timestamp = self.formatDateTime(new Date(message.timestamp));
        // 发送给个人
        if (message.type === MessageTargetType.FRIEND) {
          // 接受人是当前的聊天窗口
          if (String(message.fromid) === String(self.$store.state.currentChat.id)) {
            self.$store.commit('addMessage', message);
          } else {
            self.$store.commit('setUnReadCount', message);
            self.$store.commit('addUnreadMessage', message);
          }
        } else if (message.type === MessageTargetType.CHAT_GROUP) {
          // message.avatar = self.$store.state.chatMap.get(message.id);
          // 接受人是当前的聊天窗口
          if (String(message.id) === String(self.$store.state.currentChat.id)) {
            if (String(message.fromid) !== self.$store.state.user.id) {
              self.$store.commit('addMessage', message);
            }
          } else {
            self.$store.commit('setUnReadCount', message);
            self.$store.commit('addUnreadMessage', message);
          }
        }
        winControl.flashFrame();
        self.$store.commit('setLastMessage', message);
        // 每次滚动到最底部
        self.$nextTick(() => {
          imageLoad('message-box');
        });
      }
    };

    websocketHeartbeatJs.onreconnect = function () {
      console.log('reconnecting...');
    };

    let count = 0;
    websocketHeartbeatJs.onerror = function (error) {

      let param = new FormData();
      param.set('client_id', 'v-client');
      param.set('client_secret', 'v-client-ppp');
      param.set('grant_type', 'refresh_token');
      param.set('scope', 'select');
      param.set('refresh_token', sessionStorage.getItem('refresh_token'));
      timeoutFetch(
        fetch(conf.getTokenUrl(), {
          method: 'POST',
          model: 'cros', //跨域
          headers: {
            Accept: 'application/json'
          },
          body: param
        }),
        5000
      )
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            return new Promise((resolve, reject) => {
              reject(ErrorType.FLUSH_TOKEN_ERROR);
            });
          }
        })
        .then(json => {
          count = 0;
          self.$store.commit('setToken', json);
          self.$store.commit('setTokenStatus', json);

          //清除原先的刷新缓存的定时器
          self.$store.commit('clearFlushTokenTimerId');
          //刷新token 定时器
          let flushTokenTimerId = setTimeout(function () {
            let api = new HttpApiUtils();
            api.flushToken(self)
          }, ((json.expires_in - 10) * 1000));
          self.$store.commit('setFlushTokenTimerId', flushTokenTimerId);

        })
        .catch(error => {
          count++;
          if ('TypeError: Failed to fetch' === error.toString()) {
            self.$Message.error('网络断开，正在重连...');
          } else if (ErrorType.FLUSH_TOKEN_ERROR === error) {
            count = 25;
          }
        });
      //重连次数大于24 退出登录
      if (count > 24) {
        count = 0;
        logout(self);
      }
    };

    self.$store.commit('setWebsocket', websocketHeartbeatJs);
  }
};
</script>
<style lang="scss" scoped>
</style>
