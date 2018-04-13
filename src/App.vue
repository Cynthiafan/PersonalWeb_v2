<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,400,500,700,900|Raleway:300,600');

body {
  font-family: 'Roboto', 'Raleway', 'Meiryo', "微軟正黑體", "Microsoft JhengHei";
}
* {
  box-sizing: border-box;
}
</style>
