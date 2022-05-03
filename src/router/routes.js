
import AppRoutes from './AppRoutes'

const routes = [
  {
    path: AppRoutes.HOME,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: AppRoutes.EXPLOTACION_LIST, component: () => import('pages/explotaciones/ExplotacionList.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('src/pages/ErrorNotFound.vue')
  }
]

export default routes
