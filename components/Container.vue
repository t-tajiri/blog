<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Container'
})
export default class Container extends Vue {
  narrow: boolean = false

  flex: boolean = false
}
</script>
