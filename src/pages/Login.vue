<template>
	<div id="login">
		login <br>
		{{name}}<br>
		<router-link to="/main" >main</router-link>
	</div>
</template>

<script type="text/javascript">

export default {
	data: function () {
		return {
			name: "renji abarai"
		} 
	}
}

</script>