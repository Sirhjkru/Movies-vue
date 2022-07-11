<template>
  <div class="popup">
    <c-button class="popup__close" @onClick="emitCloseEvent"
      ><div class="close-image"
    /></c-button>
    <div class="popup__content">
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
<style lang="scss">
.popup {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 1;
  &__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
    @media screen and (max-width: 767px) {
      padding-top: 0;
      padding-bottom: 0;
      border-radius: 0;
      width: 100%;
      height: 100%;
    }
  }
  &__close {
    position: absolute;
    top: 3vh;
    right: 12vw;
    background: none;
    border: none;
    background: url('~/assets/image/close.svg');
    height: 32px;
    width: 32px;
    &:hover {
      cursor: $cursor;
    }
    @media screen and (max-width: 767px) {
      background: url('~/assets/image/close-black.svg');
      right: 15px;
      top: 5px;
    }
  }
}
</style>
