import fent from '../pages/fent/fent.vue'
import home from '../pages/home/home.vue'
import personal from '../pages/personal/personal.vue'
import shopping from '../pages/shopping/shopping.vue'
import things from '../pages/things/things.vue'


const routes = [
  {path:'/home',component:home},
  {
    path: '/fent',
    component: fent,
  },
  {path:'/things',component:things},
  {path:'/shopping',component:shopping},
  {path:'/personal',component:personal},
  { path: '/',redirect: '/home'}



]
export default routes
