import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    totalPrice: 0,
    cartList: [],
    historyData: [],
    amount: 0,
    usermsg:{},
    addressList:[{name:'陈威宏',number:'13838381438',address:'物美超市二层'},{name:'郭响',number:'7474741',address:'物美超市二楼'}],
    orders: [] //用来存储订单
}
const mutations = {
    add: function(state, item) {
        //根据id查找
        var _item = state.cartList.find(c => c.id === item.id)
        if (_item) {
            _item.count++
        } else {
            //数量给一个1
            item.count = 1;
            //商品是勾选的
            item.isChecked = true;
            //放到购物车里面
            state.cartList.push(item);
        }
        // 在store中的相应的方法中及时更新总个数
        state.amount++;
        console.log(item.isChecked);
    },
    reduce: function(state, item) {
        //根据id查找索引
        var index = state.cartList.findIndex(c => c.id === item.id)
        if (state.cartList[index].count >= 1) {
            state.cartList[index].count--;
        }
        if (state.cartList[index].count == 0) {
            state.cartList.splice(index, 1);
        }
        // 在store中的相应的方法中及时更新总个数
        state.amount--;
    },
    setHistory(state, str) {
        state.historyData.push(str);
    },
    // 生成新订单
    newOrder() {
        //定义空对象，用来存放新订单
        var neworder = {};
        // 存放购物车中剩余的商品
        var oldlist = [];
        var time = new Date();
        var str = time.getFullYear() + "-";
        if (time.getMonth() + 1 < 10) {
            str += "0" + (time.getMonth() + 1) + "-";
        } else {
            str += (time.getMonth() + 1) + "-";
        }
        if (time.getDate() < 10) {
            str += "0" + time.getDate() + " ";
        } else {
            str += time.getDate() + " ";
        }
        if (time.getHours() < 10) {
            str += "0" + time.getHours() + ":";
        } else {
            str += time.getHours() + ":";
        }
        if (time.getMinutes() < 10) {
            str += "0" + time.getMinutes() + ":";
        } else {
            str += time.getMinutes() + ":";
        }
        if (time.getSeconds() < 10) {
            str += "0" + time.getSeconds();
        } else {
            str += time.getSeconds();
        }


        // var strTime = store.commit('myTime', time);
        // 存储订单中所有的商品
        var arr = [];
        state.cartList.forEach(c => {
            // 商品是勾选的，推到订单中
            if (c.isChecked) {
                arr.push(c);
                // 加到订单中，数量减少
                state.amount -= c.count;
            } else {
                oldlist.push(c);
            }
        });
        // 计算订单的价格
        var price = 0;
        var amount = 0;
        arr.forEach(c => {
            price += c.count * c.price;
            amount += c.count;
        })
        price = price.toFixed(2);
        //生成完整信息的订单
        neworder.order = arr;
        neworder.time = str;
        neworder.price = price;
        neworder.amount = amount;
        //推送到大的订单数组中,订单为空，不推送
        if (neworder.order.length != 0)
            state.orders.push(neworder);

        //暂时清空购物车,重新写入
        state.cartList = [];
        // for (var n in oldlist) {
        //     state.cartList = oldlist[n];
        // }

        state.cartList = oldlist;

        console.log(state.orders);
        return state.orders;
    },
    addAddress:function(state, [name,number,address]){
        console.log(arguments[1]);
        state.usermsg.name = arguments[1][0];
        state.usermsg.number = arguments[1][1];
        state.usermsg.address = arguments[1][2];
        state.addressList.push(state.usermsg);
        console.log(state.addressList);
        state.usermsg = {};
    }
}
const actions = {
        add: function({ commit }, item) {
            commit('add', item);
        },
        reduce: function({ commit }, item) {
            commit('reduce', item);
        },
        addAddress: function({ commit }, [name,number,address]){
            commit('addAddress', [name,number,address]);
        },
        newOrder: function({ commit }) {
            commit('newOrder');
        }
    }
    // 购物车数据 计算属性 
const getters = {
    getList: function() {
        return state.cartList;
    },
    getAmount: function() {
        // state.amount = 0;
        // for (let n in state.cartList) {
        //     state.amount += state.cartList[n].count;
        // }
        return state.amount;
    },
    getAddress: function(){
        return state.addresssList;
    },
    getOrder: function() {
        return state.orders;
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})