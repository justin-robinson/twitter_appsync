<template>
  <div class="Home">
    <ComposeTweet />
    <UserTweets />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ComposeTweet from "@/components/ComposeTweet.vue";
import UserTweets from "@/components/UserTweets.vue";

@Component({
  components: {
    ComposeTweet,
    UserTweets
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss"></style>
