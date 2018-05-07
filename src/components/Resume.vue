<template>
  <div class="resume-block flex-center">
    <div class="resume-title">
      <h3 data-aos="fade-up"
            data-aos-duration="1000"
            >RESUME</h3>
      <a :href="resume.pdf" download>
        <div class="my-btn flex-center" @click="trackGA()">{{$t("Resume.download", $store.state.language)}}</div>
      </a>
    </div>
    <div class="content">
      <div class="resume flex-center">
        <img class="resume-img" :src="resume.photo" alt="resume" ref="image">
        <!-- <div class="filter" @click="isZoomIn = !isZoomIn"></div> -->
        <!-- <img class="circle" src="../assets/images/zoom_in.png" alt="zoom-in" @click="isZoomIn = !isZoomIn"> -->
      </div>
      <a :href="resume.pdf" download>
        <div class="my-btn flex-center">{{$t("Resume.download", $store.state.language)}}</div>
      </a>
    </div>
    <!-- <div v-if="isZoomIn" class="zoom-in-block flex-center" @click="zoomOut">
      <img :src="resume.photo" alt="resume">
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import resumeEn from '../assets/images/Cynthia_resume(en).png';
import resumeCh from '../assets/images/Cynthia_resume(ch).png';

export default {
  data() {
    return {
      isZoomIn: false,
      dialog: true
    }
  },
  methods: {
    zoomOut () {
      this.isZoomIn = false
    },
    trackGA () {
      this.$ga.event('resume', 'download', this.language);
    }
  },
  computed: {
    ...mapGetters(['language']),
    resume () {
      const version = {
        'en': {
          'photo': resumeEn,
          'pdf': '/static/Cynthia_resume(ch).pdf'
        },
        'zh': {
          'photo': resumeCh,
          'pdf': '/static/Cynthia_resume(ch).pdf'
        }
      }
      return version[this.language]
    },
    iconPos () {
      let image = this.$refs.image.getBoundingClientRect()
      return {
        left: `${image.right - 10}px`,
        top: `${image.top - 10}px`,
        position: 'absolute',
        fontSize: '30px',
        color: 'rgba(black, .8)',
        zIndex: 7
      }
    }
  }
}
</script>

<style lang="scss" scoped>

h3 {
  color: $maize-yellow;
  font-size: 100px;
  left: 5%;
  letter-spacing: 3px;
  font-weight: 600;
  z-index: 2;
  user-select: none;
  cursor: default;
  font-family: 'Roboto';
  @media #{$break-m} {
    font-size: 50px;
    text-shadow: 1px 1px 10px black;
  }
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.resume-title {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a {
    @media #{$break-m} {
      display: none;
    }
  }
}
  .resume-block {
    position: relative;
    width: 100%;
    height: 700px;
    background-image: url('../assets/images/bg_resume.jpg');
    background-size: cover;
    overflow: hidden;

    @media #{$break-m} {
      flex-direction: column;
      height: auto;
      padding: 50px 0px;
    }
  }
  .content {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    a {
      margin-top: 20px;
      display: none;
      @media #{$break-m} {
        display: block;
      }
    }
  }
  .resume {
    position: relative;
    box-shadow: 8px 8px 10px black;
    .resume-img {
      width: 300px;
    }

    .filter {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(black, .7);
      top: 0;
      cursor: pointer;
      transition: .5s ease;
    }
    .circle {
      position: absolute;
      top: 50%;
      width: 30px;
      height: 30px;
      opacity: .7;
      z-index: 3;
      cursor: pointer;
      transition: opacity .5s ease;
    }

    .circle:hover, .filter:hover + .circle{
      opacity: 1;
    }
    .filter:hover, .circle:hover + .filter{
      background: rgba(black, .8);
      transition: .5s ease;
    }
  }
  .zoom-in-block {
    width: 100%;
    height: 100vh;
    background: rgba(black, .7);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;

    img {
      height: 85%;
    }
  }
</style>
