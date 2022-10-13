export default {
    // 模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
    // 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
    // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：
   
    state: () => ({
        count: 0
    }),
    mutations: {
        increment(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.count++
        }
    },
    actions: {
        incrementIfOddOnRootSum({ state, commit, rootState }) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
        }
    },
    getters: {
        sumWithRootCount(state, getters, rootState) {
            return state.count + rootState.count
        }
    }
}