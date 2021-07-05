import { wrapFunctional } from './utils'

export { default as Slider } from '../../components/Slider.vue'
export { default as StorefrontAccountsLoginComponent } from '../../components/storefront/accounts/LoginComponent.vue'
export { default as StorefrontAccountsRegisterComponent } from '../../components/storefront/accounts/RegisterComponent.vue'
export { default as StorefrontCategories } from '../../components/storefront/categories/Categories.vue'
export { default as StorefrontCategoriesSingleCategory } from '../../components/storefront/categories/SingleCategory.vue'
export { default as StorefrontFooter } from '../../components/storefront/footer/Footer.vue'
export { default as StorefrontMenuMobileMenu } from '../../components/storefront/menu/MobileMenu.vue'
export { default as StorefrontMenuNavBar } from '../../components/storefront/menu/NavBar.vue'
export { default as StorefrontProductsProductDescription } from '../../components/storefront/products/ProductDescription.vue'
export { default as StorefrontProductsProductFilters } from '../../components/storefront/products/ProductFilters.vue'
export { default as StorefrontProductsProductInfo } from '../../components/storefront/products/ProductInfo.vue'
export { default as StorefrontProducts } from '../../components/storefront/products/Products.vue'
export { default as StorefrontShopsCartComponents } from '../../components/storefront/shops/CartComponents.vue'
export { default as StorefrontShopsCheckoutComponent } from '../../components/storefront/shops/CheckoutComponent.vue'
export { default as StorefrontShopsFilterComponent } from '../../components/storefront/shops/FilterComponent.vue'
export { default as StorefrontShopsProductComponent } from '../../components/storefront/shops/ProductComponent.vue'
export { default as StorefrontShopsReviews } from '../../components/storefront/shops/Reviews.vue'
export { default as StorefrontShopsSlider } from '../../components/storefront/shops/Slider.vue'
export { default as StorefrontShopsPagination } from '../../components/storefront/shops/pagination.vue'

export const LazySlider = import('../../components/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontAccountsLoginComponent = import('../../components/storefront/accounts/LoginComponent.vue' /* webpackChunkName: "components/storefront-accounts-login-component" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontAccountsRegisterComponent = import('../../components/storefront/accounts/RegisterComponent.vue' /* webpackChunkName: "components/storefront-accounts-register-component" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontCategories = import('../../components/storefront/categories/Categories.vue' /* webpackChunkName: "components/storefront-categories" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontCategoriesSingleCategory = import('../../components/storefront/categories/SingleCategory.vue' /* webpackChunkName: "components/storefront-categories-single-category" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontFooter = import('../../components/storefront/footer/Footer.vue' /* webpackChunkName: "components/storefront-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontMenuMobileMenu = import('../../components/storefront/menu/MobileMenu.vue' /* webpackChunkName: "components/storefront-menu-mobile-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontMenuNavBar = import('../../components/storefront/menu/NavBar.vue' /* webpackChunkName: "components/storefront-menu-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontProductsProductDescription = import('../../components/storefront/products/ProductDescription.vue' /* webpackChunkName: "components/storefront-products-product-description" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontProductsProductFilters = import('../../components/storefront/products/ProductFilters.vue' /* webpackChunkName: "components/storefront-products-product-filters" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontProductsProductInfo = import('../../components/storefront/products/ProductInfo.vue' /* webpackChunkName: "components/storefront-products-product-info" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontProducts = import('../../components/storefront/products/Products.vue' /* webpackChunkName: "components/storefront-products" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontShopsCartComponents = import('../../components/storefront/shops/CartComponents.vue' /* webpackChunkName: "components/storefront-shops-cart-components" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontShopsCheckoutComponent = import('../../components/storefront/shops/CheckoutComponent.vue' /* webpackChunkName: "components/storefront-shops-checkout-component" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontShopsFilterComponent = import('../../components/storefront/shops/FilterComponent.vue' /* webpackChunkName: "components/storefront-shops-filter-component" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontShopsProductComponent = import('../../components/storefront/shops/ProductComponent.vue' /* webpackChunkName: "components/storefront-shops-product-component" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontShopsReviews = import('../../components/storefront/shops/Reviews.vue' /* webpackChunkName: "components/storefront-shops-reviews" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontShopsSlider = import('../../components/storefront/shops/Slider.vue' /* webpackChunkName: "components/storefront-shops-slider" */).then(c => wrapFunctional(c.default || c))
export const LazyStorefrontShopsPagination = import('../../components/storefront/shops/pagination.vue' /* webpackChunkName: "components/storefront-shops-pagination" */).then(c => wrapFunctional(c.default || c))
