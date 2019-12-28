<template>
  <div>
    <label>Height:</label>
    <input type="number" />
    <label style="margin-left:3em;">Width:</label>
    <input type="number" />
    <br />
    <input type="checkbox" />
    <label>Maintain Aspect Ratio</label>
    <br />
    <input type="button" value="Optimize" v-on:click="setOptimizeDetails" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapMutations, mapActions } from 'vuex'

@Component
export default class Details extends Vue {
  setOptimizeDetails() {
    console.log("Hi");
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
  width: 70px;
}
input,
label {
  margin-bottom: 7px;
}
input[type="button"] {
  padding: 5px;
  width: 22.7em;
}
</style>
