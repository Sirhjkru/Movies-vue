<template>
  <input
    v-model.trim="componentValue"
    type="text"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'c-input',
  props: {
    value: [String, Number, Boolean],
  },
  data(): {
    componentValue: string | number | boolean
  } {
    return {
      componentValue: '',
    }
  },
  methods: {
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
