const { Nuxt, Builder } = require('nuxt')
const request = require('supertest')
const nuxtConfig = require('../nuxt.config.js')

const nuxt = new Nuxt({
  ...nuxtConfig,
  server: { port: 3001 },
  buildDir: '.nuxt-build-jest',
})

const builder = new Builder(nuxt).build()

export { builder, nuxt, request }
