<template>
    <div class="scene-page">
        <alllist>
            <div slot="header" class="header-left">
                <a href="/" class="ui-link">首页</a>
                <router-link to="">></router-link>
                <router-link to="/scene" class="ui-link">场景</router-link>
            </div>
            <div class="main-page">
                <div class="page-scene-list ">
                    <ul class="clearfix">
                        <li v-for="(item,index) in scenedata" :key="index">
                            <router-link to="/scenedetail">
                                <img :src="item.scene_background" class="wimg">
                                <div class="sub-text">
                                    <span class="sub-title">#{{item.scene_desc}}#</span>
                                    <span class="sub-nub">{{item.scene_title}}</span>
                                </div>
                                <div class="bg">
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="load-more" class="load">
                还剩下
                <span class="num">152</span>
                个场景
            </div>
        </alllist>
    </div>
    <!--<div class="header-gap"></div>-->
</template>
<script>
// 使用公共组件
import alllist from '../components/Alllist'

export default {
    data () {
        return {
            scenedata:[],
            url:'http://h5.izhangchu.com/scene/view.html?&scene_id='
        }
    },
    methods:{
        getData:function(){
            this.$http.get('../../static/scene.json')
            .then(res => {
                this.scenedata = res.data.data.data;
            })
        }
    },
    created:function(){
        this.getData();
    },
    components: {
        alllist
    }
}
</script>
<style>
.scene-page {
    /*position: absolute;
    top: 0;
    left: 0;
    right: 0;*/
    /*z-index: 1000;*/
    /*background-color: pink;*/
    padding-bottom: 0.1rem;
    font-size: 100%;
}
.header-left{
    position: absolute;
    left: .5rem;
    top: 0;;
}

.main-page {
    padding: 0.4rem 0;
    min-height: 10rem;
    overflow: hidden;
}

.page-scene-list {
    background-color: #fff;
    padding-bottom: 0.3rem;
}

.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.page-scene-list li {
    height: 7rem;
    margin-bottom: 0.075rem;
    position: relative;
    text-align: center;
    margin-top: 0;
    overflow: hidden;
    width: 33.333333333%;
    float: left;
}

.page-scene-list li:nth-child(3n+1) {
    border-right: 0.05rem solid #fff;
}

.page-scene-list li:nth-child(3n-1) {
    border-right: 0.025rem solid #fff;
    border-left: 0.025rem solid #fff;
}

.page-scene-list li:nth-child(3n+3) {
    border-left: 0.05rem solid #fff;
}

.page-scene-list img {
    width: 100%;
    height: 100%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
}

.page-scene-list .sub-text {
    line-height: 0.75rem;
    width: 100%;
    z-index: 2;
    position: absolute;
    bottom: 0.3rem;
    text-align: center;
    color: #fff;
}

.sub-text span {
    display: block;
}

.sub-title {
    font-size: 0.7rem;
    margin-bottom: 0.2rem;
}

.sub-nub {
    font-size: 0.6rem;
}

.page-scene-list li .bg {
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    z-index: 1;
}
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
.area{
    width: 100%;
    height: 2rem;
}
/*.header-gap {
    height: 2.2rem;
    background-color: yellow;
}*/
</style>