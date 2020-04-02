<template>
  <section class="post">
    <Container class="post__header">
      <h1 class="post__title">
        {{ title }}
      </h1>
      <h4 class="post__date">
        {{ getJapaneseDate }}
      </h4>
    </Container>
    <Container :narrow="true">
      <img v-lazy="thumbnail" :alt="title" class="post__content__thumbnail">
      <div v-html="html" class="post__content__slug" />
    </Container>
  </section>
</template>

<script lang="ts">
import Container from '@/components/Container.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'Slug',
  components: {
    Container
  },
  data: () => ({
    title: String,
    date: String,
    update: String,
    thumbnail: String,
    summary: String,
    slug: String
  }),
  head(): object {
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
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.summary
        }
      ]
    }
  },
  computed: {
    getJapaneseDate() {
      return new Date(Date.parse(this.$data.date)).toLocaleDateString('ja-JP')
    }
  },
  async asyncData({ params }) {
    const post = await import(`@/content/blog/${params.slug}.md`)
    const attr = post.attributes
    const slug = params.slug

    const {
      date,
      title,
      thumbnail,
      update,
      summary
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
      summary,
      slug,
      thumbnail,
      html: post.html
    }
  }
})
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
  margin-top: 1rem;
  margin-bottom: 0.8rem;
  text-align: center;
}

.post__date {
  text-align: center;
  margin-bottom: 1rem;
}

.post__content__thumbnail {
  margin-bottom: 2.4rem;
  height: auto;
  width: 100%;
}
</style>
