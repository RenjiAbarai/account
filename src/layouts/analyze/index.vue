<template>
	<div>
		<top title="title"></top>
		<div class="content-top">
		<abc></abc>
		<div class="a">analyze  hello</div>
			<router-link to="/main/account">account</router-link>
		</div>
	</div>
</template>

<script>

import top from '../../components/header'
import abc from '../../components/abc'

export default {
	components:{
		top,abc
	}
}

</script>

<style>
.a{
	background-color: red;
}
</style>
