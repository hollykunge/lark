<template>
  <div class="chat-panel">
    <div class="chat-box-list">
      <div class="search-box">
        <lark-side-window />
        <Row type="flex"
             justify="center">
          <Col span="20">
          <Input search
                 placeholder="搜索"
                 size="small"
                 class="search"
                 @on-focus="showSearch()" />
          </Col>
          <Col span="4"
               push="1">
          <Button icon="md-close"
                  size="small"
                  v-show="showSearchDiv"
                  @click="closeSearchDiv()"></Button>
          <Button icon="md-add"
                  size="small"
                  v-show="showAdd"
                  @click="modalCreateChat = true"></Button>
          <Modal title="新建研讨"
                 v-model="modalCreateChat"
                 :mask-closable="false">
          </Modal>
          </Col>
        </Row>
      </div>
      <div class="search-result"
           v-show="showSearchDiv">

      </div>
      <div class="group-box">
        <Tabs size="small">
          <TabPane label="最 近"
                   icon="ios-time">
            <ul class="chat-list">
              <li class="chat"
                  v-for="chat in chatList">
                <a href="javascript:"
                   @click="showChat(chat)">
                  <img :src="[host + chat.avatar]">
                  <b>{{ chat.name }}</b>
                  <p>{{ chat.name }}</p>
                </a>
              </li>
            </ul>
          </TabPane>
          <TabPane label="群 组"
                   icon="ios-people">
            <ul class="group-list">
              <li class="group"
                  v-for="group in groupList">
                <a href="javascript:"
                   @click="showChat(group)">
                  <img :src="[host + group.avatar]">
                  <b>{{ group.name }}</b>
                  <p>{{ group.name }}</p>
                </a>
              </li>
            </ul>
          </TabPane>
          <TabPane label="联系人"
                   icon="ios-contact">
            <ul class="contact-list">
              <li class="contact"
                  v-for="contact in contactList">
                <a href="javascript:"
                   @click="showChat(contact)">
                  <img :src="[host + contact.avatar]">
                  <b>{{ contact.name }}</b>
                  <p>{{ contact.name }}</p>
                </a>
              </li>
            </ul>
          </TabPane>
        </Tabs>

      </div>
    </div>
    <div class="chat-box">
      <lark-navbar />
    </div>
  </div>
</template>
<script>
import LarkNavbar from "@/layout/LarkNavbar";
import LarkSideWindow from "@/components/header/LarkSideWindow";
import Search from "@/components/chat/ChatSearch";
import UserChat from "@/components/chat/Chat";
import conf from "@/conf";
import { pinyin } from "@/utils/libs/pinyin";
import {
  Chat,
  ChatListUtils,
  MessageTargetType,
  fetchPost
} from "@/utils/chat";

export default {
  components: {
    Search,
    UserChat,
    LarkSideWindow,
    LarkNavbar
  },
  computed: {
    //需要展示的研讨
    chatList: {
      get: function () {
        console.log('获取chatlist')
        return this.$store.state.chatList;
      },
      set: function (chatList) {
        this.$store.commit("setChatList", chatList);
      }
    },
    //需要展示的群组
    groupList: {
      get: function () {
        return this.$store.state.groupList;
      },
      set: function (groupList) {
        this.$store.commit("setGroupList", groupList);
      }
    },
    //需要展示的联系人
    contactList: {
      get: function () {
        return this.$store.state.contactList;
      },
      set: function (contactList) {
        this.$store.commit("setContactList", contactList);
      }
    }
  },
  data () {
    return {
      modalCreateChat: false,
      host: conf.getHostUrl(),
      search: "",
      showSearchDiv: false,
      showAdd: true
    };
  },
  methods: {
    closeSearchDiv: function () {
      this.showAdd = true;
      this.showSearchDiv = false;
    },
    showSearch: function () {
      this.showAdd = false;
      this.search = "";
      this.showSearchDiv = true;
    },
    // 打开一个聊天对话框
    showChat: function (chat) {
      let self = this;
      let chatList = ChatListUtils.getChatList(self.$store.state.user.id);
      // 删除当前用户已经有的会话
      let newChatList = chatList.filter(function (element) {
        return String(element.id) !== String(chat.id);
      });
      // 重新添加会话，放到第一个
      let chatV = new Chat(chat.id, chat.name, conf.getHostUrl() + chat.avatar, 0, '', '', '', MessageTargetType.CHAT_GROUP);
      newChatList.unshift(chatV);
      // 存储到localStorage 的 chatList
      ChatListUtils.setChatList(self.$store.state.user.id, chatList);
      this.$store.commit('setChatList', newChatList);
      this.$router.push({
        path: '/index/chatBox',
        query: { chatV: chatV }
      });
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.chat-panel {
  width: 100%;
  background-color: #eceae8;
  height: 100%;
  display: flex;
  flex-direction: row;

  .chat-box {
    flex: 1;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .chat-box-list {
    position: relative;
    height: 100%;
    width: 264px;

    display: flex;
    flex-direction: column;

    .search-box {
      height: 36px;
      padding: 0 6px 6px 6px;
      width: 100%;
    }

    .search {
      input {
        border-radius: 0;
        border: 0;
      }
    }
  }
}
.search-result {
  position: absolute;
  top: 42px;
  bottom: 0px;
  width: inherit;
  // height: 100%;
  overflow: auto;
  z-index: 999999999999999999;
  // -webkit-filter: blur(5px); /* Chrome, Safari, Opera */
  // filter: blur(5px);
  background: rgba(255, 255, 255, 1);
  // margin-top: -45px;
}
.group-box {
  height: 100%;
  overflow-y: auto;

  .count {
    color: #aaaaaa;
  }

  li {
    list-style: none;
    position: relative;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: 200;
    margin-bottom: 2rem;

    h5 {
      padding: 0.5rem 0;
      cursor: pointer;
      font-size: 1.3rem;
      font-weight: 200;

      i {
        vertical-align: baseline;
      }
    }

    img {
      width: 4.4rem;
      height: 4.4rem;
      position: absolute;
      top: 0.4rem;
      left: 2rem;
    }

    b {
      position: absolute;
      font-size: 1.3rem;
      left: 7.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 600;
      top: 0.6rem;
    }

    p {
      position: absolute;
      left: 7.5rem;
      bottom: 0.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 75%;
      font-size: 1.1rem;
      color: #aaaaaa;
    }
  }

  .chat {
    height: 5.2rem;
    position: relative;

    a {
      display: block;
      width: 100%;
      height: 100%;
      color: #f2f2f2;
      position: relative;

      i {
        display: inline-block;
        width: 1.8rem;
        height: 1.6rem;
        background-color: #ff0000;
        border-radius: 50%;
        color: #f2f2f2;
        text-align: center;
        font-style: normal;
        position: absolute;
        left: 1rem;
        top: 0;
        z-index: 99999999999;
      }

      p {
        width: 12rem;
      }
    }
  }
}
</style>
