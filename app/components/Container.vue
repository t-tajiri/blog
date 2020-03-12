<template>
  <div class="container" :class="{ narrow, flex }">
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
    }
  }
})
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
