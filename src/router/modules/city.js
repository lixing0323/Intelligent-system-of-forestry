export const cityRouter = {
  path: '/city',
  component: () => import('@/views/CommonRouterView'),
  redirect: '/city/index',
  hidden: true,
  meta: { title: '城市', icon: 'example' },
  children: [
    {
      path: '/city/:id',
      component: () => import('@/views/city/index'),
      name: 'CityDetails',
      meta: { title: '城市详情' }
    }
  ]
}
