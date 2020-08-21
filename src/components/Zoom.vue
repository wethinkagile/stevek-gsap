<template id="zoom">
<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
  <div class="page" v-bind:class="view">
    <div class="center">
      <slot></slot>
    </div>
    <div class="content">
      <h1>{{ header }}</h1>

      <b>ForestcampAI
         Forex Algo</b>&nbsp;
<i class="fa fa-creative-commons"></i>
         <br /><br />

      <trading-vue :data="this.$data"></trading-vue>

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
  Power4,
  TimelineMax
} from "gsap/dist/gsap"

import TradingVue from 'trading-vue-js'

export default {

  computed: mapState([
    'view',
    'header'
  ]),

  components: { TradingVue },

  // [timestamp, open, high, low, close, volume]

  data() {
       return {
           ohlcv: [
               [ 1551128400000, 33,  37.1, 14,  14,  196 ],
               [ 1551132000000, 13.7, 30, 6.6,  30,  206 ],
               [ 1551135600000, 29.9, 33, 21.3, 21.8, 74 ],
               [ 1551139200000, 21.7, 25.9, 18, 24,  140 ],
               [ 1551142800000, 24.1, 24.1, 24, 24.1, 29 ],
           ]
       }
   },

  methods: {
    enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})

			tl.set(el, {
				autoAlpha: 0,
				scale: 2,
				transformOrigin: '50% 50%'
			})

			tl.to(el, 1, {
				autoAlpha: 1,
				scale: 1,
				ease: Power4.easeOut
			})
		},
		leave(el, done) {
			TweenMax.to(el, 1, {
				scale: 0,
				ease: Power4.easeOut,
				onComplete: done
			});
    }
  }
}
</script>

<style>

</style>
