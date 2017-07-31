<template>
    <div class="redbag">
        <div class="redbag-header">
            <div class="left">
                <router-link to="/mine" class="back">
                    <span class="ico-first"></span>
                </router-link>
            </div>
            <div class="middle">
                <div class="center">我的红包</div>
            </div>
            <div class="right">
                <router-link to="" class="back">
                    <span class="ico-second"></span>
                </router-link>
            </div>
        </div>
        <div class="redbag-content">
            <div class="content-outer">
                <div class="content-inner">
                    <p class="content-first">
                        <span>0</span>个
                    </p>
                    <p class="content-second">
                        可用红包
                    </p>
                    <router-link to="" class="content-third">
                        <span class="redbag-btn">红包兑换</span>
                    </router-link>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.redbag {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
    background-color: #fcebcd;
}

.redbag-header {
    background-color: #fff;
    height: 2.2rem;
    line-height: 2.2rem;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10000;
    border-bottom: 1px solid #f2f2f2;
    margin: 0 auto;
    text-align: center;
    color: #333;
    font-size: 0.8rem;
}

.back {
    display: block;
    height: 2.2rem;
    line-height: 2.2rem;
    width: 2.1rem;
    text-align: center;
}

.left {
    position: absolute;
    left: 0;
    top: 0;
}

.left .back {
    display: block;
    height: 2.2rem;
    line-height: 2.1rem;
    width: 1.6rem;
    text-align: center;
}

.left .back .ico-first {
    background-image: url(../../assets/food-left.png);
    margin-right: 0.09rem;
    vertical-align: top;
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size: cover;
    display: inline-block;
}

.middle {
    margin: 0rem auto;
    height: 2.2rem;
    width: 8.6rem;
    text-align: center;
}

.right {
    position: absolute;
    right: 0;
    top: 0;
}

.right .back .ico-second {
    background-image: url(../../assets/ico-help.png);
    vertical-align: top;
    width: 2.25rem;
    height: 2.25rem;
    background-size: cover;
    display: inline-block;
}

.redbag-content {
    padding-bottom: 0.5rem;
}

.redbag-content .content-outer {
    height: 8.35rem;
    background: url(../../assets/sum-wrap-bg.jpg);
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
}

.redbag-content .content-inner {
    text-align: center;
}

.redbag-content .content-inner .content-first {
    color: #ffe31e;
    font-size: 1.35rem;
    line-height: 2.5rem;
}

.redbag-content .content-inner .content-second {
    color: #b51f11;
    font-size: 0.7rem;
}

.redbag-content .content-inner .content-third {
    width: 6.5rem;
    margin: 0 0.3rem;
}

.redbag-content .content-inner .content-third .redbag-btn {
    border: 0.05rem solid #c03c30;
    color: #fcebcd;
    display: inline-block;
    margin-top: 0.6rem;
    height: 1.41rem;
    line-height: 1.4rem;
    font-size: 0.7rem;
    background-color: #e45044;
    text-align: center;
    border-radius: 5px;
    width: 6.5rem;
}
.redbag-content::before{
    content: '';
    display: table;
    height: 2.2rem;
}
</style>
