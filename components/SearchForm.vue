<template>
  <form @submit.prevent @submit="onSubmit" class="search-form">
    <div class="search-box">
      <img
        src="~/assets/image/search.svg"
        @click="onSubmit"
        class="search-box__image"
      />
      <c-input
        class="search-box__input"
        v-model.trim="value"
        placeholder="Название фильма..."
      />
      <c-button type="sybmit" class="search-box__submit">
        <img src="~/assets/image/arrow.svg" class="search-box__submit-image" />
      </c-button>
    </div>
    <p v-show="invalidQuery" style="color: red" class="search-form__error">
      Минимальная длина 3 символа.
    </p>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CButton from './ui/CButton.vue'
import CInput from './ui/CInput.vue'
export default defineComponent({
  name: 'search-form',
  components: { CInput, CButton },
  data(): {
    value: string | number
    invalidQuery: boolean
    minLength: number
  } {
    return {
      value: '',
      invalidQuery: false,
      minLength: 2,
    }
  },
  computed: {},
  watch: {
    value() {
      this.checkInput()
    },
  },
  methods: {
    validInputLength(str: string) {
      return str.length > this.minLength
    },

    checkInput() {
      this.invalidQuery = !this.validInputLength(this.value.toString())
    },
    onSubmit() {
      this.checkInput()
      if (this.invalidQuery) return
      this.$emit('search', this.value)
    },
  },
})
</script>
<style lang="scss" scoped>
.search-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  .search-box {
    margin: 0 auto;
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    height: 35px;
    min-width: 120px;
    width: 90%;
    &__image {
      border-radius: 5px;
      background-color: #ebe8e8;
      &:hover {
        cursor: pointer;
      }
    }
    &__input {
      flex-grow: 1;
      border: none;
      margin-left: 20px;
      outline: 0 !important;
      &:hover {
        cursor: $cursor;
      }
    }
    &__submit {
      position: relative;
      padding-top: 5px;
      background: none;
      border: 0;
      color: #fff;
      transition: all 0.5s ease;
      &:hover {
        cursor: $cursor;
        background-color: $blackout;
      }
    }
    &__submit-image {
      width: 25px;
      object-fit: contain;
    }
  }

  &__error {
    margin: 10px auto;
  }
}
</style>
