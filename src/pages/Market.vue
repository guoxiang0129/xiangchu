<template>
    <div class="market-page">
        <!--顶部分类-->
        <div class="market-header">
            <ul class="market-header-list">
                <li class="item current">
                    <a href="javascript:void(0)">
                        抢手货
                    </a>
                </li>
            </ul>
            <a href="javascript:void(0)" class="ico-down"></a>
        </div>
        <div style="height:1.7rem;background:#fff;"></div>
        <!--主体商品列表-->
        <div class="market-cont">
            <ul class="market-first-list">
                <li class="item">
                    <a>
                        <img src="http://images03.womaiapp.com/g/525733525/416732/0.5394611636034408.1%E5%8C%97%E4%BA%AC-%E5%B9%B3%E8%B0%B7%E5%A4%A7%E6%A1%83-%E7%94%9F%E9%B2%9C%E9%A6%86%E5%8D%95%E5%93%81%E6%A8%AA%E9%80&%2365533;jpg">
                    </a>
                </li>
                <li class="item">
                    <a>
                        <img src="http://images03.womaiapp.com/g/525733525/416732/0.5394611636034408.1%E5%8C%97%E4%BA%AC-%E5%B9%B3%E8%B0%B7%E5%A4%A7%E6%A1%83-%E7%94%9F%E9%B2%9C%E9%A6%86%E5%8D%95%E5%93%81%E6%A8%AA%E9%80&%2365533;jpg">
                    </a>
                </li>
                <li class="item">
                    <a>
                        <img src="http://images03.womaiapp.com/g/525733525/416732/0.5394611636034408.1%E5%8C%97%E4%BA%AC-%E5%B9%B3%E8%B0%B7%E5%A4%A7%E6%A1%83-%E7%94%9F%E9%B2%9C%E9%A6%86%E5%8D%95%E5%93%81%E6%A8%AA%E9%80&%2365533;jpg">
                    </a>
                </li>
            </ul>
            <ul class="market-cont-list">
                <li class="item" v-for="item in lists" :key="item.id">
                    <div class="item-ico">
                        <img src="http://images01.womaiapp.com/s/goodstag/3.jpg">
                    </div>
                    <a class="item-cont">
                        <img :src="item.img">
                        <h2>{{item.long_name}} </h2>
                    </a>
                    <!--<input class="amount" type="text" :value="data[item.id]">-->
                    
                    <h3 class="price-h3"><span class="text-color-red">￥{{item.price}}</span><i class="ico-cart" @click="add(item)"></i></h3>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
          lists:[],
          data:{}
        }
    },
    methods:{
        getData:function(){
            var $this = this;
            this.$http.get('../../static/market.json').then(function(res){
                $this.lists = res.data.products;
            })
        },
        //将超市数据和购物车数据进行同步，使对应商品的数量实时变化
        mixData:function(desc,src){
            var obj = {};
            var arr = [];
            for(var i in src){
                var n = src[i];
                obj[n.id] = n;
            }

            for(var j in desc){
                var m = desc[j];
                if(obj[m.id]){
                    arr.push(obj[m.id]);
                }else{
                    m.number = 0;
                    arr.push(m);
                }
            }
            return arr;
        },
        add:function(item){
            var cartData = this.$store.state.cartList;
            // 添加商品的操作只是改变了购物车数组，想要当前超市中的数据得到更新，对应商品的数量更新，需要将购物车的商品及商品数量更新到超市页面的数组中
            this.$store.dispatch('add',item);
            // 
            var _data = {};
            // 以商品id作为键，数量作为值
            for(var n in cartData){
                _data[cartData[n].id] = cartData[n].count;
            }
            // 操作之后更新商品数量的对象
            this.data = _data;
            // item.id = 0;
            //将超市商品列表中的数据同步和购物车数据实时同步，实现商品数量的动态变化
            // this.lists = this.mixData(this.lists,cartData);//数据列表更新  
        }
    },
    created () {
        this.getData();
    }
}
</script>
<style scoped>
    .market-header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 1.6rem;
        background-color: #fff;
        line-height: 1.6rem;
        overflow: hidden;
        z-index: 10;
    }
    .market-first-list{
        width: 100%;
    }
    .market-first-list .item{
        width: 100%;
    }
    .market-first-list .item img{
        width: 100%;
    }
    .market-header-list{
        position: relative;
        width: 200%;
        height: 100%;
        overflow: hidden;
    }
    .market-header-list>.item{
        float: left;
        width: 3.75rem;
        text-align: center;
        height: 1.36rem;
        font-size: .7rem;
    }
    .market-header-list>.current{
        color: #00a651;
    }
    .market-header-list>.current:after{
            content: '';
        display: block;
        border-bottom: 2px solid #00a651;
        width: 90%;
        margin: -.2rem auto 0 auto;
    }
    .market-header .ico-down{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1rem;
        width: 1.4rem;
        height: 1.6rem;
        text-align: center;
        line-height: 1.6rem;
        background: #fff;
    }
    .market-header .ico-down{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1rem;
        width: 1.4rem;
        height: 1.6rem;
        text-align: center;
        line-height: 1.6rem;
        background: #fff;
        display: inline-block;
        z-index: 16;
    }
    .ico-down:before{
        content: "\f107";
    }
    .market-cont{
        width: 100%;
    }
    .market-cont-list{
        overflow: hidden;
    }
    .market-cont-list .item{
        float: left;
        width: 50%;
        background: #fff;
        font-size: .8rem;
        margin-top: .12rem;
        position: relative;
        text-align: left;
    }
    .market-cont-list .item:nth-of-type(2n-1){
        border-right: 1px solid #eee;
    }
    .market-cont-list .item:nth-of-type(2n){
        border-left: 1px solid #eee;
    }
    .market-cont-list .item-ico{
        position: absolute;
        left: 0;
        top: 0;
    }
    .market-cont-list .item-ico img{
        width: 2rem;
    }
    .market-cont-list .item-cont{
        color: #555;
    }
    .market-cont-list .item-cont img{
        width: 100%;
    height: auto;
    }
    .market-cont-list .item-cont h2{
            padding: 0 .4rem;
    height: 2rem;
    overflow: hidden;
    font-size: .6rem;
    }
    .market-cont-list .price-h3{
        padding: 0 .4rem .4rem;
        font-weight: 400;
    }
    .text-color-red{
        color: #c4151b;
    }
    .ico-cart{
        float: right;
        width: 1.2rem;
        height: 1.2rem;
        background-image: url(../assets/cart.png);
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>