<template>
  <article>
    <nuxt-link :to="`/blog/${articleInfo.link}`">
      <div
        :style="{ background: 'url(' + articleInfo.attributes.thumbnail + ') 20% 1% / cover no-repeat' }"
        class="article"
      >
        <div class="article__data">
          <div class="article__data__content">
            <h4 class="article__data__content__title">
              {{ articleInfo.attributes.title }}
            </h4>
          </div>
        </div>
      </div>
    </nuxt-link>
  </article>
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

  article {
    width: calc(66% - 1rem);
    margin-top: 2rem;
  }

  .article {
    background-color: #ffffff;
    border-radius: 0.5rem;
    color: #808080;
    float: left;
    min-height: 540px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .article__data {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .article__data__content {
    padding: 1em;
    position: relative;
    z-index: 1;
    background-color: #f1f3f5;
    box-shadow: 0 5px 30px 10px rgba(0, 0, 0, 0.3);
  }

  .article__data__content__title {
    color: #535353;
    font-size: 1.5rem;
    font-family: 'Open Sans', sans-serif;
  }
</style>
