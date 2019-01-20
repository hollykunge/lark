<template>
  <div class="chat-panel">
    <div class="chat-box-list">
      <lark-side-window/>
      <div class="search-box">
        <Input
          search
          v-model="search"
          placeholder="搜索"
          size="small"
          class="search"
          @on-focus="showSearch()"
        />
      </div>
      <!-- 搜索框，当获取搜索框的focus时显示 -->
      <div class="search-sidebar" v-show="showSearchDiv">
        <div class="search-item">
          <!-- <Input
              search
              v-model="search"
              placeholder="搜索"
              size="small"
              class="search"
              @on-search="searchUser"
              @on-keyup="searchUser"
          />-->
          <!-- <Icon type="ios-close" class="text-right" @click="closeSearchDiv()"></Icon> -->
        </div>
      </div>
      <div class="group-box">
        <Tabs size="small">
          <TabPane label="最  近" icon="ios-time"></TabPane>
          <TabPane label="群  组" icon="ios-people"></TabPane>
          <TabPane label="联系人" icon="ios-contact"></TabPane>
        </Tabs>
        <ul class="user-list">
          <li class="user" v-for="chatGroup in chatGroupList">
            <a href="javascript:" @click="showChat(chatGroup)">
              <img :src="[host + chatGroup.avatar]">
              <b>{{ chatGroup.name }}</b>
              <p>{{ chatGroup.name }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="chat-box"></div>
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
    //需要展示的用户群组
    chatGroupList: {
      get: function() {
        return this.$store.state.chatGroupList;
      },
      set: function(chatGroupList) {
        this.$store.commit("setChatGroupList", chatGroupList);
      }
    }
  },
  data() {
    return {
      host: conf.getHostUrl(),
      search: "",
      userList: [],
      searchUserList: [],
      showSearchDiv: false
    };
  },
  methods: {
    closeSearchDiv: function() {
      this.showSearchDiv = false;
    },
    showSearch: function() {
      this.search = "";
      this.showSearchDiv = true;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.chat-panel {
  width: 264px;
  background-color: #f2f2f2;
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
    width: 100%;
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
.search-sidebar {
  position: absolute;
  width: inherit;
  height: 100%;
  overflow: auto;
  z-index: 999999999999999999;
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.8);
  margin-top: -45px;
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

  .user {
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
