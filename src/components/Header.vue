<template>
  <nav class="header">
    <img src="../assets/IO.png" width="21" height="21" id="logo" /> &nbsp;
    <h1> Image Optimizer</h1>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
h1 {
  display: inline-block;
  font-family: 'Roboto Slab', serif;
}
nav{
  text-align: left;
}
img {
  margin-left: 30px;
}
</style>
