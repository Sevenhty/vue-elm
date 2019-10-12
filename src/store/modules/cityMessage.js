const state = {
    cityMessage: {}
};
const getters = {
    cityMessage: state => state.cityMessage
};
const mutations = {
    setcityMessage: (state, cityMessage) => state.cityMessage = cityMessage
};
const actions = {
    setcityMessageAsync: ({ commit }, cityMessage) => commit("setcityMessage", cityMessage)
};
export default {
    state, getters, mutations, actions
}