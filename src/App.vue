<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span v-if="!user">
        | <router-link to="/signup">Signup</router-link> |
        <router-link to="/login">Login</router-link> |
      </span>
      <span v-else>
        <span> Hi, {{ user.attributes.given_name }}</span>
        <amplify-sign-out></amplify-sign-out>
      </span>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from "aws-amplify";

@Component
export default class App extends Vue {
  data() {
    return {
      user: null
    };
  }
  async beforeCreate() {
    try {
      this.user = await Auth.currentAuthenticatedUser();
    } catch (e) {
      // user not logged in
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
