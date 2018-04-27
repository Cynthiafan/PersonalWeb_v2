<template>
  <div class="about-block">
    <div class="background"></div>
    <div class="content">
      <div class="main-block" data-aos="fade-up" data-aos-duration="1000">
        <div class="left">
          <h1 class="about-title">{{$t("About.title", $store.state.language)}}</h1>
          <div class="info">
            <div class="font-icon">
              <span><i class="fas fa-thumbs-up icon"></i></span>
              <p>{{$t("About.career", $store.state.language)}}</p>
            </div>
            <div class="font-icon">
              <span><i class="fas fa-map-marker-alt icon"></i></span>
              <p>{{$t("About.location", $store.state.language)}}</p>
            </div>
            <div class="font-icon">
              <span><i class="fas fa-envelope icon"></i></span>
              <a :href="`mailto:cynthiafan1230@gmail.com`">{{$t("About.email", $store.state.language)}}</a>
            </div>
          </div>
          <div class="description">
            {{$t("About.description", $store.state.language)}}
          </div>
        </div>
        <div class="right">
          <div class="image"></div>
          <div class="icons">
            <a href="https://www.facebook.com/CynthiaFan1230" target="_blank">
              <img src="../assets/images/icon_facebook.png" alt="facebook">
            </a>
            <a href="https://www.instagram.com/cynthiafan1230/" target="_blank">
              <img src="../assets/images/icon_instagram.png" alt="instagram">
            </a>
            <a href="https://www.linkedin.com/in/fanyatang/" target="_blank">
              <img src="../assets/images/icon_linkedin.png" alt="linkedin">
            </a>
            <a href="https://github.com/Cynthiafan" target="_blank">
              <img src="../assets/images/icon_github.png" alt="github">
            </a>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <div class="my-btn" v-scroll-to="'#resume'">
          {{$t("About.btn.resume", $store.state.language)}}
        </div>
        <div class="my-btn" v-scroll-to="'#contact'">
          {{$t("About.btn.contact", $store.state.language)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
* {
  color: $light-grey;
  font-weight: 400;
  font-family: 'Roboto';
}

// highlight text effect
p::selection, .description::selection, h1::selection {
  background: $maize-yellow;
  color: white;
}
.about-block {
  width: 100%;
  min-height: 700px;
  background: $dark-grey;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media #{$break-sx} {
    padding: 20px 0px;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 35%;
    top: 0;
    background-image: url('../assets/images/bg_aboutme.png');
    background-size: cover;
    z-index: 2;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
    position: relative;

  }
}
.main-block, .btn-block {
  width: 800px;
  padding: 5px;
  background: $dark-grey;
  box-shadow: 0 2px 10px black;
  @media #{$break-ml} {
    width: 80%;
  }
}
.main-block {
  padding: 50px 30px;
  display: flex;
  justify-content: space-between;
  @media #{$break-s} {
    flex-direction: column-reverse;
  }
}
.left {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex: 3;

  .about-title {
    color: $maize-yellow;
    font-size: 26px;
    font-weight: 600;
  }
}
.right {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  @media #{$break-s} {
      padding-bottom: 5px;
      margin-bottom: 5px;
  }

  .image {
    width: 150px;
    height: 150px;
    background-image: url('../assets/images/selfie.jpg');
    background-size: cover;
    border-radius: 75px;
  }
  .icons {
    margin-top: 15px;
    user-select: none;
    display: flex;
    justify-content: center;
    a, img {
      width: 30px;
      margin-right: 5px;

      &:last-child {
        margin-right: 0px;
      }
    }
    a:hover {
      border-bottom: 3px solid $maize-yellow;
      @media #{$break-s} {
          border: none;
      }
    }
  }
}
.info {
  margin: 10px 0px;
  .font-icon {
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    span {
      width: 20px;
      display: flex;
      justify-content: center;
      margin-right: 6px;
    }
    p {
      font-size: 14px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
    .icon {
      color: $light-grey;
      font-size: 18px;
    }
  }
}
.description {
  border-left: 4px solid $maize-yellow;
  padding-left: 16px;
  font-size: 14px;
  line-height: 1.5;
}
.btn-block {
  margin-top: 15px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  .my-btn:first-child {
    margin-right: 3%;
  }
}
</style>
