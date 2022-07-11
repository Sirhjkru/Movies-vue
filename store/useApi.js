/*
  В виду ограниченных возможностей апи (отдает массив из 100 элементов) был разработан этот модуль, имитирующий работу сервера. 
*/
import axios from 'axios'
import { movieFilter } from '../utils/movieFilter'

export const state = () => ({
  movies: [],
  isLoading: true,
  resError: {
    isError: false,
    message: '',
  },
  page: {
    number: 1,
    size: 10,
  },
  querySearch: '',
})

export const getters = {
  MOVIES(state) {
    //отдает все загруженные фильмы
    return state.movies
  },
  FILTER_MOVIES(state) {
    //фильтрует фильмы в соответствии с запросом пользователя
    return movieFilter(state.movies, state.querySearch)
  },
  MOVIE_PAGE(state, getters) {
    /*
      Отдает фильмы отсортированные по странице и по запросу пользователя
      При старте страницы, для примера, отдаем что есть в базе   
    */
    const startСounting = Math.ceil((state.page.number - 1) * state.page.size)
    const offset = Math.ceil(state.page.size * state.page.number)
    return getters.FILTER_MOVIES.slice(startСounting, offset)
  },
}

export const mutations = {
  SET_MOVIES_TO_STATE(state, captureMovies) {
    //сохраняет фильмы в стайте
    state.movies = captureMovies
  },
  SET_ERROR(state, error) {
    //глобально обозначаем ошибку
    state.resError.isError = true
    state.resError.message = error
  },
  ENABLE_LOADING(state) {
    //включает спиннер
    state.isLoading = true
  },
  DISABLE_LOADING(state) {
    //отключает спиннер
    state.isLoading = false
  },
  SET_PARAMS_PAGE(state, params) {
    //сохранение параметров
    ;(state.page.number = params.pageNumber),
      (state.page.size = params.pageSize)
  },
  SET_QUERY(state, query) {
    //сохранение запроса
    state.querySearch = query
  },
}

export const actions = {
  async GET_MOVIES_FROM_API({ commit }) {
    //метод получает карточки фильмов с сервера
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
  SAVE_PARAMS_PAGE({ commit }, pageParams) {
    //метод получает и отправляет в экшен параметры страницы
    commit('SET_PARAMS_PAGE', pageParams)
  },
  SAVE_QUERY({ commit }, query) {
    //метод получает и отправляет в экшен запрос пользователя
    commit('SET_QUERY', query)
  },
}
