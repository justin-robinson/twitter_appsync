<template>
  <div class="Home">
    <ComposeTweet />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ComposeTweet from "@/components/ComposeTweet.vue";

@Component({
  components: {
    ComposeTweet
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss"></style>
