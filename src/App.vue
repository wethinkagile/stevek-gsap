<template>
  <div id="app" v-bind:class="view">
    <component :is="view">
    </component>
    <controls></controls>
  </div>
</template>

<script>
import Controls from './components/Controls.vue'
import Slide from './components/Slide.vue'
import Zoom from './components/Zoom.vue'
import SlideUp from './components/SlideUp.vue'
import FlipX from './components/FlipX.vue'
import FlipY from './components/FlipY.vue'
import Fade from './components/Fade.vue'


import { mapState } from 'vuex';

export default {
  name: "App",
  components: {
    Controls, Slide, Zoom, SlideUp, FlipX, FlipY, Fade
  },
  computed: mapState([
      'view'
  ])
}


</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

* {
	box-sizing: border-box;
}

body {
	background: #202020;
	font-size: 62.5%;
  font-family: 'Oswald', sans-serif;
  font-weight: normal;
  font-style: normal;
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


.page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #c0c0c0;
}

.center {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 3rem;
  text-align: center;
}

.content {
  position: relative;
  left: 50%;
  top: 38%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
  font-size: 1.6rem;
  text-align: left;
}

.more-projects-1 {
  position: relative;
  margin-top: 1000px;
  /* left: 50%;
  top: 38%; */
  /* transform: translate(-50%, -50%); */
  background: #ce8114;
  /* width: 80%; */
  /* height: auto; */
  font-size: 1.6rem;
  text-align: left;
}

.more-projects-button {
  cursor: pointer;
}

.more-projects-button:hover {
  text-decoration: underline;
}

h1 {
  width: 100%;
  margin-top: 10;
  padding: 0;
  font-family: 'GlacialIndifferenceBold', Helvetica, Arial, sans-serif;
  font-size: 3rem;
  text-transform: capitalize;
}

p {
  font-family: 'GlacialIndifferenceRegular', Georgia, Times, serif;
  font-size: 1.1rem;
}

a {
  transition: color 200ms ease-out;
  color: darken(rgba(#fff, .8), 40%);
}

a:hover {
    color: darken(rgba(#fff, .8), 60%);
  }


.active-animation {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
}

.fade {
  background: #461467;
}

.slide {
  background: #ce8114;
}

.zoom {
  background: #ff7655;
  /*   background: lighten(#ff7655, 20%); */
}

.flipX {
  background: #00aca0;
}

.flipY {
  background: #8ed3c9;
}

.slideUp {
  background: #899b45;
}
</style>
