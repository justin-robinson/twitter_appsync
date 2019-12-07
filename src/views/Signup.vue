<template>
  <div class="home">
    <img width="200px" height="auto" alt="Vue logo" src="../assets/logo.png" />
    <Signup />
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from "@/components/Signup.vue";

export default {
  name: "signup",
  components: {
    Signup
  }
};
</script>
