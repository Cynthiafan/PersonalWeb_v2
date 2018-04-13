<template>
  <section class="project-section">
    <div class="left-block">
      <img data-aos="fade-up"
           data-aos-duration="1000"
           src="../assets/images/project_pic.svg" alt="project_icon">
      <h3>{{$t("Project.title", $store.state.language)}}</h3>
    </div>
    <div class="right-block">
      <div class="cards">
        <div class="card">
          <img src="../assets/images/project_smpa2.png" alt="">
          <h4>{{$t("Project.smpa", $store.state.language)}}</h4>
          <div class="card-filter">
            <div class="label">Vue</div>
            <div class="label">Vuex</div>
            <div class="label">Webpack</div>
            <div class="label">Bootstrap</div>
            <hr>
            <div class="play-icon">
              <img src="../assets/images/project_icon2.png" alt="">
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/images/project_csd2.png" alt="">
          <h4>{{$t("Project.csd", $store.state.language)}}</h4>
          <div class="card-filter">
            <div class="label">Vue</div>
            <div class="label">Vuex</div>
            <div class="label">Webpack</div>
            <div class="label">Bootstrap</div>
            <hr>
            <div class="play-icon">
              <img src="../assets/images/project_icon2.png" alt="">
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/images/project_pw2.png" alt="">
          <h4>{{$t("Project.web", $store.state.language)}}</h4>
          <div class="card-filter">
            <div class="label">Vue</div>
            <div class="label">Vuex</div>
            <div class="label">Webpack</div>
            <div class="label">i18n</div>
            <div class="label">Node</div>
            <div class="label">MongoDB</div>
            <hr>
            <div class="play-icon">
              <img src="../assets/images/project_icon2.png" alt="">
            </div>
          </div>
        </div>
        <div class="card">
          <img class="icon" src="../assets/images/project_icon.png" alt="">
          <div class="card-filter last-card-filter">
            <p>Welcome to visit my</p>
            <button class="btn-sm">
              PLAYGROUND
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
$card-size: 200px;

  .project-section {
    width: 100%;
    min-height: 600px;
    background: white;
    display: flex;
  }
  .left-block {
    width: 40%;
    background: $dark-grey;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 50%;
    }
    h3 {
      color: $maize-yellow;
      margin-top: 5px;
    }
  }
  .right-block {
    display: flex;
    width: 60%;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;
  }
  .cards {
    width: 450px;
    position: relative;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .card {
    position: relative;
    width: $card-size;
    height: $card-size;
    background: #FCFCFC;
    border: 1px solid #F0F0F0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 4px;
    img {
      width: 130px;
      height: 110px;
    }
    h4 {
      margin-top: 12px;
    }
    .icon {
      width: 30px;
      height: 30px;
    }
    .card-filter {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba($dark-grey, .8);
      opacity: 0;
      transition: opacity .3s ease-in-out;
      padding: 30px;

      .label {
        position: relative;
        background: rgba($light-grey, .2);
        border-radius: 5px;
        padding: 4px 8px;
        border: 1px solid $light-grey;
        color: $light-grey;
        font-size: 12px;
        display: inline-block;
        font-weight: 300;
        margin: 4px 2px;
        cursor: default;

        &:hover {
          background: rgba($dark-grey, .1);
          transition: background .2s;
        }
      }
      .play-icon {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .last-card-filter {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        font-size: 15px;
        color: $light-grey;
        margin-bottom: 5px;
      }
    }
    &:hover > .card-filter {
      transition: opacity .3s ease-in-out;
      opacity: 1;
    }
  }
</style>
