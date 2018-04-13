<template>
  <section class="contact-block">
    <div class="content">
      <div class="title">{{$t("Contact.title", $store.state.language)}}</div>
      <input class="input-area" type="text" name="" value="" required :placeholder="$t('Contact.placeholder.name', $store.state.language)" v-model="name"/>
      <input class="input-area" type="email" name="" value="" required :placeholder="$t('Contact.placeholder.email', $store.state.language)" v-model.trim="email">
      <textarea class="input-area" name="name" rows="10" cols="80" required :placeholder="$t('Contact.placeholder.message', $store.state.language)" v-model="message"></textarea>
      <button type="button" class="btn" @click="submit">{{$t("Contact.send", $store.state.language)}}</button>
    </div>
  </section>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  components: {
   Parallax
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
  user-select: none;
}
.title {
  font-size: 56px;
  font-weight: 500;
  color: white;
  user-select: none;
  cursor: default;
}
.contact-block {
  width: 100%;
  height: 600px;
  background: url('../assets/images/bg_contact.jpg');
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
    border: none;
    margin-bottom: 8px;
    resize: none;
    caret-color: $maize-yellow;
    &:valid {
      @extend .valid;
    }
    &:invalid {
      @extend .invalid;
    }

    &:focus {
      outline: none;
    }
  }
}
.valid {
  border-color: $grass-green;
  box-shadow: inset 5px 0 0 $grass-green;
}
.invalid {
  border-color: $maize-yellow;
  box-shadow: inset 5px 0 0 $maize-yellow;
}
</style>
