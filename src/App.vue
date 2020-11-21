<template>
  <h1>Игра память</h1>
  <StopWatch />
  <CardGame />
</template>

<script>
import CardGame from "./components/CardGame.vue";
import StopWatch from "./components/StopWatch.vue";

export default {
  name: "App",
  components: {
    CardGame,
    StopWatch,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
