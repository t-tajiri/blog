import Header from '@/components/Header.vue'
import { shallowMount } from '@vue/test-utils'

describe('Header.vue', () => {
  const DEFAULT_ENV = process.env
  const githubLink = 'github.link'
  const twitterLink = 'twitter.link'

  beforeEach(() => {
    process.env = Object.assign(process.env, { NUXT_ENV_GITHUB_URL: githubLink, NUXT_ENV_TWITTER_URL: twitterLink })
  })

  afterEach(() => {
    process.env = DEFAULT_ENV
  })

  it('exists github link', () => {
    const wrapper = shallowMount(Header, { stubs: ['nuxt-link', 'font-awesome-icon'] })

    const link = wrapper.find('[data-testid="github"]')
    expect(link.attributes().href).toBe(githubLink)
  })

  it('exists twitter link', () => {
    const wrapper = shallowMount(Header, { stubs: ['nuxt-link', 'font-awesome-icon'] })

    const link = wrapper.find('[data-testid="twitter"]')
    expect(link.attributes().href).toBe(twitterLink)
  })
})
