import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Slider: () => import('../../components/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c)),
  StorefrontAccountsLoginComponent: () => import('../../components/storefront/accounts/LoginComponent.vue' /* webpackChunkName: "components/storefront-accounts-login-component" */).then(c => wrapFunctional(c.default || c)),
  StorefrontAccountsRegisterComponent: () => import('../../components/storefront/accounts/RegisterComponent.vue' /* webpackChunkName: "components/storefront-accounts-register-component" */).then(c => wrapFunctional(c.default || c)),
  StorefrontCategories: () => import('../../components/storefront/categories/Categories.vue' /* webpackChunkName: "components/storefront-categories" */).then(c => wrapFunctional(c.default || c)),
  StorefrontCategoriesSingleCategory: () => import('../../components/storefront/categories/SingleCategory.vue' /* webpackChunkName: "components/storefront-categories-single-category" */).then(c => wrapFunctional(c.default || c)),
  StorefrontFooter: () => import('../../components/storefront/footer/Footer.vue' /* webpackChunkName: "components/storefront-footer" */).then(c => wrapFunctional(c.default || c)),
  StorefrontMenuMobileMenu: () => import('../../components/storefront/menu/MobileMenu.vue' /* webpackChunkName: "components/storefront-menu-mobile-menu" */).then(c => wrapFunctional(c.default || c)),
  StorefrontMenuNavBar: () => import('../../components/storefront/menu/NavBar.vue' /* webpackChunkName: "components/storefront-menu-nav-bar" */).then(c => wrapFunctional(c.default || c)),
  StorefrontProductsProductDescription: () => import('../../components/storefront/products/ProductDescription.vue' /* webpackChunkName: "components/storefront-products-product-description" */).then(c => wrapFunctional(c.default || c)),
  StorefrontProductsProductFilters: () => import('../../components/storefront/products/ProductFilters.vue' /* webpackChunkName: "components/storefront-products-product-filters" */).then(c => wrapFunctional(c.default || c)),
  StorefrontProductsProductInfo: () => import('../../components/storefront/products/ProductInfo.vue' /* webpackChunkName: "components/storefront-products-product-info" */).then(c => wrapFunctional(c.default || c)),
  StorefrontProducts: () => import('../../components/storefront/products/Products.vue' /* webpackChunkName: "components/storefront-products" */).then(c => wrapFunctional(c.default || c)),
  StorefrontShopsCartComponents: () => import('../../components/storefront/shops/CartComponents.vue' /* webpackChunkName: "components/storefront-shops-cart-components" */).then(c => wrapFunctional(c.default || c)),
  StorefrontShopsCheckoutComponent: () => import('../../components/storefront/shops/CheckoutComponent.vue' /* webpackChunkName: "components/storefront-shops-checkout-component" */).then(c => wrapFunctional(c.default || c)),
  StorefrontShopsFilterComponent: () => import('../../components/storefront/shops/FilterComponent.vue' /* webpackChunkName: "components/storefront-shops-filter-component" */).then(c => wrapFunctional(c.default || c)),
  StorefrontShopsProductComponent: () => import('../../components/storefront/shops/ProductComponent.vue' /* webpackChunkName: "components/storefront-shops-product-component" */).then(c => wrapFunctional(c.default || c)),
  StorefrontShopsReviews: () => import('../../components/storefront/shops/Reviews.vue' /* webpackChunkName: "components/storefront-shops-reviews" */).then(c => wrapFunctional(c.default || c)),
  StorefrontShopsSlider: () => import('../../components/storefront/shops/Slider.vue' /* webpackChunkName: "components/storefront-shops-slider" */).then(c => wrapFunctional(c.default || c)),
  StorefrontShopsPagination: () => import('../../components/storefront/shops/pagination.vue' /* webpackChunkName: "components/storefront-shops-pagination" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
