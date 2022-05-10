import { mount } from '@vue/test-utils'

import Movie from '@/ex4/components/Movie.vue'

const factory = (options) => mount(Movie, { ...options })

describe('Testing App component', () => {
  it('Testing app component', () => {
    const wrapper = factory({ propsData: { movie: {} } })
    expect(wrapper.exists()).toBe(true)
  })

  it('Given movie with a title, when the App component is mounted, then the title is displayed', async () => {
    const wrapper = await factory({
      propsData: {
        movie: {
          Title: 'Devoxx',
        },
      },
    })

    expect(wrapper.find('[data-test="title-movie"]').text()).toBe('Devoxx')
  })

  it('Given a movie with a year, when the App component is mounted, then the year is displayed', async () => {
    const wrapper = await factory({
      propsData: {
        movie: {
          Year: '2018',
        },
      },
    })

    expect(wrapper.find('[data-test="year-movie"]').text()).toBe('2018')
  })

  it('Given a movie with year containing a -, when the App component is mounted, then the year is displayed and -Now is added', async () => {
    const wrapper = await factory({
      propsData: {
        movie: {
          Year: '2016-',
        },
      },
    })

    expect(wrapper.find('[data-test="year-movie"]').text()).toBe('2016–Now')
  })

  it('Given a movie with a title, when the component is mounted, then first image alt contains the name of the film', async () => {
    const wrapper = await factory({
      propsData: {
        movie: {
          Title: 'Devoxx',
        },
      },
    })

    expect(wrapper.find('[data-test="image-movie"]').attributes('alt')).toContain('Devoxx')
  })

  it('Given a movie with a title, when the component is mounted, then first image source is img of the movie', async () => {
    const wrapper = await factory({
      propsData: {
        movie: {
          Poster: 'http://poster.url',
        },
      },
    })

    expect(wrapper.find('[data-test="image-movie"]').attributes('src')).toBe('http://poster.url')
  })
})
