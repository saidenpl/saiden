const { Nuxt, Builder } = require('nuxt')
const request = require('supertest')
const nuxtConfig = require('../nuxt.config.js')

let nuxt = new Nuxt({
  ...nuxtConfig,
  server: { port: 3001 },
  buildDir: '.nuxt-build-jest',
})

let builder = new Builder(nuxt).build()

export { builder, nuxt, request }