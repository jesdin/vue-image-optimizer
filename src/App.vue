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
import { OptimizationRequestedEvent } from "./events/OptimizationRequestedEvent"
import { Optimizer } from "./services/Optimizer"

@Component({
  components: {
    Header,
    Details
  }
})

export default class App extends Vue {
  alertDisplay(text:any) {
    // $swal function calls SweetAlert into the application with the specified configuration.
    this.$swal(text);
  }

  onOptimizationRequested(e: OptimizationRequestedEvent)
  {
    var files = e.files
    files.forEach(function(file) {
      Optimizer.compressFile(
        file.data,
        e.quality/100,
        e.width, e.height,
        e.shouldMaintainAspectRatio
      )
      .then(blob => {
        file.data = blob;
        // console.log(blob);
        downloadBlobAsFile(blob);
      })
      .catch(err => {
        // console.error(err);
        alertMessage(err);
      });
    });

    const alertMessage = this.alertDisplay;

    const downloadBlobAsFile = function(data:Blob){
				const contentType = 'application/octet-stream';

        var filename = 'compressed.png'

        var blob = new Blob([data], {type: contentType}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  [contentType, a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
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
