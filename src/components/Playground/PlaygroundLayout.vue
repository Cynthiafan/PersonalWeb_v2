<template>
  <div id="app">
    <v-app id="inspire" dark>
      <navigation/>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>My Playground</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>

            <v-flex shrink>
              <v-tooltip right>
                <v-btn
                  icon
                  large
                  :href="source"
                  target="_blank"
                  slot="activator">
                  <v-icon large>code</v-icon>
                </v-btn>
                <span>Source</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer app fixed>
        <span>&copy; 2018</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Navigation from './PlaygroundNav';

export default {
 data () {
   return {
     drawer: true,
     admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      items: [
         {
           text: 'Dashboard',
           disabled: false
         },
         {
           text: 'Link 1',
           disabled: false
         },
         {
           text: 'Link 2',
           disabled: true
         }
       ]
   }
 },
 components: {
   Navigation,
 },
 props: {
   source: String
 }
}
</script>

<style lang="scss" scoped>

</style>
