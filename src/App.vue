<template>
  <div id="app">
    <Auth />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span v-if="$store.getters.isLoggedIn">
        <span> Hi, {{ $store.getters.firstName }}</span>
        <amplify-sign-out></amplify-sign-out>
      </span>
      <span v-else>
        | <router-link to="/signup">Signup</router-link> |
        <router-link to="/login">Login</router-link> |
      </span>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AmplifyEventBus } from "aws-amplify-vue";
import Auth from "@/components/Auth.vue";
import { CognitoUser } from "@aws-amplify/auth";

@Component({
  components: {
    Auth
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
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: dodgerblue;
    }
  }
}
</style>
