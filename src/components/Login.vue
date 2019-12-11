<template>
  <div class="Login">
    <Message v-if="showConfirmSignup">
      You need to verify your account. Check your email
    </Message>
    <amplify-sign-in></amplify-sign-in>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AmplifyEventBus } from "aws-amplify-vue";
import { bus } from "@/bus";
import Message from "@/components/Message.vue";

@Component({
  components: {
    Message
  }
})
export default class Login extends Vue {
  showConfirmSignup = false;
  created() {
    bus.$on("authState", (authState: string) => {
      switch (authState) {
        case "confirmSignUp":
          this.showConfirmSignup = true;
          break;
        case "signUp":
          this.$router.push("/signup").catch(() => {});
          break;
        default:
          break;
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
