<template>
  <div class="index">
    <img width="200px" height="auto" alt="Vue logo" src="../assets/logo.png" />
    <Index />
  </div>
</template>

<script>
// @ is an alias to /src
import Index from "@/components/Index.vue";

export default {
  name: "index",
  components: {
    Index
  }
};
</script>
