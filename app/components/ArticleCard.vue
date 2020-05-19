<template>
  <nuxt-link :to="`/blog/${articleInfo.link}`">
    <div class="article">
      <h1 class="title title__background">
        <span>
          {{ new Date(Date.parse(articleInfo.attributes.date)).toLocaleDateString('ja-JP') }}
        </span>
        <span class="title__text" data-testid="articlecard_title">
          {{ articleInfo.attributes.title }}
        </span>
      </h1>
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
    position: relative;
    width: 100%;
  }

</style>
