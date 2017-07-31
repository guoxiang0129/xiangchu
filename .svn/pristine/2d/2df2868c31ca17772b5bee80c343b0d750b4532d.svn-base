<template>
    <div class="shopcitys-page">
        <div class="header">
            <div class="header-inner">
                <div class="left">
                    <router-link to="/mine">
                        <i class="back1"></i>
                    </router-link>
                </div>
                <div class="mid">
                    <div class="center">我的订单</div>
                </div>
            </div>
        </div>
        <div class="main-body">
            <div class="nav-header nav-fixed">
                <div class="nar-header-wrap">
                    <ul class="nav-wrap">
                        <li v-for="(item,index) in redbaglists" :key="item" :class="{activerdg:redbagIndex==index}" @click="getredbagIndex(index)">
                            <router-link to="">
                                <!-- {{redbaglists[index].name}} -->
                                {{item.name}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="j-page" :class="{activerdg:redbagIndex==index1}">
                <ul class="myorders">
				    <li class="myorders-item" v-for="(item,i) in orderMsg" :key="i">
				    	<div class="myorders-item-top">
							<span class="myorders-status">待支付</span>
							<span class="myorders-time">{{ item.time }}</span>
				    	</div>
				    	<ul class="myorders-imgs">
				    	    <li class="myorders-imgs-item" v-for="(val,i) in item.order" :key="i" :class="{'isdisplay':i>3}">
				    	    	<img :src="val.img" alt="">
				    	    </li>
				    	    <li class="myorders-imgs-item-dot" :class="{'isdisplay':item.order.length<=4}"></li> 
				    	    <li class="myorders-imgs-item-dot" :class="{'isdisplay':item.order.length<=4}"></li> 
				    	    <li class="myorders-imgs-item-dot" :class="{'isdisplay':item.order.length<=4}"></li>
				    	</ul>
				    	<div class="myorders-count">共{{ item.amount }}件商品&nbsp;￥{{ item.price}}</div>
				    	<div class="myorders-footer">
				    		<span class="toPayMoney">去支付</span>
				    	</div>
				    </li>
				</ul>
            </div>
            <div class="j-page" :class="{activerdg:redbagIndex==index2}">
                <div class="page-record-list">
                    <ul class="exchange-history-wrap">
                        无兑换记录，快去兑换哦
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            redbaglists: [
                { name: '我的订单' },
                { name: '礼品兑换' }
            ],
            redbagIndex: 0,
            index1:0,
            index2:1,
            orderMsg:[]
        }
    },
    methods: {
        getredbagIndex: function (index) {
            this.redbagIndex = index;
        }
    },
    created() {
        // this.getredbagIndex();
        this.orderMsg = this.$store.state.orders;
        console.log(this.orderMsg);
    },
    computed:{
        getOrder:function(){
            this.orderMsg = this.$store.state.orders;
            return this.orderMsg;
        }
    }
}
</script>
<style scoped>
body {
    background-color: #fff;
    height: 100%;
}
.shopcitys-page {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #5d5d5d;
    background-color: #fff;
}

.header {
    background-color: #fff;
    height: 2.2rem;
    line-height: 2.2rem;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10000;
    border-bottom: 1px solid #f2f2f2;
}

.left {
    position: absolute;
    left: 0;
    top: 0;
}

.mid {
    margin: 0rem auto;
    height: 2.2rem;
    width: 8.6rem;
    text-align: center;
}

.left .back1 {
    background-image: url(../../assets/food-left.png);
    margin-right: 0.09rem;
    vertical-align: top;
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size: cover;
    display: inline-block;
}

.main-body {
    position: relative;
}

.nav-fixed {
    position: absolute;
    top: 2.2rem;
    left: 0;
    z-index: 1;
}

.nav-header {
    width: 100%;
    text-align: center;
    margin: 0rem auto;
    height: 2.2rem;
}

.nar-header-wrap {
    height: 2.2rem;
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    background-color: #f8f8f8;
    border-bottom: 1px solid #eaeaea;
}

.nav-wrap {
    display: inline-block;
    text-align: center;
    margin: 0.5rem 0 0;
}

.nav-header li {
    color: #999999;
    border-bottom: none;
    width: auto;
    padding: 0 2rem;
    height: 1.25rem;
    line-height: 1.25rem;
    margin: 0;
    float: left;
}

.nav-header li:first-child {
    border-right: 1px solid #e3e3e3;
}

.nav-header a {
    color: #999999;
    font-size: .7rem;
    height: 1.4rem;
    line-height: 1.25rem;
    display: block;
}

.nav-header .activerdg a {
    border-bottom: 0.1rem solid #ff8f5c;
    color: #50493e;
}
.j-page{
    width: 100%;
    display: none;
    padding: 0.5rem 0.2rem;
    background-color: #fff;
    position: relative;
    padding-bottom: 0.1rem;
    top: 4.3rem;
}
.activerdg{
    display: inline-block;
}
.exchange-history-wrap {
    font-size: 0.7rem;
    text-align: center;
    color: #999999;
}
.myorders{
    text-align: left;
}
.myorders-item{
    padding: 0 .5rem;
    margin-bottom: .5rem;
    background-color: #fff;
    font-size: .6rem; 
}
.myorders-item-top{
    height: 1.8rem;
    line-height: 1.8rem;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
}
.myorders-status{
    font-size: .7rem;
    color: #f80;
    float: right;
}
.myorders-time{

}
.myorders-imgs{
    padding: .5rem .75rem .5rem 0;
    border-bottom: 1px solid #ddd;
    background: url(../../assets/mright.png) no-repeat 95% center;
    background-size: .25rem;
    overflow: hidden;
}
.myorders-imgs-item{
    display: inline-block;
    vertical-align: middle;
    margin-right: .25rem;
}
.myorders-imgs-item>img{
    vertical-align: top;
    width: 2.3rem;
    height: 2.3rem;
    /*background-position: center center;
    background-size: 100%;*/
}
.myorders-imgs-item-dot{
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #ffd600;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
}
.myorders-count{
    height: 1.8rem;
    line-height: 1.8rem;
    border-bottom: 1px solid #ddd;
}
.myorders-footer{
    /*display: none;*/
    font-size: 0;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: right;
}
.toPayMoney{
    display: inline-block;
    vertical-align: middle;
    font-size: .6rem;
    line-height: 1.1rem;
    height: 1.1rem;
    min-width: 2.3rem;
    padding: 0 .25rem;
    text-align: center;
    border-radius: .2rem;
    margin-left: .4rem;
    background-color: #ff935e;
    color: #fff;
}
.isdisplay{
    display: none;
}
</style>
