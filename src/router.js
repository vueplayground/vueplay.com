import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    props: true,
    children: [],
    component: () => import('@/views/Pricing.vue')
  },
  {
    path: '/checkout',
    component: () => import('@/views/Checkout.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/tokens',
    component: () => import('@/views/Tokens.vue')
  },
  {
    path: '/authorize-signup',
    component: () => import('@/views/AuthorizeSignup.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/AuthorizeLogin.vue')
  },
  {
    path: '/logout',
    component: () => import('@/views/Logout.vue')
  },
  {
    path: '/roadmap',
    component: () => import('@/views/Roadmap.vue')
  },
  {
    path: '/release-log',
    component: () => import('@/views/ReleaseLog.vue')
  },
  {
    path: '/privacy-policy',
    component: () => import('@/views/PrivacyPolicy.vue')
  },
  {
    path: '/terms-of-service',
    component: () => import('@/views/TermsOfService.vue')
  },
  {
    path: '/api-documentation',
    component: () => import('@/views/API.vue')
  },
  {
    path: '/credits',
    component: () => import('@/views/Credits.vue')
  },
  {
    path: '/market',
    children: [
      {
        path: '',
        component: () => import('@/views/Market.vue'),
        props: true
      },
      {
        path: ':category',
        component: () => import('@/views/Market.vue'),
        props: true
      },
      {
        path: ':category/:slug/:version?',
        component: () => import('@/views/MarketProduct.vue'),
        props: true
      },
      {
        path: ':category/:slug/:version?/checkout',
        component: () => import('@/views/shop/Checkout.vue'),
        props: true
      },
      {
        path: ':category/:slug/:version?/checkout/authenticate',
        component: () => import('@/views/AuthorizeCheckout.vue'),
        props: true
      },
      {
        path: ':category/:slug/:version?/checkout/success',
        component: () => import('@/views/shop/Success.vue'),
        props: true
      },
      {
        path: ':category/:slug/:version?/checkout/cancel',
        component: () => import('@/views/shop/Cancel.vue'),
        props: true
      },
      {
        path: 'orders',
        component: () => import('@/views/shop/Orders.vue')
      }
    ]
  },
  {
    path: '/signup',
    children: [
      {
        path: 'checkout',
        component: () => import('@/views/signup/Checkout.vue')
      },
      {
        path: 'checkout/success',
        component: () => import('@/views/signup/Success.vue')
      },
      {
        path: 'checkout/cancel',
        component: () => import('@/views/signup/Cancel.vue')
      }
    ]
  },
  {
    path: '/features',
    name: 'Features',
    children: [
      {
        path: '',
        redirect: '/features/drop/components'
      },
      {
        path: 'search-engine-optimalization',
        name: 'SEO',
        component: () => import('@/views/features/SEO.vue')
      },
      {
        path: 'market',
        component: () => import('@/views/features/Market.vue')
      },
      {
        path: 'git',
        component: () => import('@/views/features/Git.vue')
      },
      {
        path: 'teams',
        component: () => import('@/views/features/Teams.vue')
      },
      {
        path: 'projects',
        component: () => import('@/views/features/Projects.vue')
      },
      {
        path: 'launch',
        children: [
          {
            path: 'export',
            component: () => import('@/views/features/launch/Export.vue')
          },
          {
            path: 'deploy',
            component: () => import('@/views/features/launch/Deploy.vue')
          },
          {
            path: 'publish',
            component: () => import('@/views/features/launch/Publish.vue')
          }
        ]
      },
      {
        path: 'code',
        children: [
          {
            path: 'general',
            component: () => import('@/views/features/code/General.vue')
          },
          {
            path: 'real-time',
            component: () => import('@/views/features/code/RealTime.vue')
          },
          {
            path: 'mockup',
            component: () => import('@/views/features/code/Mockup.vue')
          }
        ]
      },
      {
        path: 'templating',
        children: [
          {
            path: 'views',
            component: () => import('@/views/features/template/Views.vue')
          },
          {
            path: 'components',
            component: () => import('@/views/features/template/Components.vue')
          },
          {
            path: 'routes',
            component: () => import('@/views/features/template/Routes.vue')
          },
          {
            path: 'color-palette',
            component: () =>
              import('@/views/features/template/ColorPalette.vue')
          }
        ]
      },
      {
        path: 'transform',
        children: [
          {
            path: 'position',
            component: () => import('@/views/features/transform/Position.vue')
          },
          {
            path: 'dimension',
            component: () => import('@/views/features/transform/Dimension.vue')
          },
          {
            path: 'rotation',
            component: () => import('@/views/features/transform/Rotation.vue')
          },
          {
            path: 'layout',
            component: () => import('@/views/features/transform/Layout.vue')
          },
          {
            path: 'text',
            component: () => import('@/views/features/transform/Text.vue')
          }
        ]
      },
      {
        path: 'control',
        children: [
          {
            path: 'attributes',
            component: () => import('@/views/features/control/Attributes.vue')
          },
          {
            path: 'properties',
            component: () => import('@/views/features/control/Properties.vue')
          },
          {
            path: 'props',
            redirect: '/features/control/properties'
          },
          {
            path: 'styles',
            component: () => import('@/views/features/control/Styles.vue')
          },
          {
            path: 'tailwind',
            component: () => import('@/views/features/control/Tailwind.vue')
          },
          {
            path: 'dynamic',
            component: () => import('@/views/features/control/Dynamic.vue')
          },
          {
            path: 'content',
            component: () => import('@/views/features/control/Content.vue')
          },
          {
            path: 'keyframes',
            component: () => import('@/views/features/control/Keyframes.vue')
          },
          {
            path: 'breakpoints',
            component: () => import('@/views/features/control/Breakpoints.vue')
          },
          {
            path: 'darkmode',
            component: () => import('@/views/features/control/Darkmode.vue')
          }
        ]
      },
      {
        path: 'drop',
        children: [
          {
            path: 'elements',
            component: () => import('@/views/features/drop/Elements.vue')
          },
          {
            path: 'components',
            component: () => import('@/views/features/drop/Components.vue')
          },
          {
            path: 'icons',
            component: () => import('@/views/features/drop/Icons.vue')
          },
          {
            path: 'sections',
            component: () => import('@/views/features/drop/Sections.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/:catchall(.*)',
    component: () => import('@/views/NotFound.vue'),
    props: true,
    name: 'NotFound'
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  }
})
export default router
