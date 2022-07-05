export const plotRouter = {
  path: '/plot',
  component: () => import('@/views/CommonRouterView'),
  redirect: '/plot/index',
  hidden: true,
  meta: { title: '样地', icon: 'example' },
  children: [
    {
      path: '/plot/:id',
      component: () => import('@/views/plot/index'),
      name: 'PlotDetails',
      meta: { title: '样地数据统计' }
    }
  ]
}
