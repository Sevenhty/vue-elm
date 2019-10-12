const state = {
    searchShops: []
};
const getters = {
    searchShops: state => state.searchShops
};
const mutations = {
    setsearchShops: (state, searchShops) => state.searchShops = searchShops,
    setAddsearchShops: (state, searchShop) => state.searchShops.unshift(searchShop),
    setDelSingleShop: (state, index) => state.searchShops.splice(index, 1),
    setDelAllShops: (state, setsearchShops) => state.searchShops.splice(0, setsearchShops.length),
};
const actions = {
    searchShopsAsync: ({ commit }, searchShops) => commit("setsearchShops", searchShops),
    setAddsearchShopsAsync: ({ commit }, searchShop) => commit("setAddsearchShops", searchShop),
    setDelSingleShopAsync: ({ commit }, index) => commit("setDelSingleShop", index),
    setDelAllShopsAsync: ({ commit }, setsearchShops) => commit("setDelAllShops", setsearchShops),
};
export default {
    state, getters, mutations, actions
}