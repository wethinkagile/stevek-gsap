<!-- Controls -->
<template id="controls">
	<ul class="controls">
		<li v-for="(animation, index) in state.animations" @click.prevent="setView(animation)" v-bind:key='index' v-bind:class="{ 'active': animation === state.view }">
			{{ animation }}
		</li>
	</ul>
</template>

<script>

// State
const state = {
	animations: ['fade', 'slide', 'slideUp', 'zoom', 'flipX', 'flipY'],
	view: 'slide'
}

// Controls
const controls = Vue.component('controls', {
  template: '#controls',
	data: state,
	methods: {
		setView(animation) {
			state.view = animation
		}
	}
})

export default {
  name: 'Controls'
}
</script>


<style scoped>
.controls {
	position: absolute;
	left: 50%;
	bottom: 40px;
	transform: translate(-50%, 0);
	width: 100%;
	margin-top: 30px;
	text-align: center;
	padding: 0;

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

		&.active {
			background: lighten(#505050, 40%);
		}
	}
}
</style>
