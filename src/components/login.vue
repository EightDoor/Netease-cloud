<template>
  <div id="login">
     <div class="count"> 
         <div class="count-logo">
             {{msg}}
         </div>
         <div class="phome">
             手机号登陆
         </div>
         <div class="register">
             注册
         </div>
         <span class="span">其他登陆方式</span>
         <div class="mail">
             网易邮箱
         </div>
     </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                msg:'网易云音乐'
            }
        },

    }
</script>
<style lang="scss" scoped>
$logo-W:188px;
$background:#ccc;
$background-color:red;
$margin-left:281px;
$margin-top:100px;
$margin-10:10px;
$color-Rgb:rgb(200,0,0);
@mixin radius-logo($radius) {
    border-radius:$radius;
};
  #login {
      overflow:hidden;
  }
  .count {
    background:$background;
    overflow:hidden;
    height:1334px;
  }
  .count-logo {
    width:$logo-W;
    height:$logo-W;
    background-color:$background-color;
    @include radius-logo(30px);
    margin-left:$margin-left;
    margin-top:$margin-top*2;
    margin-bottom:$margin-top*2;
    line-height:$logo-W;
    font-size:$margin-10*3;
    text-align:center
    }
  .phome {
      width:610px;
      height:80px;
      border:1px solid $color-Rgb;
      border-radius:20px;
      line-height:80px;
      text-align:center;
      color:$color-Rgb;
      margin-left:70px;
      margin-bottom:20px;
  }
  .register {
      @extend .phome
  }
  .span {
      font-size:$margin-10;
      text-align:center;
      width:100%;
      display:inline-block;
      text-decoration:underline;
      margin-top:$margin-top*3;
  }
  .mail {
      border:1px solid $color-Rgb;
      width:$margin-top*2;
      height:$margin-10*7;
      line-height:$margin-10*7;
      text-align:center;
      font-size: $margin-10*2;
      margin-top:$margin-10*3
  }
</style>
