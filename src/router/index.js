import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/about.vue";
import Contact from "@/views/contact.vue";
import Service from "@/views/service.vue";
import Province from "@/views/province.vue";
const routes = [
{
    path: "/",
    name: "Home",
    component: Home
},
{   path: "/about",
    name: "About",
    component: About
},
{
    path: "/contact",
    name: "Contact",
    component: Contact
},
{
    path: "/service",
    name: "Service",
    component: Service
},
{
    path: "/province/:province",
    name: "Province",
    component: Province
}

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

