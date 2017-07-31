<template>
    <div class="food-page">
        <alllist>
            <div class="food-header-tab" slot="header">
                <div class="food-header-tab-wrap">
                    <div class="left">
                        <a href="/" class="left-ico">
                            <span class="left-img"></span>
                        </a>
                    </div>
                    <div class="nav-header">
                        <ul>
                            <li class="course" :class="{active:activeIndex==index,active2:activeIndex==index}" v-for="(item,index) in tabs" :key="item" @click="changeIndex(item.id)">
                                <span class="course-link">{{item.name}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        <router-link to="" class="right-ico">
                            <span class="right-img"></span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="food-main-page">
                <div class="page-first page-r" :class="{active:activeIndex==index}" v-for="(item,index) in tabs" :key="item">
                    <div class="logo-wrap">
                        <div class="swiper-nav-container">
                            <div class="swiper-nav-wrapper" ref="mycon">
                                <div class="swiper-nav-slide" v-for="(item,index) in imgs" :key="item">
                                    <router-link to="javascript:void(0)" class="item">
                                        <img class="item-img" :src="item.album_logo"></img>
                                    </router-link>
                                </div>
                            </div>
                            <div class="swiper-nav-button-prev swiper-nav-button-disabled" @click="pre">
                            </div>
                            <div class="swiper-nav-button-next swiper-nav-button-disabled" @click="next">
                            </div>
                        </div>
                    </div>
                    <ul class="course-wrap">
                        <li v-for="(item,index) in lists" :key="item">
                            <div class="course-wrap-outer">
                                <div class="course-wrap-inner">
                                    <router-link to="javascript:void(0)" class="course-wrap-item">
                                        <img class="course-wrap-img" v-lazy="item.image"></img>
                                        <div class="detail">
                                            <span class="detail-title">{{item.series_name}}</span>
                                            <span class="sub-title">更新至{{item.episode}}集&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上课人数：{{item.play}}</span>
                                            <img class="course-wrap-logo" :src="item.album_logo" style="width:2.6rem;"></img>
                                            <span class="course-wrap-album">{{item.album}}</span>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="load-more" class="load" @click="loaded(activeIndex)" :class="{'isdisplay':num[activeIndex]==0}">
                还剩下
                <span class="num">{{num[activeIndex]}}</span>
                篇
            </div>
            <div class="area"></div>
    
        </alllist>
    </div>
</template>
<script>
import alllist from '../components/Alllist'

export default {
    components: {
        alllist
    },
    data() {
        return {
            activeIndex: 0,
            index: '',
            tabs: [
                { id: 0, name: '美食IP' },
                { id: 1, name: '健康IP' },
                { id: 2, name: '台湾IP' }
            ],
            imgs: [],
            lists: [],
            allimgs: [],
            alllists: [],
            num:[95,70,0],
            count:[0,0,0]
        }
    },
    methods: {
        getData: function () {
            //作用域问题，获取不到外界的this.lists
            var $this = this;
            if($this.activeIndex==0){
                this.$http.get('../../static/foodshop.json').then(function (res) {
                    $this.imgs = res.data.data.albums;//nav小图标
                    console.log($this.imgs)
                    $this.alllists = res.data.data.data;//
                    // $this.imgs = $this.allimgs.slice(0,10);
                    $this.lists = $this.alllists.slice(0,10);
                });
            }else if($this.activeIndex==1){
                this.$http.get('../../static/health.json').then(function (res) {
                    $this.allimgs = res.data.data.albums;//nav小图标
                    $this.alllists = res.data.data.data;//
                    $this.imgs = $this.allimgs.slice(0,10);
                    $this.lists = $this.alllists.slice(0,10);
                });
            }else if($this.activeIndex==2){
                 //台湾nav数据
                this.$http.get('../../static/taiwan.json').then(function (res) {
                    $this.imgs = res.data.data.albums;//nav小图标
                    $this.lists = res.data.data.data;//
                    console.log($this.imgs)
                });
            }      
        },
        changeIndex: function (index) {
            this.activeIndex = index;
            // console.log(this.$refs.mycon);
            // console.log($(window).scrollTop)
            // document.body.scrollTop = 0;
            this.getData();
            // console.log(this.activeIndex);
        },
        loaded(i){
            var $this = this;
            //0-美食 1-健康 2-
            if($this.activeIndex==0){
                $this.count[0]++;
                if(($this.count[0]+1)*10>$this.alllists.length){

                    $this.lists = $this.lists.concat($this.alllists.slice($this.count[0]*10));
                }else{
                    $this.lists = $this.lists.concat($this.alllists.slice($this.count[0]*10,($this.count[0]+1)*10));
                }     
                $this.num[0] -= 10;
                if($this.num[0]<=0){
                    $this.num[0] = 0;
                }
            }else if($this.activeIndex==1){
                $this.count[0]++;
                if(($this.count[0]+1)*10>$this.alllists.length){
                    $this.lists = $this.lists.concat($this.alllists.slice($this.count[0]*10));
                }else{
                    $this.lists = $this.lists.concat($this.alllists.slice($this.count[0]*10,($this.count[0]+1)*10));
                }     
                $this.num[0] -= 10;
                if($this.num[0]<=0){
                    $this.num[0] = 0;
                }
            }      
        },
        pre(){
            // this.$refs.mycon[this.activeIndex].style.left = parseInt(this.$refs.mycon[this.activeIndex].offsetLeft)-56 + "px";
            var p = this.$refs.mycon[this.activeIndex].offsetLeft-83.375;
            $(this.$refs.mycon[this.activeIndex]).animate({left:p},300)
        },
        next(){
            // this.$refs.mycon[this.activeIndex].style.left = parseInt(this.$refs.mycon[this.activeIndex].offsetLeft)+56 + "px";
            if(this.$refs.mycon[this.activeIndex].offsetLeft<0){        
                var p = this.$refs.mycon[this.activeIndex].offsetLeft+83.375;
                $(this.$refs.mycon[this.activeIndex]).animate({left:p},300)
            }
            
        }    
    },
    created() {
        this.activeIndex = this.$route.params.id;
        this.getData();
    },
    computed:{
        getNum(){
           return this.num;
        }
    }
}
</script>
<style>
.isdisplay{
    display: none;
}
.food-page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
}

.food-header-tab {
    background-color: #fff;
    height: 2.2rem;
    line-height: 2.2rem;
    position: fixed;
    width: 90%;
    left: 0;
    top: 0;
    z-index: 10000;
    border-bottom: 1px solid #f2f2f2;
}

.food-header-tab-wrap {
    margin: 0 auto;
    text-align: center;
    color: #333;
    font-size: 0.8rem;
    position: relative;
    height: 2.2rem;
}

.food-header-tab-wrap .left {
    position: absolute;
    left: 0;
    top: 0;
}

.food-header-tab-wrap .left .left-ico {
    display: inline-block;
    width: 1.2rem;
    height: 2.2rem;
    line-height: 2.1rem;
}

.food-header-tab-wrap .left .left-img {
    background-image: url(../assets/food-left.png);
    display: inline-block;
    vertical-align: top;
    margin-right: 0.09rem;
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size: cover;
}

.food-header-tab-wrap .nav-header {
    width: 9rem;
    margin: 0rem auto;
    height: 2.2rem;
    text-align: center;
}

.food-header-tab-wrap .nav-header .course {
    margin: 0;
    width: 33.333333%;
    float: left;
    line-height: 2.15rem;
    height: 2.15rem;
    border-bottom: 0.1rem solid #fff;
}

.food-header-tab-wrap .right {
    right: 0.1rem;
    position: absolute;
    top: 0;
}

.food-header-tab-wrap .right .right-ico {
    display: inline-block;
    width: 1.2rem;
    height: 2.2rem;
    line-height: 2.1rem;
    text-align: center;
}

.food-header-tab-wrap .right .right-img {
    margin-top: 0.42rem;
    vertical-align: top;
    background-image: url(../assets/food-search.png);
    width: 1.2rem;
    height: 1.2rem;
    background-size: cover;
    display: inline-block;
}

.food-header-tab-wrap .menu-wrap {
    right: 1.4rem;
    position: absolute;
    top: 0;
    right: 0;
}

.food-header-tab-wrap .menu-wrap .menu-wrapt-ico {
    display: inline-block;
    width: 1.2rem;
    height: 2.2rem;
    line-height: 2.1rem;
    text-align: center;
}

.food-header-tab-wrap .menu-wrap .menu-wrap-img {
    margin-top: 0.42rem;
    vertical-align: top;
    background-image: url(../assets/food-menu.png);
    width: 1.2rem;
    height: 1.2rem;
    background-size: cover;
    display: inline-block;
}

.page-r {
    display: none;
    width: 100%;
    height: 10rem;
}

.active {
    display: inline-block;
}

.food-header-tab-wrap .nav-header .active2 {
    border-bottom: 0.1rem solid #ff8f5c;
}


.food-main-page {
    margin-top: 2.2rem;
}

.food-main-page .logo-wrap {
    position: fixed;
    top: 2.2rem;
    left: 0;
    height: 3.6rem;
    width: 100%;
    overflow: hidden;
    background: transparent;
    z-index: 1000;
}

.food-main-page .logo-wrap .swiper-nav-container {
    /*min-width: 320px;
    max-width: 640px;*/
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    height: 3.6rem;
    background: #fff;
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
    z-index: 1;
}

.food-main-page .logo-wrap .swiper-nav-wrapper {
    position: relative;
    left: 2.4rem;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
}

.food-main-page .logo-wrap .swiper-nav-slide {
    widows: 3.125rem;
    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    margin-left: .3rem;
}

.food-main-page .logo-wrap .swiper-nav-slide .item-img {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
}

.swiper-nav-button-prev,
.swiper-nav-button-next {
    top: 0;
    margin-top: 0px;
    height: 100%;
    width: 2.7rem;
    background: #fff;
    position: absolute;
    z-index: 10;
    cursor: pointer;
}

.swiper-nav-button-prev {
    left: 0;
}

.swiper-nav-button-next {
    right: 0;
}

.swiper-nav-button-prev::before,
.swiper-nav-button-next::before {
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    top: 45%;
    left: 50%;
    color: #ff7836;
    font-size: 1.2rem;
    content: "";
}

.swiper-nav-button-prev::before {
    background: url(../assets/swiper-button-prev.png) center;
    background-size: cover;
}

.swiper-nav-button-next::before {
    background: url(../assets/swiper-button-next.png) center;
    background-size: cover;
}

.course-wrap-outer {
    background-color: #fff;
    margin-top: .4rem;
    padding: 0;
    box-shadow: 0px 0px 1px #ccc;
}

.course-wrap-inner {
    position: relative;
    overflow: hidden;
}

.course-wrap-inner .course-wrap-item {
    margin-top: 0;
    position: relative;
    display: block;
}

.course-wrap-inner .course-wrap-item .course-wrap-img {
    width: 100%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
}

.course-wrap-item .detail {
    padding: 0.7rem;
    position: relative;
    height: 3.2rem;
}

.course-wrap-item .detail .detail-title {
    color: #464646;
    font-size: 0.7rem;
    height: 0.8rem;
    line-height: 0.8rem;
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    left: 0.7rem;
    text-align: left;
}

.course-wrap-item .detail .sub-title {
    color: #a0a0a0;
    font-size: 0.6rem;
    position: absolute;
    left: 0.7rem;
    bottom: 0.7rem;
}

.course-wrap-item .detail .course-wrap-logo {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    position: absolute;
    right: 0.7rem;
    top: -1.3rem;
    width: 100%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
}

.course-wrap-item .detail .course-wrap-album {
    text-align: center;
    width: 3rem;
    height: 0.8rem;
    font-size: 0.6rem;
    color: #a0a0a0;
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    right: 0.5rem;
    bottom: 0.7rem;
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