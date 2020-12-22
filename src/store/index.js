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
        user: []
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
        }
    },
    mutations: mutations,
    actions: actions
})