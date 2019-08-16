import Home from './pages/Home';
import CoachDetails from './pages/Coaches';


const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/coaches',
    name: 'coaches',
    component: CoachDetails
  }
];

export default routes;