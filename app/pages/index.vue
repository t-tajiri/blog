<template>
  <section>
    <Container :flex="true">
      <ArticleCard
        v-for="(blog, index) in blogList"
        :key="index"
        :article-info="blog"
      />
    </Container>
  </section>
</template>

<script lang="ts">
import Container from '@/components/Container.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import blogs from '@/content/blogs.json'
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  components: {
    ArticleCard,
    Container
  },
  async asyncData() {
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
</script>
