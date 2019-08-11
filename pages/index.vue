<template>
  <section>
    <Container :flex="true">
      <ArticleCard
        v-for="(blog, index) in blogList"
        :key="index"
        :index="index"
        :article-info="blog"
      />
    </Container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Container from '~/components/Container.vue'
import ArticleCard from '~/components/ArticleCard.vue'
// @ts-ignore
import blogs from '~/content/blogs.json'

@Component({
  name: 'index',
  components: {
    ArticleCard,
    Container
  },
  async asyncData({ app }) {
    async function awaitImport(blog) {
      const markDown = await import(`~/content/blog/${blog.slug}.md`)
      return {
        attributes: markDown.attributes,
        link: blog.slug
      }
    }

    const blogList = await Promise.all(
      blogs.map(blog => awaitImport(blog))
    ).then((contents) => {
      return {
        blogList: contents
      }
    })

    return blogList
  }
})
export default class Index extends Vue {
}
</script>

<style>
</style>
