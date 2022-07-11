<template>
  <main class="main">
    <section class="info">
      <Header>
        <template v-slot:title>
          <h1 class="info__title">Поиск фильмов</h1>
        </template>
      </Header>
      <SearchForm @search="SAVE_QUERY" class="info__search" />
      <Footer />
    </section>
    <section class="content">
      <MoviesList
        class="content__cards"
        :items="MOVIE_PAGE"
        :listForm="checked"
      />
      <div v-show="FILTER_MOVIES.length" class="content__control">
        <div class="checkbox-block">
          <input type="checkbox" v-model="checked" />
          <p class="checkbox-block__title">Плиточная раскладка</p>
        </div>
        <v-page
          class="content__pagination"
          :border="true"
          :info="false"
          :total-row="FILTER_MOVIES.length"
          :first="false"
          :last="false"
          align="left"
          @page-change="SAVE_PARAMS_PAGE"
        ></v-page>
      </div>
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

export default Vue.extend({
  data() {
    return {
      checked: true,
    }
  },
  components: { Footer, Header, SearchForm, MoviesList },
  name: 'Main',
  computed: {
    ...mapGetters('useApi', ['FILTER_MOVIES', 'MOVIE_PAGE']),
  },
  methods: {
    ...mapActions('useApi', [
      'GET_MOVIES_FROM_API',
      'SAVE_PARAMS_PAGE',
      'SAVE_QUERY',
    ]),
    ...mapMutations('useApi', ['DISABLE_LOADING']),
  },
  mounted() {
    this.GET_MOVIES_FROM_API().then(this.DISABLE_LOADING)
  },
})
</script>
<style lang="scss">
.main {
  min-width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
}

.info {
  min-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000000;
  &__title {
    color: #fff;
    font-size: 42px;
  }
  &__search {
    flex-grow: 1;
  }
  @media screen and (max-width: 1024px) {
    padding-bottom: 20px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 70%;
  background-color: #e5e5e5;
  &__cards {
    display: flex;
    align-items: center;
  }
  &__control {
    min-width: 70%;
    background-color: rgba(229, 229, 229, 0.95);
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    .checkbox-block {
      margin: 0 auto;
      display: flex;
      input {
        &:hover {
          cursor: $cursor;
        }
      }
      &__title {
        font-size: 15px;
      }
    }
  }
  &__pagination {
    align-items: center;
    margin: 0 auto;
  }
  @media screen and (max-width: 1024px) {
    flex-grow: 1;
  }
}
</style>
