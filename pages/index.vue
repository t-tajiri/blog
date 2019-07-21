<template>
  <div class="container">
    <div>
      <div>
        <input
          v-model="newArticle"
          type="text"
        >
        <button @click="addArticle">
          add
        </button>
      </div>
      <div class="spacer" />
      <div>
        {{ article }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'index'
})
export default class Index extends Vue {
  article: Array<String> = ['test article']

  newArticle: String = ''

  addArticle(): void {
    this.article.push(this.newArticle)
    // TODO refactor
    this.newArticle = ''
  }
}
</script>

<style>
  .spacer {
    margin-top: 1em;
  }
</style>
