<template id="flipY">
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
  Power4,
  TimelineMax
} from "gsap/dist/gsap"

export default {

  computed: mapState([
    'view'
  ]),

  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      })

      tl.set(el, {
        autoAlpha: 0,
        rotationY: 90,
        transformOrigin: '50% 50%'
      })

      tl.to(el, 1, {
        autoAlpha: 1,
        rotationY: 0,
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
