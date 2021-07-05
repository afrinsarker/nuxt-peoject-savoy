import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5bf726f3 = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _29b91fa0 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _2f976eb4 = () => interopDefault(import('../pages/Shop/index.vue' /* webpackChunkName: "pages/Shop/index" */))
const _b06acadc = () => interopDefault(import('../pages/account/register.vue' /* webpackChunkName: "pages/account/register" */))
const _4caea5db = () => interopDefault(import('../pages/cart/checkout/index.vue' /* webpackChunkName: "pages/cart/checkout/index" */))
const _41a9f156 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _23157f3a = () => interopDefault(import('../pages/_category/index.vue' /* webpackChunkName: "pages/_category/index" */))
const _e5bfb544 = () => interopDefault(import('../pages/_category/_slug/index.vue' /* webpackChunkName: "pages/_category/_slug/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _5bf726f3,
    name: "account"
  }, {
    path: "/cart",
    component: _29b91fa0,
    name: "cart"
  }, {
    path: "/Shop",
    component: _2f976eb4,
    name: "Shop"
  }, {
    path: "/account/register",
    component: _b06acadc,
    name: "account-register"
  }, {
    path: "/cart/checkout",
    component: _4caea5db,
    name: "cart-checkout"
  }, {
    path: "/",
    component: _41a9f156,
    name: "index"
  }, {
    path: "/:category",
    component: _23157f3a,
    name: "category"
  }, {
    path: "/:category/:slug",
    component: _e5bfb544,
    name: "category-slug"
  }],

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
