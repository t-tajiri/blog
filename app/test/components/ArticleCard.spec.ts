import ArticleCard from '@/components/ArticleCard.vue'
import { shallowMount } from '@vue/test-utils'

describe('ArticleCard.vue', () => {
  it('renders correctly', () => {
    const articleInfo = { link: null, attributes: {} }
    const wrapper = shallowMount(ArticleCard, { propsData: { articleInfo }, stubs: ['nuxt-link'] })
  })

  it('renders article title', () => {
    const title = 'testTitle'
    const articleInfo = { link: null, attributes: { title: title } }

    const wrapper = shallowMount(ArticleCard, { propsData: { articleInfo }, stubs: ['nuxt-link'] })

    expect(wrapper.find('[data-testid="articlecard_title"]').text()).toBe(title)
  })

  describe('error test', () => {
    const originConsoleError = global.console.error

    beforeEach(() => {
      global.console.error = jest.fn()
    })

    afterEach(() => {
      global.console.error = originConsoleError
    })

    it('throws error because props is null', () => {
      try {
        shallowMount(ArticleCard)
        // eslint-disable-next-line no-undef
        fail('should throws error because props is required.')
      } catch (error) {
        expect(global.console.error).toHaveBeenCalled()
      }
    })
  })
})
