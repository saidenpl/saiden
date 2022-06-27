import { builder, nuxt, request } from './setup'

beforeAll(async () => {
  await builder
  await nuxt.server.listen(3001)
}, 300000)

describe('GET /about', () => {
  test('returns status code 200', async () => {
    const response = await request(nuxt.server.app).get('/')
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /about', () => {
  test('Route /about exists and renders HTML', async () => {
    const { html } = await nuxt.server.renderRoute('/about', {})

    expect(html).toContain('Communicative and resourceful Software Developer')
    expect(html).toContain('Download my CV as PDF')
    expect(html).toContain('Some of projects I have been part of')
  })
})

afterAll(() => {
  nuxt.close()
})
