<template>
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.id">
      <div
        class="card__inner"
        :class="{
          card__active: card == firstActiveCard || card == secondActiveCard,
          card__hidden: !card.isActive,
        }"
        @click="checkCard(card)"
      >
        <div class="card__front">
          <img src="@/assets/logo.png" alt="Avatar" class="flip__image" />
        </div>
        <div class="card__back">
          <h1>{{ card.meta }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardGame",
  data() {
    return {
      firstActiveCard: null,
      secondActiveCard: null,
      cards: [
        {
          id: 1,
          meta: 1,
          isActive: true,
        },
        {
          id: 2,
          meta: 1,
          isActive: true,
        },
        {
          id: 3,
          meta: 2,
          isActive: true,
        },
        {
          id: 4,
          meta: 2,
          isActive: true,
        },
        {
          id: 5,
          meta: 3,
          isActive: true,
        },
        {
          id: 6,
          meta: 3,
          isActive: true,
        },
        {
          id: 7,
          meta: 4,
          isActive: true,
        },
        {
          id: 8,
          meta: 4,
          isActive: true,
        },
      ],
    };
  },
  methods: {
    checkCard(card) {
      console.log(card);
      if (!this.firstActiveCard) {
        this.firstActiveCard = card;

        setTimeout(() => {
          this.firstActiveCard = null;
          this.secondActiveCard = null;
          console.log(this.firstActiveCard);
        }, 2000);
      } else if (!this.secondActiveCard) {
        this.secondActiveCard = card;
        if (this.firstActiveCard.meta == this.secondActiveCard.meta) {
          setTimeout(() => {
            this.cards.map((item) => {
              if (this.firstActiveCard == item) {
                item.isActive = false;
              } else if (this.secondActiveCard == item) {
                item.isActive = false;
              }
            });
          }, 1000);
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
  width: 1200px;
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
  &__active {
    transform: rotateY(180deg);
  }
  &__hidden {
    display: none;
  }
}
</style>
