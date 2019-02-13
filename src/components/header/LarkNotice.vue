<style scoped>
.notice-position {
  margin-top: 8px;
  -webkit-app-region: no-drag;
}
</style>
<template>
  <div class="notice-position">
    <Badge :count="3" :offset="[12,0]">
      <font-awesome-icon icon="bell" size="2x" @click.native="handleClick"/>
    </Badge>
  </div>
</template>
<script>
export default {}
</script>
