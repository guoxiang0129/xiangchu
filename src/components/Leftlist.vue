<template>
    <div class="leftnav">
        <div class="leftnav-wrap">
            <ul class="swiper-wrapper">
                <li class="swiper-slide">
                    <a href="/" class="swiper-slide-link">
                        <span class="recommend-icon" style="background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/recommend.png);background-size:100%"></span>
                        <span class="title">首页</span>
                    </a>
                </li>
                <li class="swiper-slide">
                    <router-link to="/food" class="swiper-slide-link">
                        <span class="recommend-icon" style="background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/topic-icon.png);background-size:100%"></span>
                        <span class="title">美食</span>
                    </router-link>
                </li>
                <li class="swiper-slide">
                    <router-link to="/cook" class="swiper-slide-link">
                        <span class="recommend-icon" style="background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/course.png);background-size:100%"></span>
                        <span class="title">万道佳肴</span>
                    </router-link>
                </li>
                <li class="swiper-slide">
                    <router-link to="/topic" class="swiper-slide-link">
                        <span class="recommend-icon" style="background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/category.png);background-size:100%"></span>
                        <span class="title">专题</span>
                    </router-link>
                </li>
                <li class="swiper-slide">
                    <router-link to="/scene" class="swiper-slide-link">
                        <span class="recommend-icon" style="background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/scene-icon.png);background-size:100%"></span>
                        <span class="title">场景</span>
                    </router-link>
                </li>
                <li class="swiper-slide">
                    <router-link to="/community" class="swiper-slide-link">
                        <span class="recommend-icon" style="background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/community.png);background-size:100%"></span>
                        <span class="title">社区</span>
                    </router-link>
                </li>
                <li class="swiper-slide">
                    <router-link to="/activity" class="swiper-slide-link">
                        <span class="recommend-icon" style="background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/activity-icon.png);background-size:100%"></span>
                        <span class="title">活动</span>
                    </router-link>
                </li>
                <li class="swiper-slide">
                    <router-link to="/newuser" class="swiper-slide-link">
                        <span class="recommend-icon" style="background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/tour-icon.png);background-size:100%"></span>
                        <span class="title">新手入门</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    // 导入插件 
    export default{
        data () {
            return{

            }
        },
        methods:{

        },
        created:function(){

        }
    }           
</script>
<style>    
    .leftnav{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right:0;
        bottom:0;
        font-size: 0.7rem;
        color: #464646;
        overflow-y:auto;
    }
    .leftnav .leftnav-wrap{
        height: 31.5rem;
        min-width: 320px;
        max-width: 640px;
        margin: 0 auto;
        position: relative;
        left: 0;
        top: 2.2rem;
        background-color: #f8f8f8;
    }
    .swiper-wrapper{
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transform: translate3d(0,0,0);
        transform-style: preserve-3d;
        transition-property: transform;
        box-sizing: content-box;
        -webkit-box-orient: vertical;
        flex-direction: column;
    }
    .leftnav li{
        width: 9.4rem;
        height: 3.5rem;
        line-height: 3.5rem;
        border-bottom: 1px solid #e0e0e0;
        left: 2.5rem;
    }
    .leftnav .swiper-slide{
        position:relative;
        transform-style: preserve-3d;
        flex-shrink:0;
        height: 3.5rem !important;
        background-color: transparent;
        font-size: 0.7rem;
        text-align:center;
        display:flex;
        justift-content:center;
        align-items:center;
    }
    .leftnav .swiper-slide a{
        height:100%;
        width:100%;
        display:block;
        color:#a0a0a0;
        text-align:left;
    }
    .leftnav .recommend-icon{
        position:absolute;
        left:0;
        top:1.15rem;
        width:1.2rem;
        height:1.2rem;
        display:inline-block;
        vertical-align:middle;
    }
    .leftnav .title{
        display:inline-block;
        margin-left:2.2rem;
    }  
</style>