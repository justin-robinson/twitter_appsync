<template>
  <div class="signup">
    <div class="verify-container" v-if="showVerify">
      <span class="verify-message">
        Check your email to verify your account
      </span>
    </div>
    <amplify-sign-up v-bind:signUpConfig="signUpConfig"></amplify-sign-up>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AmplifyEventBus } from "aws-amplify-vue";

@Component
export default class Signup extends Vue {
  @Prop() private showVerify!: Boolean;
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
        usernameAttributes: "email",
        signUpFields: [
          {
            label: "Email",
            key: "email",
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

.verify-container {
  display: flex;
  justify-content: center;
}

.verify-message {
  background: #444;
  color: #eee;
  width: 200px;
}
</style>
