<template>
  <div id="PLayer">
      <div class="Player-top">
          <ul>
              <li><i class="iconfont icon-sdf"></i></li>
              <li>
                  <div>生命之枪（YT_Off）</div>
                  <div>Yt_offf<span> ></span></div>
              </li>
              <li><i class="iconfont icon-fenxiang"></i></li>
              <div style="clear:both"></div>
          </ul>
      </div>
      <div class="Player-middle">
          <div class="Player-Record">
              <div class="Player-Record-1">
                  <div class="Player-Record-2">

                  </div>
              </div>
          </div>
      </div>
      <div class="Player-comment">
          <ul>
              <li><i class="iconfont icon-xin"></i></li>
              <li><i class="iconfont icon-xiazai"></i></li>
              <li><i class="iconfont icon-pinglun"></i><div class="div999">999+</div></li>
              <li><i class="iconfont icon-diandian"></i></li>
              <div style="clear:both"></div>
          </ul>
      </div>
      <div class="Playback-bar">
          1:29 ---3:33
      </div>
      <div class="Controller">
          <ul>
              <li><i class="iconfont icon-danquxunhuan"></i></li>
              <li><i class="iconfont"></i></li>
          </ul>
      </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
import SongListVue from '../../../demo/demo033-4/src/components/SongList.vue';
    export default {
        data(){
            return {

            }
        },
        computed:{
             ...mapState([
                 "SonglistShow"
             ])
        },
        mounted(){
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
        >div{
            width:$Player-100*5;
        };
        >div:nth-child(1){
            height:$Player-10*6;
            line-height:$Player-10*6;
            font-size: $Player-10*3.2;
            color:white;
        };
        >div:nth-child(2){
            height:$Player-10*4;
            line-height:$Player-10*4;
            font-size:$Player-10*2;
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
            border:1px solid red;
            width: 100%;
            height:100%;
            border-radius:50%;
        }
    }
}
.Player-comment{
    width:100%;
    height:$Player-100;
    text-align:center;
    >ul>li{
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
        background:#443336;
        }
    }
}
.Playback-bar{
    width:$Player-100*6.7;
    height:$Player-10*5;
    border:1px solid red;
    margin:0px auto;
    margin-top:$Player-10*3;
    color:white;
}
.Controller{
    height:$Player-100*1.5;
    width:100%;
    border:1px solid red;
    line-height:$Player-100*1.5;
}
</style>

