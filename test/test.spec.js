const { Nuxt, Builder } = require('nuxt')
const request = require('supertest')
const nuxtConfig = require('../nuxt.config.js')
let nuxt = null

beforeAll(async () => {
  nuxt = new Nuxt({...nuxtConfig, server: { port: 3001}, buildDir: '.nuxt-build-jest'})

  await new Builder(nuxt).build()

  await nuxt.server.listen(3001, 'localhost')
}, 300000)

describe('GET /', () => {
  test('Route / exits and render HTML', async () => {
    const { html } = await nuxt.server.renderRoute('/', {})

    expect(html).toContain('Welcome')
  })
})

describe('GET /', () => {
  test('returns status code 200', async () => {
    const response = await request(nuxt.server.app).get('/')
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /test', () => {
  test('returns status code 404', async () => {
    const response = await request(nuxt.server.app).get('/test')
    expect(response.statusCode).toBe(404)
  })
})

// Close server and ask nuxt to stop listening to file changes
afterAll(() => {
  nuxt.close()
})
