<template>
  <header class="header">
    <div class="header__title">
      <slot name="title" />
      <slot name="subTitle" />
    </div>
    <nav class="header__nav">
      <NuxtLink to="/About" class="header__link">O проекте</NuxtLink>
    </nav>
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
}
.header__title {
  margin-top: 40px;
  padding-left: 2vw;
  min-width: 65%;
}
.header__nav {
  display: flex;
  margin: 0 auto;
  min-width: 15%;
  padding: 15px;
  align-items: flex-start;
}
.header__link {
  margin: 0 auto;
  text-decoration: none;
  color: #fff;
  border-bottom: 1.5px solid #fff;
}
</style>
