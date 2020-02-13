<template>
  <div id="app">
  <component :is="state.view">
		<h1>{{ state.view }}</h1>
	</component>
  <controls></controls>
</div>
</template>

<script>

import Controls from './components/Controls.vue'
import Page from './components/Page.vue'

import { TweenMax, TimelineMax, Power4 } from 'gsap'


const slide = Vue.component('slide', {
  template: '#page',
	methods: {
		enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})

			tl.set(el, {
				x: window.innerWidth * 1.5,
				scale: 0.8,
				transformOrigin: '50% 50%'
			})

			tl.to(el, 0.5, {
				x: 0,
				ease: Power4.easeOut
			});

			tl.to(el, 1, {
				scale: 1,
				ease: Power4.easeOut
			});
		},
		leave(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 1
			}, {
				autoAlpha: 0,
				ease: Power4.easeOut,
				onComplete: done
			});
		}
	}
})

const slideUp = Vue.component('slideUp', {
  template: '#page',
	methods: {
		enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})

			tl.set(el, {
				y: window.innerWidth * 1.5,
				scale: 0.8,
				transformOrigin: '50% 50%'
			})

			tl.to(el, 0.5, {
				y: 0,
				ease: Power4.easeOut
			});

			tl.to(el, 1, {
				scale: 1,
				ease: Power4.easeOut
			});
		},
		leave(el, done) {
			TweenMax.to(el, 1, {
				y: window.innerHeight * -1.5,
				ease: Power4.easeOut,
				onComplete: done
			});
		}
	}
})

export default {
  name: 'App',
  components: {
    Controls,
    Page
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
