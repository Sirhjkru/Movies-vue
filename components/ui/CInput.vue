<template>
  <input v-model.trim="componentValue" @input="emitEvent" type="text" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'c-input',
  props: {
    value: [String, Number],
  },
  data(): {
    componentValue: string | number
  } {
    return {
      componentValue: '',
    }
  },
  methods: {
    emitEvent(e: { target: { value: string | number } }): void {
      this.$emit('emitEvent', e.target.value)
    },
    emptyInput(): void {
      this.componentValue = ''
    },
  },
  watch: {
    value() {
      if (this.value !== this.componentValue) {
        this.componentValue = this.value || ''
      }
    },
  },
})
</script>
<style lang="scss" scoped></style>
