<template>
  <div class="container">
    <span class="message">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Signup extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}

.message {
  background: #444;
  color: #eee;
  width: 200px;
}
</style>
