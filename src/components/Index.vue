<template>
  <div class="index">
    <h3>
      Welcome to twitter_appsync.
      <router-link to="/signup">Signup</router-link> or
      <router-link to="/login">Login</router-link>
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Index extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

a {
  font-weight: bold;
  color: dodgerblue;
}
</style>
