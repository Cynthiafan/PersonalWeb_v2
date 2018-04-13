<template>
  <div class="project-block">
    <div class="content">
      <div class="title">{{$t("Project.title", $store.state.language)}}</div>
      <div class="cards">
        <div class="card">
          <div class="image img-csd">
            <div class="filter">{{$t("Project.csd", $store.state.language)}}</div>
          </div>
          <div class="skills">
            <span>Vue/ Vuex/ Webpack</span>
          </div>
        </div>
        <div class="card">
          <div class="image img-personalweb">
            <div class="filter">{{$t("Project.web", $store.state.language)}}</div>
          </div>
          <div class="skills">
            <span>Vue/ Vuex/ Webpack</span>
            <span>i18n/ Node.js/ MongoDB</span>
          </div>
        </div>
        <div class="card">
          <div class="image img-smpa">
            <div class="filter">{{$t("Project.smpa", $store.state.language)}}</div>
          </div>
          <div class="skills">
            <span>Vue/ Vuex/ Webpack</span>
          </div>
        </div>
      </div>
      <div class="bottom-area">
        <p>And you can visit my<span>&rArr;</span></p>
        <button class="btn-sm">
          PLAYGROUND
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>


.project-block {
  width: 100%;
  height: 700px;
  background: $dark-grey;
  font-family: 'Roboto';
  color: white;

  .content {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
}

.title {
  color: $maize-yellow;
  font-size: 2em;
  font-weight: 600;
}

.cards {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  .card {
    width: 200px;
    height: 220px;

    .skills {
      color: $light-grey;
      font-size: 14px;
      font-weight: lighter;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }

    &:nth-child(2) {
      margin: 0px 14px;
    }
    .img-smpa {
      background-image: url(../assets/images/project_smpa.png);
    }
    .img-personalweb {
      background-image: url(../assets/images/project_personalweb.png);
    }
    .img-csd {
      background-image: url(../assets/images/project_csd.png);
    }
    .image {
      position: relative;
      height: 200px;
      background-size: cover;
      border-radius: 4px;
      box-shadow: 8px 8px 10px black;

      .filter {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: white;
        background: rgba(black, 0.8);
      }
    }
  }
}
.bottom-area {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: lighter;
  align-items: center;
  margin-top: 20px;
  span {
    margin: 0px 4px;
  }
}
</style>
