<template>
  <div class="landing-block">
    
    <div class="landing-filter">
      <div class="text">
        <p>HELLO! I AM</p>
        <p>CYNTHIA FAN</p>
        <p>= FRONT-END DEVELOPER + CREATOR + ADVENTURER</p>
      </div>
    </div>
  </div>
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
  color: white;
}

.landing-block {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/landing_bg.jpg');
  background-size: cover;

  .landing-filter {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .65);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.text {

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
