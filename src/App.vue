<template>
  <div id="app">
    <Slide></Slide>
  <!-- <component :is="state.view">
		<h1>{{ state.view }}</h1>
	</component> -->
  <controls></controls>
</div>
</template>

<script>

import Controls from './components/Controls.vue'
import Slide from './components/Slide.vue'
import Page from './components/Page.vue'

export default {
  name: 'App',
  components: {
    Page,
    Controls,
    Slide
  }
}

</script>

<style scoped>

$color1: #461467;
$color2: #ffba57;
$color3: lighten(#ff7655, 20%);
$color4: lighten(#00aca0, 10%);
$color5: #8ed3c9;
$color6: darken(#fcf5d8, 20%);

* {
	box-sizing: border-box;
}

body {
	background: #202020;
	font-size: 62.5%;
}

#app {
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(76,76,76,1);
	background: -moz-linear-gradient(-45deg, rgba(76,76,76,1) 0%, rgba(43,43,43,0.74) 36%, rgba(28,28,28,0.5) 71%, rgba(19,19,19,0.29) 100%);
	background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(76,76,76,1)), color-stop(36%, rgba(43,43,43,0.74)), color-stop(71%, rgba(28,28,28,0.5)), color-stop(100%, rgba(19,19,19,0.29)));
	background: -webkit-linear-gradient(-45deg, rgba(76,76,76,1) 0%, rgba(43,43,43,0.74) 36%, rgba(28,28,28,0.5) 71%, rgba(19,19,19,0.29) 100%);
	background: -o-linear-gradient(-45deg, rgba(76,76,76,1) 0%, rgba(43,43,43,0.74) 36%, rgba(28,28,28,0.5) 71%, rgba(19,19,19,0.29) 100%);
	background: -ms-linear-gradient(-45deg, rgba(76,76,76,1) 0%, rgba(43,43,43,0.74) 36%, rgba(28,28,28,0.5) 71%, rgba(19,19,19,0.29) 100%);
	background: linear-gradient(135deg, rgba(76,76,76,1) 0%, rgba(43,43,43,0.74) 36%, rgba(28,28,28,0.5) 71%, rgba(19,19,19,0.29) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=1 );
	color: #fff;
}
</style>
