<template>
  <div class="contact-block">
    <div class="content">
      <div class="title">{{$t("Contact.title", $store.state.language)}}</div>
      <input class="input-area" type="text" name="" value="" :placeholder="$t('Contact.placeholder.name', $store.state.language)" v-model="name"/>
      <input class="input-area" type="email" name="" value="" :placeholder="$t('Contact.placeholder.email', $store.state.language)" v-model.trim="email">
      <textarea class="input-area" name="name" rows="10" cols="80" :placeholder="$t('Contact.placeholder.message', $store.state.language)" v-model="message"></textarea>
      <button type="button" class="send-btn" @click="submit">{{$t("Contact.send", $store.state.language)}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submit () {

    },
    validEmail () {
      let email = this.email
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    font-family: 'Roboto';
    font-size: 1em;
  }

  .title {
    font-size: 56px;
    font-weight: 500;
    color: white;
  }

  .contact-block {
    width: 100%;
    height: 100vh;
    background: url('../assets/images/contact_bg.jpg');
    background-size: cover;
  }
  .content {
    width: 50%;
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .input-area {
      width: 350px;
      padding: 8px;
      border-radius: 4px;
      border: none;
      margin-bottom: 8px;
      resize: none;

      &:focus {
        outline: none;
      }
    }

    .send-btn {
      font-size: 1.5em;
      font-weight: 700;
      color: $maize-yellow;
      background: transparent;
      width: 130px;
      height: 38px;
      border-radius: 20px;
      border: 2px solid $maize-yellow;
      cursor: pointer;

      &:focus {
        outline: none;
      }
      &:hover {
        background: $maize-yellow;
        border: none;
        color: white;
        transition: .4s ease;
      }
    }
  }
</style>
