<template>
  <header>
    <nav>
      <!-- <span>|</span>
      <a class="link" v-scroll-to="'#landing'">{{$t("Landing.home", $store.state.language)}}</a> -->
      <span>|</span>
      <a class="link" v-scroll-to="'#about'">{{$t("Landing.about", $store.state.language)}}</a>
      <span>|</span>
      <a class="link" v-scroll-to="'#skill'">{{$t("Landing.skill", $store.state.language)}}</a>
      <span>|</span>
      <a class="link" v-scroll-to="'#projects'">{{$t("Landing.project", $store.state.language)}}</a>
      <span>|</span>
      <a class="link" v-scroll-to="'#resume'">{{$t("Landing.resume", $store.state.language)}}</a>
      <span>|</span>
      <a class="link" v-scroll-to="'#contact'">{{$t("Landing.contact", $store.state.language)}}</a>
      <span>|</span>
      <div class="link" @click="changeLanguage(setLanguage)">{{languageBtn}}</div>
      <span>|</span>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      drawer: true
    }
  },
  methods: {
    ...mapMutations(['changeLanguage'])
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
}
</script>

<style lang="scss" scoped>
* {
  // font-family: "Raleway";
  user-select: none;
}
header {
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
  // background: rgba(black, .8);
  background: black;
  z-index: 100;
  @media #{$break-sx} {
    opacity: 0;
  }

}
nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .link {
    color: rgba($cream-white, .7);
    text-decoration: none;
    margin: 0px 1%;
    letter-spacing: 2px;
    font-size: 12px;


    &:hover {
      color: $maize-yellow;
      cursor: pointer;
    }
  }
  span {
    color: rgba($cream-white, .4);
  }
}

</style>
