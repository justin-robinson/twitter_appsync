<template>
  <div id="user-tweets">
    <p v-for="tweet in tweets" v-bind:key="tweet.id">{{ tweet.text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import API, { graphqlOperation } from "@aws-amplify/api";
import { searchTweets } from "@/graphql/queries";
import { get } from "lodash";

@Component
export default class UserTweets extends Vue {
  tweets: any = [];
  created() {
    this.getTweets();
  }
  async getTweets() {
    const response = await API.graphql(
      graphqlOperation(searchTweets, {
        limit: 10,
        filter: { owner: { eq: this.$store.getters.userId } }
      })
    );
    const tweets = get(response, "data.searchTweets.items");
    this.tweets.push(...tweets);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
