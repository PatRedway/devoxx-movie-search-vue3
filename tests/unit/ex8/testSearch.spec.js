import { shallowMount } from '@vue/test-utils'

import Search from '@/ex8/components/Search'

const factory = (options) => shallowMount(Search, { ...options })

const utils = {
  typeSearchText: (wrapper, text) => wrapper.find('[data-test="search-text"]').setValue(text),
  clickButton: (wrapper) => wrapper.find('[data-test="search"]').trigger('click'),
  getValueEmitted: (wrapper) => wrapper.emitted('search'),
}

describe('Test Search component', () => {
  it('Search mounted', () => {
    const wrapper = factory()

    expect(wrapper.exists()).toBe(true)
  })

  it('Given the Search, when clicking on search button, then event is emmitted with the text', () => {
    const wrapper = factory()

    utils.clickButton(wrapper)
    expect(utils.getValueEmitted(wrapper)).toEqual([['']])
  })

  it('Given the Search of Batman, when clicking on search button, then event is emmitted with the text', () => {
    const wrapper = factory()

    utils.typeSearchText(wrapper, 'Batman')
    utils.clickButton(wrapper)

    expect(utils.getValueEmitted(wrapper)).toEqual([['Batman']])
  })
})
