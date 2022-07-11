<template>
  <section class="modal">
    <h1 class="modal__title">
      {{ movie.nameRU || movie.naneEN }}
    </h1>
    <div class="modal__main-info">
      <img
        :src="getImgURL(movie.image.url)"
        alt="Image not found"
        class="modal__image"
      />
      <table class="about-movies">
        <tr class="about-movies__item">
          <th class="about-movies__item-title">Режиссер:</th>
          <th class="about-movies__item-subtitle">
            {{ movie.director || '' }}
          </th>
        </tr>
        <tr class="about-movies__item">
          <th class="about-movies__item-title">Страна:</th>
          <th class="about-movies__item-subtitle">{{ movie.country || '' }}</th>
        </tr>
        <tr class="about-movies__item">
          <th class="about-movies__item-title">Год:</th>
          <th class="about-movies__item-subtitle">{{ movie.year || '' }}</th>
        </tr>
        <tr class="about-movies__item">
          <th class="about-movies__item-title">Время:</th>
          <th class="about-movies__item-subtitle">
            {{ `${movie.duration || 0} мин.` }}
          </th>
        </tr>
      </table>
    </div>
    <h2>О фильме:</h2>
    <p>{{ movie.description }}</p>
    <div class="trailer">
      <h2 class="trailer__title">Трейлер:</h2>
      <iframe
        class="trailer__link"
        :src="getTrailerLink(movie.trailerLink)"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IMovieItem } from './models/IMovies'
import { getImgURL as getUrl } from '../utils/getImgURL'

export default defineComponent({
  name: 'movie-card',
  props: {
    movie: {} as PropType<IMovieItem>,
  },
  methods: {
    getImgURL(url: string) {
      return getUrl(url)
    },
    getTrailerLink(link: string): string {
      const linkId = link.split('=')[1]
      return `https://www.youtube.com/embed/${linkId}`
    },
  },
})
</script>
<style lang="scss">
.modal {
  width: 65vw;
  height: 75vh;
  padding: 10px;
  overflow-x: auto;
  @media screen and (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0px;
    width: 100%;
    height: 100vh;
  }
  &__title {
    margin: 10px auto 30px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }
  &__image {
    max-width: 45%;
    min-width: 10%;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
      margin: 0 auto;
      max-width: 100%;
    }
  }
  &__main-info {
    margin-top: 20px;
    display: flex;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
    .about-movies {
      min-width: 45%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      &__item {
        margin: 5px 5px 5px 20px;
        display: flex;
        font-weight: normal;
        &__item-title {
          min-width: 120px;
          width: 20%;
          text-align: start;
        }
        &__item-subtitle {
          text-align: start;
        }
      }
    }
  }
  .trailer {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__link {
      height: 500px;
      @media screen and (max-width: 767px) {
        height: 40vh;
      }
    }
  }
}
</style>
