<template>
  <nav class="header" role="navigation">
    <div class="header__inline">
      <div>
        <nuxt-link to="/" class="header__inline__title">
          t-tajiri
        </nuxt-link>
      </div>
      <ul class="header__inline__social-icons">
        <li>
          <a :href="githubUrl" target="_blank" data-testid="github">
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </a>
          <a :href="twitterUrl" target="_blank" data-testid="twitter">
            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  data: () => ({
    githubUrl: process.env.NUXT_ENV_GITHUB_URL,
    twitterUrl: process.env.NUXT_ENV_TWITTER_URL
  })
})
</script>

<style scoped>
.header {
  font-family: 'Lobster', cursive;
  width: 100%;
}

.header__inline {
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 65vw;
  justify-content: space-between;
}

.header__inline__title {
  color: #252525;
  font-size: 1.5rem;
  text-decoration: none;
}

.header__inline__social-icons {
  padding: 0;
  margin: 0;
  list-style-type: none;
  line-height: 1;
}

.header__inline a {
  box-shadow: none;
  color: #252525;
  display: inline-block;
  padding: 1.1rem 1rem 1rem 1rem;
}
</style>
