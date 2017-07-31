<template>
    <div class="address-page">
        <div class="header">
            <div class="header-inner">
                <div class="left">
                    <router-link to="/mine">
                        <i class="back1"></i>
                    </router-link>
                </div>
                <div class="mid">
                    <div class="center">收货地址</div>
                </div>
            </div>
        </div>
        <div class="submit-wrap">
            <div class="user-submit">
                <input class="submit-btn" type="button" value="添加新地址" @click="seeAddress">
            </div>
        </div>
        <div class="address-box" :class="{see:flag==true}">
            <div class="box-inner">
                <p class="addr-header">收货地址
                    <span @click="seeAddress">X</span>
                </p>
                <ul class="addr-submit">
                    <li>
                        收货人:
                        <input type="text" class="user-name" placeholder="请输入收货人姓名" ref="name">
                    </li>
                    <li>
                        手机号码:
                        <input type="text" class="user-name" placeholder="请输入正确的电话号码" ref="number">
                    </li>
                    <li>
                        详细地址:
                        <input type="text" class="user-name" placeholder="请输入真实详细地址" ref="address">
                    </li>
                    <li>
                        设为默认地址
                        <input type="checkbox" class="disable">
                    </li>
                    <li>
                        <input class="del" type="button" value="删除" @click="seeAddress">
                        <input class="save" type="button" value="保存" @click="addAddress()">
                    </li>
                </ul>
            </div>
        </div>
        <div class="addresslist">
            <ul class="addresslist-submit">
                <li v-for="(item, index) in addressList" :key="item">
                    <span>收货地址</span>
                    <p>{{item.name}}&nbsp;{{item.number}}</p>
                    <p>{{item.address}}</p>
                    <i class="address-ico"></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            flag: false,
            addressList: [],
            // !!!!!!!!!!!!!!!!
            // name:'',
            // number:'',
            // address:'',
            // usermsg: {}
            // empty:{ name: '', number: '', address: '' }
        }
    },
    methods: {
        seeAddress: function () {
            this.flag = !this.flag;
        },
        addAddress: function () {
            // console.log(name);
            // console.log(number);
            // console.log(address);
            // this.usermsg.name = name;
            // this.usermsg.number = number;
            // this.usermsg.address = address;
            // console.log(this.usermsg)
            console.log(this.$refs.name.value);
            // this.usermsg.name = this.$refs.name.value;
            // this.usermsg.number = this.$refs.number.value;
            // this.usermsg.address = this.$refs.address.value;
            var name = this.$refs.name.value;
            var number = this.$refs.number.value;
            var address = this.$refs.address.value;
            this.$store.dispatch('addAddress', [name, number, address]);
            this.addressList = this.$store.state.addressList;
            this.flag = !this.flag;
            this.$refs.name.value = "";
            this.$refs.number.value = "";
            this.$refs.address.value = "";
        }
    },
    computed: {
        getAddress() {
            return this.usermsg;
        }
    },
    created() {
        this.addressList = this.$store.state.addressList;
    }
}
</script>
<style>
.address-page {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #5d5d5d;
    background-color: #f8f8f8;
}

.header {
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

.left {
    position: absolute;
    left: 0;
    top: 0;
}

.mid {
    margin: 0rem auto;
    height: 2.2rem;
    width: 8.6rem;
    text-align: center;
}

.left .back1 {
    background-image: url(../../assets/food-left.png);
    margin-right: 0.09rem;
    vertical-align: top;
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size: cover;
    display: inline-block;
}

.submit-wrap {
    height: 3.2rem;
    line-height: 3.2rem;
    position: fixed;
    width: 100%;
    left: 0;
    top: 2.7rem;
    z-index: 100;
}

.user-submit {
    border-top: 1px solid #ececec;
    margin: 0 auto;
    text-align: center;
    position: relative;
    padding: 0 2rem;
    background-color: #fff;
    bottom: 0;
    left: 0;
}

.submit-btn {
    font-size: 0.7rem;
    font-family: "microsoft YaHei", sans-serif;
    border: 1px solid #ff8f5c;
    width: 100%;
    height: 1.6rem;
    line-height: 1.5rem;
    color: #ff8f5c;
    background: #fff;
    -webkit-border-radius: 0.2rem;
    border-radius: 0.2rem;
    -webkit-appearance: none;
}

.addresslist {
    height: 5rem;
    position: fixed;
    width: 100%;
    left: 0;
    top: 7rem;
    z-index: 100;
}

.address-box {
    height: 100%;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    display: none;
    background: rgba(0, 0, 0, .3);
    font-size: .7rem;
}

.see {
    display: block;
}

.box-inner {
    position: fixed;
    top: 5rem;
    left: 0;
    margin: 0 auto;
    right: 0;
    width: 15rem;
    background: #f5efbb;
    color: #666;
    z-index: 1000;
    padding-top: .5rem;
    border-radius: .2rem;
}

.addr-header {
    height: 1.8rem;
    text-align: center;
    font-size: .8rem;
    font-weight: bold;
}

.addr-header span {
    display: inline-block;
    width: .8rem;
    height: .8rem;
    background: gray;
    border-radius: 50%;
    color: #fff;
    float: right;
    margin: .1rem .5rem 0 0;
    font-weight: 100;
}

.address-box .addr-submit li {
    position: relative;
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: left;
    padding-left: .5rem;
}

.address-box .addr-submit li .user-name {
    position: absolute;
    width: 63%;
    right: .5rem;
    height: 1.5rem;
    line-height: 1.8rem;
    border: none;
    background: #f5efbb;
    outline: none;
    margin-top: .2rem;
    border-bottom: 1px solid gray;
}

.addresslist {
    background-color: #f8f8f8;
    margin-bottom: 3.2rem;
    padding-bottom: 0.01rem;
}

.addr-submit {}

.addresslist-submit span {
    color: #5d5d5d;
    display: inline-block;
    width: 80%;
    height: 100%;
}

.addresslist-submit li {
    position: relative;
    width: 100%;
    color: #a3a3a3;
    display: block;
    font-size: 0.65rem;
    margin: 0.2rem 0;
    text-align: left;
    margin-top: .7rem;
    background-color: #fff;
    padding: 0.5rem 1rem 0.2rem 1rem;
}

.address-ico {
    position: absolute;
    top: 1.4rem;
    right: 1rem;
    width: .65rem;
    height: .65rem;
    background-image: url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-more.png);
    vertical-align: top;
    z-index: 1001;
    background-size: cover;
}
.del{
    position: absolute;
    left: 30%;
    bottom: .5rem;
    width: 2.8rem;
    height: 1.4rem;
    border-radius: .3rem;
    color: #333;
    background-color: #fff;
}
.save{
    position: absolute;
    right: 30%;
    bottom: .5rem;
    width: 2.8rem;
    height: 1.4rem;
    border-radius: .3rem;
    color: #333;
    background-color: #fff;
}
.disable{
    position: absolute;
    top: .5rem;
    right: 1.5rem;
    width: .8rem;
    height: .8rem;
    background-color: blue;
}
</style>
