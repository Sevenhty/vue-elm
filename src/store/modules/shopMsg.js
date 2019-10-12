const state = {
    shopMsg: {}
};
const getters = {
    shopMsg: state => state.shopMsg
};
const mutations = {
    setshopMsg: (state, shopMsg) => state.shopMsg = shopMsg
};
const actions = {
    setshopMsgAsync: ({ commit }, shopMsg) => commit("setshopMsg", shopMsg)
};
export default {
    state, getters, mutations, actions
}