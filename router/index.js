import { createRouter, createWebHistory } from "vue-router";

// Pages
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";

// Provinces
import Kigali from "../views/Kigali.vue";
import Northern from "../views/Northern.vue";
import Southern from "../views/Southern.vue";
import Western from "../views/Western.vue";
import Eastern from "../views/Eastern.vue";

// Destination Page (NEW)
import Destinations from "../views/Destinations.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/services", name: "Services", component: Services },
  { path: "/contact", name: "Contact", component: Contact },

  // provinces
  { path: "/kigali", name: "Kigali", component: Kigali },
  { path: "/northern", name: "Northern", component: Northern },
  { path: "/southern", name: "Southern", component: Southern },
  { path: "/western", name: "Western", component: Western },
  { path: "/eastern", name: "Eastern", component: Eastern },

  // destinations hub page
  { path: "/destinations", name: "Destinations", component: Destinations },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;