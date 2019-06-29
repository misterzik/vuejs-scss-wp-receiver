<template>
  <div class="pages">
    <div class="parallax" id="Pages"></div>
    <div class="gxs-row">
      <div class="col-4 article-wrapper" v-for="post in posts">
        <div class="col-12">
          <h3 class="article-title">{{ post.title.rendered }}</h3>
        </div>
        <div class="col-6">
          Date Post: {{ post.modified }}
        </div>
        <div class="col-6">
          ID: {{ post.id }} <br>
        </div>
        <div class="col-12">
          <span v-html="post.content.rendered"></span>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      posts: []
    }
  },

  mounted() {
    this.posts = this.getPosts()
  },

  methods: {
    getPosts(){
      this.$http.get('http://localhost:8081/wp-json/wp/v2/posts').then(function(response) {
          this.posts = response.body
        }, function (response) {
          console.log(response.body)
        }
      )
    }
  }
}
</script> 

<style lang="scss">
.article-wrapper {
    background: #cecece;
    border: 1px solid #c3c3c3;
}
.article-title{
      font: 37px/1.5 "Bungee Shade", cursive;
}
.pages {
    background: #cacaca;
}
</style>