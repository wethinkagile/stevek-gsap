<template id="flipX">
<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
  <div class="page" v-bind:class="view">
    <div class="center">
      <slot></slot>
    </div>
    <div class="content">
      <h1>{{ header }}</h1>

      <b>Electronic Mail</b><br /><br />
      steve 'at-symbol' stevek 'punkt' pro<br /><br />

      -----BEGIN PGP PUBLIC KEY BLOCK-----<br>
      Version: OpenPGP.js v4.10.4<br>
      Comment: https://openpgpjs.org<br><br>

      xjMEXjdjYhYJKwYBBAHaRw8BAQdARI0f4MJjOxDEXSZdA3GknG0iqsuIEedS<br>
      cHfI2Gtne2TNI3N0ZXZlQHN0ZXZlay5wcm8gPHN0ZXZlQHN0ZXZlay5wcm8+<br>
      wngEEBYKACAFAl43Y2IGCwkHCAMCBBUICgIEFgIBAAIZAQIbAwIeAQAKCRA/<br>
      w59eolgt7/RLAQCSVbG8WJu+BiSjAFhJyB7Z43y0HjTd1N0gZGKapf+70gD/<br>
      SioUZm0M/WP69d4P7TZOMzEsZAqDFvhsmpdaOir4rgbOOAReN2NiEgorBgEE<br>
      AZdVAQUBAQdAiDTwKRkg/J+AuVScVZbS9KNIFxxULfANZP3iTE5vCwUDAQgH<br>
      wmEEGBYIAAkFAl43Y2ICGwwACgkQP8OfXqJYLe8xsgD+LPnDVQf2HBVnDPi8<br>
      QALlm4SD2hsgsuULbG1RsRa+Q2gBANuqHeV8Asl+lWu0PYw12fmLIHLwTxPK<br>
      lDE5BW3fbikF<br>
      =ekfM<br>
      -----END PGP PUBLIC KEY BLOCK-----


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
    'view',
    'header'
  ]),

  methods: {
    enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})

			tl.set(el, {
				autoAlpha: 0,
				rotationX: 90,
				transformOrigin: '50% 50%'
			})

			tl.to(el, 1, {
				autoAlpha: 1,
				rotationX: 0,
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
