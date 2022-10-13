import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import moduleA from "./module/moduleA";
import moduleB from "./module/moduleB";

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        // this.$store.state.a // -> moduleA 的状态
        a:moduleA,
        b:moduleB,
    }
});
