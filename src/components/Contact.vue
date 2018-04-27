<template>
  <section class="contact-block">
    <div class="content">
      <h3 class="contact-title">{{$t("Contact.title", $store.state.language)}}</h3>
      <input class="input-area" type="text" name="name" value="" required :placeholder="$t('Contact.placeholder.name', $store.state.language)" v-model="name"/>
      <input class="input-area" type="email" name="email" value="" required :placeholder="$t('Contact.placeholder.email', $store.state.language)" v-model.trim="email">
      <textarea class="input-area" name="message" rows="10" cols="80" required :placeholder="$t('Contact.placeholder.message', $store.state.language)" v-model="message"></textarea>
      <button type="submit" class="my-btn" @click="submit">{{$t("Contact.send", $store.state.language)}}</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

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
      if (!this.name | !this.email | !this.message) return null
      axios.post('/api/messages', {
        params: {
          time: moment().format('YYYY/MM/DD HH:mm'),
          name: this.name,
          email: this.email,
          message: this.message
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.error(error)
      })
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
  font-family: 'Roboto';
}
.contact-title {
  font-size: 56px;
  font-weight: 500;
  color: white;
  user-select: none;
  cursor: default;
  white-space: nowrap;
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
  @media #{$break-m} {
    margin: 0px auto;
  }

  .input-area {
    width: 350px;
    padding: 8px;
    border: none;
    margin-bottom: 8px;
    resize: none;
    background: white;
    caret-color: $maize-yellow;
    font-size: 14px;

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
