<template>

  <div class="ui secondary menu">
    <a class="ui item" @click="showHome">
      Home
    </a>
    <div class="right menu">
      <a v-if="isLogin" class="ui item" @click="showProfile">
        Welcome, {{user}}
      </a>
      <a v-if="isLogin" class="ui item" @click="signOut">
        Logout
      </a>
      <a  v-if="!isLogin" class="ui item" @click="showLogin">
        Signin
      </a>
      <a  v-if="!isLogin" class="ui item" @click="showSignup">
        Signup
      </a>
    </div>
  </div>

</template>

<script>

import {mapGetters} from 'vuex'

export default {
  data(){
    return {
      user:window.localStorage.getItem('user')
    }
  },
  computed:{
    ...mapGetters([
      'isLogin'
    ])
  },
  methods:{
    showLogin(){
      this.$router.push('/login')
    },
    showSignup(){
      this.$router.push('/signUp')
    },
    showHome(){
      this.$router.push('/')
    },
    signOut(){
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user')
      this.$router.push('/login')
    },
    showProfile(){
      this.$router.push('/profile')
    }
  },
  created(){
    if(window.localStorage.getItem('token'))
    this.$store.commit('changeIsLogin',true)
    else this.$store.commit('changeIsLogin',false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
