<template>
  <div id="ListComment11">
      <div class="top-1" >
          <ul>
              <li><i @click="change()" class="iconfont icon-sdf"></i></li>
              <li>评论<span v-if="ShowReview41">({{SongReview4}})</span></li>
              <div style="clear:both"></div>
          </ul>
      </div>
        <div @click="change()" class="bottom-1" v-if="ShowSonglist" >
            <div class="bottom-img-left">
                <img :src="SonglistDetailIds1" alt="">
                <div class="bottom-img-left-1">
                    <div>
                        {{PlayerJ}}
                    </div>
                    <div>
                        {{SonglistDetailIds2}}
                    </div>
                </div>
                <div style="clear:both"></div>
            </div>
            <div class="bottom-img-right">
                <i class="iconfont icon-youjiantou"></i>
            </div>
            <div style="clear:both"></div>
        </div>
        <div class="middle" v-if="transition">
            精彩评论
        </div>
        <ul class="ul-li" v-if="ShowSonglist">
            <li v-for="(val,index) in SongReview1" :key="index">
                    <ul class="ul-li-1">
                        <li><img :src="val.user.avatarUrl" alt=""></li>
                        <li class="ul-li-4">
                            <div>{{val.user.nickname}}</div>
                            <div>{{val.time | TimeVal(val.time)}}</div>
                        </li>
                        <li class="ul-li-3">{{val.likedCount}} <i class="iconfont icon-like"></i></li>
                        <div style="clear:both"></div>
                    </ul>
                <div class="ul-li-2" >
                    {{val.content}}
                </div>
            </li>
        </ul>
        <div class="middle" v-if="ShowSonglist">
        最新评论({{SongReview4}})
        </div>
         <ul class="ul-li" v-if="ShowSonglist">
            <li v-for="(val,index) in SongReview2" :key="index">
                    <ul class="ul-li-1">
                        <li><img :src="val.user.avatarUrl" alt=""></li>
                        <li class="ul-li-4">
                            <div>{{val.user.nickname}}</div>
                            <div>{{val.time | TimeVal(val.time)}}</div>
                        </li>
                        <li class="ul-li-3">{{val.likedCount}} <i class="iconfont icon-like"></i></li>
                        <div style="clear:both"></div>
                    </ul>
                <div class="ul-li-2">
                    {{val.content}}
                    <div class="ul-li-5" v-for="(val1,index1) in val.beReplied" :key="index1">
                        <span>@{{val1.user.nickname}}</span>:{{val1.content}}
                    </div>
                </div>
            </li>
            <!--评论加载。。。-->
            <div v-for="(val1,index1) in successcomments1" :key="index1+111">
            <li v-for="(val,index) in val1" :key="index">
                    <ul class="ul-li-1">
                        <li><img :src="val.user.avatarUrl" alt=""></li>
                        <li class="ul-li-4">
                            <div>{{val.user.nickname}}</div>
                            <div>{{val.time | TimeVal(val.time)}}</div>
                        </li>
                        <li class="ul-li-3">{{val.likedCount}} <i class="iconfont icon-like"></i></li>
                        <div style="clear:both"></div>
                    </ul>
                <div class="ul-li-2">
                    {{val.content}}
                    <div class="ul-li-5" v-for="(val1,index1) in val.beReplied" :key="index1">
                        <span>@{{val1.user.nickname}}</span>:{{val1.content}}
                    </div>
                </div>
            </li>
            </div>
        </ul>
         <mu-snackbar v-if="snackbar" message="加载完成" action="关闭" @actionClick="hideSnackbar" @close="hideSnackbar"/>
         <vue-loading  style="position:fixed;left:45%;top:40%" v-if="ShowLoading" type="bars" color="#d9544e" :size="{ width: '30px', height: '30px' }"></vue-loading>
         <mu-infinite-scroll :scroller="scroller11" :loading="loading11" :loadingText="loadingText11" @load="loadMore11"/> <!--出现错误问题-->
  </div>
</template>
<script>
import { formatDate } from "../components/public/data"
import Vue from "vue"
import vueLoading from 'vue-loading-template'
import { mapState } from "vuex"
import { mapGetters } from "vuex"
    export default {
        data () {
            return {
               transition:false,
               loading11:false,
               scroller11:null,
               num:1,
               successcomments1:[],
               snackbar: false,
                loadingText11:"加载中...",
                ShowLoading:false,
                ShowSonglist:false,   //评论内容
                ShowReview41:false, 
                ShowLoading:true,  //评论总数
            }
        },
        methods:{
            change(){
                this.$router.back(-1);
                this.$store.dispatch({
                    type:"SongDetails",
                    detailss:this.SongListDetailsId
                });
                this.$store.commit("SonglistShow124");
            },
            loadMore11 () {
            this.loading11=true;
            var  loading12 = this.loading11;
            var  Num=this.num;
                setTimeout(()=>{
                if(Math.ceil(this.SongReview4/20)>=Num){
                    this.num+=1;
                    this.successcomments1.push(this.SongReview2);
                    this.$store.dispatch({
                    type:"SongRevieww",
                    value22:Num,
                    })
                }else{
                        this.snackbar = true
                        if (this.snackTimer) clearTimeout(this.snackTimer)
                        this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
                        this.loading11=false;
                        return;
                }
                this.loading11=false;
                },2000)
            },
                hideSnackbar () {
                this.snackbar = false
                if (this.snackTimer) clearTimeout(this.snackTimer)
                }
        },
        computed:{
            ...mapState([
                "SongListDetailsId",
                "SonglistDetailIds1",
                "SonglistDetailIds2",
                "SongReview4",
                "SongReview1",
                "SongReview2",
            ]),
            ...mapGetters([
                "PlayerJ"
            ])
        },
        filters:{
            TimeVal (val){
                var date=new Date(val);
                return formatDate(date,"yyyy-MM-dd hh:mm");
            }
        },
        mounted(){
            if(this.SongReview1.length>0){
                this.transition = true;
            }else{
                this.transition = false;
            };
            this.scroller11 = this.$el;
        },
        created(){
            this.$store.dispatch({
            type:"SongRevieww",
            })
        },
        components:{
        "vue-loading":vueLoading
        },
        watch:{
           SongReview2(val,oldval){
               let _this=this;
               setTimeout(function(){
                _this.ShowLoading = false;
                _this.ShowSonglist = true;
                _this.ShowReview41 = true; 
               },500)
           } 
        }
    }
</script>
<style scoped lang="scss">
$top:100px;
$bottom:50px;
$bottom-left:40px;
$top-background:rgb(211,58,49);
$bottom-bottom:770px;
$bottom-10:10px;
#ListComment11{
    overflow:hidden;
}
.top-1{
    position:fixed;
    width:100%;
    background:$top-background;
    height:$top;
    overflow:hidden;
    >ul>li {
        float:left;
        line-height:$top;
        font-size:$top/3;
        color:white;
        padding-left:$top/3;
        i {
            font-size:$top/2.3;
            font-weight:bold;
        }
    }
}
.bottom-1{
    background:rgb(242,244,245);
    height:$bottom*5;
    padding:$top/4;
    margin-top:$top;
    .bottom-img-left {
        float:left;
        img {
            width:$top*2;
            height:$top*2;
            display:block;
            float:left;
        }
        .bottom-img-left-1 {
            float:left;
            div:nth-child(1) {
               width:$top*4.5;
               height:$bottom*3;
               padding:$bottom-left/2;
            };
            div:nth-child(2) {
                padding:$bottom-left/2;
                padding-top:0px;
            }
            
        }
    }
    .bottom-img-right {
        float:right;
        line-height:$top*2;
        font-weight: bold;
        color:rgb(170,171,172)
    }
}
.middle {
    height:$bottom-10*7;
    background:rgb(231,233,233);
    line-height:$bottom-10*7;
    font-size:$bottom-10*3;
    color:rgb(92,93,93);
    text-indent:$bottom-10*2;
}
.ul-li {
    background:rgb(242,244,245);
    .ul-li-1 {
        >li{
            height:$bottom-10*14;
            float:left;
        }
        img {
            width:$bottom-10*10;
            height:$bottom-10*10;
            margin:$bottom-10;
            border-radius: 50%;
        };
        .ul-li-3 {
            float:right;
            padding-top:$bottom-10*2;
            padding-right:$bottom-10*2;
        }
    }
    .ul-li-4 {
        div:nth-child(1) {
            padding-top:$bottom-10*2;
            color:rgb(97,97,98);
        };
        div:nth-child(2){
            padding-top:$bottom-10*1;
            color:rgb(145,146,147)
        }
    }
   .ul-li-2 {
       margin-left:$bottom-10*12;
       margin-right:$bottom-10*5;
       margin-top:$bottom-10*2;
       padding-bottom:$bottom-10*2;
       border-bottom:1px solid rgb(231,233,233);
       .ul-li-5{
           padding:$bottom-10/2;
           background:white;
           font-size:$bottom-10*3;
           >span{
               color:rgb(80,125,175);
           }
       }
   }
}
</style>

