<template id="fade">
<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
  <div class="page" v-bind:class="view">
    <div class="center">
      <slot></slot>
    </div>
    <div class="content">
      <h1>{{ header }}</h1>
      A Kubernetes and Web Dev expert available for hire and coaching.<br /><br />
      Munich-based, Remote & on premise, 80-110 Eur per hour.<br /><br /><br />
      <b>#BleibenSieGesund #FlattenTheCurve</b>
    </div>
  </div>
</transition>
</template>

<script>
import {
  mapState
} from 'vuex';

import {
  TweenMax,
  Power4
} from "gsap/dist/gsap"

export default {

  computed: mapState([
    'view',
    'header'
  ]),

  methods: {
    enter(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 0,
				scale: 1.5,
			}, {
				autoAlpha: 1,
				scale: 1,
				transformOrigin: '50% 50%',
				ease: Power4.easeOut,
				onComplete: done
			});
		},
		leave(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 1,
				scale: 1,
			}, {
				autoAlpha: 0,
				scale: 0.8,
				ease: Power4.easeOut,
				onComplete: done
			});
    }
  }
}
</script>

<style>

</style>
