<template>
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.id">
      <div
        class="card__inner"
        :class="{
          card__isOpen: card.isOpen,
          card__hidden: !card.isActive,
        }"
        @click="openCard(card)"
      >
        <div class="card__front">
          <img src="@/assets/brain.jpg" alt="Avatar" class="card__cover" />
        </div>
        <div class="card__back">
          <h1>{{ card.meta }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CardGame",
  data() {
    return {
      timer: null,
      // cards: [
      //   {
      //     id: 1,
      //     meta: 1,
      //     isActive: true,
      //   },
      //   {
      //     id: 2,
      //     meta: 1,
      //     isActive: true,
      //   },
      //   {
      //     id: 3,
      //     meta: 2,
      //     isActive: true,
      //   },
      //   {
      //     id: 4,
      //     meta: 2,
      //     isActive: true,
      //   },
      //   {
      //     id: 5,
      //     meta: 3,
      //     isActive: true,
      //   },
      //   {
      //     id: 6,
      //     meta: 3,
      //     isActive: true,
      //   },
      //   {
      //     id: 7,
      //     meta: 4,
      //     isActive: true,
      //   },
      //   {
      //     id: 8,
      //     meta: 4,
      //     isActive: true,
      //   },
      // ],
    };
  },
  computed: {
    ...mapGetters(["firstOpenCard", "secondOpenCard", "cards"]),
  },
  methods: {
    openCard(card) {
      if (!this.firstOpenCard) {
        this.$store.dispatch("openCard", card);
        this.$store.dispatch("setFirstOpenCard", card);
        this.timer = setTimeout(() => {
          console.log("from interval");
          if (this.firstOpenCard) {
            this.$store.dispatch("closeFirstCard");
          }
          if (this.secondOpenCard) {
            this.$store.dispatch("closeSecondCard");
          }
          this.$store.dispatch("unsetOpenCard");
        }, 5000);
      } else if (!this.secondOpenCard) {
        if (this.firstOpenCard.id != card.id) {
          this.$store.dispatch("openCard", card);
          this.$store.dispatch("setSecondOpenCard", card);
          if (this.firstOpenCard.meta == this.secondOpenCard.meta) {
            setTimeout(() => {
              clearTimeout(this.timer);
              this.$store.dispatch("deactivatedCard", this.firstOpenCard);
              this.$store.dispatch("deactivatedCard", this.secondOpenCard);
              this.$store.dispatch("unsetOpenCard");
            }, 500);
            console.log(this.timer);
            console.log(" oni ravni");
          } else {
            setTimeout(() => {
              clearTimeout(this.timer);
              this.$store.dispatch("closeFirstCard");
              this.$store.dispatch("closeSecondCard");
              this.$store.dispatch("unsetOpenCard");
            }, 500);
          }
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cards {
  outline: 1px solid green;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 600px;
  margin: 0 auto;
}
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.card {
  background-color: transparent;
  width: 100px;
  height: 100px;
  border: 3px solid grey;
  box-sizing: border-box;
  perspective: 1000px;
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }
  &__cover {
    width: 100%;
    margin-top: 30px;
  }
  &__front {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: #d4e1de;
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
  &__isOpen {
    transform: rotateY(180deg);
  }
  &__hidden {
    display: none;
  }
}
</style>
