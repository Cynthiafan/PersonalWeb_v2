<template>
  <section class="landing-section">
    <div class="landing-filter">
      <div class="text">
        <!-- Hello! I am <span>Cynthia Fan</span>,</br> a front-end developer. -->
        <p>HELLO! I AM</p>
        <p>CYNTHIA FAN</p>
        <p>= FRONT-END DEVELOPER + CREATOR + ADVENTURER</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  }
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
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/bg_landing.jpg');
  background-size: cover;

  .landing-filter {
    width: 100%;
    height: 100vh;
    background: rgba(black, .65);
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


</style>
