<template>
  <div class="cards">
    <div class="card">
      <div class="card__inner" @click="flipCard(card)">
        <div class="card__front">
          <img src="../assets/logo.png" alt="Avatar" class="flip__image" />
        </div>
        <div class="card__back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardGame",
  props: {
    msg: String,
  },
  data() {},
  methods: {
    flipCard() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cards {
  outline: 1px solid green;
}
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.card {
  background-color: transparent;
  width: 200px;
  height: 200px;
  border: 3px solid grey;
  perspective: 1000px;
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }
  &__front {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: #c4c4c4;
    color: #000;
  }
  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: #343434;
    color: #fff;
    transform: rotateY(180deg);
  }
  &:hover .card__inner {
    transform: rotateY(180deg);
  }
}
</style>
