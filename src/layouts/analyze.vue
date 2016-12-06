<template>
	<div>
		<top title="title"></top>
		<div class="content-top">
		<div>analyze</div>
			<router-link to="/main/account">account</router-link>
		</div>
	</div>
</template>

<script>

import Vue from 'vue'
import top from '../components/header'

export default {
	components:{
		top
	},
	mounted() {
		this.$bus.$on('john', name => console.log(name))
		this.$bus.$emit('john','john')
	},
	beforeDestroy(){
		this.$bus.$off('john')
	}
}

</script>

<style>

</style>
