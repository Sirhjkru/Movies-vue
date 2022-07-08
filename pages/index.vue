<template>
  <main class="main">
    <section class="info">
      <Header>
        <template v-slot:title>
          <h1 class="info__title">Поиск фильмов</h1>
        </template>
      </Header>
      <SearchForm @search="sortedFilm" class="info__search" />
      <Footer />
    </section>
    <section class="content">
      <MoviesList :items="renderFilms" listForm="block" />
      <v-page
        class="main__pagination"
        v-if="sortedList.length"
        :page-size-menu="false"
        :border="true"
        :info="false"
        :total-row="sortedList.length"
        :first="false"
        :last="false"
        align="left"
        @page-change="pageChange"
      ></v-page>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import SearchForm from '../components/SearchForm.vue'
import MoviesList from '../components/MoviesList.vue'
import { movieFilter } from '../utils/movieFilter'

export default Vue.extend({
  data(): {
    pageSize: number
    pageNumber: number
    sortedList: Array<any>
  } {
    return {
      sortedList: [],
      pageSize: 10,
      pageNumber: 1,
    }
  },
  components: { Footer, Header, SearchForm, MoviesList },
  name: 'Main',
  computed: {
    ...mapGetters('useApi', ['MOVIES']),
    renderFilms(): Array<object> {
      const startСounting: number = Math.ceil(
        (this.pageNumber - 1) * this.pageSize
      )
      const offset: number = Math.ceil(this.pageSize * this.pageNumber)
      return this.sortedList.slice(startСounting, offset)
    },
  },
  methods: {
    ...mapActions('useApi', ['GET_MOVIES_FROM_API']),
    ...mapMutations('useApi', ['DISABLE_LOADING']),
    sortedFilm(query: string | number): any {
      if (!query) return (this.sortedList = [])
      this.sortedList = movieFilter(this.MOVIES, query)
    },
    pageChange(e: { pageSize: number; pageNumber: number }): void {
      this.pageSize = e.pageSize
      this.pageNumber = e.pageNumber
    },
  },
  mounted() {
    this.GET_MOVIES_FROM_API().then(this.DISABLE_LOADING)
  },
})
</script>
<style lang="scss">
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Inter;
  font-style: Medium;
}
.main {
  min-width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
}
.info {
  min-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000000;
}

.info__title {
  color: #ffffff;
  font-size: 42px;
}

.info__search {
  flex-grow: 1;
}

.content {
  min-width: 60%;
  background-color: #e5e5e5;
}
</style>
