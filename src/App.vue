<template>
  <div id="app">
    <Header />
    <Uppy />
    <Details v-on:optimization-requested="onOptimizationRequested" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Uppy from "./components/Uppy.vue";
import Header from "./components/Header.vue";
import Details from "./components/Details.vue";
import { OptimizationRequestedEvent } from './events/OptimizationRequestedEvent'

@Component({
  components: {
    Uppy,
    Header,
    Details
  }
})
export default class App extends Vue {
  onOptimizationRequested(e: OptimizationRequestedEvent)
  {
    console.log(e)
  }
}
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
