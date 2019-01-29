import modules from "./modules";
import {
  Chat,
  ChatListUtils,
  MessageInfoType,
  MessageTargetType,
  transform
} from "@/utils/chat";
import conf from "@/conf";
import {
  getChatList
} from "@/api/user";

export default {
  state: {
    token: {},
    //token 是否有效
    tokenStatus: false,
    // 当前的用户
    user: {},
    flushLocalStore: false,
    websocket: {},
    messageListMap: new Map(),
    //聊天群的图片映射
    chatMap: new Map(),
    messageList: [],
    // 当前聊天窗口
    currentChat: {},
    // 所有的聊天窗口
    chatList: [],
    //联系人列表
    contactList: [],
    //群组列表
    groupList: [],
    //刷新token 的定时器
    flushTokenTimerId: null
  },
  mutations: {
    setFlushTokenTimerId: function (state, flushTokenTimerId) {
      state.flushTokenTimerId = flushTokenTimerId;
    },
    clearFlushTokenTimerId: function (state) {
      clearTimeout(state.flushTokenTimerId);
    },
    setToken: function (state, token) {
      sessionStorage.setItem("token", token.access_token);
      sessionStorage.setItem("refresh_token", token.refresh_token);
    },
    //token 是否有效
    setTokenStatus: function (state, tokenStatus) {
      state.tokenStatus = tokenStatus;
    },
    setUser: function (state, user) {
      state.user = user;
    },
    setContactList: function (state, contactList) {
      state.contactList = contactList;
    },
    setGroupList: function (state, groupList) {
      state.groupList = groupList;
    },
    setChatMap: function (state, chatMap) {
      state.chatMap = chatMap;
    },
    setWebsocket: function (state, websocket) {
      state.websocket = websocket;
    },
    // 发送给服务器
    sendMessage: function (state, message) {
      let msg = {
        code: MessageInfoType.MSG_MESSAGE,
        message: message
      };
      state.websocket.send(JSON.stringify(msg));
    },
    resetUnRead: function (state) {
      state.currentChat.unReadCount = 0;
    },
    // 退出登录
    closeConnect: function (state) {
      state.websocket.heartReset();
      state.websocket.close();
    },
    // 退出后清除内存中的聊天信息
    clear: function (state) {
      state.messageList = [];
      state.messageListMap = new Map();
    },
    // 保存到内存
    addMessage: function (state, message) {
      message.content = transform(message.content);
      state.messageList.push(message);
      state.messageListMap.set(message.id, state.messageList);
    },
    // 在用户姓名下展示收到的最后一条信息
    setLastMessage: function (state, message) {
      let list = ChatListUtils.getChatList(state.user.id);
      let tempChatList = list.map(function (chat) {
        if (
          String(chat.id) === String(message.fromid) &&
          message.type === "0"
        ) {
          chat.sign = message.content;
        } else if (
          String(chat.id) === String(message.id) &&
          message.type === "1"
        ) {
          chat.sign = message.content;
        }
        return chat;
      });
      // 放入缓存
      ChatListUtils.setChatList(state.user.id, tempChatList);
      state.chatList = tempChatList;
    },
    setMessageList: function (state, messageList) {
      state.messageList = messageList;
    },
    setMessageListMap: function (state, messageListMap) {
      state.messageListMap = messageListMap;
    },
    addUnreadMessage: function (state, message) {
      message.content = transform(message.content);
      if (message.type === "0") {
        // 从内存中取聊天信息
        let cacheMessages = state.messageListMap.get(message.fromid);
        if (cacheMessages) {
          cacheMessages.push(message);
        } else {
          cacheMessages = [];
          cacheMessages.push(message);
          state.messageListMap.set(message.fromid, cacheMessages);
        }
      } else {
        // 从内存中取聊天信息
        let cacheMessages = state.messageListMap.get(message.id);
        if (cacheMessages) {
          cacheMessages.push(message);
        } else {
          cacheMessages = [];
          cacheMessages.push(message);
          state.messageListMap.set(message.id, cacheMessages);
        }
      }
    },
    setCurrentChat: function (state, currentChat) {
      state.currentChat = currentChat;
      state.currentChat.unReadCount = 0;

      let tempChatList = state.chatList.map(function (chat) {
        if (String(chat.id) === String(currentChat.id)) {
          chat.unReadCount = 0;
        }
        return chat;
      });
      // 放入缓存
      ChatListUtils.setChatList(state.user.id, tempChatList);
    },

    setChatList: function (state, list) {
      state.chatList = list;
      // 放入缓存
      console.log("用户id：" + state.user.userId)
      //这里有循环引用的问题
      ChatListUtils.setChatList(state.user.userId, list);
      console.log("放入缓存：" + list)
    },
    delChat: function (state, chat) {
      state.chatList = ChatListUtils.delChat(state.user.id, chat);
    },
    /**
     * 设置未读消息条数
     * @param state state
     * @param message 消息
     */
    setUnReadCount: function (state, message) {
      let tempChatList = [];
      let tempChat = {};

      for (let chat of state.chatList) {
        // 给接受消息的聊天室未读数量 +1
        if (
          String(chat.id) === String(message.fromid) &&
          message.type === MessageTargetType.FRIEND
        ) {
          if (!chat.unReadCount) {
            chat.unReadCount = 0;
          }
          chat.unReadCount = chat.unReadCount + 1;
          tempChat = chat;
        }
        //群组聊天
        else if (
          String(chat.id) === String(message.id) &&
          message.type === MessageTargetType.CHAT_GROUP
        ) {
          if (!chat.unReadCount) {
            chat.unReadCount = 0;
          }
          chat.unReadCount = chat.unReadCount + 1;
          chat.avatar =
            conf.getHostUrl() + state.chatMap.get(message.id).avatar;
          tempChat = chat;
        } else {
          tempChatList.push(chat);
        }
      }
      // 聊天列表没有此人的chat
      if (!tempChat.id && message.type === MessageTargetType.FRIEND) {
        tempChat = new Chat(
          message.fromid,
          message.username,
          message.avatar,
          1,
          message.content,
          state.user.mobile,
          state.user.email,
          MessageTargetType.FRIEND
        );
      } else if (
        !tempChat.id &&
        message.type === MessageTargetType.CHAT_GROUP
      ) {
        let groupChat = state.chatMap.get(message.id);
        console.log(groupChat);
        tempChat = new Chat(
          message.id,
          groupChat.name,
          conf.getHostUrl() + groupChat.avatar,
          1,
          message.content,
          state.user.mobile,
          state.user.email,
          MessageTargetType.CHAT_GROUP
        );
        console.log(tempChat);
      }
      // 添加到聊天室列表的第一个
      tempChatList.unshift(tempChat);
      // 重新设置chatList
      state.chatList = tempChatList;
      // 放入缓存
      ChatListUtils.setChatList(state.user.id, tempChatList);
    }
  },
  actions: {
    //获取对话列表
    getChatList({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        try {
          getChatList(state.token).then(res => {
            const data = res;
            commit("setChatList", data.chatList);
            resolve(data);
          });
        } catch (error) {
          console.log("错误" + error);
          reject(error);
        }
      });
    },
  },
  modules,
  strict: process.env.NODE_ENV !== "production"
};
