<template>
<div class="loading-center">
  <div :class="{'loading-hiden': hideLoading}">加载更多 {{isEndText}}</div>
</div>
</template>

<script>

export default {
	props: {
	  hideLoading: {
	    default: true
	  },
	  isEndText: {
	    default: ''
	  }
	}
}
</script>

<style lang='scss' scoped>
  .loading-center{
    text-align: center;
    margin: 10px auto;
    color: #929292;
  }
  .loading-hiden{
    display: none;
  }
</style>
