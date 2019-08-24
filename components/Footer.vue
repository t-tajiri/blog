<template>
  <footer class="footer">
    <span class="footer__copyright">©︎ 2019 t-tajiri</span>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Footer'
})
export default class Footer extends Vue {
}
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  display: flex;
  margin-top: 2rem;
  padding: .7rem;
  justify-content: center;
}

.footer__copyright {
  font-family: 'Lobster', cursive;
}
</style>
