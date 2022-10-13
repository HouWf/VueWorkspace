/**
 * 类似mutations，不同点：
 * 1、Action 提交的是 mutation，而不是直接变更状态。
 * 2、Action 可以包含任意异步操作。
 * */ 
import {GET_USERINFO, RESET_NAME} from './mutations-types'
export default {
    changeUname(context, name){
        context.commit('changeUserName', name)
    },

    resetUserName(context, name){
        context.commit('RESET_NAME', name)
    },

    async getUserInfo({commit,state}, userinfo={}) {
        console.log(userinfo);
		let res = await getUser();
		commit(GET_USERINFO, res)
	},

    // 异步组合Action。 使用方式actionA.then(res=>{})
    // actionA({commit},any){
    //     return new Promise((resolve, reject)=>{
    //         commit(GET_USERINFO, res)
    //         resolve()
    //     })
    // }
}

/**
 * 用法1：
 *      任意位置调用
 *     this.$store.dispatch('increment', "韩梅梅")
 * 
 * 用法2：
 *      import {mapActions} from "vuex"
 *      created(){
 *          this.changeUname("韩梅梅")
 *          this.getUserInfo()
 *          console.log(this.$store.state.userInfo)
 *      },
 *      methods:{
 *          ...mapActions([
 *              'changeUname',
 *              "getUserinfo"
 *          ])
 *      }
 * */ 