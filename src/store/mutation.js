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
    SONGLISTDETAILIDSNEWS(state, SonglistDetailIdsNews) {
        state.SonglistDetailIdsNews = SonglistDetailIdsNews;
    },
    SonglistShow123(state) {
        state.SonglistShow = true
    },
    SonglistShow124(state) {
        state.SonglistShow = false;
    },
    SONGLISTCHANGEIDCHANGE(state, SonglistChangeIdChange) {
        state.SonglistChangeIdChange = SonglistChangeIdChange;
    },
    SONGREVIEW1(state, SongReview1) {
        state.SongReview1 = SongReview1;
    },
    SONGREVIEW2(state, SongReview2) {
        state.SongReview2 = SongReview2;
    },
    SONGREVIEW3(state, SongReview3) {
        state.SongReview3 = SongReview3;
    },
    SONGREVIEW4(state, SongReview3) {
        state.SongReview4 = SongReview3;
    },
    SongListPLayerCount(state, index) {
        state.SongListPLayerCount = index;
    },
    SongListPLayerTotalTime(state, index) {
        state.SongListPLayerTotalTime = index;
    },
    SongListPLayerTotalTime1(state, index) {
        state.SongListPLayerTotalTime1 = index;
    },
    SongListvalue12(state, index) {
        state.value1222 = index;
    },
    Changeclick(state) {
        state.value1222 = 0;
    },
    TransformRoutate(state) {
        state.TransformRoutate += 0.1;
    },
    TransformRoutate1(state) {
        state.TransformRoutate = 0;
    },
    IconZanTing1(state) {
        state.IconZanTing = true;
    },
    IconBofang1(state) {
        state.IconBofang = false;
    },
    IconZanTing2(state) {
        state.IconZanTing = false;
    },
    IconBofang2(state) {
        state.IconBofang = true;
    },
    TransformChange11(state) {
        state.TransformChange = false;
    },
    TransformChange12(state) {
        state.TransformChange = true;
    }
}