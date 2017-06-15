import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
      is_login:false,
      list_Article:[]
    },
        //GETTERS//
    getters:{
      isLogin(state){
        return state.is_login
      },
      listArticle(state){
        return state.list_Article;
      }
    },
        //MUTATATIONS//
    mutations:{
      changeIsLogin(state,value){
        state.is_login=value
      },
      getListArticle(state,list){
        state.list_Article=list
      }
    },
        //ACTIONS//
    actions:{
      changeIsLogin({commit},value){
        commit('changeIsLogin',value)
      },
      getListArticle({commit}){
        let self = this
        let token = window.localStorage.getItem('token');
        axios.get('http://localhost:3000/articles',{
          headers:{
            token:token
          }
        })
        .then(response =>{
          commit('getListArticle',response.data)
        })
      }
    }
})
