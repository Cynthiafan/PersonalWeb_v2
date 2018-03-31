<template>
  <div>
    <div class="error" @mousemove="detectMouse"></div>
    <div class="circle"></div>
    <router-link class="back" :to="{ name: 'ThePage'}">Return to Homepage</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    detectMouse(event) {
      console.log(event)
    }
  }
}
</script>

<style scoped lang="scss">
.error {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/404.svg') ;
  background-size: 100%;
  background-position: center center;
}

.back {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateX(50%);
  padding: 20px 30px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, .7);
  color: rgba(190, 190, 190, 1);
  transition: color .2s;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: white;
    transition: color .2s;
  }
}
</style>
