<template>
  <form @submit.prevent @submit="onSubmit" class="search-form">
    <c-input
      class="search__input"
      v-model="searchText"
      @emitEvent="handlerEvent"
      placeholder="Название фильма..."
    />
    <c-button type="sybmit" class="search-form__submit">
      <img src="~/assets/image/arrow.svg" class="search-form__submit-image" />
    </c-button>
    <p v-if="invalidQuery" style="color: red" class="search-form__error">
      Минимальная длина должна быть больше двух символов
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
    searchText: string | number
    invalidQuery: boolean
    minLength: number
  } {
    return {
      searchText: '',
      invalidQuery: false,
      minLength: 2,
    }
  },
  methods: {
    validInputLength(str: string) {
      return str.length > this.minLength
    },
    onSubmit() {
      if (!this.validInputLength(this.searchText.toString())) {
        this.invalidQuery = true
        return
      }
      this.invalidQuery = false
      this.$emit('search', this.searchText)
    },
  },
})
</script>
<style lang="scss" scoped>
.search-form {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.search__input {
  border: none;
  border-radius: 5px;
  height: 35px;
  margin-left: 20px;
  width: 60%;
  position: relative;
}
.search-form__submit {
  position: absolute;
  left: 23.5vw;
  padding-top: 5px;
  background: none;
  border: 0;
  color: #fff;
}

.search-form__submit-image {
  width: 25px;
}

.search-form__error {
  position: absolute;
  top: 15%;
  left: 1vw;
}
</style>
