<template>
  <section class="post">
    <h1>{{ title }}</h1>
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
      html: post.html
    }
  }
})
export default class Slug extends Vue {
}
</script>
