<template>
  <div class="home">
    <StopWatch />
    <CardGame />
  </div>
</template>
о
<script>
// @ is an alias to /src
import CardGame from "@/components/CardGame.vue";
import StopWatch from "@/components/StopWatch.vue";

export default {
  name: "Home",
  components: {
    CardGame,
    StopWatch,
  },
};
</script>
