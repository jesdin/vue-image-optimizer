<template>
  <div id="app">
    <Header />
    <Uppy />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Uppy from "./components/Uppy.vue";
import Header from "./components/Header.vue";

@Component({
  components: {
    Uppy,
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
