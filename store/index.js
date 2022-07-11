/** Для подключения локализации */
export const state = () => ({
  currentLang:"RU",
})

export const getters = {
  GET_LANG(state){
    return state.currentLang
  }
}