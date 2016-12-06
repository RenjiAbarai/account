<template>
<div>
	<div>hello abc</div>
  <div v-for="(movie,index) in getMovies">
    {{index+1}}.
    {{movie.title}}
  </div>
</div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
	computed: {
	  ...mapGetters({
	    getMovies : 'getMovies'
	  })
	}
}
</script>

<style scoped>
</style>
