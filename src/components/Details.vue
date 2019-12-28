<template>
  <form>
    <label>
      Height
      <input type="number" min='0' v-model="height" />
    </label>

    <label>
      Width
      <input type="number" min='0'  v-model="width" />
    </label>
    
    <label>
      <input type="checkbox" v-model="shouldMaintainAspectRatio" />
      Maintain Aspect Ratio
    </label>

    <label>
      Quality
      <input type="number" min='0' max="100" v-model="quality" />
    </label>

    <input type="button" value="Optimize" v-on:click="setOptimizeDetails" />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapMutations, mapActions } from 'vuex'

@Component
export default class Details extends Vue {

  width: number = 0
  height: number = 0
  quality: number = 100
  shouldMaintainAspectRatio: boolean = false

  public get Width() {
    return this.width
  }

  public get Height() {
    return this.height
  }

  public get Quality() {
    return this.quality
  }

  public get MaintainAspectRatio() {
    return this.shouldMaintainAspectRatio
  }

  setOptimizeDetails() {
    console.log(this);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
}
input[type="number"] {
  margin-left: 5px;
}

label {
  margin-bottom: 7px;
  display: block;
}
input[type="button"] {
  padding: 5px;
  width: 22.7em;
}
</style>
