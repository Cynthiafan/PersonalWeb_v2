<template>
  <div>
    <navbar/>
    <landing id="landing" ref="landing"/>
    <about-me id="about" ref="about"/>
    <skill id="skill" ref="skill"/>
    <project id="projects" ref="projects"/>
    <resume id="resume" ref="resume"/>
    <contact id="contact" ref="contact"/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Landing from './Landing.vue'
import AboutMe from './AboutMe.vue'
import Resume from './Resume.vue'
import Contact from './Contact.vue'
import Skill from './Skill.vue'
import Project from './Project.vue'

import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    Navbar,
    Landing,
    AboutMe,
    Resume,
    Contact,
    Skill,
    Project
  },
  data () {
    return {
      currentPage: 0,
      // checkDevice: (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }
  },
  methods: {
    ...mapMutations(['changeLanguage'])
    ,
    handleScroll () {
      let currentTop = window.scrollY
      const pagePosition = {
        landing: {
          top: this.$refs.landing.$el.offsetTop,
          bottom: this.$refs.landing.$el.offsetTop + this.$refs.landing.$el.offsetHeight
        },
        about: {
          top: this.$refs.about.$el.offsetTop,
          bottom: this.$refs.about.$el.offsetTop + this.$refs.about.$el.offsetHeight
        },
        resume: {
          top: this.$refs.resume.$el.offsetTop,
          bottom: this.$refs.resume.$el.offsetTop + this.$refs.resume.$el.offsetHeight
        },
        contact: {
          top: this.$refs.contact.$el.offsetTop,
          bottom: this.$refs.contact.$el.offsetTop + this.$refs.contact.$el.offsetHeight
        }
      }
      const pages = ['landing', 'about', 'resume', 'contact']

      for (let i in pages) {
        if (currentTop >= pagePosition[pages[i]].top && currentTop < pagePosition[pages[i]].bottom) {
          this.currentPage = i
        }
      }


    }
  },
  computed: {
    ...mapGetters(['language']),
    languageBtn () {
      return this.language === 'en' ? '中文版' : 'ENGLISH'
    },
    setLanguage () {
      return this.language === 'en' ? 'zh' : 'en'
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    const browserLanguage = navigator.language || navigator.userLanguage
    const webLanguage = browserLanguage.indexOf('zh') !== -1 ? 'zh' : 'en'
    this.changeLanguage('zh')
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
.current-page {
  color: $maize-yellow;
}
</style>
