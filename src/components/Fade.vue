<template id="fade">
<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
  <div class="page" v-bind:class="view">
    <div class="center">
      <slot></slot>
    </div>
    <div class="content">
      <h1>{{ header }}</h1>
      Hello, my name is Steve K. I am currently an ICT freelance pro with 20 years of experience.
      I don't follow short-lived trends and marketing stunts. I heed the calling of
      free and open-source software, a world free of egoistical or psychopath interests.
      Since 18 years, I put all my efforts into the development of open and free software for
      a sustainable way to conduct business, humanitarian and planetarian affairs.
      <br /><br />
      This is why I refuse to work with businesses that have ties to the fossile fuel sector.
      My business is powered by 100% ecological finance, a true force of good with investments
      in autonomous communities, education and new ways of agriculture.
      <br /><br />
      I cancelled all accounts at anti-human corps like Amazon, Twitter, LinkedIn, WhatsApp (Facebook), Holvi (BBVA) or
      Fidor Bank (BPCE). At best, these companies are known for their meddling
      with hundreds of elections, stealing Sioux-owned land or aiding to the destruction of the rainforest.
      <br /><br />
      If you sign me up as your freelancer, rest assured, my toolchain is technologically bleeding edge and ethically prestine
      for a better future for all of us. This Site is written with FOSS in VueJS. The underlying infrastructure
      is hosted on FOSS by Zeit, a serverless infrastructure. It spins up on demand and it will shut down after you leave this page.
      <br /><br />
      Like my work ethic - Smart & Sustainable.
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
