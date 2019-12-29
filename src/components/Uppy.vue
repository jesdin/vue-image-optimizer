<template>
  <div class="uppy">
  <div id="uploader"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Uppy as UppyUploader } from "@uppy/core";
import Dashboard from '@uppy/dashboard'
import GoogleDrive from '@uppy/google-drive'
import Dropbox from '@uppy/dropbox'
import Instagram from '@uppy/instagram'
import Webcam from '@uppy/webcam'
import Tus from '@uppy/tus'

@Component
export default class Uppy extends Vue {

  private uppy?: UppyUploader
  
  mounted() {
    this.uppy = new UppyUploader({
      debug: true,
      autoProceed: true,
      restrictions: {
        maxFileSize: 1000000,
        maxNumberOfFiles: 10,
        minNumberOfFiles: 1,
        allowedFileTypes: ['image/*']
      }
    })
    .use(Dashboard, {
      trigger: '.UppyModalOpenerBtn',
      inline: true,
      target: '#uploader',
      replaceTargetContent: true,
      showProgressDetails: true,
      note: 'Images only, 1–10 files, up to 1 MB',
      height: 470,
      width: document.documentElement.clientWidth,
      metaFields: [
        { id: 'name', name: 'Name', placeholder: 'file name' },
        { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }
      ],
      browserBackButtonClose: true
    })
    .use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
    .use(Dropbox, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
    .use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
    .use(Webcam, { target: Dashboard })
    .use(Tus, { endpoint: 'https://master.tus.io/files/' })

    this.uppy.on('complete', result => {
      console.log('successful files:', result.successful)
      console.log('failed files:', result.failed)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~@uppy/core/dist/style.css';
  @import '~@uppy/dashboard/dist/style.css';
  #uploader {
    margin-left: 20px;
    margin-right: 20px;  
  }
</style>

