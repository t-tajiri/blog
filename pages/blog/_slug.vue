<template>
  <section class="post">
    <h1>{{ title }}</h1>
    <img v-lazy="thumbnail" class="thumbnail" :alt="title">
    <div class="post-content" v-html="html" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
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
  title: string = ''

  date: string = ''

  update: string = ''

  thumbnail: unknown

  slug: unknown

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
.thumbnail {
  margin-bottom: 2.4rem;
  width: 50%;
  height: auto;
}
</style>
