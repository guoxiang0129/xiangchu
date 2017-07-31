<template>
    <div class="search">
        <div class="header">
            <div class="header-wrap">
                <div class="header-back-wrap left">
                    <a class="header-ico">
                        <router-link tag="i" to="/home" class="ico-back-black"></router-link>
                    </a>
                </div>
                <form class="searchForm">
                    <div class="header-search">
                        <i class="ico-search"></i>
                        <input type="text" class="header-search-input" placeholder="请输入菜名或者食材搜索" v-model="inputText" @input="setHistorydata"/>
                        <button id="search-btn">搜索</button>       
                    </div>
                </form>
            </div>
        </div>
        <div class="header-gap"></div>
        <div class="search-keyword-md" id="page-1" :style="hidden1">
            <ul>
                <li v-for="item in keyWordsData" :key="item" @click="myinputText(item.text)">
                    <span>{{item.text}}</span>
                </li>
            </ul>
        </div>
        <div id="page-2" :style="hidden2">
            <div class="search-md">
                <h6>热门搜索</h6>
                <div class="list">
                    <ul>
                        <li v-for="item in hotData" :key="item">
                            <a href="">{{item.text}}</a>
                        </li>
                    </ul>
                </div>   
            </div>
            <div class="search-md">
                <h6>历史搜索</h6>
                <div class="list">
                    <ul>
                        <li v-for="item in historyData" :key="item">
                            <a href="">{{item}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
        hotData:[],
        historyData:[],
        keyWordsData:[],
        inputText:"",
        id:"",
        hidden1:"display:none",
        hidden2:"display:block"
      }
  },
  methods:{
      // 模糊查询
    getKeywordData(){
        this.keyWordsData=[];
        var $this = this;
        var str = $this.getinputText();
        $this.$http.get('../../static/search-food.json')
        .then(res => {
            var datas = res.data.data;
                datas.__proto__ = Array.prototype; 
            datas.forEach(function(item) {
                var reg = new RegExp(str);           
                if(reg.test(item.text)){
                    $this.keyWordsData.push(item);
                }
            })
        })
    },
    // 去掉首尾空白
    getinputText(){
        return this.inputText.trim();
    },
      // 获取热门关键字
    getHotdata:function(){
        this.$http.get("../../static/search.json")
        .then(res => {
            this.hotData = res.data.data.data;
        })
    },
    // 保存搜索的关键字
    setHistorydata(){
        var str = this.getinputText();
        if(/^\s*$/.test(str)){
        }else{
            this.$store.commit('setHistory',str);
            // 遍历数据 获得关键字对应数据
            this.getKeywordData();
            this.hidden2="display:none";
            this.hidden1="display:block";

        }
    },
    // 历史关键字
    getHistorydata(){
        this.historyData = this.$store.state.historyData;
    },
    // 获取选中数据text 赋值给input框
    myinputText(text){
        this.inputText = text;
    }
  },
  created(){
    this.getHotdata();
    this.getHistorydata();
  }
}
</script>
<style>
.search{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
.header{
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
.header-wrap{
    height:auto;
    padding:0.4rem 0;
    background-color:#fff;
    min-width:32px;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    color: #333;
    font-size: 0.8rem;
    position: relative
}
.header-wrap .left{
    position: absolute;
    left:0;
    top:0;
}
.header-ico{
    display: block;
    height: 2.2rem;
    line-height: 2.1rem;
    width: 1.6rem;
    text-align: center;
}
.ico-back-black{
    width:1.4rem;
    height:1.4rem;
    margin-top:0.45rem;
    margin-right:0.09rem;
    verticol-align:top;
    background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-back-black.png);
    background-size:cover;
    display:inline-block;
}
form{
    position: relative;
    left:1.5rem;
    width:15rem;
    box-sizing:border-box;
}
.header-search{
    margin-left: 1.5rem;
    margin-right: 2.2rem;
    background-color:#e6e6e6;
    margin: .3rem .6rem;
    margin: 0 .6rem;
    padding: 0 .5rem;
    height: 1.4rem;
    line-height: 1.4rem;
    border-radius: .1rem;
    vertical-align: top;
    text-align: center;
    position: relative;
}
.header-search .ico-search{
    margin-top:.1rem;
    margin-right:.1rem;
    vertical-align:top;
    width: 1.2rem;
    height: 1.2rem;
    float: left;
    margin-left: 1.5rem;
    background-image:url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-search-gray.png);
    background-size:cover;
    display:inline-block;
}
.header-search .header-search-input{
    outline: none;
    text-align:left;
    color:#5d5d5d;
    font-family: "microsoft YaHei",sans-serif;
    vertical-align: top;
    width: 7rem;
    height: 1.4rem;
    line-height: 1.4rem;
    background: none;
    border: none;
    font-size: .6rem;
    float: left;
    z-index: 3;
}
.header-search #search-btn {
    position: absolute;
    top:-.1rem;
    right:0;
    padding:0;
    font-size: 0.65rem;
    height:1.8rem;
    width:2.2rem;
    border:none;
    color:#a0a0a0;
    background-color: #fff;
    text-align: center;
    font-family: "microsoft YaHei";
    outline: none;

}
.header-gap{
    height:2.2rem;
    width: 100%;
}
.search-keyword-md{
    background-color: #fff;
    padding:0 .6rem;
}
.search-keyword-md ul li span{
    padding: .4rem .4rem;
    text-align: left;
    font-size: .8rem;
    border-bottom: 1px solid #eee;
    display: block;
    color: #5d5d5d;
}
.search-md{
    font-size:.7rem;
    background-color:#fff;
    margin-top:.4rem;
    padding:0.5rem 0;
    box-shadow:0px 0px 1px #ccc;
    overflow: hidden;
}
.search-md h6{
    margin-left:.3rem;
    font-size:.6rem;
    font-weight:500;
}
.search-md .list{
    margin-top:.2rem;
}
.search-md li{
    float:left;
}
.search-md li a{
    border:1px solid #ff8f5c;
    margin:.3rem;
    display:block;
    padding:.2rem .6rem;
    color:#5d5d5d;
    border-radius:3px;
}
.search-md:last-child li a{
    border:1px solid #a0a0a0;
}
</style>


