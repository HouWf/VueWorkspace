
export default {
    userInfo: {
        user_name: "",
        user_age: "",
        department: "",
        message:""
    },
    tags:["唱","跳","Rap","篮球"],
    latitude: "",
    longitude: "",
    address: ""
}

/**
 * 用法：计算属性 (opens new window)中返回某个状态
 * 方式1：
 *      computed:mapState({
 *          latitude(){
 *              return this.$store.state.latitude
 *          }
 *      })
 * 
 * 方式2：mapState辅助函数
 * import {mapState} from "vuex"
 *      1、基本用法
 *      computed:mapState({
 *          // 箭头函数   
 *          count: state => state.count,
 *          // 传字符串参数 'count' 等同于 `state => state.count`
 *          countAlias: 'count',
 *          // 为了能够使用 `this` 获取局部状态，必须使用常规函数
 *          countPlusLocalState (state) {
 *              return state.count + this.localCount
 *          }
 *      })
 *      2、展开运算符 推荐写法
 *      computed:{
 *          otherDt(){return this.other}
 *          ...mapState([
 *              'latitude',
 *              'longitude'
 *          ])
 *          ...mapState({
 *              user: 'userInfo'
 *          })
 *      }
 * */ 