<template>
    <div class="alllist-page">
        <header>
            <div class="header">
                <slot name="header">头部</slot>
                <div class="header-right" @click.stop="headerRight"><a class="header-icon"><i class="header-right-img" :class="{headerimg:!flag}"></i></a></div>
            </div>
        </header>
        <leftlist></leftlist>
        <div class="cook-page-main" :style="cookMain">
            <div class="cook-page-header"></div>
            <div class="mask-page" :style="maskPage"></div>
            <slot> 啥也没有</slot>
        </div>
    </div>
</template>
<script>
    // 导入公共模块
    import leftlist from '../components/Leftlist'

    export default{
        data () {
            return {
                flag:true,
                cookMain:'left:0rem',
                maskPage:'display:none'
            }
        },
        methods:{
            // 左侧位移动画
            headerRight:function(){
                this.flag = !this.flag;
                if(!this.flag){
                    this.cookMain = 'left:9.4rem';
                    this.maskPage = 'display:block';
                }else{
                    this.cookMain = 'left:0rem';
                    this.maskPage = 'display:none';
                }
            }
        },
        components:{
            leftlist
        }
    }           
</script>
<style>
    .alllist-page {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 11;
        background-color: pink;
        overflow:hidden;
    }
    .alllist-page header{
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
    .header{
        min-width: 320px;
        max-width: 640px;
        margin: 0 auto;
        text-align: center;
        color: #333;
        font-size: 0.8rem;
        position: relative;
        height: 2.2rem;
    }
    .header-icon{
        display: block;
        height: 2.2rem;
        line-height: 2.1rem;
        width: 1.6rem;
        text-align: center;
    }
    .nav-header{
        margin: 0rem auto;
        height: 2.2rem;
        width: 8.6rem;
        text-align: center;
    }
    .nav-header li{
        margin: 0 0.3rem;
        float: left;
        line-height: 2.15rem;
        height: 2.2rem;
        border-bottom: 0.1rem solid #fff;
        width: 3.7rem;
    }
    .nav-header .active{
        border-bottom:0.1rem solid #ff8f5c;
    }
    .nav-header a{
        color:#333;
        font-size:.8rem;
    }
    .header-right{
        position: absolute;
        right: 0;
        top: 0;
        z-index:18;
    }
    .header-right-img{
        display:inline-block;
        margin-right:0.09rem;
        width:1.4rem;
        height:1.4rem;
        background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/menu.png);
        background-size:cover;
        margin-top:0.45rem;
    }
    .headerimg{
        display:inline-block;
        margin-right:0.09rem;
        width:1.4rem;
        height:1.4rem;
        background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/menu-red.png);
        background-size:cover;
        margin-top:0.45rem;
    } 
    .cook-page-header{
        height:2.4rem;
        width:100%;
    }
    .cook-page-main{
        position: relative;
        z-index: 2;
        -webkit-transition: left .2s linear 0s;
        background-color: #f8f8f8;
        padding-bottom: 0.1rem;
        height:100%;
        overflow-y:auto;
    }
    .mask-page{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(84, 79, 79, 0.27);
        z-index: 10;
    }
</style>