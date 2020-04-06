<template>
  <div :class="{ flex }" :style="{ 'width': width }" class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Container',
  props: {
    narrow: {
      type: Boolean,
      default: false
    },
    flex: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50vw'
    }
  }
})
</script>

<style scoped>
.container {
  display: block;
  margin: 0 auto;
  max-width: 1080px;
}

.container.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
