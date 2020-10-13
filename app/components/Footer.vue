<template>
  <footer class="footer">
    <span class="footer__copyright" data-testid="copyright">©︎ 2020 t-tajiri</span>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer'
})
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
