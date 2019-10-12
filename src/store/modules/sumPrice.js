const state = {
    sumPrice: 0,
};
const getters = {
    sumPrice: state => state.sumPrice,
};
const mutations = {
    setAddsumPrice: (state, Price) => {
        state.sumPrice = parseInt(Price) + state.sumPrice;
    },
    setCutsumPrice: (state, Price) => {
        state.sumPrice = state.sumPrice - parseInt(Price);
    },

};
const actions = {
    setAddsumPriceAsync: ({ commit }, Price) => commit("setAddsumPrice", Price),
    setCutsumPriceAsync: ({ commit }, Price) => commit("setCutsumPrice", Price),
};

export default {
    state, getters, mutations, actions
}