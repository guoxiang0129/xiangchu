<template>
    <!--登录界面-->
    <div class="login">
        <h2 class="header"><router-link to="/"><img src="http://pub.szzhangchu.com/web/v4.2/images/ico/ico-back-white.png" /></router-link>用&nbsp;户&nbsp;登&nbsp;录<router-link to="/form">注册</router-link></h2>
        <form action="" method="post">
            <div class="userhead"><img :src="userhead"/></div>
            <div class="phone">
                <input type="text" placeholder="请输入您的手机号码" v-model="phonetext"/><br/>
                <span>{{phonesms}}</span>
            </div>
            <div class="psd">
                <input type="text" placeholder="请输入您的密码" v-model="psdtext"/><br/>
                <span>{{psdsms}}</span>
            </div>
            <div class="btn"><input type="button" value="登录" @click="btn"/></div>
            <router-link to="/mine/findpsd">忘记密码？</router-link>
        </form>
    </div>
</template>
<<script>
export default {
    data(){
        return{
            userhead:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABqCAYAAACh308nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MUM3QUFBQzk1NzcxMUU1OUI2QjkyN0Q3RjI3MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MUM3QUFBRDk1NzcxMUU1OUI2QjkyN0Q3RjI3MUIzRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUxQzdBQUFBOTU3NzExRTU5QjZCOTI3RDdGMjcxQjNEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUxQzdBQUFCOTU3NzExRTU5QjZCOTI3RDdGMjcxQjNEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+F1crhAAAC71JREFUeNrsXXuMXFUZ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", 
            phonetext:"",
            psdtext:"",
            phonesms:"",
            psdsms:""
        }
    },
    methods:{
        btn:function(){
            this.phonesms = "";
            this.psdsms = "";
            if(/^\s*[1]\d{10}\s*$/.test(parseInt(this.phonetext))){
                this.psdtest();
            }else{
                this.phonesms="请输入正确的手机号码"
            }
        },
        psdtest:function(){
            // 获取vue实例的指向
            var $this = this;
            if(/^\w{6,10}$/.test(parseInt($this.psdtext))){
                this.$http.get('../../static/userinfo.json')
                .then(res=>{
                    console.log(res.data);
                    var arr = res.data,
                        sum = false;
                    arr.forEach(item=>{
                        if(item.id == $this.phonetext && item.password == $this.psdtext){
                            sum = true;
                            // 登陆成功 保存状态
                            sessionStorage.setItem('user', item.id);
                            // 用户信息保存
                            sessionStorage.setItem('userName',item.name);
                            sessionStorage.setItem('userImg',item.userheadimg);
                            sessionStorage.setItem('userIntroduce',item.introduce);
                            $this.$router.push('/mine');
                        }
                    });
                    if(!sum){
                        $this.phonesms="您的手机号码尚未注册";
                        $this.psdtext="";
                    }
                })
            }else{
                this.psdsms="您输入的密码不正确"
            }       
        }
    },
    created(){
        // 判断用户是否存在登录信息  有则跳转至用户界面
        if(sessionStorage.getItem('user')){
            this.$router.push('/mine');
        }
    }
}
</script>
<style scoped>
    .login{
        position:fixed;
        top: 0;
        right:0;
        left:0;
        bottom:0;
        z-index: 1000;
        background-color: #fff;
    }
    .header{
        position: relative;
        width:100%;
        height:2rem;
        background-color:coral;
        color:#fff;
        line-height: 2rem;
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
    .header a:nth-of-type(2){
        position:absolute;
        right:1rem;
        font-size: .8rem;
        color:brown;
    }
    form{
        position: absolute;
        width:100%;
        height:100%;     
    }
    form div{
        position: relative;
        height:2rem;
        margin:2rem auto;
    }
    form userhead{
        height:2rem;
        width:2rem;
        border:1px solid gray;
        border-radius:50%;
    }
    form userhead img{
        font-size: 0px;
        display: block;
        margin: 0 auto;
    }
    form input{
        width: 10rem;
        height:1.5rem;
        padding:0 1rem;
        font-size: 1rem;
        border:none;
        border-bottom:1px solid gray;
        outline:none;
        color:brown;
    }
    form span{
        color:coral;
    }
    form .btn input{
        border:none;
        background-color: coral;
        color:white;
    }
    form>a{
        position: relative;
        left: 4rem;
        bottom: 1rem;
    }
</style>

