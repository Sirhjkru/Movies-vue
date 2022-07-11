<template>
  <div class="movies">
    <popup v-if="popupVisible" @close="closePopup">
      <movie-card :movie="popupData" />
    </popup>
    <ul :class="`plate ${listForm ? 'plate__tiles' : ''}`">
      <li v-for="item in items" :key="item.id" class="plate__item">
        <movies-item
          :item="item"
          @click.native="openPopup(item)"
          class="plate__cell"
        />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IMoviesList } from './models/IMovies'
import MoviesItem from './MovieItem.vue'
import MovieCard from './MoviesCard.vue'
import Popup from './Popup.vue'

export default defineComponent({
  name: 'movies-list',
  components: { MoviesItem, Popup, MovieCard },
  props: {
    items: [] as PropType<IMoviesList>,
    listForm: {
      type: Boolean,
      required: true,
    },
  },
  data(): {
    popupData: object
    popupVisible: boolean
  } {
    return {
      popupVisible: false,
      popupData: {},
    }
  },
  methods: {
    openPopup(item: object): void {
      this.popupVisible = true
      this.popupData = item
    },
    closePopup() {
      this.popupVisible = false
      this.popupData = {}
    },
  },
  //
  // mounted() {
  //   const options = {
  //     rootMargin: '0px',
  //     threshold: 1.0,
  //   }
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       this.$emit('refresh')
  //     }
  //   }, options)
  //   observer.observe(this.$refs.observer)
  // },
})
</script>
<style lang="scss">
.movies {
  width: 100%;
  flex-grow: 1;
}
.plate {
  margin: 0;
  padding: 0;
  display: flex;
  min-width: 100%;
  min-height: 200px;
  overflow-x: auto;
  &__tiles {
    flex-wrap: wrap;
  }
  &__item {
    flex: 1;
    display: flex;
    list-style-type: none;
    min-width: 200px;
    margin: 5px;
    &:hover {
      cursor: $cursor;
    }
  }
  &__cell {
    border-radius: 5px;
  }
}
</style>
