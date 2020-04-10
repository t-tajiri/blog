<template>
  <nuxt-link :to="`/blog/${articleInfo.link}`">
    <div
      class="article"
    >
      <div class="content">
        <img :src="articleInfo.attributes.thumbnail" :alt="articleInfo.attributes.title" class="image">
        <h4 class="title title__background">
          <span class="title__text" data-testid="articlecard_title">
            {{ articleInfo.attributes.title }}
          </span>
        </h4>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ArticleCard',
  props: {
    articleInfo: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .article {
    margin-top: 2rem;
  }

  .content {
    position: relative;
    width: 100%;
  }

  .image {
    width: 700px;
    height: 450px;
    object-fit: cover;
   }

  @media screen and (max-width: 900px) {
    .image {
      width: 500px;
      height: 350px;
    }
  }

  @media screen and (max-width: 480px) {
    .image {
      width: 300px;
      height: 200px;
    }
  }

  .title {
    position: absolute;
    bottom: 0;
    padding-bottom: 2.5vh;
    width: 100%;
  }

  .title__background {
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.7);
  }
  .title__text {
    color: white;
    font-size: 1.7em;
    font-family: 'Open Sans', sans-serif;
    padding: 18px;
  }

</style>
