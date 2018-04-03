<template>
  <div class="about-block">
    <div class="content">
      <div class="title-area">
        <div class="title">ABOUT ME</div>
        <div class="subtitle">Front-end Developer</div>
      </div>
      <div class="info-area">
        <div class="info-left">
          <div class="left-block">
            <p>Name</p>
            <div class="label">
              <img src="../assets/images/icon_name.png" alt="name">
              Cynthia Fan
            </div>
          </div>
          <div class="left-block">
            <p>Email</p>
            <div class="label">
              <img src="../assets/images/icon_email.png" alt="email">
              cynthiafan1230@gmail.com
            </div>
          </div>
        </div>
        <div class="info-middle"></div>
        <div class="info-right">
          <div class="right-block">
            <p>Location</p>
            <div class="label">
              <img src="../assets/images/icon_location.png" alt="location">
              Taipei, Taiwan
            </div>
          </div>
          <div class="right-block">
            <p>Character</p>
            <div class="label"></div>
          </div>
        </div>
      </div>
      <div class="description">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
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
  font-family: 'Roboto';
  box-sizing: border-box;
}

.about-block {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.title-area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 40px;
    font-weight: 700;
    color: $dark-grey;
  }
  .subtitle {
    font-size: 1em;
    font-weight: 100;
  }
}

.info-area {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 15px 0px 40px 0px;
  border-bottom: 1px solid $dark-grey;

  &::after {
    content: "";
    width: 2px;
    height: 40px;
    background: $dark-grey;
    position: absolute;
    bottom: 0;
  }
}
.info-left {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 30%;

  p {
    font-size: 14px;
    text-align: right;
  }
}
.info-middle {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: $dark-grey;
  margin: 0px 20px;
}
.info-right {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 30%;
  p {
    font-size: 14px;
  }
}
.label {
  padding: 8px 10px;
  background: $dark-grey;
  border-radius: 49px;
  color: $maize-yellow;
  display: flex;
  align-items: center;

  img {
    width: 24px;
    margin-right: 6px;
  }
}
.description {
  font-size: 14px;
  color: $dark-grey;
  padding: 10px 0px;
  width: 550px;
}
</style>
