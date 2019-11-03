<template>
  <div class="container">
    <div class="home_container">
      <md-card v-for="(post,index) in posts" :key="index">
          <md-card-media md-ratio="16:9">
              <img :src="require(`../../assets/images/featured/${post.img}`)" alt="">
          </md-card-media>
      </md-card>
    </div>
  </div>
</template>

<script>
import posts from "../../assets/posts.js";

export default {
    data(){
        return {
            posts
        }
    }
};
</script>

<style>
</style>