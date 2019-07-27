<template>
  <article>
    <nuxt-link :to="`/blog/${articleInfo.link}`">
      <div>
        <h4>{{ articleInfo.attributes.title }}</h4>
      </div>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'ArticleCard'
})
export default class ArticleCard extends Vue {
  @Prop({ default: () => {} })
  articleInfo: unknown

  @Prop()
  index: number = 0

  mounted() {
    // eslint-disable-next-line no-unused-vars
    const articleNo: number = this.index + 1
  }
}
</script>
