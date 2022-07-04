export const countryRouter = {
  path: '/country',
  component: () => import('@/views/CommonRouterView'),
  redirect: '/country/index',
  hidden: true,
  meta: { title: '样地', icon: 'example' },
  children: [
    {
      path: '/country/:id',
      component: () => import('@/views/country/index'),
      name: 'CountryDetails',
      meta: { title: '样地详情' }
    }
  ]
}
