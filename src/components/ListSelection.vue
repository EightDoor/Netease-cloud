<template>
  <div id="ListSelection">
      <ul class="ListSelection-top">
        <li @click="change()"><i class="iconfont icon-sdf"></i></li>
        <li>已选择0项</li>
        <li class="ListSelection-top-li" @click="chnageQx()">全选</li>
        <div style="clear:both"></div>
      </ul>

       <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height"
    :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
    :selectable="selectable" :showCheckbox="showCheckbox" :allRowsSelected="allRowsSelected">
    <mu-tbody>
      <mu-tr  v-for="(item,index) in SongListTracksName"  :key="index" >
        <mu-td >{{item.name}}</mu-td>
      </mu-tr>
    </mu-tbody>
  
  </mu-table>
  </div>
</template>
<script>
import { mapState } from "vuex"
    export default {
      data () {
    return {
      fixedHeader: true,
      fixedFooter: true,
      selectable: true,
      allRowsSelected:false,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckbox: true,
      height:'auto',
    }
  },
      methods:{
        change(){
          this.$router.back(-1);
          this.$store.dispatch({
          type:"SongDetails",
          detailss:this.SongListDetailsId
          })
        },
        chnageQx(){
          this.allRowsSelected=!this.allRowsSelected;
        },
      },
      computed:{
        ...mapState([
          "SongListTracksName",
          "SongListDetailsId"
        ])
      }
    }
</script>
<style scoped lang="scss">
$top:100px;
$li:10px;
.ListSelection-top{
  background:rgb(211,58,49);
  .ListSelection-top-li {
    float:right;
    padding-right:30px;
  }
  li {
    height:$top*1.2;
    line-height:$top*1.2;
    font-size:$top/3;
    color:white;
    font-weight: 100;
    background:rgb(211,58,49);
    float:left;
    padding-left:$li*3;
    i {
      font-size:$top/2.5;
      color:white
    }
  }
}
</style>

