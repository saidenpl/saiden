import { builder, nuxt, request } from './setup'

beforeAll(async () => {
  await builder
  await nuxt.server.listen(3004)
}, 300000)

describe('GET /projects', () => {
  test('returns status code 200', async () => {
    const response = await request(nuxt.server.app).get('/')
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /projects', () => {
  test('Route /projects exists and renders HTML', async () => {
    const { html } = await nuxt.server.renderRoute('/projects', {})

    expect(html).toContain('Roomzilla')
    expect(html).toContain('Kantei')
    expect(html).toContain('Scanner')
    expect(html).toContain('Ipla TV')
  })
})

afterAll(() => {
  nuxt.close()
})
