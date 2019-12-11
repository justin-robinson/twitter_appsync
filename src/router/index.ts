import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import { Auth } from "aws-amplify";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/signup",
    name: "signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup.vue")
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
          requiresAuth: true
      }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    let user;
    try {
        user = await Auth.currentAuthenticatedUser()
    } catch (e) {
    // user not logged in
    }
    if (requiresAuth && !user) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
});

export default router;
