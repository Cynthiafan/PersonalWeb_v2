<template>
  <div class="skill-block">
    <div class="bg-filter">
      <div class="content">
        <h3>{{$t("Skill.title", $store.state.language)}}</h3>
        <div class="my-btn-group">
          <button
            class="my-btns"
            type="button"
            name="button"
            :class="[currentTab === 'f2e' ? 'my-btn-selected' : '']"
            @click="currentTab = 'f2e',trackGA('frontend')">
            {{$t("Skill.front-end", $store.state.language)}}
          </button>
          <button
            class="my-btns"
            type="button"
            name="button"
            :class="[currentTab === 'b2e' ? 'my-btn-selected' : '']"
            @click="currentTab = 'b2e', trackGA('backend')">
            {{$t("Skill.back-end", $store.state.language)}}
          </button>
          <button
            class="my-btns"
            type="button"
            name="button"
            :class="[currentTab === 'others' ? 'my-btn-selected' : '']"
            @click="currentTab = 'others', trackGA('others')">
            {{$t("Skill.others", $store.state.language)}}
          </button>
        </div>
        <!-- Front-end block -->
        <div class="skill-bar-area" v-show="currentTab === 'f2e'">
          <div class="skill-bar">
            <p>HTML5</p>
            <div class="bar-base">
              <div data-msg="High" class="bar bar-1" data-aos="bar-animation"></div>
            </div>
          </div>
          <div class="skill-bar">
            <p>CSS3/SASS</p>
            <div class="bar-base">
              <div data-msg="High" class="bar bar-2"></div>
            </div>
          </div>
          <div class="skill-bar">
            <p>JavaScript/ES6</p>
            <div class="bar-base">
              <div data-msg="Medium" class="bar bar-3"></div>
            </div>
          </div>
          <div class="skill-bar">
            <p>Vue.js/Vuex</p>
            <div class="bar-base">
              <div data-msg="Medium" class="bar bar-4"></div>
            </div>
          </div>
        </div>
        <!-- Back-end block -->
        <div class="skill-bar-area" v-show="currentTab === 'b2e'">
          <div class="skill-bar">
            <p>Node.js/Express</p>
            <div class="bar-base">
              <div data-msg="Basic" class="bar bar-5"></div>
            </div>
          </div>
          <div class="skill-bar">
            <p>MongoDB</p>
            <div class="bar-base">
              <div data-msg="Basic" class="bar bar-6"></div>
            </div>
          </div>
          <div class="skill-bar">
            <p>Firebase</p>
            <div class="bar-base">
              <div data-msg="Medium" class="bar bar-7"></div>
            </div>
          </div>
        </div>
        <!-- Others block -->
        <div class="skill-bar-area" v-show="currentTab === 'others'">
          <div class="skill-bar">
            <p>Git</p>
            <div class="bar-base">
              <div data-msg="Medium" class="bar bar-8"></div>
            </div>
          </div>
          <div class="skill-bar">
            <p>Webpack</p>
            <div class="bar-base">
              <div data-msg="Medium" class="bar bar-9"></div>
            </div>
          </div>
          <div class="skill-bar">
            <p>Sketch</p>
            <div class="bar-base">
              <div data-msg="High" class="bar bar-10"></div>
            </div>
          </div>
          <div class="skill-bar">
            <p>SEO</p>
            <div class="bar-base">
              <div data-msg="Medium" class="bar bar-11"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 'f2e',
      currentDetail: ''
    }
  },
  methods: {
    showDetail (skill) {
      this.currentDetail = skill
    },
    hideDetail () {
      this.currentDetail = ''
    },
    trackGA (label) {
      this.$ga.event('skill', 'click', label);
    }
  },
  computed: {
    details () {
      const descriptions = {
        "html": {
          "text": "html.",
          "icon": ["fab", "fa-html5", "icons"]
        },
        "css": {
          "text": "CSS.",
          "icon": "fab fa-css3-alt icons"
        },
        "js": {
          "text": "js.",
          "icon": "fab fa-js-square icons"
        }
      }
      return this.currentDetail ? descriptions[this.currentDetail] : ''
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Roboto';
}
$bar-radius: 5px;
// bar data
$dataNum: 11;
$data: 80% 75% 58% 60% 30% 25% 70% 65% 65% 85% 60%;

@for $i from 1 through $dataNum {
  .bar-#{$i} {
    animation: showBar#{$i} 1.2s forwards;
  }
}
@for $i from 1 through $dataNum {
  @keyframes showBar#{$i} {
    0%   {width: 0px;}
    100%  {width: nth($data,$i);}
  }
}

h3 {
  font-size: 2em;
}

.skill-block {
  width: 100%;
  height: 500px;
  background: url('../assets/images/bg_skill.jpg');
  background-size: cover;
  color: $cream-white;

  .bg-filter {
    width: 100%;
    height: 100%;
    background-color: rgba($dark-grey, .65);
  }
  .content {
    width: 90%;
    height: 100%;
    display: flex;
    margin: 0px auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .my-btn-group {
      margin: 25px 0px 20px 0px;
    }
  }
}
.skill-bar-area {
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 240px;
  transition: opacity.2s;

  .skill-bar {
    margin: 15px 0px;
    &:hover .bar {
      background: $grass-green;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 5px;
      color: $light-grey;
    }
  }

  .bar-base {
    position: relative;
    width: 440px;
    height: 10px;
    border-radius: $bar-radius;
    background: $cream-white;
    @media #{$break-sx} {
      width: 300px;
    }

    .bar {
      position: absolute;
      height: 100%;
      background: $maize-yellow;
      border-radius: $bar-radius;
      transition: background .2s ease;

      &::before {
        content: attr(data-msg);
        padding: 8px 10px;
        background: $dark-grey;
        border-radius: 5px;
        color: $light-grey;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: -37px;
        z-index: 3;
        transform: translateX(50%);
      }
      &::after {
        content: "";
        width: 0;
        height: 0;
        right: 0;
        top: -22px;
        position: absolute;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 20px solid $dark-grey;
        transform: translateX(50%);
      }
    }
  }
}
</style>
