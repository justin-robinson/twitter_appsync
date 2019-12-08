<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Amplify from "aws-amplify";

@Component
export default class Auth extends Vue {
  async beforeCreate() {
    try {
      this.$store.commit(
        "setUser",
        await Amplify.Auth.currentAuthenticatedUser()
      );
    } catch (e) {
      // user not logged in
    }
  }
  render() {
    return "";
  }
}
</script>
