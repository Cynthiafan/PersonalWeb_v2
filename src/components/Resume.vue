<template>
  <div class="resume-block flex-center">
    <div class="title flex-center">
      <span data-aos="fade-up"
            data-aos-duration="1000"
            >RESUME</span>
      <a :href="resume.pdf" download>
        <div class="btn flex-center">{{$t("Resume.download", $store.state.language)}}</div>
      </a>
    </div>
    <div class="content">
      <div class="resume flex-center">
        <img class="resume-img" :src="resume.photo" alt="resume">
        <div class="filter" @click="isZoomIn = !isZoomIn"></div>
        <img class="circle" src="../assets/images/zoom_in.png" alt="zoom-in" @click="isZoomIn = !isZoomIn">
      </div>
    </div>
    <div v-if="isZoomIn" class="zoom-in-block flex-center" @click="zoomOut">
      <img :src="resume.photo" alt="resume">
      <div class="close-btn" @click="isZoomIn = !isZoomIn">&times;</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import resumeEn from '../assets/images/Cynthia_resume(en).png'
import resumeCh from '../assets/images/Cynthia_resume(ch).png'

export default {
  data() {
    return {
      isZoomIn: false,
    }
  },
  methods: {
    zoomOut () {
      this.isZoomIn = false
    }
  },
  computed: {
    ...mapGetters(['language']),
    resume () {
      const version = {
        'en': {
          'photo': resumeEn,
          'pdf': '/static/Cynthia_resume.pdf'
        },
        'zh': {
          'photo': resumeCh,
          'pdf': '/static/Cynthia_resume2.pdf'
        }
      }
      return version[this.language]
    }
  }
}
</script>

<style lang="scss" scoped>

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  flex-direction: column;
  width: 50%;

  span {
    color: $maize-yellow;
    font-size: 100px;
    left: 5%;
    letter-spacing: 3px;
    font-weight: bolder;
    z-index: 2;
    user-select: none;
    cursor: default;
  }
}
  .resume-block {
    position: relative;
    width: 100%;
    height: 700px;
    background-image: url('../assets/images/bg_resume.jpg');
    background-size: cover;
  }
  .content {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 40%;
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
    height: 100%;
    background: rgba(black, .7);
    position: absolute;
    z-index: 5;

    img {
      height: 85%;
    }
    .close-btn {
      position: absolute;
      font-size: 30px;
      color: rgba(black, .8);
      z-index: 7;
      transform: translate(1100%, -730%);
      cursor: pointer;
    }
  }
</style>
