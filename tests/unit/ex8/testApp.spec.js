import { flushPromises, mount } from '@vue/test-utils'

import App from '@/ex8/components/App.vue'
import Movie from '@/ex8/components/Movie.vue'
import Search from '@/ex8/components/Search.vue'

import { searchMovies } from '@/ex8/services/movie-api'

jest.mock('@/ex8/services/movie-api', () => ({
  searchMovies: jest.fn(),
}))
/**
 *
 * Essayer d'appliquer le Component Object Pattern à l'objet Search
 *
 * Bonus :
 * Reprendre l'ensemble des tests dans ce fichier en utilisant Mount au lieu de ShallowMount
 * Appliquer le Component Object Pattern au composant App
 *
 *
 */
const factory = (options) => mount(App, { ...options })

const utils = {
  emitSearch: async (wrapper) => {
    await wrapper.findComponent(Search).trigger('search', 'my movie search')
  },
  getDataError: (wrapper) => wrapper.find("[data-test='error']").text(),
}

describe('Testing App component', () => {
  beforeAll(() => {})

  beforeEach(() => {
    searchMovies.mockResolvedValue()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('Testing app component', () => {
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('Given the component mounted the api return a movie, when event search is emitted , then a Component Movie should exist', async () => {
    const wrapper = await factory()

    searchMovies.mockResolvedValue([
      {
        x: 1,
      },
    ])

    await utils.emitSearch(wrapper)

    await flushPromises()

    expect(wrapper.findComponent(Movie).exists()).toBe(true)
  })

  it('Given a search, when the search api return an error, then the error message is printed to the user', async () => {
    const wrapper = await factory()

    searchMovies.mockRejectedValue(new Error('Async error'))

    await utils.emitSearch(wrapper)

    await flushPromises()

    expect(utils.getDataError(wrapper)).toBe('Error: Async error')
  })
})
