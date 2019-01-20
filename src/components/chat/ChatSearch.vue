<template>
  <div>

  </div>
</template>
<script>
import conf from "@/conf";
import { pinyin } from "@/utils/libs/pinyin";
import { fetchPost } from "@/utils/chat";

export default {
  components: {},
  data() {
    return {
      search: "",
      userList: [],
      searchUserList: [],
      showSearchDiv: false
    };
  },
  methods: {
    showSearch: function() {
      this.search = "";
      this.showSearchDiv = true;
    },
    searchUser: function() {
      this.searchUserList = [];
      for (let i = 0; i < this.userList.length; i++) {
        let name = this.userList[i].name;
        let searchTemp = this.search.trim().toUpperCase();
        if (searchTemp !== "") {
          // 支持拼音查询
          if (
            name.indexOf(searchTemp) !== -1 ||
            pinyin
              .getFullChars(name)
              .toUpperCase()
              .indexOf(searchTemp) !== -1 ||
            pinyin.getCamelChars(name).indexOf(searchTemp) !== -1
          ) {
            if (this.userList[i].avatar.indexOf("http") !== 0) {
              this.userList[i].avatar =
                conf.getHostUrl() + this.userList[i].avatar;
            }
            this.searchUserList.push(this.userList[i]);
          }
        }
      }
    },
    closeSearchDiv: function() {
      this.showSearchDiv = false;
    },
    showChat: function(user) {
      this.showSearchDiv = false;
      this.$emit("showChat", user);
    }
  },
  created: function() {
    let self = this;
    let users = self.$store.state.userFriendList;
    for (let group of users) {
      for (let user of group.userList) {
        self.userList.push(user);
      }
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.search {
  input {
    border-radius: 0;
    border: 0;
  }
}

.search-div {
  position: absolute;
  top: 0;
  height: 100%;
  width: inherit;
  background-color: #f2f2f2;
  z-index: 999999999999999999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  .search-item {
    padding: 1rem;
    i {
      color: #f2f2f2;
      font-size: 1.4rem;
      font-weight: bolder;
      float: right;
      padding: 0.5rem;
      &:hover {
        background-color: #f2f2f2;
      }
    }
    .search {
      width: 17.6rem;
    }
  }
  .group-box {
    height: 100%;
    overflow-y: scroll;
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
      }
      &:hover {
        background-color: #f2f2f2 !important;
        & > i {
          color: #f2f2f2;
          background-color: #f2f2f2;
        }
      }
      .active {
        background-color: #f2f2f2 !important;
      }
      & > i {
        position: absolute;
        right: 1rem;
        bottom: 1.6rem;
        cursor: pointer;
        border-radius: 50%;
        padding: 0.2rem;
        text-align: center;
        color: #f2f2f2;
        &:hover {
          color: #f2f2f2;
          background-color: #f2f2f2;
        }
      }
    }
  }
}
</style>
