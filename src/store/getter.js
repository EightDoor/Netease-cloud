const getters = {
    PlayerJ(state) {
        if (state.SonglistDetailIds3.length > 30) {
            return state.SonglistDetailIds3.substr(0, 30)
        } else {
            return state.SonglistDetailIds3;
        }
    },
    SongReview3(state) {
        if (state.SongReview3 > 999) {
            return 999 + "+";
        } else {
            return state.SongReview3;
        }
    }
}
export default getters