<template>
    <div class="register">
        <div class="header">
            <router-link to="/login"><img src="http://pub.szzhangchu.com/web/v4.2/images/ico/ico-back-white.png" /></router-link>
            <h2>用&nbsp;户&nbsp;注&nbsp;册</h2>
        </div>
        <form action="" method="get">
            <div class="phone">
                <input
                type="text"
                placeholder="请输入您的手机号"
                v-model="phonetext"><br>
                <span>{{phonesms}}</span>
            </div>
            <div class="sms">
                <input type="text" name="" v-model="yzmtext" placeholder="请输入短信验证码">
                <span class="post" @click="yzmchange" :style="smsbackground">{{smstext}}</span>
            </div>
            <div class="btn">
                <input type="button" value="提交" @click="btnUser"> 
            </div>
            <input type="checkbox"><a>我同意《掌厨app使用用户协议》</a>
        </form>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                phonetext:'',
                yzmtext:'',
                phonesms:'',
                yzmsms:'',
                smstext:'短信验证',
                smsbackground:''
            }
        },
        methods:{
            btnUser:function(){
                this.phonesms = "";
                this.yzmsms = "";
                if(/^\s*[1]\d{10}\s*$/.test(parseInt(this.phonetext))){
                    this.yzmsmschange();
                }else{
                    this.phonesms="请输入正确的手机号码"
                }
            },
            yzmchange:function(){
                clearInterval(timer);
                var sum = 29;
                var $this = this;
                $this.smsbackground = "background-color:white;color:coral;";
                var timer = setInterval(function(){
                    sum--;
                    $this.smstext = '(' + sum + ')s' 
                    if(sum == 0){
                        clearInterval(timer);
                        $this.smsbackground = "";
                        $this.smstext = '短信验证';
                    }
                },1000);
            },
            yzmsmschange:function(){
                 if(/^\s*\d{6}\s*$/.test(parseInt(this.yzmtext))){
                    this.yzmsms= "验证成功";
                }else{
                    this.yzmsms="验证码错误";
                }
            }
        }
        
    }
</script>
<style scoped>
    .register{
        position: absolute;
        top: 0;
        left:0;
        right:0;
        bottom:0;
        overflow: hidden;
    }
    .header{
        position: relative;
        width:100%;
        height:2rem;
        background-color:coral;
        color:#fff;
        line-height: 2rem;
    }
    h2{
        width:100%;
        height:100%;
        text-align: center;
        line-height: 2rem;
        color:#fff;
    }
    .header a:nth-of-type(1){
        position:absolute;
        top:.3rem;
        left:1rem;   
    }
    .header a:nth-of-type(1) img{
        width:1.4rem;
        height:1.4rem;
    }
    form{
        position: absolute;
        width:100%;
        height:100%;
        background-image:url(../assets/ban.png);
        background-size: 100% 100%;      
    }
    form div{
        position: relative;
        height:2rem;
        margin:2rem auto;
    }
    form input{
        width: 10rem;
        height:1.5rem;
        padding:0 1rem;
        font-size: .8rem;
        border:none;
        border-bottom:1px solid gray;
        outline:none;
        color:brown;
    }
    form .sms input{
        position: absolute;
        left:3rem;
        width:7rem;
        font-size: .6rem;
    }
    form .sms span{
        position: absolute;
        width:3rem;
        height: 1.5rem;
        left:10rem;
        line-height: 1.5rem;
        text-align: center;
        font-size: .6rem;
        color:white;
        background-color:coral;  
    }
    form .btn input{
        border:none;
        background-color: coral;
        color:white;
    }
    form>input{
        width:1rem;
        height:1rem;
        vertical-align: middle;
        margin-right:1rem;
    }
    form>a{
        color:brown;
        text-decoration: underline;
    }
</style>