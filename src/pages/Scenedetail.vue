<template>
    <!--场景二级详情页面-->
    <div class="sd-page">
        <alllist>
            <!--插进对应的顶部槽-->
            <div slot="header">
                <!--顶部公用组件-->
                <comheader :pageName="pageName"></comheader>
            </div>
            <!--主体-->
            <div class="sd-cont">
                <!--开始的大图片-->
                <div class="sd-top">
                    <div class="sd-top-img">
                        <img src="http://img.szzhangchu.com/1458631585588_7839705971.jpg@480h_640w_1e_1c.jpg">
                    </div>
                    <div class="sd-top-text">
                        <p class="txt-num">#539道菜#</p>
                        <p class="txt">每天献上最新鲜的美食！</p>
                    </div>
                </div>
                <!--主体列表-->
                <div class="sd-cont-div">
                    <ul class="sd-cont-list">
                        <li class="sd-cont-item">
                            <div class="sd-item-div">
                                <router-link to="/" class="sd-item-A">
                                    <div class="sd-item-a-img">
                                        <img class="wing" src="http://img.szzhangchu.com/1463628564188_5458672138.jpg@165h_240w_1e_1c.jpg">
                                        <i class="ico-play"></i>
                                    </div>
                                    <div class="sd-item-a-text">
                                        <h6>经典草莓慕斯</h6>
                                        <p>草莓慕斯是来源于西方的一种甜品，其味道可口，制作方法简单，材料需求少，适合在party上制作。</p>
                                    </div>
                                </router-link>
                                <div class="sd-item-bar">
                                    <a href="javascript:;"><span>美容养颜</span></a>
                                    <a href="javascript:;"><span>大叔</span></a>
                                    <a href="javascript:;"><span>蛋糕</span></a>                                   
                                </div>
                            </div>
                        </li>
                        <li class="sd-cont-item">
                            <div class="sd-item-div">
                                <router-link to="/" class="sd-item-A">
                                    <div class="sd-item-a-img">
                                        <img class="wing" src="http://img.szzhangchu.com/1463628564188_5458672138.jpg@165h_240w_1e_1c.jpg">
                                        <i class="ico-play"></i>
                                    </div>
                                    <div class="sd-item-a-text">
                                        <h6>经典草莓慕斯</h6>
                                        <p>草莓慕斯是来源于西方的一种甜品，其味道可口，制作方法简单，材料需求少，适合在party上制作。</p>
                                    </div>
                                </router-link>
                                <div class="sd-item-bar">
                                    <a href="javascript:;"><span>美容养颜</span></a>
                                    <a href="javascript:;"><span>大叔</span></a>
                                    <a href="javascript:;"><span>蛋糕</span></a>                                   
                                </div>
                            </div>
                        </li>
                        <li class="sd-cont-item">
                            <div class="sd-item-div">
                                <router-link to="/" class="sd-item-A">
                                    <div class="sd-item-a-img">
                                        <img class="wing" src="http://img.szzhangchu.com/1463628564188_5458672138.jpg@165h_240w_1e_1c.jpg">
                                        <i class="ico-play"></i>
                                    </div>
                                    <div class="sd-item-a-text">
                                        <h6>经典草莓慕斯</h6>
                                        <p>草莓慕斯是来源于西方的一种甜品，其味道可口，制作方法简单，材料需求少，适合在party上制作。</p>
                                    </div>
                                </router-link>
                                <div class="sd-item-bar">
                                    <a href="javascript:;"><span>美容养颜</span></a>
                                    <a href="javascript:;"><span>大叔</span></a>
                                    <a href="javascript:;"><span>蛋糕</span></a>                                   
                                </div>
                            </div>
                        </li>
                        <li class="sd-cont-item">
                            <div class="sd-item-div">
                                <router-link to="/" class="sd-item-A">
                                    <div class="sd-item-a-img">
                                        <img class="wing" src="http://img.szzhangchu.com/1463628564188_5458672138.jpg@165h_240w_1e_1c.jpg">
                                        <i class="ico-play"></i>
                                    </div>
                                    <div class="sd-item-a-text">
                                        <h6>经典草莓慕斯</h6>
                                        <p>草莓慕斯是来源于西方的一种甜品，其味道可口，制作方法简单，材料需求少，适合在party上制作。</p>
                                    </div>
                                </router-link>
                                <div class="sd-item-bar">
                                    <a href="javascript:;"><span>美容养颜</span></a>
                                    <a href="javascript:;"><span>大叔</span></a>
                                    <a href="javascript:;"><span>蛋糕</span></a>                                   
                                </div>
                            </div>
                        </li>
                        <li class="sd-cont-item">
                            <div class="sd-item-div">
                                <router-link to="/" class="sd-item-A">
                                    <div class="sd-item-a-img">
                                        <img class="wing" src="http://img.szzhangchu.com/1463628564188_5458672138.jpg@165h_240w_1e_1c.jpg">
                                        <i class="ico-play"></i>
                                    </div>
                                    <div class="sd-item-a-text">
                                        <h6>经典草莓慕斯</h6>
                                        <p>草莓慕斯是来源于西方的一种甜品，其味道可口，制作方法简单，材料需求少，适合在party上制作。</p>
                                    </div>
                                </router-link>
                                <div class="sd-item-bar">
                                    <a href="javascript:;"><span>美容养颜</span></a>
                                    <a href="javascript:;"><span>大叔</span></a>
                                    <a href="javascript:;"><span>蛋糕</span></a>                                   
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!--加载更多-->
                    <div id="load-more" class="load">
                        查看全部
                        <span class="num">154</span>
                        道
                        <i class="ico-more"></i>
                    </div>
                    <!--加载中-->
                    <div id="load-ing" class="load hidden" style="display: none;">加载中...</div>
                    <!--抱歉，没有更多菜了！-->
                    <div id="load-stop" class="load hidden" style="display: none;">抱歉，没有更多菜了！</div>
                </div>
            </div>
            <!--更多相关场景-->
            <div class="sd-bottom">
                <div class="sd-bottom-title">
                    <router-link to="/scene">
                        <p class="sd-title">
                            更多相关场景
                            <i class="ico-more"></i>
                        </p>
                    </router-link>
                </div>
                <ul class="sd-bottom-contain">
                    <li class="sd-bottom-contain-item">
                        <router-link to="/">
                            <img class="wing" src="http://img.szzhangchu.com/1483087109792_7221978519.jpg@400h_320w_1e_1c.jpg">
                            <div class="sb-sub-text">
                                <span class="sb-sub-title">#元旦特辑#</span>
                                <span class="sb-sub-num">#元旦特辑#</span>
                            </div>
                        </router-link>
                    </li>
                     <li class="sd-bottom-contain-item">
                        <router-link to="/">
                            <img class="wing" src="http://img.szzhangchu.com/1483087109792_7221978519.jpg@400h_320w_1e_1c.jpg">
                            <div class="sb-sub-text">
                                <span class="sb-sub-title">#元旦特辑#</span>
                                <span class="sb-sub-num">#元旦特辑#</span>
                            </div>
                        </router-link>
                    </li>
                    <li class="sd-bottom-contain-item">
                        <router-link to="/">
                            <img class="wing" src="http://img.szzhangchu.com/1483087109792_7221978519.jpg@400h_320w_1e_1c.jpg">
                            <div class="sb-sub-text">
                                <span class="sb-sub-title">#元旦特辑#</span>
                                <span class="sb-sub-num">#元旦特辑#</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="footer-gap" style="height:2.1rem;"></div>
        </alllist>

        
    </div>
</template>
<script>
    import comheader from '../components/Comheader.vue'
    // 导入公共模块
    import alllist from '../components/Alllist'
    export default {
        data (){
            return {
                pageName:'场景'
            }
        },
        methods: {

        },
        components: {
            comheader,
            alllist
        }
    }
</script>
<style scoped>
    /*图片的样式*/
    
    .wing {
        width: 100%;
        font-size: 0px;
        display: block;
        margin: 0 auto;
    }
    
    .sd-cont {
        width: 100%;
    }
    
    .sd-top {
        position: relative;
    }
    
    .sd-top-img {
        width: 100%;
        font-size: 0px;
    }
    
    .sd-top-img>img {
        width: 100%;
    }
    
    .sd-top-text {
        width: 100%;
        z-index: 2;
        padding: 0 1rem;
        color: #fff;
        position: absolute;
        bottom: 0.5rem;
        overflow: hidden;
    }
    
    .sd-top-text .txt-num {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
        line-height: 0.9rem;
    }
    
    .sd-top-text .txt {
        font-size: 0.65rem;
        line-height: 0.8rem;
    }
    /*主体列表*/
    
    .sd-cont-div {
        min-height: 10rem;
        padding-bottom: .4rem;
        margin-top: .4rem;
        background-color: #fff;
        box-shadow: 0px 0px 1px #ccc;
    }
    
    .sd-cont-list {
        padding: .2rem 0.6rem 0;
        background-color: #fff;
        border-top: 1px solid #eee;
    }
    
    .sd-cont-item {
        height: 4.125rem;
        background-color: #fff;
        position: relative;
        text-align: left;
        margin-top: 0;
        padding-top: 0.4rem;
        overflow: hidden;
        border-bottom: none;
        padding-left: 0;
        padding-bottom: 0;
    }
    
    .sd-item-A {
        font-size: .55rem;
        display: inline-block;
    }
    
    .sd-item-text {
        overflow: hidden;
        background-color: #fff;
        margin-left: 6.4rem;
        line-height: 0.8rem;
        height: 1rem;
        position: absolute;
        bottom: 0;
    }
    
    .sd-item-a-img {
        width: 6rem;
        height: 4.125rem;
        margin-right: 0.4rem;
        position: relative;
        float: left;
        margin-top: 0;
        margin-left: 0;
    }
    
    .sd-item-a-img .ico-play {
        width: 1.2rem;
        height: 1.2rem;
        margin-top: -0.6rem;
        margin-left: -0.6rem;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 5;
        background-image: url(../assets/ico-play.png);
        background-size: cover;
        display: inline-block;
        vertical-align: middle;
    }
    
    .sd-item-a-text {
        line-height: 0.85rem;
        padding-left: 6.4rem;
    }
    
    .sd-item-a-text>h6 {
        font-size: 0.7rem;
        color: #50493e;
        line-height: 0.8rem;
    }
    
    .sd-item-a-text>p {
        color: #a3a3a3;
        font-size: 0.6rem;
        margin: .2rem 0 0 0;
        line-height: 0.8rem;
        height: 1.6rem;
        overflow: hidden;
    }
    
    .sd-item-bar {
        overflow: hidden;
        background-color: #fff;
        margin-left: 6.4rem;
        line-height: 0.8rem;
        height: 1rem;
        position: absolute;
        bottom: 0;
    }
    
    .sd-item-bar span {
        line-height: 0.5rem;
        text-align: center;
        color: #ff8f5c;
        font-size: 0.5rem;
        display: inline-block;
        border-radius: 0.5rem;
        border: 1px solid #ff8f5c;
        padding: 0.1rem 0.3rem;
        box-sizing: border-box;
    }
    /*加载更多*/
    
    .load {
        margin: .5rem;
        padding: 0 .6rem;
        text-align: center;
        background: #ddd;
        color: #666;
        font-size: .8rem;
        height: 1.6rem;
        line-height: 1.6rem;
        border-radius: .8rem;
    }
    
    .ico-more {
        margin-left: 0.6rem;
        background-image: url(../assets/ico-more.png);
        vertical-align: middle;
        width: 0.8rem;
        height: .8rem;
        background-size: cover;
        display: inline-block;
    }
    /*更多相关场景*/
    
    .sd-bottom {
        margin-bottom: 0;
        background-color: #fff;
        margin-top: .4rem;
        padding-bottom: .4rem;
        box-shadow: 0px 0px 1px #ccc;
        overflow: hidden;
    }
    
    .sd-bottom-title {
        width: 100%;
        text-align: center;
        margin: 0.6rem 0;
        height: 1.6rem;
        line-height: 1.6rem;
    }
    
    .sd-bottom-contain {
        width: 100%;
        position: relative;
        display: flex;
        overflow: hidden;
    }
    
    .sd-bottom-contain-item {
        /*float: left;*/
        width: 33.3%;
        height: 7rem;
        border-right: 1px solid #fff;
    }
    
    .sd-bottom-contain-item img {
        width: 100%;
        height: 7rem;
    }
    
    .sd-bottom-contain li:last-of-type {
        border-right: none;
    }
    
    .sb-sub-text {
        line-height: 0.75rem;
        width: 33.3%;
        z-index: 2;
        position: absolute;
        bottom: 0.3rem;
        text-align: center;
        color: #fff;
    }
    
    .sb-sub-title {
        display: block;
        font-size: 0.7rem;
        margin-bottom: 0.2rem;
    }
    
    .sb-sub-num {
        display: block;
        font-size: 0.6rem;
    }
</style>