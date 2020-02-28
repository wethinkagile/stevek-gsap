<template id="controls">
<ul class="controls">
  <li v-for="(animation, index) in animations" v-bind:key="index"
      @click.prevent="setView(index)" v-bind:class="{ 'active': animations[index][1] === view }">
    {{ animations[index][0] }}
  </li>
</ul>
</template>

<!-- <li v-for="(animation, index) in animations" v-bind:key="index"
    @click.prevent="setView(animation)" v-bind:class="{ 'active': animation === view }">
  {{ index }}
</li> -->

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
  height: 30px;
  margin: 0 10px;
  padding: 0 30px;
  border-radius: 10px;
  font: .8rem/30px Arial, sans-serif;
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  background: #505050;
}

.active {
  filter: brightness(50%);
}


li:hover {
  transition-timing-function: ease-out;
	filter: brightness(75%);
  }

</style>
