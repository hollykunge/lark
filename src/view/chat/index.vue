<template>
  <div class="lark-split">
    <Split v-model="split1" min="240px" max="640px">
      <div slot="left" class="lark-split-pane">Left Pane</div>
      <div slot="right" class="lark-split-pane">Right Pane</div>
    </Split>
  </div>
</template>
<script>
export default {
  data() {
    return {
      split1: 0.3
    };
  }
};
</script>
<style>
.lark-split {
  height: 100%;
  border: 1px solid #dcdee2;
}
.lark-split-pane {
  padding: 0px;
}
</style>

