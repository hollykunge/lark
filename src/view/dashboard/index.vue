<template>
  <div>
    <h2>主页</h2>
    <div>
      <Button type="primary" @click="getData" long>点一下试试<font-awesome-icon icon="window-close"/></Button>
    </div>

    <img :src="img" alt style="margin-left: 40%; margin-top: 20%;">
  </div>
</template>

<script>
import { testApi } from "@/api/test";

export default {
  data() {
    return {
      img: ''
    };
  },
  methods: {
    getData() {
      testApi().then(res => {
        this.img = res.data.test
      })
    }
  }
};
</script>

<style>
</style>
