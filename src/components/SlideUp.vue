<template id="SlideUp">
<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
  <div class="page" v-bind:class="view">
    <div class="center">
      <slot></slot>
    </div>
    <div class="content">
      <a href="#munichre"></a>
      <h1>{{ header }}</h1>

      <b>Name des Empfehlenden</b><br />
      Stefan Dirnsdorfer
      <br /><br />

      <b>Firmenname </b><br />
      Thetaris GmbH<br /><br />

      <b>Funktion und Titel</b><br />
      Direkter Vorgesetzter, CTO<br /><br />

      I had the great pleasure to work with Stephan Kristyn for almost 3 years. We were working on a mobile application infrastructure for one of our clients. Stephan often took the initiative to push the project in difficult situations. With high motivation he introduced Kubernetes to our team and migrated the build pipelines. He set up and integrated automated testing and test reporting frameworks. He also showed deep understanding in our efforts to build, deploy and publish our Ionic based App to the stores. As an evangelist of the scrum methodology he helped us to stream line the process. His overall skills span a wide range of technologies from the entire DevOp stack. He was always eager to learn new stuff and never shyed away from getting his hands dirty.

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
}
</script>

<style>

</style>
