const state = {
    menus: []
};
const getters = {
    menus: state => state.menus
};
const mutations = {
    setmenus: (state, menu) => state.menus = menu,
    setAddmenu: (state, menu) => state.menus.unshift(menu),
};
const actions = {
    setmenusAsync: ({ commit }, menu) => commit("setmenus", menu),
    setAddmenuAsync: ({ commit }, menu) => commit("setAddmenu", menu),
};
export default {
    state, getters, mutations, actions
}