<script>
import { TweenMax, TimelineMax, Power4 } from 'gsap'
const flipX = Vue.component('flipX', {
  template: '#page',
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
})

// export default {
//   name: 'FlipX'
// }
</script>
