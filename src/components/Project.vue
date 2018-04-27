<template>
  <section class="project-section">
    <div class="left-block">
      <img data-aos="fade-up"
           data-aos-duration="1000"
           src="../assets/images/project_pic.svg" alt="project_icon">
      <h3>{{$t("Project.title", $store.state.language)}}</h3>
    </div>
    <div class="right-block">
      <div class="project-cards">
        <div class="project-card">
          <img src="../assets/images/project_smpa2.png" alt="">
          <h4 class="project-title">{{$t("Project.smpa", $store.state.language)}}</h4>
          <div class="project-card-filter">
            <div class="label">Vue</div>
            <div class="label">Vuex</div>
            <div class="label">Webpack</div>
            <div class="label">Bootstrap</div>
            <hr>
            <div class="project-info">For internal use only.</div>
          </div>
        </div>
        <div class="project-card">
          <img src="../assets/images/project_csd2.png" alt="">
          <h4 class="project-title">{{$t("Project.csd", $store.state.language)}}</h4>
          <div class="project-card-filter">
            <div class="label">Vue</div>
            <div class="label">Vuex</div>
            <div class="label">Webpack</div>
            <div class="label">Bootstrap</div>
            <hr>
            <a href="https://bi.agribiz.tw/" class="project-info" target="_blank">Visit</a>
          </div>
        </div>
        <div class="project-card">
          <img src="../assets/images/project_pw2.png" alt="">
          <h4 class="project-title">{{$t("Project.web", $store.state.language)}}</h4>
          <div class="project-card-filter">
            <div class="label">Vue</div>
            <div class="label">Vuex</div>
            <div class="label">Webpack</div>
            <div class="label">i18n</div>
            <div class="label">Node</div>
            <div class="label">MongoDB</div>
            <hr>
            <div class="project-info">Here it is. B-)</div>
          </div>
        </div>
        <div class="project-card">
          <img class="icon" src="../assets/images/project_icon.png" alt="">
          <div class="project-card-filter last-project-card-filter">
            <p>Here is my</p>
            <a href="playground" class="my-btn-sm" target="_blank">PLAYGROUND</a>
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
$project-card-size: 200px;
* {
  font-family: 'Roboto';
}
  .project-section {
    width: 100%;
    min-height: 100vh;
    background: white;
    display: flex;
    @media #{$break-m} {
      flex-direction: column;
    }
  }
  .left-block {
    flex: 2;
    background: $dark-grey;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media #{$break-m} {
      flex-direction: row;
      padding: 10px 0px;
    }
    img {
      width: 50%;
      @media #{$break-m} {
        display: none;
      }
    }
    h3 {
      color: $maize-yellow;
      margin-top: 5px;
      font-size: 2em;
    }
  }
  .right-block {
    display: flex;
    flex: 3;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;
  }
  .project-cards {
    width: 450px;
    position: relative;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .project-card {
    position: relative;
    width: $project-card-size;
    height: $project-card-size;
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
    .project-title {
      margin-top: 12px;
    }
    .icon {
      width: 30px;
      height: 30px;
    }
    .project-card-filter {
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
        margin: 4px 2px;
        cursor: default;

        &:hover {
          background: rgba($dark-grey, .1);
          transition: background .2s;
        }
      }
      hr {
        margin: 10px 0;
        border: 0;
        height: 0;
        border-top: 1px solid rgba(0,0,0,0.1);
        border-bottom: 1px solid rgba(255,255,255,0.3);
      }
      .project-info {
        padding: 8px 10px;
        background: $dark-grey;
        border-radius: 5px;
        color: $light-grey;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px auto;
      }
      .project-info[href] {
        padding: 8px 10px;
        background: $maize-yellow;
        border-radius: 5px;
        color: $dark-grey;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 5px 0px $dark-grey;
      }
    }
    .last-project-card-filter {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        font-size: 15px;
        color: $light-grey;
        margin-bottom: 8px;
      }
    }
    &:hover > .project-card-filter {
      transition: opacity .3s ease-in-out;
      opacity: 1;
    }
  }
</style>
