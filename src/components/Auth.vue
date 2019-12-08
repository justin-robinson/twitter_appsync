<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AmplifyEventBus } from "aws-amplify-vue";
import Amplify from "aws-amplify";

@Component
export default class Auth extends Vue {
  created() {
    AmplifyEventBus.$on("authState", this.authStateCallback);
    this.getAndSetLoggedInUser();
  }
  async getAndSetLoggedInUser() {
    try {
      this.$store.commit(
        "setUser",
        await Amplify.Auth.currentAuthenticatedUser()
      );
    } catch (e) {
      // user not logged in
    }
  }
  authStateCallback(authState: string) {
    switch (authState) {
      case "signedIn":
        this.getAndSetLoggedInUser();
        this.$router.push("/home").catch(() => {});
        break;
      case "signedOut":
        this.$store.commit("setUser", null);
        this.$router.push("/").catch(() => {});
        break;
      default:
        break;
    }
  }
  render() {
    return "";
  }
}
</script>
