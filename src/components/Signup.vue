<template>
  <div class="signup">
    <Message v-if="showVerify">
      Check your email to verify your account then
      <router-link to="/login">login</router-link>
    </Message>
    <amplify-sign-up v-bind:signUpConfig="signUpConfig"></amplify-sign-up>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AmplifyEventBus } from "aws-amplify-vue";
import Message from "@/components/Message.vue";

@Component({
  components: {
    Message
  }
})
export default class Signup extends Vue {
  showVerify = false;
  created() {
    AmplifyEventBus.$on("authState", async (authState: String) => {
      if (authState !== "confirmSignUp") {
        return;
      }
      this.showVerify = true;
    });
  }
  data() {
    return {
      signUpConfig: {
        hideAllDefaults: true,
        signUpFields: [
          {
            label: "Email",
            key: "username",
            required: true,
            displayOrder: 1,
            type: "string",
            signUpWith: true
          },
          {
            label: "Password",
            key: "password",
            required: true,
            displayOrder: 2,
            type: "password"
          },
          {
            label: "First Name",
            key: "given_name",
            required: true,
            displayOrder: 3,
            type: "string"
          },
          {
            label: "Last Name",
            key: "family_name",
            required: true,
            displayOrder: 4,
            type: "string"
          }
        ]
      }
    };
  }
}
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
