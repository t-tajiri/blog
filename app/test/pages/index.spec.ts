import { shallowMount, Wrapper } from '@vue/test-utils'
import Index from '~/pages/index.vue'

describe('pages/index.vue', () => {
  let wrapper: Wrapper<Index>

  it('renders correctly', () => {
    wrapper = shallowMount(Index)
    expect(wrapper.name()).toBe('index')
  })
})
