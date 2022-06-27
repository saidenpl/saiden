import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'// eslint-disable-line no-unused-vars
import scrollBehavior from './router.scrollBehavior.js'

const _463979d0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _bf81cbba = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1b8ca01a = () => interopDefault(import('../pages/hobbies.vue' /* webpackChunkName: "pages/hobbies" */))
const _57251807 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _65f15495 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,
  /* eslint-disable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */
  routes: [{
    path: "/about",
    component: _463979d0,
    name: "about"
  }, {
    path: "/contact",
    component: _bf81cbba,
    name: "contact"
  }, {
    path: "/hobbies",
    component: _1b8ca01a,
    name: "hobbies"
  }, {
    path: "/projects",
    component: _57251807,
    name: "projects"
  }, {
    path: "/",
    component: _65f15495,
    name: "index"
  }],
  /* eslint-enable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
