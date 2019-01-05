<template>
  <div class="setup-position">
    <Dropdown placement="bottom-start">
      <font-awesome-icon icon="cog" size="2x"/>
      <DropdownMenu slot="list">
        <DropdownItem>设置</DropdownItem>
        <DropdownItem>更新</DropdownItem>
        <DropdownItem>帮助</DropdownItem>
        <DropdownItem>反馈</DropdownItem>
        <DropdownItem>关于</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.setup-position {
  margin-top: 9px;
}
</style>
