<template>
  <div class="search-content">
    <div class="search-box2">
      <Input search
             autofocus
             v-model="search"
             placeholder="搜索"
             size="small"
             class="search"
             clearable />
    </div>
    <div class="search-result">

    </div>
  </div>
</template>
<script>
import conf from "@/conf";
import { pinyin } from "@/utils/libs/pinyin";
import { fetchPost } from "@/utils/chat";

export default {
  components: {},
  data () {
    return {
      search: "",
      userList: [],
      searchUserList: [],
      showSearchDiv: false
    };
  },
  methods: {
    closeSearchDiv: function () {
      this.showSearchDiv = false;
    }
  },
  created: function () {
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
</style>
