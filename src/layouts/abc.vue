<template>
  <div class="content">
    <div>movie renji 1</div>
    <button @click="fetchMovieTop({start:0,count:50})">fetchMovieTop</button>
    <div v-for="(sub,index) in getMovies">
      {{index+1}}.
      <img :src="sub.images.medium">
      {{sub.title}}
      {{sub.original_title}}
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        getMovies: 'getMovies'
      })
    },
    methods: {
      ...mapActions({
        fetchMovieTop: 'fetchMovieTop'
      })
    }
  }
</script>

<style lang="scss" scoped>
</style>
