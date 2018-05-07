<template>
  <div class="login-page">
    <!-- <div class="login-title">Dashboard</div> -->
    <g-signin-button
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in
    </g-signin-button>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      googleSignInParams: {
        client_id: '50244466371-eefdovuivtsa42tkgnngdefn80em5ran.apps.googleusercontent.com'
      }
    }
  },
  created () {
    this.checkAuth()
  },
  methods: {
    onSignInSuccess (googleUser) {
      const userId = googleUser.getBasicProfile().getId()
      axios.post('/api/users', { userId })
      .then(res => {
        console.log(res);
        localStorage.setItem('auth', res.data.token);
        this.checkAuth()
      })
    },
    onSignInError () {
      console.log('fail')
    },
    checkAuth () {
      localStorage.getItem('auth') ? this.$router.push({path: '/admin'}) : '';
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: url('../assets/images/bg_login.jpg');
  background-size: cover;
}
.login-title {
  font-size: 30px;
  font-family: "Roboto";
  color: $dark-grey;
  margin-bottom: 60px;
}
.g-signin-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
  font-size: 24px;
  font-family: "Roboto";
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "\f1a0";
    font-family: "FontAwesome";
    margin-right: 5px;
  }
}

</style>
