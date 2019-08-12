<template>
  <section class="post">
    <Container class="post__header">
      <h1 class="post__title">
        {{ title }}
      </h1>
    </Container>
    <Container :narrow="true">
      <img v-lazy="thumbnail" class="thumbnail" :alt="title">
      <div class="post-content" v-html="html" />
    </Container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Container from '~/components/Container.vue'

@Component({
  components: {
    Container: Container
  },
  async asyncData({ params }) {
    const post = await import(`~/content/blog/${params.slug}.md`)
    const attr = post.attributes
    const slug = params.slug

    const {
      date,
      title,
      thumbnail,
      update
    } = attr

    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }

    const publishDate: Date = new Date(date)
    const updateDate: Date = new Date(date)
    const published: string = publishDate.toLocaleDateString('japanese', dateOptions)
    const updated: string = updateDate.toLocaleDateString('japanese', dateOptions)

    return {
      title,
      date,
      update,
      published,
      updated,
      slug,
      thumbnail,
      html: post.html
    }
  }
})
export default class Slug extends Vue {
  title?: string

  date?: string

  update?: string

  thumbnail?: string

  slug?: string

  head() {
    return {
      title: `${this.title} | 'Sample'`,
      meta: [
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.date
        },
        {
          hid: 'article:modified_time',
          property: 'article:modified_time',
          content: this.update
        },
        {
          hid: 'og:updated_time',
          property: 'og:updated_time',
          content: this.update
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://<domain>/blog/${this.slug}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} | Code Tribe`
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://<domain>${this.thumbnail}`
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        }
      ]
    }
  }
}
</script>

<style scoped>
.post {
  font-family: 'Noto Sans JP', sans-serif;
  margin: 0 auto;
}

.post__header {
  color: #535353;
  font-size: 1.8rem;
  font-weight: 700;
}

.post__title {
display: block;
margin-top: 1rem;
margin-bottom: 3rem;
text-align: center;
width: 100%;
}

.thumbnail {
  margin-bottom: 2.4rem;
  height: auto;
  width: 100%;
}
</style>
