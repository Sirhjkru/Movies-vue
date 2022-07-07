import axios from 'axios'

export const state = () => ({
  movies: [],
  isLoading: true,
  resError: {
    isError: false,
    message: '',
  },
})

export const getters = {
  MOVIES(state) {
    return state.movies
  },
}

export const mutations = {
  SET_MOVIES_TO_STATE(state, movies) {
    state.movies = movies
  },
  SET_ERROR(state, error) {
    state.resError.isError = true
    state.resError.message = error
  },
  ENABLE_LOADING(state) {
    state.isLoading = true
  },
  DISABLE_LOADING(state) {
    state.isLoading = false
  },
}

export const actions = {
  async GET_MOVIES_FROM_API({ commit }) {
    commit('ENABLE_LOADING')
    try {
      const res = await axios.get(
        'https://api.nomoreparties.co/beatfilm-movies'
      )
      commit('SET_MOVIES_TO_STATE', res.data)
      return res
    } catch (e) {
      commit('SET_ERROR', e)
    }
  },
}
