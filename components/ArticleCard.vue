<template>
  <article>
    <div class="article" :style="{ background: 'url(' + articleInfo.attributes.thumbnail + ') 20% 1% / cover no-repeat' }">
      <div class="article__data">
        <div class="article__data__content">
          <nuxt-link :to="`/blog/${articleInfo.link}`">
            <h4 class="article__data__content__title">
              {{ articleInfo.attributes.title }}
            </h4>
          </nuxt-link>
          <p class="article__data__content__text" />
          <nuxt-link :to="`/blog/${articleInfo.link}`" class="article__data__content__more">
            Read more
          </nuxt-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'ArticleCard'
})
export default class ArticleCard extends Vue {
  @Prop({ default: () => {} })
  articleInfo?: articleInfo
}
</script>

<style>
a {
  text-decoration: none;
}

article {
  display: flex;
  margin-top: 2rem;
  justify-content: center;
}

.article {
  background-color: #ffffff;
  border-radius: 0.5rem;
  color: #808080;
  float: left;
  min-height: 540px;
  overflow: hidden;
  position: relative;
  width: 70%;
}

.article:hover .article__data {
  transform: translateY(0);
}

.article__data {
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(calc(91px + 1em));
  transition: transform 0.3s;
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

.article__data__content__text {
  margin-top: 1rem;
  height: 70px;
}

.article__data__content__more {
  color: #535353;
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin-left: 43.2em;
  line-height: 1;
  position: relative;
  text-align: center;
  width: 100px;
}

.article__data__content__more::after {
  content: '\2192';
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  transition: all 0.3s;
  right: 0;
}

.article__data__content__more:hover::after {
  opacity: 1;
  transform: translate(5px, -50%);
}
</style>
