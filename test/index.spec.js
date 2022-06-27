import { builder, nuxt, request } from './setup'

beforeAll(async () => {
  await builder
  await nuxt.server.listen(3003)
}, 300000)

describe('GET /', () => {
  test('returns status code 200', async () => {
    const response = await request(nuxt.server.app).get('/')
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /', () => {
  test('Route / exists and renders HTML', async () => {
    const { html } = await nuxt.server.renderRoute('/', {})

    expect(html).toContain('Welcome to Saiden, a sanctuary of digital thought')
  })
})

afterAll(() => {
  nuxt.close()
})
