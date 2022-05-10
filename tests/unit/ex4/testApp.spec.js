import { flushPromises, shallowMount } from '@vue/test-utils'

import App from '@/ex4/components/App.vue'
import Movie from '@/ex4/components/Movie.vue'

import * as moviesService from '@/ex4/services/movies.js'

jest.mock('@/ex4/services/movies.js', () => ({
  getMovies: jest.fn(),
}))
/**
 * But : Dans cette exercice, nous avons créer un nouveau composant Movie pour pouvoir tester plus facilement notre code.
 *
 * 1. Inspecter le code source de l'exercice 4 pour bien voir la différence entre Movie.vue et App.vue
 * 2. Essayer de lancer les tests
 * 3. Remplacer dans la ligne ci-dessous (ne pas oublier de modifier aussi l'import) mount par shallowMount
 * 4. Essayer de lancer les tests
 * 5. Fixer les tests en déplacement les tests liés à l'affichage des films dans le fichier testMovie.spec.js
 * 6. Ajouter un test dans ce fichier permettant de vérifier qu'au moins un composant Movie est présent - utilisation de findComponent(Movie)
 */
const factory = (options) => shallowMount(App, { ...options })

describe('Testing App component', () => {
  beforeAll(() => {})

  beforeEach(() => {
    moviesService.getMovies.mockReturnValue()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('Testing app component', async () => {
    const wrapper = await factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('Given a movie, when hte component is mounted, then Movie component exists', async () => {
    const wrapper = await factory()

    expect(wrapper.findComponent(Movie).exists()).toBe(true)
  })
})
