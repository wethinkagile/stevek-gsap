<template id="slide">
<transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
  <div class="page" v-bind:class="view">
    <div class="center">
      <slot></slot>
    </div>
    <div class="content">
      <a href="#munichre"></a>
      <h1>{{ header }}</h1>
      <!-- <img src="../assets/img/munichre.png" /> -->
      Mobile Developer, CI/CD designer, Cloud Infrastructure, TDD and Requirements Engineer<br /><br />

      <b>Name des Unternehmens</b><br />
      Munich Re (Group)<br /><br />

      <b>Beschäftigungszeitraum </b><br />
      Juni 2016 – Feb. 2019<br /><br />

      <b>Beschäftigungsdauer</b><br />
      2 Jahre 9 Monate<br /><br />

      Kubernetes, CoreOS, AWS, Scrum, DevOps, Rapid-Prototyping, Xtreme Programming, Pair-Driven Development, Test-Driven-Development, Continuous Integration, Continuous Delivery, Jenkins, Helm, Python, Webdriver, Selenium, Apium, Leapwork, Browserstack, Groovy, Bash, Angular4, TypeScript, Ionic4, Node8, SAAS, PAAS, Swagger, Apiary, iOS, Android Nougat, BuddyBuild, AndroidSDK, XCode, Slack, Jira, Confluence, Azure, AWS, Amazon S3, Codeship, Logentries, Ubuntu, NodeJS, npm, bower, Jasmine, Karma, IntelliJ IDEA, Webstorm, PyStorm, Kanban, SCRUM, Retrospectives, Trello, Sprint Plannings, Refinements, Whiteboards.

      <!-- <a class="porto-button" @click="goto('porto')">Porto, Portugal</a> -->

    </div>

    <div ref="porto" class="fl-porto">
      PORTOPORTOPORTO
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
    goto(refName) {
      let element = this.$refs[refName];
      element.scrollIntoView({ behavior: 'smooth' });
    },
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      })

      tl.set(el, {
        x: window.innerWidth * 1.5,
        scale: 0.8,
        transformOrigin: '50% 50%'
      })

      tl.to(el, 0.5, {
        x: 0,
        ease: Power4.easeOut
      });

      tl.to(el, 1, {
        scale: 1,
        ease: Power4.easeOut
      });
    },

    leave(el, done) {
      TweenMax.fromTo(el, 1, {
        autoAlpha: 1
      }, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        onComplete: done
      });
    }
  }
}
</script>

<style>

</style>
