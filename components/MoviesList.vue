<template>
  <div class="movies">
    <popup v-if="popupVisible" @close="closePopup">
      <div>{{ popupData }}</div>
    </popup>
    <ul class="plate">
      <li v-for="item in items" :key="item.id" class="plate__item">
        <movies-item :item="item" @click.native="openPopup(item)" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IMoviesList } from './models/IMovies'
import MoviesItem from './MovieItem.vue'
import Popup from './Popup.vue'

export default defineComponent({
  name: 'movies-list',
  components: { MoviesItem, Popup },
  props: {
    items: [] as PropType<IMoviesList>,
    listForm: {
      type: String,
      required: true,
    },
  },
  data(): {
    popupData: null | object
    popupVisible: boolean
  } {
    return {
      popupVisible: false,
      popupData: null,
    }
  },
  methods: {
    openPopup(item: object): void {
      this.popupVisible = true
      this.popupData = item
    },
    closePopup() {
      this.popupVisible = false
      this.popupData = null
    },
  },
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
}
.plate::-webkit-scrollbar {
  display: none;
}
.plate__item {
  list-style-type: none;
  min-width: 200px;
  margin: 5px;
}
</style>
