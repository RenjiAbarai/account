<template>
	<div class="header">
	<a href="javascript:history.go(-1)">返回</a>
	<h1>{{title}}</h1>
	</div>
</template>

<script type="text/javascript">

export default {
	props: ['title']
}

</script>

<style type="text/css">

/*.header { position: absolute; left: 0; right: 0; }*/
.header { height: 48px; background-color: #e4e4e4; }
.header > h1 { line-height: 48px; margin: 0; text-align: center; font-size: 18px;}
.header > a { display: inline-block; width: 48px; line-height: 48px; height: 48px; text-align: center; position: absolute;left: 0;top: 0;bottom: 0; }

</style>