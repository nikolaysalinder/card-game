import { createStore } from "vuex";

const store = createStore({
  state: {
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
      {
        id: 9,
        meta: 5,
        isActive: true,
      },
      {
        id: 10,
        meta: 5,
        isActive: true,
      },
      {
        id: 11,
        meta: 6,
        isActive: true,
      },
      {
        id: 12,
        meta: 6,
        isActive: true,
      },
      {
        id: 13,
        meta: 7,
        isActive: true,
      },
      {
        id: 14,
        meta: 7,
        isActive: true,
      },
      {
        id: 15,
        meta: 8,
        isActive: true,
      },
      {
        id: 16,
        meta: 8,
        isActive: true,
      },
      {
        id: 17,
        meta: 9,
        isActive: true,
      },
      {
        id: 18,
        meta: 9,
        isActive: true,
      },
      {
        id: 19,
        meta: 10,
        isActive: true,
      },
      {
        id: 20,
        meta: 10,
        isActive: true,
      },
      {
        id: 21,
        meta: 11,
        isActive: true,
      },
      {
        id: 22,
        meta: 11,
        isActive: true,
      },
      {
        id: 23,
        meta: 12,
        isActive: true,
      },
      {
        id: 24,
        meta: 12,
        isActive: true,
      },
      {
        id: 25,
        meta: 13,
        isActive: true,
      },
      {
        id: 26,
        meta: 13,
        isActive: true,
      },
      {
        id: 27,
        meta: 14,
        isActive: true,
      },
      {
        id: 28,
        meta: 14,
        isActive: true,
      },
      {
        id: 29,
        meta: 15,
        isActive: true,
      },
      {
        id: 30,
        meta: 15,
        isActive: true,
      },
      {
        id: 31,
        meta: 16,
        isActive: true,
      },
      {
        id: 32,
        meta: 16,
        isActive: true,
      },
      {
        id: 33,
        meta: 17,
        isActive: true,
      },
      {
        id: 34,
        meta: 17,
        isActive: true,
      },
      {
        id: 35,
        meta: 18,
        isActive: true,
      },
      {
        id: 36,
        meta: 18,
        isActive: true,
      },
    ],
  },
  getters: {
    cards(state) {
      return state.cards.sort(() => Math.random() - 0.5);
    },
  },
});

export default store;
