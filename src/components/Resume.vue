<template>
  <div class="resume-block flex-center">
    <div class="title flex-center">
      <span>RESUME</span>
      <a href="./Cynthia_resume.pdf" download>
        <div class="download-btn flex-center">DOWNLOAD</div>
      </a>
    </div>
    <div class="content">
      <div class="resume flex-center">
        <div class="filter" @click="isZoomIn = !isZoomIn"></div>
        <img class="circle" src="../assets/images/zoom-in3.png" alt="zoom-in">
      </div>
    </div>
    <div v-if="isZoomIn" class="zoom-in-block flex-center">
      <img src="../assets/images/Cynthia_resume(ch).png" alt="resume">
      <div class="close-btn" @click="isZoomIn = !isZoomIn">&times;</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isZoomIn: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    font-family: 'Roboto';
  }

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

    a {
      text-decoration: none;
    }
    .download-btn {
      text-decoration: none;
      width: 150px;
      height: 40px;
      border-radius: 20px;
      border: 2px solid $maize-yellow;
      font-weight: bold;
      color: $maize-yellow;
      font-size: 16px;

      &:hover {
        background-color: $maize-yellow;
        border: none;
        color: white;
        transition: .4s ease;
      }
    }
  }

  .resume-block {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/images/resume_bg.jpg');
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
    width: calc(595px * 0.5);
    height: calc(842px * 0.5);
    background-image: url('../assets/images/Cynthia_resume(ch).png');
    background-size: cover;
    box-shadow: 8px 8px 10px black;

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
    position: relative;
    width: 100%;
    height: 100vh;
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
