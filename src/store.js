import { createStore } from "vuex";

const store = createStore({
  state: {
    firstOpenCard: null,
    secondOpenCard: null,
    finishedCounter: 0,
    isGameStarted: false,
    timer: null,
    milliseconds: 0,
    gameOver: false,
    cards: [
      {
        id: 1,
        meta: 1,
        isActive: true,
        isOpen: false,
      },
      {
        id: 2,
        meta: 1,
        isActive: true,
        isOpen: false,
      },
      {
        id: 3,
        meta: 2,
        isActive: true,
        isOpen: false,
      },
      {
        id: 4,
        meta: 2,
        isActive: true,
        isOpen: false,
      },
      {
        id: 5,
        meta: 3,
        isActive: true,
        isOpen: false,
      },
      {
        id: 6,
        meta: 3,
        isActive: true,
        isOpen: false,
      },
      {
        id: 7,
        meta: 4,
        isActive: true,
        isOpen: false,
      },
      {
        id: 8,
        meta: 4,
        isActive: true,
        isOpen: false,
      },
      {
        id: 9,
        meta: 5,
        isActive: true,
        isOpen: false,
      },
      {
        id: 10,
        meta: 5,
        isActive: true,
        isOpen: false,
      },
      {
        id: 11,
        meta: 6,
        isActive: true,
        isOpen: false,
      },
      {
        id: 12,
        meta: 6,
        isActive: true,
        isOpen: false,
      },
      {
        id: 13,
        meta: 7,
        isActive: true,
        isOpen: false,
      },
      {
        id: 14,
        meta: 7,
        isActive: true,
        isOpen: false,
      },
      {
        id: 15,
        meta: 8,
        isActive: true,
        isOpen: false,
      },
      {
        id: 16,
        meta: 8,
        isActive: true,
        isOpen: false,
      },
      {
        id: 17,
        meta: 9,
        isActive: true,
        isOpen: false,
      },
      {
        id: 18,
        meta: 9,
        isActive: true,
        isOpen: false,
      },
      {
        id: 19,
        meta: 10,
        isActive: true,
        isOpen: false,
      },
      {
        id: 20,
        meta: 10,
        isActive: true,
        isOpen: false,
      },
      {
        id: 21,
        meta: 11,
        isActive: true,
        isOpen: false,
      },
      {
        id: 22,
        meta: 11,
        isActive: true,
        isOpen: false,
      },
      {
        id: 23,
        meta: 12,
        isActive: true,
        isOpen: false,
      },
      {
        id: 24,
        meta: 12,
        isActive: true,
        isOpen: false,
      },
      {
        id: 25,
        meta: 13,
        isActive: true,
        isOpen: false,
      },
      {
        id: 26,
        meta: 13,
        isActive: true,
        isOpen: false,
      },
      {
        id: 27,
        meta: 14,
        isActive: true,
        isOpen: false,
      },
      {
        id: 28,
        meta: 14,
        isActive: true,
        isOpen: false,
      },
      {
        id: 29,
        meta: 15,
        isActive: true,
        isOpen: false,
      },
      {
        id: 30,
        meta: 15,
        isActive: true,
        isOpen: false,
      },
      {
        id: 31,
        meta: 16,
        isActive: true,
        isOpen: false,
      },
      {
        id: 32,
        meta: 16,
        isActive: true,
        isOpen: false,
      },
      {
        id: 33,
        meta: 17,
        isActive: true,
        isOpen: false,
      },
      {
        id: 34,
        meta: 17,
        isActive: true,
        isOpen: false,
      },
      {
        id: 35,
        meta: 18,
        isActive: true,
        isOpen: false,
      },
      {
        id: 36,
        meta: 18,
        isActive: true,
        isOpen: false,
      },
    ],
  },
  mutations: {
    OPEN_CARD: (state, card) => {
      const matchedCard = state.cards.find(
        (stateCard) => stateCard.id == card.id
      );
      matchedCard.isOpen = true;
    },
    SET_FIRST_OPEN_CARD: (state, card) => {
      state.firstOpenCard = card;
    },
    SET_SECOND_OPEN_CARD: (state, card) => {
      state.secondOpenCard = card;
    },
    UNSET_OPEN_CARD: (state) => {
      state.firstOpenCard = null;
      state.secondOpenCard = null;
    },
    CLOSE_FIRST_CARD: (state) => {
      const firstOpenCard = state.firstOpenCard;
      const firstHideCard = state.cards.find(
        (card) => card.id == firstOpenCard.id
      );
      firstHideCard.isOpen = false;
    },
    CLOSE_SECOND_CARD: (state) => {
      const secondOpenCard = state.secondOpenCard;
      const secondHideCard = state.cards.find(
        (card) => card.id == secondOpenCard.id
      );
      secondHideCard.isOpen = false;
    },
    DEACTIVATE_CARD: (state, card) => {
      const deactivatedCard = state.cards.find(
        (deacCard) => deacCard.id == card.id
      );
      deactivatedCard.isActive = false;
    },
    START_GAME: (state) => {
      state.isGameStarted = true;
    },
    SET_TIMER: (state, timer) => {
      state.timer = timer;
    },
    ADD_SECONDS: (state, seconds) => {
      state.milliseconds += seconds;
    },
    ADD_CARD_TO_COUNTER: (state, card) => {
      state.finishedCounter += card;
    },
    FINISHED_GAME: (state) => {
      state.gameOver = true;
    }
  },
  actions: {
    openCard({ commit }, card) {
      commit("OPEN_CARD", card);
    },
    setFirstOpenCard({ commit }, card) {
      commit("SET_FIRST_OPEN_CARD", card);
    },
    setSecondOpenCard({ commit }, card) {
      commit("SET_SECOND_OPEN_CARD", card);
    },
    unsetOpenCard({ commit }) {
      commit("UNSET_OPEN_CARD");
    },
    closeFirstCard({ commit }) {
      commit("CLOSE_FIRST_CARD");
    },
    closeSecondCard({ commit }) {
      commit("CLOSE_SECOND_CARD");
    },
    deactivateCard({ commit }, card) {
      commit("DEACTIVATE_CARD", card);
    },
    startGame({commit}) {
      commit("START_GAME");
    },
    setTimer({commit}, timer) {
      commit("SET_TIMER", timer);
    },
    addSeconds({commit}, seconds) {
      commit("ADD_SECONDS", seconds);
    },
    addCardToCounter({commit}, card){
      commit("ADD_CARD_TO_COUNTER", card);
    },
    finishedGame({commit}) {
      commit("FINISHED_GAME");
    }
  },
  getters: {
    cards(state) {
      return state.cards //.sort(() => Math.random() - 0.5);
    },
    firstOpenCard(state) {
      return state.firstOpenCard;
    },
    secondOpenCard(state) {
      return state.secondOpenCard;
    },
    isGameStarted(state) {
      return state.isGameStarted;
    },
    milliseconds(state) {
      return state.milliseconds;
    },
    finishedCounter(state) {
      return state.finishedCounter;
    },
    timer(state) {
      return state.timer;
    },
    gameOver(state) {
      return state.gameOver;
    }
  },
});

export default store;
