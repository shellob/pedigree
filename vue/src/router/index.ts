import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import PersonPage from '../components/pages/PersonPage.vue'
import EditPersonPage from '../components/pages/EditPersonPage.vue'
import CreatePersonPage from '../components/pages/CreatePersonPage.vue'
import SettingsPage from '../components/pages/Settings.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/person/:id',
    name: 'PersonPage',
    component: PersonPage
  },
  {
    path: '/person/:id/edit',
    name: RouteNames.EDIT_PERSON,
    component: EditPersonPage
  },
  {
    path: '/create',
    name: RouteNames.CREATE_PERSON,
    component: CreatePersonPage
  },
  {
    path: '/settings',
    name: RouteNames.SETTINGS,
    component: SettingsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
