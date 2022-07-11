<template>
  <header class="header">
    <div class="header__title">
      <slot name="title" />
      <slot name="subTitle" />
    </div>
  </header>
</template>
<script lang="ts">
export default {
  name: 'Header',
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
}
.header__title {
  margin-top: 10px;
  padding-left: 2vw;
  min-width: 65%;
}
</style>
