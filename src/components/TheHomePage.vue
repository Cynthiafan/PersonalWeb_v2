<template>
  <div>
    <div class="nav-bar">
      <a class="link" v-scroll-to="'#about'">ABOUT</a>
      <span>|</span>
      <a class="link" href="#about">SKILL</a>
      <span>|</span>
      <a class="link" href="#about">EXPERIENCE</a>
      <span>|</span>
      <a class="link" href="#about">PROJECT</a>
      <span>|</span>
      <a class="link" v-scroll-to="'#resume'">RESUME</a>
      <span>|</span>
      <a class="link" v-scroll-to="'#contact'">CONTACT</a>
      <span>|</span>
      <div>LANGUAGE</div>
    </div>
    <div class="">
      <landing/>
      <about-me id="about"></about-me>
      <resume id="resume"></resume>
      <contact id="contact"></contact>
    </div>
  </div>
</template>

<script>
import Landing from './Landing.vue'
import AboutMe from './AboutMe.vue'
import Resume from './Resume.vue'
import Contact from './Contact.vue'

export default {
  components: {
    Landing,
    AboutMe,
    Resume,
    Contact
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  position: absolute;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
  background: rgba(black, .8);
  a, div {
    color: rgba($cream-white, .7);
    text-decoration: none;
    font-weight: bold;
    margin: 0px 1%;
    letter-spacing: 2px;

    &:hover {
      color: $maize-yellow;
      font-weight: bold;
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
</style>
