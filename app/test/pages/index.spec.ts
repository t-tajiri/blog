import Index from '@/pages/index.vue'
import { shallowMount } from '@vue/test-utils'

interface BlogList {
  blogList: []
}

describe('pages/index.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.name()).toBe('Index')
  })

  it('renders from retrieve blog data', async () => {
    const data = await retrieveAsyncData()

    const wrapper = shallowMount(Index, {
      data() {
        return data
      }
    })

    expect(wrapper.findAll('articlecard-stub').length).toBe(data.blogList.length)
  })

  async function retrieveAsyncData() {
    const prepare = shallowMount(Index)

    const _: any = null
    return await prepare.vm.$options.asyncData!(_) as BlogList
  }
})
