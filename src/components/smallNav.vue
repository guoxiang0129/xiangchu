<template>
    <div>
        <div class="alls" :style="navStyle" @click="tohide">
            <div class="s-quick"> 
                <router-link class="s-bg2 s-ico1" to="/market"></router-link>
                <router-link class="s-bg2 s-ico2" to=""></router-link>
                <router-link class="s-bg2 s-ico3" to="/"></router-link>
                <router-link class="s-bg2 s-ico4" to="/cart"></router-link>
                <router-link class="s-bg2 s-ico5" to="/login"></router-link>
                <router-link class="s-bg2 s-ico6" to="/"></router-link>
            </div>
        </div>
        <div class="s-nav-btn" @click="navShow" :class="{'normal':flag==true,currentbtn:flag==false}">
            <a></a>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            flag:true,
            navStyle:'display:none'
        }
    },
    methods:{
        navShow:function(){
            this.flag = !this.flag;
            if(this.flag){
                // 使nav消失
                this.navStyle = 'display:none';
            }else{
                this.navStyle = 'display:block';
            }
        },
        tohide:function(){
            this.flag=true;
            this.navStyle = 'display:none';
        }
    }
}
</script>
<style>
.alls {
    width: 8.5rem;
    height: 8.5rem;
    position: fixed;
    z-index: 999;
    left: 1.5rem;
    bottom: 4rem;
    overflow: hidden;
}
.s-quick{
    position: relative;
    width: 8.5rem;
    height: 8.5rem;
    -webkit-transition: top .3s linear 0s;
    background-image: url(../assets/s-bg-quick.png);
    background-repeat: no-repeat;
    background-size: 8.5rem 8.5rem;
}
.s-quick .s-bg2 {
    position: absolute;
    z-index: 9999;
}

.s-bg2 {
    background-image: url(../assets/s-bg2.png);
    background-repeat: no-repeat;
    background-size: 3rem 35rem;
}

.s-quick .s-ico1 {
    width: 1rem;
    height: 1rem;
    background-position: 0 -14.35rem;
    left: 2.2rem;
    top: 1.6rem;
}

.s-quick  .s-ico2 {
    width: 1rem;
    height: 1rem;
    background-position: 0 -15.4rem;
    left: 5.35rem;
    top: 1.55rem;
}

.s-quick .s-ico3 {
    width: 1.1rem;
    height: 1rem;
    background-position: 0 -16.55rem;
    left: 1.2rem;
    top: 4.5rem;
}

.s-quick .s-ico4 {
    width: 1.25rem;
    height: 1.05rem;
    background-position: 0 -17.65rem;
    left: 6.1rem;
    top: 4.55rem;
}

.s-quick .s-ico5 {
    width: 1rem;
    height: 1rem;
    background-position: 0 -18.75rem;
    left: 3.9rem;
    top: 6.3rem;
}

.s-quick .s-ico6 {
    width: 1.2rem;
    height: 1.15rem;
    background-position: 0 -19.9rem;
    left: 3.65rem;
    top: 3.65rem;
}
.s-nav-btn{
    width: 1.8rem;
    height: 1.8rem;
    line-height: 2rem;
    text-align: center;
    overflow: hidden;
    border-radius: 50%;
    display: inline-block;
    position: fixed;
    z-index: 999;
    bottom: 3.5rem;
    left: .4rem;
}
.normal{
    background-color: rgba(255,120,54,.8);
}
.currentbtn{
    background-color: rgba(150,150,150,.6);
}
.s-nav-btn a{
    width: 1.8rem;
    height: 1.8rem;
    border: 1px solid #fff;
    /*background-color: rgba(206, 205, 205, 0.8);*/
    display: block;  
    background: url(../assets/mail.png) no-repeat center center;
    background-size: 1rem 1rem;
    border-radius: 50%;
}
</style>
