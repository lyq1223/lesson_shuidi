import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)
//封装组件引入
//有两个函数，后一个是一个延迟加载的，只有当路由是对应的路由的时候才会加载组件，可以加快页面加载速度
const __import__ = file => () => import(`@/pages/${file}.vue`)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: __import__('home'),
    //两个下划线是绝对路径，封装重复代码
    meta: {
        title: '在线做实验，高效学编程 - 实验楼' 
    }
  },
  {
    path: '/courses',
    name: 'courses',
    component: __import__('courses/course_home'),
    meta: {
        title: '精选项目课程_IT热门课程_实验楼课程 - 实验楼'
    }
  },
  {
    path: '/courses/reports',
    name: 'reports',
    component: __import__('courses/reports/reports'),
    meta: {
        title: '实验报告 - 实验楼'
    }
  },
  {
    path: '/courses/reports/:id',
    name: 'report',
    component: __import__('courses/reports/report'),
    meta: {
        title: '实验楼'
    }
  },
  {
    path: '/courses/:id',
    name: 'course',
    component: __import__('courses/course'),
    meta: {
        title: '实验楼'
    }
  },
  {
    path: '/path',
    name: 'path',
    component: __import__('path/path_home'),
    meta: {
        title: 'IT工程师学习路线_养成路径_实验楼学习路径 - 实验楼'
    }
  },
  {
    path: '/path/:id',
    name: 'coursePath',
    component: __import__('path/course_path'),
    meta: {
        title: 'IT工程师学习路线_养成路径_实验楼学习路径 - 实验楼'
    }
  },
  {
    path: '/questions',
    name: 'questions',
    component: __import__('questions/questions_home'),
    meta: {
        title: 'IT项目技术问答讨论平台_实验楼讨论 - 实验楼'
    }
  },
  {
    path: '/questions/publish',
    name: 'publish',
    component: __import__('questions/publish'),
    meta: {
        title: '发布帖子 - 实验楼'
    }
  },
  {
    path: '/questions/:id',
    name: 'question',
    component: __import__('questions/question'),
    meta: {
        title: '实验楼'
    }
  },
  {
    path: '/user/profile',
    name: 'userProfile',
    component: __import__('user/profile/profile'),
    meta: {
        title: '个人设置 - 实验楼',
        login: true
    }  
  },
  {
    path: '/user/:id',
    name: 'user',
    component: __import__('user/user'),
    meta: {
        title: '实验楼'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: __import__('search/search'),
    meta: {
        title: '实验楼'
    }
  },
  {
    path: '/library',
    name: 'library',
    component: __import__('library/library'),
    meta: {
        title: '教程库-精品编程学习教程库 - 实验楼'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: __import__('client_area/login'),
    meta: {
        title: '登录 - 实验楼'
    }
  },
  {
    path: '/live',
    name: 'live',
    component: __import__('live/live'),
    meta: {
        title: '代码直播课程 - 实验楼'
    }
  },
  {
    path: '/contests',
    name: 'contests',
    component: __import__('contests/contests'),
    meta: {
        title: '编程比赛_编程能力测试_IT挑战_实验楼比赛 - 实验楼'
    }
  },
  {
    path: '*',
    name: 'notfound',
    component: __import__('404'),
    meta: {
        title: 'Sorry，页面走丢了... - 实验楼'
    }
  }
]

const router = new VueRouter({
  routes
})
//路由的每一次切换都会执行这个方法，路由的钩子函数
router.beforeEach((to, from, next) => {
  // console.log(to, from);
  // next();

  document.title = to.meta.title
  //配置路由守卫者，登录了才能进
  if (to.meta.login) { //显示文章标题
    //大应用用store，之前是插入在components中
    // loginState就是我们的modules
      if (!store.state.loginState.sign_on) {
          next({
              path: '/login'
          })
      } else {
          next()
      }
  }
  next()   
})
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router
