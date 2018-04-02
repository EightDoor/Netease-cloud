<template>    <!--推荐歌单列表-->
  <div id="SongList">
      <div class="SongList-top" >
          <div class="SongListNav">
              <ul class="SongListNavFixed">
                  <li @click="change"><i class="iconfont icon-sdf"></i></li>
                  <li class="SongListNav-li-2">
                      <div class="SongListNav-colums">
                        歌单
                      </div>
                      <div class="SongListNav-details ignore">
                        编辑推荐,哪一部你最钟爱？
                      </div>
                      <div style="clear:both"></div>
                  </li>
                  <li><i class="iconfont icon-sousuo"></i></li>
                  <li><i class="iconfont icon-diandian"></i></li>
                  <div style="clear:both"></div>
              </ul>
              <div class="SongList-bottom" v-if="ShowSongList">
                  <div  class="SongList-bottom-info">
                        <div class="SongList-bottom-info-left">
                               <img :src="SonglistAvatarUrl" alt="">
                        </div>
                        <div class="SongList-bottom-info-right">
                                <div class="SongList-bottom-info-right-1">
                                    {{ SongListSignature | character(SongListSignature) }}
                                </div>
                                <div class="SongList-bottom-info-right-2">
                                    {{ SongListNickname }} >
                                </div>
                        </div>
                        <div style="clear:both"></div>
                  </div>
                  <ol class="SongList-bottom-ul-li" >
                      <li>
                          <div>
                              <i @click="showSnackbar" class="iconfont icon-shoucang"></i>
                               <mu-snackbar v-if="snackbar" :message="message" action="关闭" @actionClick="hideSnackbar" @close="hideSnackbar"/>
                          </div>
                          <div>{{SongListSubscribedCount}}</div>
                     </li>
                       <li>
                          <router-link to="/comment">
                          <div >
                              <i class="iconfont icon-pinglun"></i>
                          </div>
                          <div>{{successtotal}}</div>
                          </router-link>
                     </li>
                      <li>
                          <div>
                              <i class="iconfont icon-fenxiang"></i>
                          </div>
                          <div>{{SongListShareCount}}</div>
                     </li>
                      <li>
                          <div>
                              <i class="iconfont icon-xiazai"></i>
                          </div>
                          <div>下载</div>
                     </li>
                      <div style="clear:both"></div>
                  </ol>
              </div>
          </div>
      </div>
      <div class="SongList-play" v-if="ShowSongList">
          <div class="SongList-play-1">
              <div><i class="iconfont icon-bofang1"></i></div>
              <div class="SongList-play-2">播放全部<span> {{ SongListTracksName | SongListTracksNameLimt(SongListTracksName)}} 首</span></span></div>
              <div class="SongList-play-3">
                  <router-link to="/listselection" style="color:rgb(48,49,49)">
                 <div>
                      <i class="iconfont icon-caidan1"></i>
                 </div>
                 <div>
                    多选
                 </div>
                 </router-link>
                 <div style="clear:both"></div>
              </div>
          </div>
          <div style="clear:both"></div>
          <dl class="SongList-play-ol">
              <dt></dt>
              <dd @click="ChangeId(val.id,index)" v-for="(val,index) in SongListTracksName" :key="index">
                 <touch-ripple class="touch-ripple" id="touch-ripple">
                      <div class="SongList-play-ol-1-1" >
                      {{index+1}}
                  </div>
                    <div class="SongList-play-ol-1-2">
                    <i class="iconfont icon-laba " style="color:red"></i>
                    </div>
                  <div class="SongList-play-ol-1-1" v-if="SongListPlay">
                      <i class="iconfont icon-laba" style="color:red"></i>
                  </div>
                  <div class="SongList-play-ol-div">
                      <div class="SongList-play-ol-2">
                        <div>
                            {{val.name | SongListName(val.name)}}
                        </div>
                        <div>{{val.album.name |ValAlbum}} -{{val.artists[0].name |ValArtists}}</div>
                  </div>
                  <div class="SongList-play-ol-3">
                      <i class="iconfont icon-diandian"></i>
                  </div>
                 </div>
                  <div style="clear:both"></div>
                 </touch-ripple>
              </dd>
          </dl>
      </div>
       <vue-loading style="position:fixed;left:45%;top:40%" v-if="ShowLoading" type="bars" color="#d9544e" :size="{ width: '30px', height: '30px' }"></vue-loading>
  </div>
</template>
<script>
import vueLoading from 'vue-loading-template'
import Vue from "vue"
import { Indicator } from "mint-ui"
Vue.filter("character",function(val){
    if(val.length>20){
        return val.substr(0,20)+"..."
    }else{
        return val
    }
})
Vue.filter("SongListName",function(valName){
    if(valName.length>20){
        return valName.substr(0,20)+"..."
    }else {
        return valName;
    }
})
Vue.filter("SongListTracksNameLimt",function(val){
    return val.length;
})
import { mapState } from "vuex"
    export default {
        data () {
            return {
                avatarUrl:'',
                snackbar:false,
                message:'收藏成功',
                colour:true,
                SongListPlay:false,
                SonglistIndex1:true,
                ShowLoading:true,
                ShowSongList:false,
                SonglistIndex2:false,
            }
        },
       computed:{
           ...mapState([
               "SonglistAvatarUrl",
               "SongListSignature",
               "SongListNickname",
               "SongListTracksName",
               "successhot",
               "successtotal",
               "ChangeId111",
               "SongListShareCount",
               "SongListSubscribedCount",
               "ChangeIddd",
               "SongListChangeIdNews",
               "SonglistDetailIdsNews",
           ]),
       },
       methods:{
           change(){
               this.$router.back(-1);
           },
            showSnackbar () {
            this.snackbar = true
            if (this.snackTimer) clearTimeout(this.snackTimer)
            this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
            },
            hideSnackbar () {
            this.snackbar = false
            if (this.snackTimer) clearTimeout(this.snackTimer)
            },
            ChangeId(val,index){
            let arrar_2 = document.getElementsByClassName("SongList-play-ol-1-1")[this.ChangeIddd];
                arrar_2.style.cssText= "display:block";
            let arrar_4 = document.getElementsByClassName("SongList-play-ol-1-2")[this.ChangeIddd];
                arrar_4.style.cssText = "display:none"
                this.$store.dispatch({
                    type:"SongListChangeId",
                    ChangeId:val
                });
                this.$store.dispatch({
                    type:"SonglistDetailIds",
                    ChangeId:val
                });
                this.$store.dispatch({
                    type:"SongListChangeIdddd",
                    index:index
                })
            let arrar_1 = document.getElementsByClassName("SongList-play-ol-1-1")[index];
                arrar_1.style.cssText = "display:none"
            let arrar_3 = document.getElementsByClassName("SongList-play-ol-1-2")[index];
                arrar_3.style.cssText = "display:block"
            },
            
       },
       filters:{
           ValAlbum(val){
                if(val.length>20){
                    return val.substr(0,15)
               }else{
                   return val;
               }
           },
           ValArtists(val1){
               if(val1.length>20){
                   return val1.substr(0,10)
               }else {
                   return val1;
               }
           }
       },
       watch:{
        SongListTracksName(val,oldval){
               this.$store.dispatch({
                   type:"SongListPlayList100",
                   valName:val
               });
               this.ShowLoading=false;
               this.ShowSongList=true;
           },
           
       },
       components:{
           "vue-loading":vueLoading
       },
       updated(){
        if(this.SonglistDetailIdsNews==this.SongListChangeIdNews){
            let arrar_5 = document.getElementsByClassName("SongList-play-ol-1-2")[this.ChangeIddd];
            let arrar_6 = document.getElementsByClassName("SongList-play-ol-1-1")[this.ChangeIddd];
            arrar_5.style.cssText = "display:block";
            arrar_6.style.cssText = "display:none";
        }
       },
       beforeRouteLeave(to, from, next) {
          this.$store.commit("SonglistShow124");
          next();
       }
    }
</script>
<style scoped lang="scss">
$SongList-Height:100px;
$SongList-li:85px;
$SongList-img:380px;
$SongList-right:300px;
$SongList-bottom-ul-li:100%;
$SongLis-play-2:10px;
$SongLis-play-1:120px;
    .SongList-top{
        background:linear-gradient(90deg,rgb(146,129,121),rgb(112,96,93));
        .SongListNav {
            padding:$SongList-Height/10;
            ul li {
                width:$SongList-li;
                float:left;
                height:$SongList-Height;
                line-height:$SongList-Height;
                text-align:center;
                i{
                    font-size:50px;
                    color:white
                }
            }
        .SongList-bottom{
            margin-top:$SongList-Height;
        }
        .SongList-bottom-info {
            padding:20px;
            .SongList-bottom-info-left {
                float:left;
                img {
                width:$SongList-img;
                height:$SongList-img;
                 }
            }
            .SongList-bottom-info-right {
                float:left;
                height:$SongList-img;
                padding:$SongList-Height/5;
                width:$SongList-right;
                .SongList-bottom-info-right-1{
                    font-size:25px;
                    color:white
                };
                .SongList-bottom-info-right-2{
                    padding-top:$SongList-img/5;
                    color:rgb(231,228,227)
                }
            }
        }
        .SongListNav-li-2 {
            width:$SongList-Height*4.75;
            text-align:left;
            line-height:50px;
            .SongListNav-colums {
                font-size:40px;
                color:white;
            }
            .SongListNav-details {
                font-size:25px;
            }
         }
        }
        .SongList-bottom-ul-li {
            li {
            width:$SongList-bottom-ul-li/4;
            text-align:center;
            float:left;
            div i {
                color:white;
                font-size:50px;
                &:hover {
                    color:#ccc
                }
            }
            div:nth-child(2) {
                color:rgb(231,228,227);
            }
            }
        }
    }
    .SongList-play {
        background:rgb(242,244,245);
        .SongList-play-1 {
            float:left;
            height:$SongLis-play-1;
            line-height:$SongLis-play-1;
           
            div:nth-child(1){
                float:left;
                padding-left:$SongLis-play-2*4;
                padding-right:$SongLis-play-2*4;
            };
            div:nth-child(2){
                float:left
            } 
            i {
                font-size:$SongList-Height/2.5;
                margin-top:10px;
            }
            .SongList-play-2 {
                font-size:$SongLis-play-2*3.5;
                color:rgb(48,49,49);
                span {
                    color:rgb(145, 146, 147)
                }
            }
            .SongList-play-3 {
                float:right;
                line-height:$SongLis-play-1;
                font-size:30px;
            }
        }
        .SongList-play-3 {
            div:nth-child(1){
                float:left;
                padding-left:$SongList-Height*2.6;
                padding-right:0px;
            };
            div:nth-child(2) {
                float:left;
            }
        }
        .SongList-play-ol {
            li {
                height:$SongLis-play-2*10;
                border-bottom:1px solid rgb(218,220,221);
            }
          .SongList-play-ol-1-1 {
              float:left;
              line-height:$SongLis-play-2*10;
              padding-left:$SongLis-play-2*3;
              padding-right:$SongLis-play-2*3;
          };
          .SongList-play-ol-2 {
              float:left;
              line-height:$SongLis-play-2*4;
              padding-top:15px;

              div:nth-child(1) {
                  span{
                      color:rgb(145, 146, 147);
                  }
              }
              div:nth-child(2) {
                  font-size:25px;
                  color:rgb(121, 122, 123);
              }
          };
          .SongList-play-ol-3 {
              float:right;
              color:rgb(145, 146, 147);
              margin-right:$SongLis-play-2*6;
              line-height:$SongLis-play-2*10;
          }
        }
    }
    .SongList-play-ol-div {
        border-bottom:1px solid rgb(218, 220, 221);
    }
    .SongListNavFixed {
        position:fixed;
        z-index:10;
        background:linear-gradient(90deg,rgb(146,129,121),rgb(112,96,93));
       width:100%;
       margin:-$SongList-Height/10;
    }
    .touch-ripple{
        width:100%;
        height:100%;
    }
    .SongList-play-ol-1-2{
        display:none;
        @extend .SongList-play-ol-1-1;

    }
</style>

