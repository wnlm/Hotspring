import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* 项目提供的路由配置 官方文档 https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/router-and-nav.html#配置项 */
/*

//当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
hidden: true // (默认 false)

//当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
redirect: 'noRedirect'

//当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
//只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
//若你想不管路由下面的 children 声明的个数都显示你的根路由
//你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
alwaysShow: true

name: 'router-name' //设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
meta: {
  roles: ['admin', 'editor'] //设置该路由进入的权限，支持多个权限叠加
  title: 'title' //设置该路由在侧边栏和面包屑中展示的名字
  icon: 'svg-name' //设置该路由的图标
  noCache: true //如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
  breadcrumb: false // 如果设置为false，则不会在breadcrumb面包屑中显示
}
*/

// 如果你没有设置 roles 属性，则所有角色都可以访问
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '首页',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/systemSetup',
    component: Layout,
    redirect: '/systemSetup/roleManagement',
    name: 'systemSetup',
    meta: { title: '系统设置', icon: 'systemSetup' },
    children: [
      {
        path: 'roleManagement',
        name: 'RoleManagement',
        component: () => import('@/views/systemSetup/roleManagement'),
        meta: { title: '角色管理', icon: 'roleManagement' }
      },
      {
        path: 'permissionAssignment',
        name: 'PermissionAssignment',
        component: () => import('@/views/systemSetup/permissionAssignment'),
        meta: { title: '权限分配', icon: 'permissionAssignment' }
      },
    ]
  },
  {
    path: '/personnelManagement',
    component: Layout,
    redirect: '//personnelManagement/applicationForm',
    name: 'PersonnelManagement',
    meta: { title: '人事管理', icon: 'person' },
    children: [
      {
        path: 'applicationForm',
        name: 'ApplicationForm',
        component: () => import('@/views/personnelManagement/applicationForm'),
        meta: { title: '应聘表', icon: 'application' }
      },
      {
        path: 'employeeFiles',
        name: 'EmployeeFiles',
        component: () => import('@/views/personnelManagement/employeeFiles'),
        meta: { title: '员工档案', icon: 'employeeFiles' }
      },
      {
        path: 'personnelChanges',
        name: 'PersonnelChanges',
        component: () => import('@/views/personnelManagement/personnelChanges'),
        meta: { title: '人事变动', icon: 'personnelChanges' }
      },
      {
        path: 'perFoundationSetup',
        name: 'PerFoundationSetup',
        component: () => import('@/views/personnelManagement/perFoundationSetup'),
        meta: { title: '基础设置', icon: 'perFoundationSetup' }
      },
    ]
  },
  {
    path: '/membershipManagement',
    component: Layout,
    redirect: '/membershipManagement/memberInformationManagement',
    name: 'MembershipManagement',
    meta: { title: '会员管理', icon: 'membership' },
    children: [
      {
        path: 'memberInformationManagement',
        name: 'MemberInformationManagement',
        component: () => import('@/views/membershipManagement/memberInformationManagement'),
        meta: { title: '会员资料管理', icon: 'memberInformation' }
      },
      {
        path: 'personalConsumptionAnalysis',
        name: 'PersonalConsumptionAnalysis',
        component: () => import('@/views/membershipManagement/personalConsumptionAnalysis'),
        meta: { title: '个人消费分析', icon: 'personalConsumption' }
      },
    ]
  },
  {
    path: '/warehouse',
    component: Layout,
    redirect: '/warehouse/foundationSetup',
    name: 'Warehouse',
    meta: { title: '仓库管理', icon: 'warehouse' },
    children: [
      {
        path: 'foundationSetup',
        name: 'FoundationSetup',
        component: () => import('@/views/warehouseManagement/foundationSetup'),
        meta: { title: '基础设置', icon: 'foundationSetup' }
      },
      {
        path: 'warehousingManagement',
        name: 'WarehousingManagement',
        component: () => import('@/views/warehouseManagement/warehousingManagement'),
        meta: { title: '入库管理', icon: 'warehousing' }
      },
      {
        path: 'outgoingManagement',
        name: 'OutgoingManagement',
        component: () => import('@/views/warehouseManagement/outgoingManagement'),
        meta: { title: '出库管理', icon: 'outgoing' }
      },
      {
        path: 'inventoryManagement',
        name: 'InventoryManagement',
        component: () => import('@/views/warehouseManagement/inventoryManagement'),
        meta: { title: '库存管理', icon: 'inventory' }
      },
    ]
  },
  {
    path: '/cashRegister',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'CashRegister',
        component: () => import('@/views/cashRegisterManagement/index'),
        meta: { title: '收银管理', icon: 'cashRegister' }
      }
    ]
  },
  // 404 page must be placed at the end !!! (404路由必须在最后一个，否则将导致在其之后的路由无法正常加载！)
  { path: '*', redirect: '/404', hidden: true }

]


const createRouter = () => new Router({
  // mode: 'history', // require service support （开启history模式，需要服务端支持）
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
