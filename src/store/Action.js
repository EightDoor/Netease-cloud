import Vue from "vue"
import axios from "axios"
axios.defaults.baseURL = "http://123.206.19.106:3000/"
export const actions = {
    fistTj({ commit }) {
        axios.get("/personalized", { withCredentials: true }).then((response) => {
            let success = response.data.result
            commit("FISTSUCCESS", success)
        }).catch((error) => {
            alert("数据请求失败")
        })
    },
    banner({ commit }) {
        axios.get("/banner", { withCredentials: true }).then((response) => {
            let success = response.data.banners;
            commit("BANNERS", success)
        })
    },
    SongDetails({ commit }, Dvalue) {
        let SongListChangeIdNews = Dvalue.detailss;
        commit("SONGLISTCHANGEIDNEWS", SongListChangeIdNews)
        axios.get("/playlist/detail?", {
            params: {
                id: Dvalue.detailss
            }
        }, { withCredentials: true }).then(function(response) {
            let success = response.data.result;
            let SonglistAvatarUrl = response.data.result.creator.avatarUrl;
            let SongListSignature = response.data.result.creator.signature;
            let SongLigtNickname = response.data.result.creator.nickname;
            let SongListTracksName = response.data.result.tracks;
            let SongListShareCount = response.data.result.shareCount;
            let SongListSubscribedCount = response.data.result.subscribedCount;
            let SongListDetailsId = response.data.result.id;
            commit("SONGDETAILSS", success);
            commit("SONGLISTAVATARURL", SonglistAvatarUrl);
            commit("SONGLISTSIGNATURE", SongListSignature);
            commit("SONGLISTNICKNAME", SongLigtNickname);
            commit("SONGLISTTRACKNAME", SongListTracksName);
            commit("SONGLISTSHARECOUNT", SongListShareCount);
            commit("SONGLISTSUBSCRIBEDCOUNT", SongListSubscribedCount);
            commit("SONGLISTDETAILSID", SongListDetailsId)
        }).catch((error) => {
            alert("请求失败");
        });
    },
    SongListComment({ commit }, Dvalue1) {
        var arr = Dvalue1.detailss1;
        commit("PRESERVATION", arr);
        axios.get("/comment/playlist?", {
            params: {
                id: Dvalue1.detailss1,
            }
        }).then((response) => {
            let successhot = response.data.hotComments;
            let successtotal = response.data.total;
            let successcomments = response.data.comments;
            commit("SONGLISTCOMMENTHOT", successhot);
            commit("SONGLISTCOMMENTTOTAL", successtotal);
            commit("SUCCESSCOMMENTS", successcomments);
        }).catch((error) => {
            alert("请求失败")
        })
    },
    SongListPaging({ commit, state }, val) {
        axios.get("/comment/playlist?", {
            params: {
                id: state.Preservation,
                offset: val.value22
            }
        }).then((response) => {
            let SuccessPreservation = response.data.comments;
            commit("SUCCESSPRESERVATION", SuccessPreservation);
        })
    },
    SongListChangeId({ commit }, Change) {
        axios.get("/music/url?", {
            params: {
                id: Change.ChangeId
            }
        }).then((response) => {
            let ChangeId = response.data.data[0].url;
            commit("CHANGEID", ChangeId);
        }).catch((error) => {
            alert(error)
        })
    },
    SonglistDetailIds({ commit }, Change) {
        let SonglistChangeIdChange = Change.ChangeId;
        console.log(SonglistChangeIdChange)
        commit("SONGLISTCHANGEIDCHANGE",SonglistChangeIdChange);
        axios.get("/song/detail?", {
            params: {
                ids: Change.ChangeId
            }
        }).then((response) => {
            let SonglistDetailIds1 = response.data.songs[0].al.picUrl;
            let SonglistDetailIds2 = response.data.songs[0].ar[0].name;
            let SonglistDetailIds3 = response.data.songs[0].name;
            commit("SONGLISTDETAILIDS1", SonglistDetailIds1);
            commit("SONGLISTDETAILIDS2", SonglistDetailIds2);
            commit("SONGLISTDETAILIDS3", SonglistDetailIds3)
        }).catch((error) => {
            alert(error)
        })
    },
    SongListPlayList100({ commit }, SongListPlay) {
        let SongValName = SongListPlay.valName;
        let arrary = new Array();
        for (let value of SongValName) {
            arrary.push(value.id);
        }
        axios.get("/music/url?id=" + arrary).then((response) => {
            let SuccessValName111 = response.data;
            commit("SONGLISTDETAILIDS4", SuccessValName111);
        }).catch((error) => {
            alert("数据请求失败")
        })
    },
    SonglistDetailIds1({ commit }, index) {
        let SonglistDetailIdsNews = index.ChangeId;
        commit("SONGLISTDETAILIDSNEWS", SonglistDetailIdsNews)
        axios.get("/playlist/detail?", {
            params: {
                id: index.ChangeId
            }
        }).then((response) => {
            let SongListTracksName1 = response.data.result.tracks;
            commit("SONGLISTTRACKNAME1", SongListTracksName1)

        }).catch((error) => {
            alert("数据请求失败")
        })
    },
    MsnuiClose({ commit }, value) {
        commit("MSNUICLOSE", value.value)
    },
    SongListMusic11({ commit }, index) {
        axios.get("/music/url?", {
            params: {
                id: index.index
            }
        }).then((response) => {
            let SongListMusic11 = response.data.data[0].url;
            commit("SONGLISTMUSIC11", SongListMusic11)
        }).catch((error) => {
            alert("数据请求失败")
        })
    },
    SongListChangeIdddd({ commit }, index) {
        let ChangeIddd = index.index;
        commit("CHANGEIDDD", ChangeIddd)
    },
    SongReview({commit,state}){   //歌曲评论
        axios.get("/comment/music?",{
            params:{
                id:state.SonglistChangeIdChange,
            }
        }).then((response)=>{
            let SongReview3 = response.data.total; //评论总数
            commit("SONGREVIEW3",SongReview3);
            commit("SONGREVIEW4",SongReview3);
        }).catch((error)=>{
            alert("数据请求失败")
        })
    },
    SongRevieww({commit,state},val){
        axios.get("/comment/music?",{
            params:{
                id:state.SonglistChangeIdChange,
                limeit:val.value22
            }
        }).then((response)=>{
            let SongReview1 = response.data.hotComments; //精彩评论
            let SongReview2 = response.data.comments; //评论
            commit("SONGREVIEW1",SongReview1);
            commit("SONGREVIEW2",SongReview2);
        }).catch((error)=>{
            alert("数据请求失败")
        })
    }
}