<template>
    <div class="newuser-page">
        <alllist>
            <div slot="header" class="header-left">
                <a href="/" class="ui-link">首页</a>
                <router-link to="">></router-link>
                <router-link to="" class="ui-link">新手入门</router-link>
            </div>
            <div class="main-paage">
                <nav class="tourlogo">
                    <div class="tourlogo-fixed">
                        <div class="tourlogo-wrap">
                            <ul class="swiper1-wrapper">
                                <li class="swiper1-slide" :class="{active:activeIndex==index}" v-for="(item,index) in newuserimgs" :key="item" @click="changeIndex(index)">
                                    <img class="wimg" :src="item.logo"></img>
                                    <p>{{item.name}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="goods-page">
                    <ul class="goods-list">
                        <li class="list-item" v-for="(item,index) in newuserlists[activeIndex]" :key="item">
                            <router-link to="">
                                <div class="img-wrap">
                                    <img class="detail-img" :src="item.image"></img>
                                </div>
                                <div class="detail-wrap">
                                    <div class="clearfix">
                                        <h2>{{item.title}}</h2>
                                        <p class="nub">浏览量：{{item.views}}</p>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="load-more" class="load">
                还剩下
                <span class="num">17</span>
                篇
            </div>
            <div class="area"></div>
        </alllist>
    </div>
</template>
<script>
//使用公共组件
import alllist from '../components/Alllist'

export default {
    data() {
        return {
            activeIndex: 0,
            index: '',
            newuserimgs: [],
            newuserlists: []
            // url: 'http://h5.izhangchu.com/newuser/view.html?&scene_id='
        }
    },
    methods: {
        getData: function () {
            this.$http.get('../../static/newuser1.json')
                .then(res => {
                    console.log(res);
                    this.newuserimgs = res.data.data.logos;
                });
            this.$http.get('../../static/newuser2.json')
                .then(res => {
                    console.log(res);
                    this.newuserlists.push(res.data.data.data);
                    this.newuserlists.push(res.data.data.data.slice(4));
                    this.newuserlists.push(res.data.data.data.slice(3));
                    this.newuserlists.push(res.data.data.data.slice(5));
                    this.newuserlists.push(res.data.data.data.slice(6).reverse());
                });
        },
        changeIndex: function (index) {
            this.activeIndex = index;
        }
    },
    created: function () {
        this.getData();
    },
    components: {
        alllist
    }
}
</script>
<style>
/*.newuser-page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
    background-color: pink;
}*/

.header-left {
    position: absolute;
    left: .5rem;
    top: 0;
    ;
}

.tourlogo {
    height: 4.2rem;
    background-color: transparent;
}

.tourlogo-fixed {
    position: fixed;
    top: 2.2rem;
    width: 100%;
    left: 0;
    z-index: 10;
}

.tourlogo-wrap {
    background-color: #fff;
    height: 4.2rem;
    margin: 0 auto;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    width: 100%;
}

.swiper1-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    box-sizing: content-box;
}

.tourlogo-wrap li {
    margin-left: 0.7rem;
    color: #a0a0a0;
    font-size: 0.6rem;
    display: inline-block;
    height: 100%;
    padding: 0.3rem 0;
}

.tourlogo-wrap .swiper1-slide {
    width: 19.687%;
    text-align: center;
    background: #fff;
    /*display: flex;
    justify-content: center;*/
    /*align-items: center;*/
}

.tourlogo-wrap img {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    margin-bottom: 0.2rem;
    font-size: 0px;
    display: block;
    margin: 0 auto;
}

.tourlogo-wrap p {
    display: block;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    /*white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;*/
}

.tourlogo-wrap .swiper1-wrapper .active {
    color: #ff8f5c;
}

.goods-page {
    background-color: #fff;
}

.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.goods-page .goods-list {
    background: #f8f8f8;
    width: 100%;
}

.goods-page .goods-list .list-item {
    background-color: #fff;
    margin-top: .4rem;
    width: 100%;
}

.goods-list .list-item .img-wrap {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    min-height: 8.5rem;
    overflow: hidden;
}

.goods-list .list-item .img-wrap .detail-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
}

.detail-wrap {
    position: relative;
    top: 0;
    left: 0;
    padding: 0.5rem;
    overflow: hidden;
}

.detail-wrap h2 {
    float: left;
    color: #464646;
    font-size: .75rem;
    height: 1rem;
    line-height: 1rem;
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.detail-wrap .nub {
    float: right;
    color: #a0a0a0;
    font-size: .6rem;
    text-align: right;
    height: 1rem;
    line-height: 1rem;
    width: 38%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.load {
    margin: .5rem .5rem .5rem .5rem;
    padding: 0 .6rem;
    text-align: center;
    background: #ddd;
    color: #666;
    font-size: .8rem;
    height: 1.6rem;
    line-height: 1.6rem;
    border-radius: .8rem;
}

.area {
    width: 100%;
    height: 2rem;
}
</style>