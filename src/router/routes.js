import LandingPage from '../components/Landing/LandingPage.vue';
import NotFound from '../components/errors/NotFound.vue';

export const routes = [
  {
    path: '/',
    component: LandingPage,
    title: 'LandingPage',
    meta: { guest: true },
  },
  //   {
  //     path: '/register-quote',
  //     component: RegisterQuoteSuggestion,
  //     title: 'RegisterQuoteSuggestion',
  //     meta: { requiresAuth: true },
  //   },

  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    title: 'Not Found',
    meta: { guest: true },
  },
];
