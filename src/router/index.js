import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/about.vue";
import Contact from "@/views/contact.vue";
import Service from "@/views/service.vue";
import Province from "@/views/province.vue";
import Image from "@/views/image.vue";
import Login from "@/views/login.vue";
import Register from  "@/views/register.vue";
import Dashboard from "@/views/dashboard.vue";

import Kigali from "@/views/kigali.vue";
import Northern from "@/views/North.vue";
import Southern from "@/views/Southern.vue";
import Western from "@/views/Western.vue";
import Eastern from "@/views/Eastern.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "HomeAlias",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/province/:province",
    name: "Province",
    component: Province,
  },
  {
    path: "/image",
    name: "Gallery",
    component: Image,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

  // Province destinations
  {
    path: "/kigali",
    name: "Kigali",
    component: Kigali,
  },
  {
    path: "/northern",
    name: "Northern",
    component: Northern,
  },
  {
    path: "/southern",
    name: "Southern",
    component: Southern,
  },
  {
    path: "/western",
    name: "Western",
    component: Western,
  },
  {
    path: "/eastern",
    name: "Eastern",
    component: Eastern,
  },

  // Backward-compatible dynamic destinations route (if used elsewhere)
  {
    path: "/destination/:province",
    name: "Destination",
    component: Province,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;