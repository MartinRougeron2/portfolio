
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About') },
      { name: 'project',  path: 'projects/:project', component: () => import('pages/Project') },
      { name: 'django', path: 'django', component: () => import('pages/DjangoRedirect')}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
