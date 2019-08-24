<template>
  <div class="container" :class="{ narrow, flex }">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Container'
})
export default class Container extends Vue {
  @Prop({ default: false })
  narrow!: boolean

  @Prop({ default: false })
  flex!: boolean
}
</script>

<style scoped>
.container {
  display: block;
  margin: 0 auto;
  max-width: 65vw;
  padding: 0 1rem;
}

.container.narrow {
  max-width: 50vw;
}

.container.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
