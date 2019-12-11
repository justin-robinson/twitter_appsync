<template>
  <div class="compose-tweet">
    <textarea v-model.trim="tweet" placeholder="What's up?"></textarea>
    <button type="button" v-on:click="sendTweet">Tweet</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createTweet } from "@/graphql/mutations";

@Component
export default class ComposeTweet extends Vue {
  tweet = "";
  async sendTweet() {
    const tweet = {
      text: this.tweet,
      owner: this.$store.getters.userId
    };
    await API.graphql(graphqlOperation(createTweet, { input: tweet }));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
