<template>
  <div>
    <div class="nav-bar">
      <a class="link" v-scroll-to="'#about'" :class="[currentPage === 1 ? current-page : '']">{{$t("Landing.about", $store.state.language)}}</a>
      <span>|</span>
      <a class="link" href="#about">{{$t("Landing.skill", $store.state.language)}}</a>
      <span>|</span>
      <a class="link"v-scroll-to="'#projects'">{{$t("Landing.project", $store.state.language)}}</a>
      <span>|</span>
      <a class="link" v-scroll-to="'#resume'">{{$t("Landing.resume", $store.state.language)}}</a>
      <span>|</span>
      <a class="link" v-scroll-to="'#contact'">{{$t("Landing.contact", $store.state.language)}}</a>
      <span>|</span>
      <div @click="changeLanguage(setLanguage)">{{languageBtn}}</div>
    </div>
    <div class="">
      <landing ref="landing"/>
      <about-me id="about" ref="about"/>
      <resume id="resume" ref="resume"/>
      <projects id="projects" ref="projects"/>
      <contact id="contact" ref="contact"></contact>
    </div>
  </div>
</template>

<script>
import Landing from './Landing.vue'
import AboutMe from './AboutMe.vue'
import Resume from './Resume.vue'
import Contact from './Contact.vue'
import Projects from './Projects.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    Landing,
    AboutMe,
    Resume,
    Contact,
    Projects
  },
  data () {
    return {
      currentPage: 0
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
      // if (currentTop >= pagePosition.landing.top && currentTop < pagePosition.landing.bottom) {
      //   console.log('landing')
      // }
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
    this.changeLanguage('en')
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
  background: rgba(black, .8);
  z-index: 100;
  a, div {
    color: rgba($cream-white, .7);
    text-decoration: none;
    // font-weight: bold;
    margin: 0px 1%;
    letter-spacing: 2px;
    font-size: 12px;

    &:hover {
      color: $maize-yellow;
      // font-weight: bold;
      cursor: pointer;
      // transition: .6s;
    }
  }
  span {
    color: rgba($cream-white, .4);
  }
}
.link {
  color: white;
  text-decoration: none;
}
.current-page {
  color: $maize-yellow;
}
</style>
