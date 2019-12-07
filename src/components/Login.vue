<template>
  <div class="Login">
    <amplify-sign-in v-bind:signInConfig="signInConfig"></amplify-sign-in>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AmplifyEventBus } from "aws-amplify-vue";

@Component
export default class Login extends Vue {
  data() {
    return {
      signInConfig: {
        username: "username"
      }
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
