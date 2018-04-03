const getters= {
   PlayerJ(state){
    if(state.SonglistDetailIds3.length>10){
        return state.SonglistDetailIds3.substr(0,10)
    }else{
        return state.SonglistDetailIds3;
    }
  } 
}
export default getters