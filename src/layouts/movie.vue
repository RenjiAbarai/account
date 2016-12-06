<template>
  <div class="content">
    <div>movie renji</div>
    <div v-for="(sub,index) in getMovies">
      {{index+1}}.
      <img :src="sub.images.medium">
      {{sub.title}}
      {{sub.original_title}}
    </div>
    <!--<button class="next" @click="next">GO NEXT</button>-->
    <a class="next" @click="next">GO NEXT</a>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        start: 0,
        count: 10
      }
    },
    computed: {
      ...mapGetters({
        getMovies: 'getMovies'
      })
    },
    watch: {
      start(val){
        this.get()
      }
    },
    methods: {
      ...mapActions({
        fetchMovieTop: 'fetchMovieTop'
      }),
      get(){
        this.fetchMovieTop({start:this.start,count:this.count})
      },
      next(){
        this.start = this.start + this.count
      }
    },
    mounted(){
        this.get()
    }
  }

</script>

<style lang="scss" scoped>
  .next {
    display: block;
    width: 100%;
    background-color: #212121;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
  }
</style>
