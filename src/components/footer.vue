<template>
	<div class="footer">
		<router-link to="/main/account" v-bind:class="{active:index==1}"><i class="icon-account"></i>账户</router-link>	
		<router-link to="/main/analyze" v-bind:class="{active:index==2}"><i class="icon-analyze"></i>分析</router-link>	
		<router-link to="/main/welfare" v-bind:class="{active:index==3}"><i class="icon-welfare"></i>福利</router-link>	
	</div>
</template>

<script type="text/javascript">

export default {
	props: ['index']
}

</script>

<style type="text/css">
.footer{
	position: absolute; left: 0; right: 0;
}
.footer { height: 52px; border-top: 1px solid #dfdfdf; background-color: #fcfcfc; bottom: 0; z-index: 1; }
.footer > .active { color: #45c018; }
.footer > a { width: 33.33%; text-align: center; color: #999; float: left; font-size: 14px; text-decoration:none; }
.footer > a > i { display: block; height: 35px; margin-bottom: -3px; background-size: 35px 280px; }

.icon-account, .icon-analyze, .icon-welfare {
	background: url(http://img.mukewang.com/547d33970001444d00700560.png) no-repeat center top;
}
.active .icon-account { background-position: center -35px; }
.icon-analyze { background-position: center -70px; }
.active .icon-analyze { background-position: center -105px; }
.icon-welfare  { background-position: center -140px; }
.active .icon-welfare { background-position: center -175px; }

</style>