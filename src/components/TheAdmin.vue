<template>
  <div class="admin-block">
    <v-btn color="pink" class="clean-btn" @click="deleteAll()">Delete All</v-btn>
    <v-data-table
      :headers="headers"
      :items="messages"
      hide-actions
      class="elevation-1 theme--light admin-table">
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.num }}</td>
        <td class="text-xs-left">{{ props.item.time }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.message }}</td>
        <td class="text-xs-center">
          <v-btn icon class="mx-0" @click="mailTo(props.item.email)">
              <v-icon color="teal">mail</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
        <td class="text-xs-center">
          <v-btn icon class="mx-0" @click="updateItem(props.item)">
            <v-icon color="red">
              {{ props.item.status ? 'check_box' : 'check_box_outline_blank' }}
            </v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'
import Login from './Login'
export default {
  data () {
    return {
      messages: [],
      headers: [
        { text: 'Number', sortable: false, value: 'number', align: 'center' },
        { text: 'Receive Time', value: 'time', sortable: false },
        { text: 'Name', value: 'name', sortable: false },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Message', value: 'message', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
        { text: 'Reply', value: 'reply', sortable: false, align: 'center' }
      ]
    }
  },
  components: {
    Login
  },
  mounted () {
    this.getItem()
  },
  methods: {
    getItem () {
      axios.get('/api/messages')
      .then(response => {
        let result = response.data
        for (let i in result) {
          result[i].num = `${parseInt(i)+1}.`
        }
        this.messages = result
      })
      .catch(error => {
        console.error(error)
      });
    },
    deleteItem (item) {
      // let index = this.messages.findIndex(obj => obj['_id'] === item._id)
      axios.delete('/api/messages', {params: {_id: item._id}})
      .then(response => {
        this.getItem()
      })
      .catch(error => {
        console.error(error)
      })
    },
    updateItem (item) {
      axios.put('/api/messages', item)
      .then(response => {
        this.getItem()
      })
      .catch(error => {
        console.error(error)
      })
    },
    deleteAll () {
      axios.delete('/api/messages/all')
      .then(response => {
        this.getItem()
      })
      .catch(error => {
        console.error(error)
      })
    },
    mailTo (email) {
      window.location.href = `mailto:${email}`;
    }
  }
}
</script>

<style lang="scss" scoped>

.admin-block {
  color: $dark-grey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 0px;
  margin: 0px auto;
  width: 80%;
}
.admin-table {
  width: 100%;
  // align-self: center;
}
td {
  vertical-align: middle !important;
  max-width: 300px;
  word-wrap: break-word;
  padding: 5px 24px !important;
}
.clean-btn {
  color: white;
  align-self: flex-end;
}
</style>
