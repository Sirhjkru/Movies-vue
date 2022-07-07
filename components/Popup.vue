<template>
  <div class="modal-backdrop">
    <c-button @onClick="emitCloseEvent">Cancel</c-button>
    <div class="modal">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CButton from './ui/CButton.vue'
export default defineComponent({
  components: { CButton },
  methods: {
    emitCloseEvent() {
      this.$emit('close')
    },
  },
})
</script>
<style lang=""></style>
