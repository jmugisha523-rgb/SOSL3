import { createRouter,createWebHistory } from "vue-router";
import home from "../Views/home.vue"
import about from "../Views/about.vue"
import services from "../Views/Services.vue"
import photos from "../Views/photos.vue"
import videos from "../Views/Videos.vue"
import north from "../Views/Northern.vue"
import south from "../Views/Southern.vue"
import east from "../Views/Eastern.vue"
import west from "../Views/Western.vue"
import kigali from "../Views/Kigali.vue"
import Kigali from "../Views/Kigali.vue"
import contact from "../Views/Contact.vue"
import Services from "../Views/Services.vue";
const routes=[
    {
        path:"/",
        name:"Home",
        component:home
    },
    {
        path:"/about",
        name:"About",
        component:about
    },
      {
path:"/Services",
name:"Services",
component:Services

    },

{
  path:"/Photos",
  name:"Photos",
  component:photos  
},
{
    path:"/Videos",
    name:"videos",
    component:videos

},
{
    path:"/North",
    name:"North",
    component:north
},

{
    path:"/East",
    name:"East",
    component:east
},

{
    path:"/South",
    name:"South",
    component:south
},

{
    path:"/West",
    name:"Western",
    component:west
},
{
    path:"/Kigali",
    name:"Kigali",
    component:Kigali

},
{
    path:"/Contact",
    name:"Contact",
    component:contact
}




];

const router=createRouter(
    {
   history:createWebHistory(),
   routes,
    },)
  

export default router