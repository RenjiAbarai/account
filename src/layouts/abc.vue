<template>
  <div class="abc">
    <div>abc renji</div>

  </div>
</template>

<script type="text/javascript">


  export default {
    data(){
      return {
        name: 'a',
        ab: 'c'
      }
    },
    created(){
      this.$http.jsonp('https://api.douban.com/v2/book/1220562').then(
        (req) => {
          console.log(req)
        });
    }
  }
</script>

<style type="text/css" lang="scss">
</style>
