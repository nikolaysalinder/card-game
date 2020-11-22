<template>
  <section class="watch">
    <div class="watch__wrapper">
      <h2 id="watch">00:00:00:00</h2>
    </div>
    <button @click="startGame" class="watch__btn" id="start">Start</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    milliseconds() {
      return this.$store.getters.milliseconds;
    }
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame");
      const watch = document.getElementById("watch");
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.$store.dispatch('addSeconds', 10);
        let dateTimer = new Date(this.milliseconds);
        watch.innerHTML =
          ("0" + dateTimer.getUTCHours()).slice(-2) +
          ":" +
          ("0" + dateTimer.getUTCMinutes()).slice(-2) +
          ":" +
          ("0" + dateTimer.getUTCSeconds()).slice(-2) +
          ":" +
          ("0" + dateTimer.getUTCMilliseconds()).slice(-3, -1);
      }, 10);
      this.$store.dispatch("setTimer", this.timer);
    },
  },
};
</script>

<style lang="scss">
.watch {
  width: 600px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  &__btn {
    border: 2px solid #2c3e4f;
    padding: 8px 30px;
    font-weight: 600;
    border-radius: 3px;
    font-size: 23px;
  }
}
</style>
