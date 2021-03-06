import Slug from '@/pages/blog/_slug.vue'
import { shallowMount } from '@vue/test-utils'
import VueLazyload from 'vue-lazyload'
import Vue from 'vue'

// workaround for testing vue-lazyload
Vue.use(VueLazyload)

describe('Slug.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Slug)
  })
})
