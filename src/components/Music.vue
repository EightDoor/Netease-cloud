<template>
  <div id="Music">
    <HomePage></HomePage>
    <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="发现"/>
    <mu-tab value="tab2" title="我的"/>
    <mu-tab value="tab3" title="电台"/>
  </mu-tabs>
    <div v-if="activeTab === 'tab1'">
        <swiper class="swipercontainer" :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide class="swiper-slide" v-for="(item,index) in banners" :key="index">  <img :src="item.pic" alt="">
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="content-list">
            <ul>
              <li>
                <div><i class="iconfont icon-icon--"></i></div>
                <div>私人FM</div>  
              </li>
              <li>
                <div><i class="iconfont icon-rili"></i></div>
                <div>每日推荐</div>  
              </li>
              <li>
                <div><i class="iconfont icon-icon-"></i></div>
                <div>歌单</div>  
              </li>
              <li>
                <div><i class="iconfont icon-paixingbang"></i></div>
                <div>排行榜</div>  
              </li>
            </ul>
            <div style="clear:both"></div>
        </div>
        <div>
          <a href="#" style="color:black;font-size:14px;border-left:3px solid rgb(211,59,50);padding-left:15px;margin-top:20px;display:block;margin-bottom:15px">推荐歌单 <i style="font-size:10px" class="iconfont icon-youjiantou"></i></a>
        </div>
        <div class="RecommendedList">
          <ul>       
              <li v-for="(val,index) in Recommended" :key="index">
               <router-link to="/songlist" >
              <a href="javascript:void(0)" @click="SongDetailsIndex(val.id)">
             <img :src="val.picUrl" :alt="val.name">  
            <div class="RecommendedListDiv">
              {{val.name | Intercept(val.name)}}
             </div> 
             <div class="RecommendedList-position">
                <i class="iconfont icon-erji"></i> <span>{{val.playCount |playCount(val.playCount)}}</span>
             </div>
             </a>
             </router-link>
            </li>
          </ul>
        </div>
    </div>
    <div v-if="activeTab === 'tab2'">
      这是tab2
      <br>
      <br>
    </div>
    <div v-if="activeTab === 'tab3'">
      这是tab3s
    </div>
  </div>
</template>
<script>
import Vue from "vue"
import axios from "axios"
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from "vuex"
import { mapMutations } from "vuex"
import { mapActions }  from "vuex"
import { Indicator } from 'mint-ui'
import HomePage from "./public/HomePage"
Vue.filter("Intercept",function(val){
 return  val.substr(0,15)
});
Vue.filter("playCount",function(val){
  var MathVal = Math.round(val); //四舍五入
  if(MathVal.toString().length>5){
    return MathVal.toString().substr(0,MathVal.toString().length-4)+"万";
  }else {
    return MathVal;
  }
});
    export default {
      data () {
        return {
          activeTab:'tab1',
          swiperOption: {  
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
          notNextTick: true,
          autoplay:{ //自动播放
            delay:2000,
            stopOnLastSlide:false,
            disableOnInteraction: false,
          },
          pagination: { //分页器
          el: '.swiper-pagination',
          },  
          slidesPerView: 'auto',  
          centeredSlides: true,  
          paginationClickable: true,  
          spaceBetween: 30,  
          onSlideChangeEnd: swiper => {  
          //这个位置放swiper的回调方法  
          this.page = swiper.realIndex+1;  
          this.index = swiper.realIndex;  
          }  
        }
        }
      },
      components:{
        swiper,
        swiperSlide
      },
      computed:{
        swiper(){
          return this.$refs.mySwiper.swiper;
        },
        ...mapState([
          'count',
          "Recommended",
          "banners",
        ]),
      },
      methods:{
        handleTabChange (val) {
          this.activeTab=val;
        },
        SongDetailsIndex(valIndex){
           this.$store.dispatch({
             type:'SongDetails',
             detailss:valIndex,
           }),
           this.$store.dispatch({
             type:'SongListComment',
             detailss1:valIndex
           });
          // this.$store.dispatch({
          // type:"SonglistDetailIds1",
          //   ChangeId:valIndex
          // })
        }
      },
      mounted () {
        //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
         this.swiper.slideTo(5, 1000, true);
        // axios.get("http://127.0.0.1:3000/banner").then(function(response){
        //   this.banners=response.data.banners;
        // }.bind(this)).catch(function(error){
        //   console.log(error)
        // }),
        this.$store.dispatch("fistTj");
        this.$store.dispatch("banner");
      },
      components:{
        HomePage
      }
    }
</script>
<style scoped lang="scss">
$link:rgb(87,87,87);
$img:rgb(210,48,37);
$tabs:white;
$ul-li:rgb(213,73,65);
$swiper-width:300px;
$Absolutely:100%;
$ul-i:10px;
$ul-lu-bottom:rgb(231,233,232);
$RecommendedList-img:245px;
@mixin border-1($a,$b,$c){
  border:$a $b $c;
}
 .img {
   background:$img
 }
 .mu-tab-link {
   color:$link
 }
 .mu-tabs {
   background-color:$tabs;
 }
 .mu-tab-active {
   color:$img
 }
.swipercontainer {
  width:100%;
  height:$swiper-width;
  .swiper-slide {
    width:100%;
    height:$swiper-width;
    img {
      width:100%;
      height:$swiper-width
    }
  }
  .swiper-pagination-bullet {
     background:#ccc;
      .swiper-pagination-bullet-active {
        background:red
      }
   }
}
  .content-list {
    border-bottom:1px solid $ul-lu-bottom;
    ul li {
      float:left;
      width:$Absolutely/4;
      text-align:center;
      padding-top:$swiper-width/10;
      padding-bottom:$swiper-width/10;
      &:hover {
        div:nth-child(1){
          background:$ul-li;
        };
        div:nth-child(1){
          i{
          color:white;
          }
        }
      }
    }
    ul li div:nth-child(1) {
      width:$swiper-width/3;
      height:$swiper-width/3;
      border:2px solid $ul-li;
      border-radius:$Absolutely/2;
      line-height:$swiper-width/3;
      text-align:center;
      margin:0px auto;
      i {
        color:$ul-li;
        font-size:$ul-i*5
      }
    }
    ul li div:nth-child(2) {
      padding-top:$swiper-width/30;
    }
  }
  .RecommendedList {
    ul {
      li{
        a{
          color:black;
        }
      }
    }
    ul li {
      width:$Absolutely/3.1;
      float:left;
      margin-right:5px;
      height:$ul-i*36;
      position:relative;
      img {
        width:$Absolutely;
        height:$RecommendedList-img;
      };
      .RecommendedListDiv{
        height:$ul-i*6;
        padding-top:$ul-i;
        padding-left:$ul-i;
        padding-bottom:$ul-i*3;
      }
      i {
        color:white
      }
      .RecommendedList-position {
        position:absolute;
        right:3px;
        top:3px;
        color:white;
      }
    }
  } 
</style>

