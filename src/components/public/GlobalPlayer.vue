<template>
  <div id="GlobalPlayer">
      <div class="GlobalPlayer-1"  v-if="SonglistShow">
             <ul class="GlobalPlayer-2">
              <li><img :src="SonglistDetailIds1" alt="SonglistDetailIds2"></li>
               <router-link to="/player" tag="li">
              <li class="GlobalPlayer-21">
                  <div>
                      {{SonglistDetailIds3 | SonglistDetailIds3}}
                  </div>
                  <div>
                      {{SonglistDetailIds2 | SonglistDetailIds3}}
                  </div>
              </li>
            </router-link>
             <li @click="ChangePlaylist"><i class="iconfont icon-liebiao8"></i></li>
              <li ><i @click="ChangeBoFang" id="ChangeBoFang" class="iconfont icon-bofang"></i></li>
              <div style="clear:both"></div>
                <ol class="ChangePlaylist" id="ChangePlayList1">
                <div class="ChangePlaylist-11">
                    <div>
                        循序播放({{SongListTracksName1.length}})
                    </div>
                    <div @click="qingkongshanchu">
                       <i class="iconfont icon-delete"></i>
                    </div>
                    <div style="clear:both"></div>
                </div>
                <dl class="SongListMusic" v-for="(val,index) in SongListTracksName1" :key="index">
                    <dt></dt>
                    <dd>
                    <div @click="SongListMusic111(val.id)" class="SongListMusic-1">
                    {{val.name | SongListTracksNameGl}} <span>-{{val.artists
[0].name}}</span>
                    </div>
                    <div @click="MsnuiClose(index)" class="SongListMusic-2">
                    <i class="iconfont icon-msnui-close"></i>
                    </div>
                    <div style="clear:both"></div>
                    </dd>
                </dl>
                
                </ol>
                <div @click="GlobalPlayer10" class="GlobalPlayer-10" id="GlobalPlayer-10">
                </div>
          </ul>
      </div>
      <audio ref="audio" id="myAudio"></audio>
  </div> 
</template>
<script>
import Vue from "vue"
import { mapState } from "vuex"
    export default {
        data(){
            return {
               BoFang:true,
               ZanTing:false,
               currentTime:''
            }
        },
        computed:{
            ...mapState([
                "ChangeId111",
                "SonglistDetailIds1",
                "SonglistDetailIds2",
                "SonglistDetailIds3",
                "SuccessValName111",
                "SongListTracksName1",
                "SongListMusic11",
                "SongListDetailsId",
                "SonglistShow",
                "value1222",
                "SongListPLayerTotalTime1",
                "SongListPLayerCount"
            ]),
        },
        watch:{
        ChangeId111(val){
        let _this = this;
        this.$store.commit("SonglistShow123")
        var myAudio = document.getElementById("myAudio");
        myAudio.src = this.ChangeId111;
        myAudio.loop = true;
        myAudio.preload = true;
        myAudio.currentTime;
        myAudio.controls=false;
        this.$store.commit("Changeclick")
        this.$store.dispatch({
            type:"SonglistDetailIds1",
            ChangeId:this.SongListDetailsId
        })
        myAudio.addEventListener("loadeddata",function(){
         myAudio.play();
            let index11 = myAudio.duration;
            let minute = index11 /60;
            let minutes = parseInt(minute);
            if(minutes<10){
            minutes = "0"+minutes;
            }
            let second = index11 % 60;
            let seconds = parseInt(second);
            if(seconds<10){
            seconds = "0"+seconds;
            }
            let index12= ""+minutes+""+":"+""+seconds+"";
            _this.$store.commit("SongListPLayerTotalTime",index12);
            _this.$store.commit("SongListPLayerTotalTime1",index11);
         if(myAudio.play){
            setInterval(function array(){
            _this.currentTime =myAudio.currentTime;
            },1000);
            clearInterval();
         }
        });
         },
         SongListMusic11(val,oldVal){
             this.$refs.audio.src = val;
             this.$refs.audio.play();  //迷你的列表点击播放歌曲
         },
        currentTime(val){
        let minute = val /60;
        let minutes = parseInt(minute);
        if(minutes<10){
            minutes = "0"+minutes;
        }
        let second = val % 60;
        let seconds = parseInt(second);
        if(seconds<10){
            seconds = "0"+seconds;
        }
        let index1= ""+minutes+""+":"+""+seconds+"";
        this.$store.commit("SongListPLayerCount",index1)
         },
        SongListPLayerCount(val,oldvalue){
          let brr = 100/this.SongListPLayerTotalTime1+this.value1222;
          this.$store.commit("SongListvalue12",brr)
         }
        },
        methods:{
            ChangeBoFang(){
               if(this.$refs.audio.paused){
                   this.$refs.audio.play();
                   document.getElementById("ChangeBoFang").className="iconfont icon-bofang";
               }else{
                   this.$refs.audio.pause();
                    document.getElementById("ChangeBoFang").className="iconfont icon-zanting";
               }
            },
            ChangePlaylist(){
               var arr = document.getElementById("ChangePlayList1");
               arr.style.cssText = "display:block";
               var brr = document.getElementById("GlobalPlayer-10");
               brr.style.cssText = "display:block";
               document.body.style.height = "100vh";
               document.body.style["overflow-y"] = "hidden";

            },
            GlobalPlayer10(){
                var arr = document.getElementById("ChangePlayList1");
                arr.style.cssText = "display:none";
                var brr = document.getElementById("GlobalPlayer-10");
                brr.style.cssText = "display:none";
                document.body.style.height = "unset"
                document.body.style["overflow-y"] = "auto"  
            },
            MsnuiClose(val){
                this.$store.dispatch({
                    type:"MsnuiClose",
                    value:val
                })
            },
            qingkongshanchu(){
               this.$refs.audio.pause();
               this.$store.commit("SonglistShow124");
                document.body.style.height = "unset"
                document.body.style["overflow-y"] = "auto"  
            },
            SongListMusic111(val){
               this.$store.dispatch({
                   type:"SongListMusic11",
                   index:val
               });
                this.$store.dispatch({
                type:"SonglistDetailIds",
                ChangeId:val
                })
            },
        },
        filters:{
            SongListTracksNameGl(val){
                if(val.length>20){
                    return val.substr(0,20);
                }else{
                    return val;
                }
            },
            SonglistDetailIds3(val){
                if(val.length>10){
                    return val.substr(0,10)
                }else{
                    return val
                }
            }
        },
    }
</script>
<style scoped lang="scss">
$GlobalPlayer-100:100px;
$GlobalPlayer-10:10px;
.GlobalPlayer-1 {
    height:$GlobalPlayer-100;
    position:fixed;
    left:0px;
    bottom:0px;
    width:100%;
    background:white;
    ul{
        >li {
            float:left;
            img {
                width:$GlobalPlayer-10*8;
                height:$GlobalPlayer-10*8;
                padding:$GlobalPlayer-10/2;
                padding-top:$GlobalPlayer-10*2;
            }
        };
        >li:nth-child(2){
            padding:$GlobalPlayer-10;
            font-size:$GlobalPlayer-10;
            div:nth-child(1){
                padding-top:$GlobalPlayer-10/1.5;
            }
        };
        >li:nth-child(3){
            float:right;
            line-height:$GlobalPlayer-100;
            padding-right:$GlobalPlayer-10*3;
            i{
                font-size:$GlobalPlayer-10*4;
            }
        };
        >li:nth-child(4){
            float:right;
            line-height:$GlobalPlayer-100;
            padding-right: $GlobalPlayer-10*5;
            i{
                font-size:$GlobalPlayer-10*5;
            }
            i:nth-child(2){
                font-size:$GlobalPlayer-10*3;
            }
        }
    };
}
        .GlobalPlayer-2 {
        position:relative;
        .ChangePlaylist{
        padding-top:$GlobalPlayer-10*8;
        position:absolute;
        left:0px;
        bottom:0px;
        display:none;
        background:white;
        max-height:$GlobalPlayer-100*8;
        overflow:scroll;
        width:100%;
        height:1333;
        z-index:10;
        -webkit-overflow-scrolling: touch;
        >.ChangePlaylist-11{
            height:$GlobalPlayer-100;
            line-height:$GlobalPlayer-100;
            position: fixed;
            left:0px;
            bottom:$GlobalPlayer-100*7;
            height:$GlobalPlayer-10*10;
            width: 100%;
            background:white;
            >div:nth-child(1){
                float:left;
                padding-left:$GlobalPlayer-10*2;
            };
            >div:nth-child(2){
                float:right;
                padding-right:$GlobalPlayer-10*3;
            }
        };
        >li {
            border-top:1px solid rgb(219,219,219);
            height:$GlobalPlayer-100/1.5;
            line-height:$GlobalPlayer-100/1.5;
            margin-left:$GlobalPlayer-10*2;
        }
          }
          .GlobalPlayer-10 {
            position:fixed;
            left:0px;
            top:0px;
            background:black;
            height:1333px;
            width:100%;
            opacity:0.5;
            z-index:9;
            display:none;
          }

        }
        .SongListMusic{
            margin-left:$GlobalPlayer-10*2;
            border-top:1px solid rgb(219,219,219);
            line-height:$GlobalPlayer-10*7;
             .SongListMusic-1{
            span{
                font-size:$GlobalPlayer-10*2;
                color:rgb(122,122,122);
            };
            float:left;
             };
            .SongListMusic-2{
            display:block;
            float:right;
            padding-right:$GlobalPlayer-10*2.5;
            i{
                font-size:$GlobalPlayer-10*4;
             }
            }
        }
        .GlobalPlayer-21{
            div:nth-child(1){
                font-size:$GlobalPlayer-10*2.5;
            };
            div:nth-child(2){
                font-size:$GlobalPlayer-10*2;
            }
        }
</style>
