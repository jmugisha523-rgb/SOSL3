<script setup>
import Navbar from './Component/Navbar.vue'
import Footer from './Component/Footer.vue'
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const hidelayout = computed(() => {
  // hide navbar/footer on dashboard + auth pages
  return (
    route.path === '/login' ||
    route.path === '/register'
  )
})
</script>

<template>
  <Navbar v-if="!hidelayout" />
  <router-view />
  <Footer v-if="!hidelayout" />
</template>

