<template id="fade">
<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
  <div class="page" v-bind:class="view">
    <div class="center">
      <slot></slot>
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
    'view'
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
