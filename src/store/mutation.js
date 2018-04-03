export const mutations = {
    increment(state) {
        return state.count++
    },
    FISTSUCCESS(state, success) {
        state.Recommended = success
    },
    BANNERS(state, success) {
        state.banners = success
    },
    SONGDETAILSS(state, success) {
        state.SongDetailss = success;
    },
    SONGLISTAVATARURL(state, SonglistAvatarUrl) {
        state.SonglistAvatarUrl = SonglistAvatarUrl;
    },
    SONGLISTSIGNATURE(state, SongListSignature) {
        state.SongListSignature = SongListSignature;
    },
    SONGLISTNICKNAME(state, SongListNickname) {
        state.SongListNickname = SongListNickname;
    },
    SONGLISTTRACKNAME(state, SongListTracksName) {
        state.SongListTracksName = SongListTracksName
    },
    SONGLISTCOMMENTHOT(state, successhot) {
        state.successhot = successhot
    },
    SONGLISTCOMMENTTOTAL(state, successtotal) {
        state.successtotal = successtotal;
    },
    SUCCESSCOMMENTS(state, successcomments) {
        state.successcomments = successcomments;
    },
    PRESERVATION(state, arr) {
        state.Preservation = arr;
    },
    SUCCESSPRESERVATION(state, SuccessPreservation) {
        state.SuccessPreservation = SuccessPreservation
    },
    CHANGEID(state, ChangeId) {
        state.ChangeId111 = ChangeId;
    },
    SONGLISTSHARECOUNT(state, SongListShareCount) {
        state.SongListShareCount = SongListShareCount;
    },
    SONGLISTSUBSCRIBEDCOUNT(state, SongListSubscribedCount) {
        state.SongListSubscribedCount = SongListSubscribedCount;
    },
    SONGLISTDETAILIDS1(state, SonglistDetailIds1) {
        state.SonglistDetailIds1 = SonglistDetailIds1
    },
    SONGLISTDETAILIDS2(state, SonglistDetailIds2) {
        state.SonglistDetailIds2 = SonglistDetailIds2
    },
    SONGLISTDETAILIDS3(state, SonglistDetailIds3) {
        state.SonglistDetailIds3 = SonglistDetailIds3
    },
    SONGLISTDETAILIDS4(state, SuccessValName111) {
        state.SuccessValName111 = SuccessValName111;
    },
    SONGLISTTRACKNAME1(state, SongListTracksName1) {
        state.SongListTracksName1 = SongListTracksName1;
    },
    MSNUICLOSE(state, value) {
        state.SongListTracksName1.splice(value, 1);
    },
    SONGLISTMUSIC11(state, SongListMusic11) {
        state.SongListMusic11 = SongListMusic11;
    },
    SONGLISTDETAILSID(state, SongListDetailsId) {
        state.SongListDetailsId = SongListDetailsId;
    },
    CHANGEIDDD(state, ChangeIddd) {
        state.ChangeIddd = ChangeIddd
    },
    SONGLISTCHANGEIDNEWS(state, SongListChangeIdNews) {
        state.SongListChangeIdNews = SongListChangeIdNews
    },
    SONGLISTDETAILIDSNEWS(state,SonglistDetailIdsNews){
        state.SonglistDetailIdsNews = SonglistDetailIdsNews;
    },
    SonglistShow123(state){
        state.SonglistShow=true
    },
    SonglistShow124(state){
        state.SonglistShow=false;
    },
    SONGLISTCHANGEIDCHANGE(state,SonglistChangeIdChange){
        state.SonglistChangeIdChange = SonglistChangeIdChange;
    }
}