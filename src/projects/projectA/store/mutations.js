// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

import {
    RECORD_ADDRESS,
    CHANGE_USERNAME,
    GET_USERINFO,
    RESET_NAME
} from './mutations-types'

export default {

    // mutations必须是同步函数
    // 因为当 mutation 触发的时候，回调函数还没有被调用，devtools 不知道什么时候回调函数
    // 实际上被调用——实质上任何在回调函数中进行的状态的改变都是不可追踪的
    changeUserName(state, newUserInfo) {
        state.userInfo.user_name = newUserInfo.username
    },
    // 使用常量代替
    [RECORD_ADDRESS](state, {
        latitude,
        longitude
    }) {
        state.longitude = longitude,
            state.latitude = latitude
    },
    [CHANGE_USERNAME](state, userInfo) {
        state.userInfo = userInfo
    },
    [GET_USERINFO](state, info) {
        if (!info.message) {
            state.userInfo = { ...info };
        } else {
            state.userInfo = null;
        }
        return state.userInfo
    },
    [RESET_NAME](state,username) {
		state.userInfo = Object.assign({}, state.userInfo,{username})
	},

}

/**
 * 
 * 用法1：
 *      任意位置调用
 *      this.$store.commit('changeUserName', {username: "韩梅梅"})
 * 用法2：
 *      import {mapMutations} from "vuex"
 *      created(){
 *          this.changeUserName({username:"韩梅梅"})
 *          this.ADD_ADDRESS({longitude:32.000, latitude:118.000})
 *      },
 *      methods:{
 *          ...mapMutations([
 *              'changeUserName',
 *              'RECORD_ADDRESS'
 *          ])
 *      }
 *  
 * */ 