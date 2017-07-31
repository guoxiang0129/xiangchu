<template>
    <div>
        <swipe class="my-swipe" auto:300>
            <swipe-item class="slide-item" v-for="(item,index) in imglists" :key="index">
                <img :src="item">
            </swipe-item>
        </swipe>
    </div>
</template>
<script>
    // // 引入css样式
    // require('vue-swipe/dist/vue-swipe.css');
    // 引入插件的中两个组件
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        data() {
            return {
                imglists: []
            }
        },
        // mounted() {
        //     //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
        //     this.swiper.slideTo(0, 0, false);
        // },
        methods: {
            getData: function() {
                var $this = this;
                this.$http.get('../../static/home.json').then(function(res) {
                    $this.imglists = res.data.data.bannerimgs;
                    console.log($this.imglists[1])
                })
            }
        },
        created() {
            this.getData();
        },
        components: {
            Swipe, 
            SwipeItem
        }
    }
</script>
<style scoped>
    /*轮播容器，自己设置宽高*/
    
    .my-swipe {
        /*width: 100%;*/
        overflow: hidden;
        height: 5.375rem;
        font-size: 0;
        text-align: center;
    }
    .slide-item img{
        width: 100%;
    }
    /*img {
        -webkit-transition: all 2s;
        -o-transition: all 2s;
        transition: all 2s;
    }
    
    img[lazy=loading] {
        opacity: 0;
    }
    
    img[lazy=error] {}
    
    img[lazy=loaded] {
        opacity: 1;
    }*/
</style>