<template>
  <div id="PLayer">
      <div class="Player-top">
          <ul>
              <li @click="PlayerBack"><i class="iconfont icon-sdf"></i></li>
              <li>
                  <div>{{PlayerJ}}</div>
                  <div>{{SonglistDetailIds2}}<span> ></span></div>
              </li>
              <li><i class="iconfont icon-yduifenxiang3"></i></li>
              <div style="clear:both"></div>
          </ul>
      </div>
      <div class="Player-middle">
          <div class="Player-Record">
              <div class="Player-Record-1" id="Player-Record-1">
                  <div class="Player-Record-2">
                      <img :src="SonglistDetailIds1" alt="">
                  </div>
              </div>
          </div>
      </div>
      <div class="Player-comment">
          <ul>
              <li><i class="iconfont icon-xin"></i></li>
              <li><i class="iconfont icon-plus-download"></i></li>
              <router-link to="/Acomment"><li><i class="iconfont icon-pinglun"></i><div class="div999">{{SongReview3}}</div></li></router-link>
              <li><i class="iconfont icon-diandian"></i></li>
              <div style="clear:both"></div>
          </ul>
      </div>
      <div class="Playback-bar">
       <div style="font-size:10px;">{{SongListPLayerCount}}</div><mu-slider v-model="value1222" :disabled="true" :step="0.01" class="demo-slider"/>
        <div class="Player-bar-1">{{SongListPLayerTotalTime}}</div>
        <div style="clear:both"></div>
      </div>
      <div class="Controller">
          <ul>
              <li><i class="iconfont icon-danquxunhuan"></i></li>
              <li><i class="iconfont icon-iconset0423"></i></li>
              <li><i class="iconfont icon-bofang"></i></li>
              <li><i class="iconfont icon-iconset0424"></i></li>
              <li><i class="iconfont icon-liebiao8"></i></li>
              <div style="clear:both"></div>
          </ul>
      </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
import { mapGetters } from "vuex"
    export default {
        data(){
            return {
                tranformRoutate:0
            }
        },
        computed:{
             ...mapState([
                 "SonglistShow",
                 "SongListDetailsId",
                 "SonglistDetailIds1",
                 "SonglistDetailIds2",
                 "SonglistDetailIds3",
                 "SongListPLayerCount",
                 "SongListPLayerTotalTime",
                 "SongListPLayerTotalTime1",
                 "value1222",
             ]),
             ...mapGetters([
                 "PlayerJ",
                 "SongReview3"
             ]),
        },
        methods:{
            PlayerBack(){
                this.$router.back(-1);
                this.$store.dispatch({
                type:"SongDetails",
                detailss:this.SongListDetailsId
                });
                this.$store.commit("SonglistShow123");
            },
        },
        created(){
            this.$store.commit("SonglistShow124")
        },
        mounted(){
            let _this = this;
            setInterval(function(){
            let brr = document.getElementById("Player-Record-1");
            brr.style.cssText = "transform:rotate("+_this.tranformRoutate+"deg)";
            _this.tranformRoutate+=10;
            },300)
        }
    }
</script>
<style lang="scss" scoped>
$Player-100:100px;
$Player-10:10px;
#PLayer{
    width:100%;
    height:100%;
    background:linear-gradient(top,#5c6767,#422f32);
    overflow:hidden;
}
.Player-top{
    width:100%;
    height:$Player-100;
    margin-top:$Player-10;
    border-bottom:2px solid #534d60;
    >ul{
    >li:nth-child(2){
        width:$Player-100*5;
        >div:nth-child(1){
            height:$Player-10*6;
            line-height:$Player-10*6;
            width:100%;
            font-size: $Player-10*3.2;
            color:white;
            overflow:scroll;
        };
        >div:nth-child(2){
            height:$Player-10*4;
            line-height:$Player-10*4;
            font-size:$Player-10*2.4;
            color:#868391
        }
    }
    >li{
        float:left;
    >i{
        font-size: $Player-100/2;
        color:white;
        line-height:$Player-100;
        padding-left:$Player-10*3;
        padding-right:$Player-10*3;
      }
     }
    }
}
.Player-middle{
    height:$Player-100*6.8;
    width:100%;
    .Player-Record{
        width:$Player-100*5;
        height:$Player-100*5;
        margin:0px auto;
        margin-top:$Player-100*1.6;
        border-radius:50%;
        background:#76766e;
        overflow:hidden;
        padding:$Player-10;
    };
    .Player-Record-1{
        width: 100%;
        height:100%;
        background:#101012;
        margin:0px auto;
        border-radius:50%;
        padding:$Player-100/1.7;
        .Player-Record-2{
            width: 100%;
            height:100%;
            border-radius:50%;
            img{
                widows: 100% ;
                height:100%;
                border-radius:50%;
            }
        }
    }
}
.Player-comment{
    width:100%;
    height:$Player-100;
    text-align:center;
    >ul{ 
        width: $Player-100*6;
        margin:0px auto; 
    >li{
        float:left;
        width:25%;
        position:relative;
        >i{
            color:#c4c0c2;
            font-size:$Player-10*5.6;
            line-height: $Player-100;
        };
       }
    >a{
    display:block;
    >li{
        float:left;
        width:25%;
        position:relative;
        >i{
            color:#c4c0c2;
            font-size:$Player-10*5.6;
            line-height: $Player-100;
        };
         .div999{
        font-size:$Player-10*2;
        position:absolute;
        top:$Player-10*1.5;
        right:$Player-10*2.5;
        color:#c4c0c2;
        width: $Player-10*6;
        height:$Player-10*3;
        line-height: $Player-10*3;
        background:rgb(72,59,61);
        border-radius:50%;
        }        
       }
      }
     }
}
.Playback-bar{
    width:$Player-100*6.5;
    height:$Player-10*5;
    margin:0px auto;
    margin-top:$Player-10*3;
    color:white;
    .Player-bar-1 {
    float:right;margin-top:-107px;
    font-size:$Player-10*2;
     }
}
.Controller{
    height:$Player-100*2;
    width:100%;
    line-height:$Player-100*1.5;
    >ul{
        width:100%;
        margin:0px auto;
        >li{
            float:left;
            width: 20%;
            text-align:center;
            >i{
                font-size:$Player-10*6;
                color:#c4c0c2;
            }
        };
        >li:nth-child(3){
            >i{
                font-size:$Player-10*9;
            }
        }
    }
}
.demo-slider{
    width:$Player-100*5;
    margin-left:70px;
    top:-40px;
}
</style>

