<template id="fade">
<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
  <div class="page" v-bind:class="view">
    <div class="center">
      <slot></slot>
    </div>
    <div class="content">
      <h1>{{ header }}</h1>
      Hello, my name is Steve K. I'm offering my services as Open Source Linux Ninja with 20 years of
      background in network application development.

      I don't follow short-lived trends and marketing stunts. I heed the calling of
      free and open-source software, a world free of egoistical or psychopath interests.

      If you sign me up as your freelancer, rest assured, my toolchain is technologically bleeding edge and ethically prestine
      for a better future for all of us. This Site is written with FOSS in VueJS. The underlying infrastructure
      is hosted for free on a serverless infrastructure. It spins up on demand and it will shut down after you leave this page.
      <br /><br />
      Look around, you might find something of interest!
      <br /><br />
      - steve
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
