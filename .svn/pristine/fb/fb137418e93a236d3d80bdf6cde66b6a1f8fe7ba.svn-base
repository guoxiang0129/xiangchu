<template>
    <div>
        <div class="page-header">
            <ul class="page-header-list">
                <li class="page-header-list-item">
                    <a href="/" class="page-header-list-item-A">首页</a>
                </li>
                <li class="page-header-list-item">&gt;</li>
                <li class="page-header-list-item">
                    <router-link to="/topic" class="page-header-list-item-A">{{pageName}}</router-link>
                </li>
            </ul>
            <div class="page-header-btn">
                <a class="page-header-ico-A">
                    <i class="ico"></i>
                </a>
            </div>
        </div>
        <!--顶部间隔-->
        <div class="page-header-gap"></div>
    </div>
</template>
<script>
    export default {
        props: ['pageName','path'],
        data() {
            return {

            }
        }
    }
</script>
<style>
    .page-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 12;
        text-align: center;
        color: #333;
        font-size: 0.8rem;
        height: 2.2rem;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;
    }
    
    .page-header-gap {
        height: 2.2rem;
    }
    /*页面路径*/
    
    .page-header-list {
        color: #333;
        padding-left: 0.5rem;
        height: 2.2rem;
        line-height: 2.2rem;
        width: 85%;
        overflow: hidden;
    }
    
    .page-header-list-item {
        float: left;
        padding-right: 0.3rem;
        max-width: 45%;
        height: 2.2rem;
    }
    
    .page-header-list-item-A {
        color: #333;
        display: inline-block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .page-header-btn {
        position: absolute;
        right: 0;
        top: 0;
    }
    
    .page-header-ico-A {
        display: block;
        height: 2.2rem;
        line-height: 2.1rem;
        width: 1.6rem;
        text-align: center;
    }
    
    .page-header-ico-A .ico {
        /*background: url(../assets/menu.png);*/
        width: 1.4rem;
        height: 1.4rem;
        margin-top: 0.45rem;
        display: inline-block;
        /*background-size: cover;*/
        vertical-align: top;
    }
</style>