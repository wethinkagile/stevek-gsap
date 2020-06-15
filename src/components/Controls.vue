<template id="controls">
<ul class="controls">
  <li v-for="(animation, index) in animations" v-bind:key="index"
      @click.prevent="setView(index)" v-bind:class="{ 'active': animations[index][1] === view }">
    {{ animations[index][0] }}
  </li>
</ul>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex';

export default {
  template: '#controls',
  computed: mapState([
    'animations',
    'view'
  ]),
  methods: mapMutations([
    'setView'
  ])
}
</script>

<style>
.controls {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%, 0);
  width: 100%;
  margin-top: 30px;
  text-align: center;
  padding: 0;
}

li {
  opacity: 0.6;
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  height: 42px;
  margin: 0 18px;
  padding: 0 42px;
  border-radius: 11px;
  font: 1.5rem/40px Arial, sans-serif;
  font-family: 'GlacialIndifferenceBold', Helvetica, Arial, sans-serif;
  background: #505050;
  filter: brightness(60%);
}

.active {
  background: black;
  filter: brightness(100%);
}

.active:hover {
  filter: brightness(100%);
}


li:hover {
  transition-timing-function: ease-out;
	filter: brightness(75%);
  }

</style>
