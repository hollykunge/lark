<template>
  <div>
    <lark-window></lark-window>
  </div>
</template>

<script>
import LarkWindow from "@/components/header/LarkWindow";
export default {
  name: "navbar",
  components: {
    LarkWindow
  },
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
