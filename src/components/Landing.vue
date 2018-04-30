<template>
  <transition name="fade">
  <section v-if="test" class="landing-section">
    <div class="landing-filter">
      <div class="text">
        <img src="../assets/images/logo.svg" alt="" width="300px">
        <!-- Hello! I am <span>Cynthia Fan</span>,</br> a front-end developer. -->
        <!-- <p>HELLO! I AM</p>
        <p>CYNTHIA FAN</p>
        <p>= FRONT-END DEVELOPER + CREATOR + ADVENTURER</p> -->
      </div>
    </div>
  </section>
</transition>
</template>

<script>
export default {
  data () {
    return {
      test: true,
    }
  },

  mounted () {
    setTimeout(() => {
      this.test = false
    }, 5000);
  },

}
</script>

<style lang="scss" scoped>

* {
  font-family: "Raleway";
  color: white;
}

// all of the <p> in this component can not be selected
p {
  user-select: none;
}

.landing-section {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  // background-image: url('../assets/images/bg_landing.jpg');
  // background-size: cover;
  z-index: 100;

  .landing-filter {
    width: 100%;
    height: 100vh;
    // background: rgba(black, .65);
    background: rgba(black, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.text {
  // font-family: 'Raleway';
  // font-size: 60px;
  // color: $light-grey;
  // font-weight: 600;
  // span {
  //   color: $maize-yellow;
  // }


  p:first-child {
    letter-spacing: 1px;
    font-size: 12px;
    color: rgba($cream-white, .7);
  }
  p:nth-child(2) {
    font-size: 60px;
    font-family: 'Roboto';
    font-weight: 700;
    color: $maize-yellow;
  }
  p:last-child {
    font-size: 12px;
    letter-spacing: 3px;
    padding: 4px 0;
    transform: scale(0.86) translate(-7%, 0px);
    color: rgba($cream-white, .7);
    border-top: 1px solid rgba($cream-white, .7);
    border-bottom: 1px solid rgba($cream-white, .7);

  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
