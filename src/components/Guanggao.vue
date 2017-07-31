<template>
    <div class="advert" :style="advertPlay">
        <div class="guanggao2" :style="leftmove2"></div>
        <div class="guanggao1" :style="leftmove"></div>
        <span class="close" @click="clearAdvert">x</span>
        <span class="timer" v-model="timeName">{{timeName}} s</span>      
    </div>
</template>
<script>
    export default{
        data(){
            return{
                leftmove:"opacity:1",
                leftmove2:"opacity:1",
                timeName:3,
                advertPlay:"display:block"
            }
        },
        methods:{
            setTimer:function(){
                var $this = this;
                var timer = setInterval(function(){
                    $this.timeName = $this.timeName-1;
                    if($this.timeName == 0){
                        $this.leftmove = "opacity:0";
                        clearInterval(timer);
                        $this.setTimer2();                   
                    }
                },1000)       
            },
            setTimer2:function(){
                var $this = this;     
                $this.timeName = 3;
                var timer2 = setInterval(function(){
                    $this.timeName = $this.timeName -1;
                    if($this.timeName == 0){
                        $this.leftmove2 = "opacity:0";
                    }
                    if($this.timeName < 0){
                        $this.advertPlay = "display:none";
                        clearInterval(timer2);
                    }
                },1000)
            },
            clearAdvert:function(){
                this.advertPlay = "display:none";
            }
        },
        created:function(){
            this.setTimer();
        }
    }
</script>
<style>
    .advert{
        position:fixed;
        width:100%;
        height:100%;
        z-index:100;
        overflow:hidden;
    }
    .guanggao1{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:url(../assets/guanggao1.png) no-repeat;
        background-size:100%;
        -webkit-transition: opacity 1s linear 0s;
    }
    .guanggao2{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:url(../assets/guanggao2.png) no-repeat;
        background-size:100%;
        -webkit-transition: opacity .5s linear 0s;
    }
    .timer{
        position:absolute;
        width:4rem;
        height:2rem;
        background-color:rgba(0,0,0,.4);
        color:white;
        line-height:2rem;
        bottom:2rem;
        right:1rem;
        text-align:center;
    }
    .close{
        position:absolute;
        width:1rem;
        height:1rem;
        line-height:1rem;
        text-align:center;
        right:1rem;
        top:1rem;
        border-radius:50%;
        color:white;
        background-color:rgba(0,0,0,.4);
        font-size:0.8rem;
        font-weight:bolder;
    }
</style>