<template>
  <section class="card">
    <img :src="imgUrl" alt="not found image" class="card__image" />
    <h1 class="card__title">{{ itemName }}</h1>
    <h2 class="card__subtitle">{{ itemCountry }}</h2>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IMovieItem, IMoviesName } from './models/IMovies'
import { mapGetters } from 'vuex'
import { getImgURL } from '../utils/getImgURL'
export default defineComponent({
  name: 'movie-item',
  props: {
    item: Object as PropType<IMovieItem>,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['GET_LANG']),
    imgUrl(): string {
      return getImgURL(this.item?.image?.url || '')
    },
    itemName(): string | number {
      return this.item
        ? this.item[`name${this.GET_LANG}` as keyof IMoviesName]!
        : ''
    },
    itemCountry(): string {
      return this.item?.country || ''
    },
  },
  mounted(): void {},
})
</script>
<style lang="scss" scoped>
// .card {
//   display: flex;
//   flex-direction: column;
// }

// .card__image {
//   width: 100%;
//   object-fit: cover;
// }
</style>
