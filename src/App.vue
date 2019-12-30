<template>
  <div id="app">
    <Header />
    <Details v-on:optimization-requested="onOptimizationRequested" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Details from "./components/Details.vue";
import { OptimizationRequestedEvent } from './events/OptimizationRequestedEvent'
import { Optimizer } from './services/Optimizer'

@Component({
  components: {
    Header,
    Details
  }
})
export default class App extends Vue {
  onOptimizationRequested(e: OptimizationRequestedEvent)
  {
    var files = e.files
    files.forEach(function(file) {
      Optimizer.compressFile(file.data, e.quality/100, e.width, e.height, e.shouldMaintainAspectRatio)
        .then(blob => {
          file.data = blob
          console.log(blob)
        })
        .catch(err => {
          console.error(err)
        })
    })
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
