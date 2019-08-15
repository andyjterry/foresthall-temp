import Home from './pages/Home';
// import Coaches from './pages/Coaches';
import CoachDetails from './pages/Coaches';


const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/coaches',
    component: CoachDetails
  },
];

export default routes;