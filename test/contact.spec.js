import { builder, nuxt, request } from './setup'

beforeAll(async () => {
  await builder
  await nuxt.server.listen(3002)
}, 300000)

describe('GET /contact', () => {
  test('returns status code 200', async () => {
    const response = await request(nuxt.server.app).get('/')
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /contact', () => {
  test('Route /contact exists and renders HTML', async () => {
    const { html } = await nuxt.server.renderRoute('/contact', {})

    expect(html).toContain('https://github.com/aladac')
    expect(html).toContain('aladac@saiden.pl')
  })
})

afterAll(() => {
  nuxt.close()
})
