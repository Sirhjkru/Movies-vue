<template>
  <button @click="$emit('onClick')">
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'c-button',
})
</script>
<style lang="scss" scoped></style>
