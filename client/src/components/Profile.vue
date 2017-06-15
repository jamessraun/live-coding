<template>

  <div class="flex-container" style="margin-left:5%;">

      <div class="flex-item" style="width:30%; margin-top:15px;">

      </div>

      <div  class="flex-item ui segment" style="width:65%; background-color:white; border-radius:5px; margin-right:5%">

        <div class="ui form success">
          <div class="field" style="width:100%">
            <label>Title</label>
                <input type="text" v-model="new_article.title">
          </div>
         <div class="field">
           <label>Description</label>
          <textarea v-model="new_article.description"></textarea>
        </div>
        <div class="field" style="width:100%">
          <label>category</label>
              <input type="text" v-model="new_article.category">
        </div>
          <div class="ui success message hidden">
            <div class="header">Success</div>
            <p>You posted a new Article</p>
          </div>
          <div class="ui submit button" @click="addArticle">Post</div>
        </div>

        <div class="ui celled list" style="margin-top:5%;">
          <div class="ui cards">
            <div class="card" v-for="(article,index) in listArticle" style="width:100%">
              <div class="content">
                <div class="header">{{article.title}}</div>
                <div class="meta">{{article.category}}</div>
                <div class="description">
                  {{article.content}}
                </div>
              </div>
              <div class="content">
                  <button class="ui yellow button" name="button" @click="showModal(article)">Edit</button>
                  <button class="ui red button" name="button" @click="deleteArticle(article._id)">hapus</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- modal Edit -->
      <div class="ui modal modalShowEdit">
        <i class="close icon"></i>
        <div class="header">
          <h4 class="ui header">Edit Article</h4>
        </div>
        <div class="content">
          <div class="ui form">
            <div class="field" style="width:100%">
              <label>Title</label>
                  <input type="text" v-model="editArticle.title">
            </div>
          </div>
          <div class="ui form">
            <div class="field" style="width:100%">
              <label>category</label>
                  <input type="text" v-model="editArticle.category">
            </div>
          </div>
          <div class="ui form">
            <div class="field">
              <label>Description</label>
              <textarea row="2" v-model="editArticle.content"></textarea>
            </div>
          </div>
        </div>
        <div class="actions">
          <div class="ui button" @click="closeModal">Cancel</div>
          <div class="ui blue button" @click="editArticle()">Submit</div>
        </div>
      </div>

  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  computed:{

      ...mapGetters([
        'listArticle'
      ])
  },
  data() {
    return {
      new_article:{
        title:'',
        content:'',
        category:''
      },
      editArticle:{}
    }
  },
  methods:{

    showModal(article){
      $('.modalShowEdit').modal('show');
      console.log(article);
      this.editArticle= article;
    },

    closeModal(){
      $('.modalShowEdit').modal('hide');
    },
    addArticle(){
      console.log('masukk add');
      let self = this
      let token = window.localStorage.getItem('token');
      console.log(token);
      axios.post('http://localhost:3000/articles',{
        title:self.new_Article.title,
        category:self.new_Article.category,
        content:self.new_Article.content
      },{
          headers:{
            token:token
          }
        }).then(response =>{
          console.log('self---addd',self.list_Article);
          self.$store.dispatch('getListArticle')
      })
    },
    editArticle(){
      console.log('masukk edit');
      let self = this
      let token = window.localStorage.getItem('token');
      console.log(this.editArticle.title);
      axios.put('http://localhost:3000/articles',{
        title:self.editArticle.title,
        category:self.editArticle.category,
        content:self.editArticle.content
      },{
          headers:{
            token:token
          }
        }).then(response =>{
          self.$store.dispatch('getListArticleByuser')
          $('.modalShowEdit').modal('hide');
      })
    },
    deleteArticle(id){
      console.log('masuk delte');
      let self = this
      let token = window.localStorage.getItem('token');
      axios.delete(`http://localhost:3000/articles/${id}`,{
        headers:{
          token:token
        }
      })
      .then(response =>{
        self.$store.dispatch('getListArticle')
      })
    }

  },
  created(){
    this.$store.dispatch('getListArticle')
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
