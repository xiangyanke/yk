import fent from '../pages/fent/fent.vue'
import home from '../pages/home/home.vue'
import personal from '../pages/personal/personal.vue'
import shopping from '../pages/shopping/shopping.vue'
import things from '../pages/things/things.vue'
import search from '../pages/search/search.vue'
import phoneLogin from '../pages/phoneLogin/phoneLogin.vue'
import emailLogin from '../pages/emailLogin/emailLogin.vue'
import recommend from  '../pages/recommend/recommend.vue'
import pick from  '../pages/pick/pick.vue'
const routes = [
  {path:'/home',component:home,
    meta:{
    showfoot:true
    }
  },
  {
    path: '/fent',
    component: fent,
    meta:{
      showfoot:true
    }
  },
  {path:'/things',component:things,
    meta:{
      showfoot:true
    },
    children:[
      {
        path:'/things/recommend',
        component:recommend,
        meta:{
          showfoot:true
        }
      },
      {
        path:'/things/pick',
        component:pick,
        meta:{
          showfoot:true
        }
      },
    ]


  },
  {path:'/shopping',component:shopping,
    meta:{
      showfoot:true
    }
  },
  {path:'/personal',component:personal},

  { path: '/',redirect: '/home'},
  {path:'/search',component:search},
  {path:'/phoneLogin',component:phoneLogin},
  {path:'/emailLogin',component:emailLogin}

]
export default routes
