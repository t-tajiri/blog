<template>
  <nuxt-link :to="`/blog/${articleInfo.link}`">
    <div
      class="article"
    >
      <div class="content">
        <img :src="articleInfo.attributes.thumbnail" class="image">
        <h4 class="title title__background">
          <span class="title__text">
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
      default: undefined
    }
  },
  data: () => ({
    summary: ''
  }),
  async mounted() {
    const { attributes } = await import(`@/content/blog/${this.articleInfo!.link}.md`)
    const { summary } = attributes
    this.summary = summary
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
    height: auto;
  }

  .image { max-width: 700px; }

  @media screen and (max-width: 480px) {
    .image { max-width: 300px; }
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
