import Vue from 'vue'
import Move from "../components/Move.vue"
import Music from "../components/Music.vue"
import User from "../components/User.vue"
import SongList from "../components/SongList.vue"
import ListSelection from "../components/ListSelection.vue"
import ListComment from "../components/ListComment.vue"
const store = [

    { path: '/move', component: Move ,beforeEnter: (to, from, next) => {
setTimeout(function(){next();},200)
     }},
    { path: '/music', component: Music,beforeEnter: (to, from, next) => {
setTimeout(function(){next();},200)
     }},
    { path: '/user', component: User,beforeEnter: (to, from, next) => {
setTimeout(function(){next();},200)
     }},
    { path: '/songlist', component: SongList },
    { path: '/listselection', component: ListSelection },
    { path: '/comment', component: ListComment },
    { path: '*', redirect: "/music" }
]
export default store