<template>
  <section class="contact-block">
    <div class="content">
      <h3 class="contact-title">{{$t("Contact.title", $store.state.language)}}</h3>
      <input class="input-area" type="text" name="name" value="" required :placeholder="$t('Contact.placeholder.name', $store.state.language)" v-model="name"/>
      <input class="input-area" type="email" name="email" value="" required :placeholder="$t('Contact.placeholder.email', $store.state.language)" v-model.trim="email">
      <textarea class="input-area" name="message" rows="10" cols="80" required :placeholder="$t('Contact.placeholder.message', $store.state.language)" v-model="message"></textarea>
      <button type="submit" class="my-btn" @click="submit">{{$t("Contact.send", $store.state.language)}}</button>
      <transition name="success">
        <div class="success-alert" v-if="sendSuccess">已成功寄出，感謝您的來信！</div>
      </transition>
      <transition name="fail">
        <div class="fail-alert" v-if="sendFail">尚有欄位為空或有誤，還請再次確認！</div>
      </transition>
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
      message: '',
      sendSuccess: false,
      sendFail: false
    }
  },
  methods: {
    submit () {
      if (!this.name | !this.email | !this.message) {
        this.sendFail = true
        setTimeout(() => { this.sendFail = false }, 2500);
        return null
      }
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
        this.name = ''
        this.email = ''
        this.message = ''
        this.sendSuccess = true
        setTimeout(() => { this.sendSuccess = false }, 2500);
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
}
.contact-title {
  font-family: 'Roboto';
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
  position: relative;
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
@keyframes open-alert {
  from {transform: translateY(20px); opacity: 0;}
  to {transform: translateY(0px); opacity: 1}
}
@keyframes close-alert {
  to {transform: translateY(20px); opacity: 0;}
  from {transform: translateY(0px); opacity: 1}
}

.success-alert, .fail-alert {
  color: $maize-yellow;
  position: absolute;
  display: flex;
  align-items: center;
  background: $dark-grey;
  border-radius: 5px;
  padding: 5px;
}
.success-alert::before {
  content: "\f058";
  font-family: "FontAwesome";
  color: $maize-yellow;
  font-size: 19px;
  padding: 0px 5px;
}
.fail-alert::before {
  content: "\f057";
  font-family: "FontAwesome";
  color: $maize-yellow;
  font-size: 19px;
  padding: 0px 5px;
}
.success-enter-active, .fail-enter-active {
  animation: open-alert .4s;
}
.success-leave-active, .fail-leave-active {
  animation: close-alert .4s;
}
</style>
