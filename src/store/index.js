import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";


Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        news: [],
        jobs: [],
        ask: [],
        user: [],
        items: []
    },
    getters: {
        fetchedNews(state) {
            return state.news
        },
        fetchedJobs(state) {
            return state.jobs
        },
        fetchedAsk(state) {
            return state.ask
        },
        fetchedUser(state) {
            return state.user
        },
        fetchedItem(state) {
            return state.items
        }
    },
    mutations: mutations,
    actions: actions
})