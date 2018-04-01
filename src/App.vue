<template>
  <div id="app">
   <router-view></router-view>
   <Globa-Player></Globa-Player>
  </div>
</template>
<script>
import GlobalPlayer from "./components/public/GlobalPlayer.vue"
import { mapState } from "vuex"
export default {
  name: "app",
  data() {
    return {
    };
  },
  components:{
    "Globa-Player":GlobalPlayer
  },
  computed:{
    ...mapState([
      "ChangeId111"
    ])
  },
};
</script>

<style scoped lang="scss">
 
</style>
