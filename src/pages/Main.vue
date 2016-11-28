<template>
	<div>
		<router-view></router-view>
		<navigation :index="index"></navigation>
	</div>
</template>

<script type="text/javascript">

import navigation from '../components/footer'
// const navigation = resolve => require(['../components/footer'], resolve)

export default {
	data(){
		return {
			index: ''
		} 
	},
	components:{
		navigation
	},
	created(){
		this.change()
	},
	watch:{
		//路由变化  执行该方法
		$route(){
			this.change()
		}
	},
	methods:{
		change(){
			switch(this.$route.path){
				case "/main/account": 
					this.$data.index = 1;break;
				case "/main/analyze": 
					this.$data.index = 2;break;
				case "/main/welfare": 
					this.$data.index = 3;break;
				default: 
					this.$data.index = 1;break;
			}
		}
	}
}

</script>

<style type="text/css">

</style>