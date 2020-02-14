<template>
<div class="bubble-wrapper">
  <div ref="bubble" class="bubble">
    <img class="bubble-image"
         src="../assets/tux.svg" />
  </div>
  <div ref="bubblePulse" class="bubble-pulse"></div>
</div>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from "gsap"
export default {
  data() {
    return {
      timeline: null,
    }
  },
  mounted() {

    const { bubble, bubblePulse } = this.$refs
    const timeline = new TimelineLite({
     onComplete: () => timeline.restart()
   })

    timeline.to(bubble, 0.4, {
      scale: 0.8,
      rotation: 16,
      ease: Back.easeOut.config(1.7),
    })

    timeline.to(
      bubblePulse,
      0.5,
      {
        scale: 0.9,
        opacity: 1,
      },
     '-=0.6'
    )

    timeline.to(bubble, 1.2, {
      scale: 1,
      rotation: '-=16',
      ease: Elastic.easeOut.config(2.5, 0.5),
    })

    timeline.to(
      bubblePulse,
      1.1,
      {
        scale: 3,
        opacity: 0,
        ease: Expo.easeOut,
      },
      '-=1.2'
    )
  }
}
</script>

<style>
body {
  background: #1a1a1a;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bubble-wrapper {
  position: relative;
}

.bubble {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: #272727;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.bubble-pulse {
  position: absolute;
  z-index: 1;
  height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: #272727;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}

.bubble-image {
  height: 50%;
}
</style>

<!--
<template>
  <div>
    <div ref='box' class='box'>I'm a {{ name }}</div>
    <button @click='countUp'>Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>
import { TimelineLite, Back } from 'gsap'

export default {
  data () {
    return {
      name: 'box',
      counter: 0
    }
  },
  methods: {
   countUp: function () {
     this.counter += 1
     const box = this.$refs.box
     const timeline = new TimelineLite()
     timeline.to(box, 1, { x: 200, rotation: 90, ease: Back.easeInOut })
     timeline.to(box, 0.5, { background: 'green'}, '-=0.5' // Run the animation 0.5s early
    )
   }
 }
}

</script>

<style>
.box {
  height: 60px;
  width: 60px;
  background: red;
}
</style> -->
