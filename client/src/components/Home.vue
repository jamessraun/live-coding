<template>
  <div class="flex-container" style="margin-left:5%;">

      <div class="flex-item" style="width:30%; margin-top:15px;">
        <div class="ui items">
          <div class="item floating">

            <div class="ui vertical menu">
              <a class="active teal item">
                Inbox
                <div class="ui teal left pointing label">1</div>
              </a>
              <a class="item">
                Spam
                <div class="ui label">51</div>
              </a>
              <a class="item">
                Updates
                <div class="ui label">1</div>
              </a>
              <div class="item">
                <div class="ui transparent icon input">
                  <input type="text" placeholder="Search mail...">
                  <i class="search icon"></i>
                </div>
              </div>
            </div>
        </div>

      </div>
      </div>

      <div  class="flex-item ui segment" style="width:65%; background-color:white; border-radius:5px; margin-right:5%">

        <div class="ui tabular menu">
          <a class="active item">
            Terpopuler
          </a>
          <a class="item">
            Terbaru
          </a>
        </div>

        <div class="ui celled list" style="margin-top:5%;">
          <div class="item" v-for="(question,index) in listQuestion">
            <div class="content" style="margin-top:1%;margin-bottom:1%;">
              <div class="ui grid">
                <div class="row">
                  <div class="column" style="width:10%">
                    <div class="ui small compact message flex-item">
                      <div class="header">
                        header
                      </div>
                      <p style="font-size:10px">Votes</p>
                    </div>
                  </div>
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
        'listQuestion'
      ])
  },
  methods:{

  },
  created(){

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
