<template>
  <div class="content">
    <div>movie renji</div>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="(sub,index) in results">
        {{index+1}}.
        <img :src="sub.images.medium">
        {{sub.title}}{{sub.original_title}}
      </div>
      <div class="loading">
        <loading :hide-loading="isloadingComplete" :is-end-text="endText"></loading>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import loading from '../components/loading'

  export default {
    data() {
      return {
        busy: false,
        isloadingComplete: false,
        results: [],
        start: 0,
        count: 10
      }
    },
    components: {
      loading
    },
    mounted(){
        this.$nextTick(() => {
          this.fetchData(this)
        })
    },
    methods: {
      ...mapActions({
        fetchMovieData: 'fetchMovieData'
      }),
      fetchData(progress){
        this.fetchMovieData({
          progress: progress,
          refresh: false,
          start: this.start,
          count: this.count
        })
        this.start = this.start + this.count
      },
      loadMore(){
        this.fetchData(this);
      }
    },
    computed: {
      ...mapGetters({
        results : 'results',
        isloadingComplete : 'isloadingComplete',
        busy : 'busy'
      })
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

  .loading {
    margin: 30px auto;
  }
</style>
