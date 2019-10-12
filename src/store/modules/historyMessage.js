const state = {
    historyMessages: []
};
const getters = {
    historyMessages: state => state.historyMessages
};
const mutations = {
    sethistoryMessages: (state, historyMessages) => state.historyMessages = historyMessages,
    setAddhistory: (state, historyMessage) => state.historyMessages.unshift(historyMessage),
    setDelhistory: (state, historyMessages) => state.historyMessages.splice(0, historyMessages.length),
};
const actions = {
    historyMessagesAsync: ({ commit }, historyMessages) => commit("sethistoryMessages", historyMessages),
    setAddhistoryAsync: ({ commit }, historyMessage) => commit("setAddhistory", historyMessage),
    setDekhistoryAsync: ({ commit }, historyMessages) => commit("setDelhistory", historyMessages)
};
export default {
    state, getters, mutations, actions
}