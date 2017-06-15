<template>
  <div class="flex-container" style="margin-left:5%;">

      <div class="flex-item" style="width:30%; margin-top:15px;">
        <div class="ui items">
          <div class="item floating">

            <div class="ui vertical menu">
              <a class="active teal item">
                Category
              </a>
              <a class="item">
                All
              </a>
              <a class="item">
                1
              </a>
              <a class="item">
                2
              </a>
              <a class="item">
                3
              </a>
            </div>
        </div>

      </div>
      </div>

      <div  class="flex-item ui segment" style="width:65%; background-color:white; border-radius:5px; margin-right:5%">

        <div class="ui celled list" style="margin-top:5%;">
          <div class="ui cards">
            <div class="card" v-for="article in listArticle" style="width:100%">
              <div class="content">
                <div class="header">{{article.title}}</div>
                <div class="meta">{{article.category}}</div>
                <div class="description">
                  {{article.content}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  computed:{
      ...mapGetters([
        'listArticle'
      ])
  },
  methods:{

  },
  created(){
    return this.$store.dispatch('getListArticle')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flex-container{
   display: flex;
   flex-wrap: wrap;
}

.flex-item {
  flex-direction: row;
  float: left;
  border-radius: 5px;
}
</style>
