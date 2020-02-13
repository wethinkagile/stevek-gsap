<!-- Transitions -->
<template id="page">
	<transition
		v-on:enter="enter"
		v-on:leave="leave"
		v-bind:css="false"
		appear
	>
		<div class="page" v-bind:class="state.view">
			<div class="center">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>

// export default {
//   name: 'Page'
// }
</script>

<style scoped>

.page {
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: #c0c0c0;

	.center {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		font-size: 3rem;
		text-align: center;
	}

	h1 {
		width: 100%;
		margin: 0;
		padding: 0;
		font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
		font-size: 2.8rem;
		text-transform: capitalize;
	}

	p {
		font-family: 'Vollkorn', Georgia, Times, serif;
		font-size: 1.1rem;
	}

	a {
		transition: color 200ms ease-out;
		color: darken(rgba(#fff, .8), 40%);

		&:hover {
			color: darken(rgba(#fff, .8), 60%);
		}
	}
}

.active-animation {
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translate(-50%, 0);
}

.fade {
	background: $color1;
}

.slide {
	background: $color2;
}

.zoom {
	background: $color3;
}

.flipX {
	background: $color4;
}

.flipY {
	background: $color5;
}

.slideUp {
	background: $color6;
}
</style>
