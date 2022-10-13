export default {
    // 通过属性访问
    userName: state => {
        return state.userInfo.user_name
    },
    longAndLat: state=>{
        return {
            longitate: state.longitate,
            latitude: state.latitude
        }
    },
    //  通过方法访问 每次都会去进行调用，而不会缓存结果
    getTag:(state)=>(tagIndex)=>{
        return state.tags[tagIndex]
    }
}

/**
 * 计算属性 (opens new window)中返回某个状态
 * 用法1：
 *      computed:{
 *          userName(){
 *              return this.$store.getters.userName
 *          }, 
 *          longLat(){
 *              return this.$store.getters.longAndLat         
 *          }         
 *      }
 * 
 * 用法2：使用mapGetters
 * import {mapGetters} from "vuex"
 *      computed:{
 *          ...mapGetters([
 *              'userName',             
 *              'longAndLat'
 *          ])
 *      }
 * */ 