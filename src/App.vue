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
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900|Raleway:300,600');

body {
  padding: 0;
  margin: 0;
  font-family: 'Raleway','Roboto', 'Meiryo', "微軟正黑體", "Microsoft JhengHei";
  font-size: 1em;
}
* {
  box-sizing: border-box;
}
p {
  margin: 0;
  cursor: default;
}
</style>
