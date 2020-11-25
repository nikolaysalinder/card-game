<template>
  <div class="table__page">
    <h1 class="table__title">Таблица результатов</h1>
    <div class="table">
      <div class="table__row">
        <div class="table__head">Имя</div>
        <div class="table__head">Результат в миллисекундах</div>
      </div>
      <div
        class="table__row"
        v-for="(winner, index) of winners"
        :key="winner._id"
      >
        <div class="table__cell">{{ `${index + 1}  ${winner.name}` }}</div>
        <div class="table__cell">{{ winner.result }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      winners: [],
    };
  },
  created() {
    axios
      .get("http://382271-cd73790.tmweb.ru/users")
      .then((res) => {
        this.winners = res.data.sort(function compare(a, b) {
          return a.result - b.result;
        });
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss">
.table {
  display: block;
  width: 320px;
  margin: 0 auto;
  &__head {
    width: 50%;
    text-align: center;
  }
  &__row {
    display: flex;
    border-bottom: 2px solid #c4c4c4;
  }
  &__cell {
    padding: 10px;
    width: 50%;
    text-align: left;
  }
}
</style>
