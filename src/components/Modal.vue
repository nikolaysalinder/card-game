<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <h2 class="modal__title">Поздравляю</h2>
          <p class="modal__desc">Ваш результат</p>
          <p class="modal__result">{{ resultTime }}</p>
          <label for="name">Введите Имя</label>
          <input id="name" type="text" v-model="name" required="true" />

          <button class="modal__button--close" @click="$emit('close')">
            Закрыть
          </button>
          <button @click="addNewWinner" class="modal__button">Отправить</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addNewWinner() {
      axios
        .post("http://382271-cd73790.tmweb.ru/new-user", {
          name: this.name,
          result: this.result,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "table" });
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    result() {
      return this.$store.getters.milliseconds;
    },
    resultTime() {
      console.log(this.$store.getters.milliseconds);
      let timer = new Date(this.$store.getters.milliseconds);
      let result =
        `0${timer.getUTCHours()}`.slice(-2) +
        ":" +
        `0${timer.getUTCMinutes()}`.slice(-2) +
        ":" +
        `0${timer.getUTCSeconds()}`.slice(-2) +
        ":" +
        `0${timer.getUTCMilliseconds()}`.slice(-3, -1);

      return result;
    },
  },
};
</script>

<style lang="scss">
.modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &__container {
    box-sizing: border-box;
    width: 300px;
    padding: 20px 40px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    position: relative;
  }
  &__button {
    margin-top: 15px;
    &--close {
      padding: 0px;
      display: block;
      width: 30px;
      height: 30px;
      font-size: 0;
      position: absolute;
      top: 10px;
      right: 10px;
      &:before {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: #2c3e50;
        position: absolute;
        transform: rotate(-45deg);
      }
      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        background-color: #2c3e50;
        transform: rotate(45deg);
      }
    }
  }
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>
