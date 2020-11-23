<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CardGame msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardGame from "@/components/CardGame.vue";

export default {
  name: "Home",
  components: {
    CardGame
  }
};
</script>
