import Index from './pages/Index';
import Weather from './pages/Weather';
import Browser from './pages/Browser';

export default [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/weather',
    component: Weather,
  },
  {
    path: '/browser',
    component: Browser,
  },
];
