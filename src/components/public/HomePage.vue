<template>
<div id="HomePage">
 <div class="bar">
    <ul>
        <li ><i class="iconfont icon-caidan1"></i></li>
        <router-link to="/move"><li class="bar-li "><touch-ripple class="ChangeTouch"><i class="iconfont icon-shipin"  ></i></touch-ripple></li></router-link>
        <router-link to="/music"><li class="bar-li "><touch-ripple class="ChangeTouch"><i  class="iconfont icon-yinle-yuanshijituantubiao"></i></touch-ripple></li></router-link>
        <router-link to="/user"><li class="bar-li "><touch-ripple class="ChangeTouch"><i class="iconfont icon-yonghubangding-copy"></i></touch-ripple></li></router-link>
        <li  class="bar-li"><i class="iconfont icon-sousuo"></i></li>
        <div style="clear:both"></div>
    </ul>
 </div>
 </div>
</template>
<script>
export default {
        data () {
            return {
                msg:'1',
                BarColor:"rgb(229,139,133)",
                color:"#fff",
            }
        },
        watch:{
            '$route'(to,from){
                console.log(to,from)
            }
        },  
    };
</script>
<style scoped lang="scss">
$bar-height:114px;
$bar-li-width:100%;
$bar-color:white;
.bar {
    background:rgb(211,28,49);
    width:$bar-li-width;
    height:$bar-height;
    ul {
        width:$bar-li-width;
    }
    ul li {
        float:left;
        width:$bar-li-width/5;
        text-align:center;
        height:$bar-height/2;
        line-height:$bar-height;
    }
    li i {
         font-size:$bar-height/2;
         color:$bar-color;
    }
    .bar-li{
        height:110px;
    i {
        color:rgb(229,139,133);
    }
  }
   .router-link-active{
     >li i {
        color:#fff
    }
}
}
.ChangeTouch{
   width:100%;
   height:100%;
}
</style>

