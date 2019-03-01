<template>
  <div class="chat-panel">
    <div class="chat-box-list">
      <div class="search-box">
        <lark-side-window />
        <a-row type="flex"
             justify="center">
          <a-col span="20">
          <a-input search
                 placeholder="搜索"
                 size="small"
                 class="search"
                 @on-focus="showSearch()" />
          </a-col>
          <a-col span="4"
               push="1">
          <a-button icon="md-close"
                  size="small"
                  v-show="showSearchDiv"
                  @click="closeSearchDiv()"></a-button>
          <a-button icon="md-add"
                  size="small"
                  v-show="showAdd"
                  @click="modalCreateChat = true"></a-button>
          <a-modal title="新建研讨"
                 v-model="modalCreateChat"
                 :mask-closable="false"></a-modal>
          </a-col>
        </a-row>
      </div>
      <div class="search-result"
           v-show="showSearchDiv"></div>
      <div class="group-box">
        <Tabs size="small">
          <TabPane label="最 近"
                   class="group-tab"
                   icon="ios-time">
            <ul class="chat-list">
              <li class="chat-item"
                  v-for="chat in chatList">
                <a href="javascript:"
                   @click="showChat(chat)">
                  <div class="avatar">
                    <img :src="chat.avatar">
                  </div>
                  <div class="info">
                    <h3 class="nickname">
                      <span>{{ chat.lastword }}</span>
                    </h3>
                    <p class="msg">{{ chat.name }}</p>
                  </div>
                </a>
              </li>
            </ul>
          </TabPane>
          <TabPane label="群 组"
                   class="group-tab"
                   icon="ios-people">
            <ul class="group-list">
              <li class="group"
                  v-for="group in groupList">
                <a href="javascript:"
                   @click="showChat(group)">
                  <img :src="[host + group.avatar]">
                  <b>{{ group.name }}</b>
                  <p>{{ group.lastword }}</p>
                </a>
              </li>
            </ul>
          </TabPane>
          <TabPane label="联系人"
                   class="group-tab"
                   icon="ios-contact">
            <ul class="contact-list">
              <li class="contact"
                  v-for="contact in contactList">
                <a href="javascript:"
                   @click="showChat(contact)">
                  <img :src="[host + contact.avatar]">
                  <b>{{ contact.name }}</b>
                  <p>{{ contact.lastword }}</p>
                </a>
              </li>
            </ul>
          </TabPane>
        </Tabs>
      </div>
    </div>
    <div class="chat-box">
      <lark-navbar />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
import LarkNavbar from '@/components/header/LarkNavbar'
import LarkSideWindow from '@/components/header/LarkSideWindow'
import Search from '@/components/chat/ChatSearch'
import UserChat from '@/components/chat/Chat'
import conf from '@/conf'
// import {
//   Chat,
//   ChatListUtils,
//   MessageTargetType,
//   fetchPost
// } from '@/utils/chat'

export default {
  components: {
    Search,
    UserChat,
    LarkSideWindow,
    LarkNavbar
  },
  computed: {
    // 需要展示的研讨
    chatList: {
      get: function () {
        return this.$store.state.chat.chatList
      },
      set: function (chatList) {
        this.$store.commit('setChatList', chatList)
      }
    },
    // 需要展示的群组
    groupList: {
      get: function () {
        return this.$store.state.groupList
      },
      set: function (groupList) {
        this.$store.commit('setGroupList', groupList)
      }
    },
    // 需要展示的联系人
    contactList: {
      get: function () {
        return this.$store.state.contactList
      },
      set: function (contactList) {
        this.$store.commit('setContactList', contactList)
      }
    }
  },
  data () {
    return {
      modalCreateChat: false,
      host: conf.getHostUrl(),
      search: '',
      showSearchDiv: false,
      showAdd: true
    }
  },
  methods: {
    ...mapMutations([
      //
    ]),
    ...mapActions(['getChatList']),
    stopLoading (name) {
      this[name] = false
    },
    closeSearchDiv: function () {
      this.showAdd = true
      this.showSearchDiv = false
    },
    showSearch: function () {
      this.showAdd = false
      this.search = ''
      this.showSearchDiv = true
    },
    // 打开一个聊天对话框
    showChat: function (chat) {
      console.log('开始push路由')
      this.$router.push({
        name: 'chatBox',
        query: { chat: chat }
      })
    }
  },
  mounted: function () {
    this.listLoading = true
    // 请求获取消息列表
    this.getChatList()
      .then(() => this.stopLoading('listLoading'))
      .catch(() => this.stopLoading('listLoading'))
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.group-box {
  .ivu-tabs {
    height: 100%;
  }
  .ivu-tabs-bar {
    margin-bottom: 0px !important;
  }
}
</style>

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
    width: 300px;

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

/* 设置滚动条的样式 */
.group-tab::-webkit-scrollbar {
  width: 6px;
}
/* 滚动槽 */
.group-tab::-webkit-scrollbar-track {
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
/* 滚动条滑块 */
.group-tab::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}

.group-box {
  height: 100%;
  overflow: hidden;

  .group-tab:hover {
    overflow: scroll;
  }
  .group-tab {
    background: #eceae8;
    // overflow: hidden;
  }
  .chat-item {
    // overflow: hidden;
    padding: 12px 18px 11px;
    border-bottom: 1px solid #dddddd;
    cursor: pointer;
    list-style: none;
    position: relative;
    .avatar {
      float: left;
      margin-right: 10px;
      position: relative;
      .img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 2px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
      }
    }
    .info {
      overflow: hidden;
      .nickname {
        font-weight: 400;
        font-size: 13px;
        color: rgb(10, 10, 10);
        line-height: 20px;
      }
      .msg {
        color: #666666;
        font-size: 13px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        height: 1.5em;
      }
    }
  }
  .ivu-tabs-bar {
    margin-bottom: 0px !important;
  }
}
</style>
