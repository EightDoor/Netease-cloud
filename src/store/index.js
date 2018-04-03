import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import { state } from "./state"
import { mutations } from "./mutation"
import { actions } from "./Action"
import getters from "./getter"
export default new Vuex.Store({
    strict: true,
    state,
    mutations,
    actions,
    getters
})