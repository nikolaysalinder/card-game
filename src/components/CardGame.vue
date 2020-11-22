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
          <img width="90" height="90" :src="getImgUrl(card.meta)" alt="" />
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
      openCardTimer: null,
    };
  },
  computed: {
    ...mapGetters([
      "firstOpenCard",
      "secondOpenCard",
      "cards",
      "isGameStarted",
      "finishedCounter",
      "timer"
    ]),
  },
  methods: {
    openCard(card) {
     if(this.isGameStarted) {
       if (!this.firstOpenCard) {
        this.$store.dispatch("openCard", card);
        this.$store.dispatch("setFirstOpenCard", card);
        this.openCardTimer = setTimeout(() => {
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
            
            this.$store.dispatch('addCardToCounter', 1)
            if(this.finishedCounter == 18) {
              clearInterval(this.timer);
              this.$store.dispatch('finishedGame');
            }
            setTimeout(() => {
              clearTimeout(this.openCardTimer);
              this.$store.dispatch("deactivateCard", this.firstOpenCard);
              this.$store.dispatch("deactivateCard", this.secondOpenCard);
              this.$store.dispatch("unsetOpenCard");
            }, 500);
          } else {
            setTimeout(() => {
              clearTimeout(this.openCardTimer);
              this.$store.dispatch("closeFirstCard");
              this.$store.dispatch("closeSecondCard");
              this.$store.dispatch("unsetOpenCard");
            }, 500);
          }
        }
      }
     }
    },
    getImgUrl(icon) {
      return require("../assets/" + icon + ".svg");
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
    &:before{
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
    }
  }
  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: #c4c4c4;
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
