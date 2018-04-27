<template>
  <div class="admin-block">
    <v-data-table v-if="messages.length"
      :headers="headers"
      :items="messages"
      hide-actions
      class="elevation-1 theme--light">
      <template slot="items" slot-scope="props">
        <!-- <td class="text-xs-center">{{ props.item.time }}</td> -->
        <td class="text-xs-center">{{ props.item.time }}</td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.message }}</td>
        <td>
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
export default {
  data () {
    return {
      messages: [],
      headers: [
        // { text: 'Number', sortable: false, value: 'number' },
        { text: 'Receive Time', value: 'time', sortable: false },
        { text: 'Name', value: 'name', sortable: false },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Message', value: 'message', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
        { text: 'Reply', value: 'reply', sortable: false, align: 'center' }
      ]
    }
  },
  mounted () {
    this.getItem()
  },
  computed: {

  },
  methods: {
    getItem () {
      axios.get('/api/messages')
      .then(response => {
        this.messages = response.data
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
  padding: 60px 0px;
}
td {
  vertical-align: middle !important;
  max-width: 300px;
  word-wrap: break-word;
  padding: 5px 24px !important;
}
</style>
