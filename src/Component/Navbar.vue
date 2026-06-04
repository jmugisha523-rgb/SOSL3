<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-green-800">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">

        <!-- Logo -->
        <div class="flex items-center gap-3 flex-shrink-0">
          <div class="hidden sm:block">
            <p class="text-green-800 font-bold text-lg">
              Tembera URWANDA
            </p>
            <p class="text-xs text-yellow-600 font-semibold">
              Discover Rwanda
            </p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex gap-1 items-center">

          <li>
            <router-link
              to="/"
              active-class="bg-green-700 text-white"
              class="px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50"
            >
              Home
            </router-link>
          </li>

          <li>
            <router-link
              to="/about"
              active-class="bg-green-700 text-white"
              class="px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50"
            >
              About
            </router-link>
          </li>

          <li>
            <router-link
              to="/service"
              active-class="bg-green-700 text-white"
              class="px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50"
            >
              Services
            </router-link>
          </li>

          <!-- Gallery -->
          <li class="relative group">
            <button class="px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50 flex items-center gap-1">
              Gallery <span class="text-sm">▼</span>
            </button>

            <ul class="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition p-2 border-t-4 border-yellow-500">
              <li>
                <router-link to="/image" class="block px-4 py-3 hover:bg-green-50">
                  📸 Images
                </router-link>
              </li>

              <li>
                <router-link to="/video" class="block px-4 py-3 hover:bg-green-50">
                  🎥 Videos
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Destinations -->
          <li class="relative group">
            <router-link
              to="/destinations"
              active-class="bg-green-700 text-white"
              class="px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50 flex items-center gap-1"
            >
              Destinations <span class="text-sm">▼</span>
            </router-link>

            <ul class="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition p-2 border-t-4 border-red-500">

              <li>
                <router-link to="/province/kigali" class="block px-4 py-3 hover:bg-green-50">
                  🏙️ Kigali City
                </router-link>
              </li>

              <li>
                <router-link to="/province/northern" class="block px-4 py-3 hover:bg-green-50">
                  ⛰️ Northern Province
                </router-link>
              </li>

              <li>
                <router-link to="/province/southern" class="block px-4 py-3 hover:bg-green-50">
                  🌿 Southern Province
                </router-link>
              </li>

              <li>
                <router-link to="/province/western" class="block px-4 py-3 hover:bg-green-50">
                  🏞️ Western Province
                </router-link>
              </li>

              <li>
                <router-link to="/province/eastern" class="block px-4 py-3 hover:bg-green-50">
                  🌾 Eastern Province
                </router-link>
              </li>

            </ul>
          </li>

          <li>
            <router-link
              to="/contact"
              active-class="bg-green-700 text-white"
              class="px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50"
            >
              Contact
            </router-link>
          </li>
<li>
  <router-link
    to="/login"
    active-class="bg-green-700 text-white"
    class="px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50"
  >
    Login
  </router-link>
</li>

        </ul>

        <!-- CTA -->
        <router-link
          to="/contact"
          class="hidden lg:block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold"
        >
          Book Now
        </router-link>

        <!-- Mobile -->
        <button @click="isOpen = !isOpen" class="lg:hidden text-2xl text-green-800">
          ☰
        </button>

      </div>

      
      <div v-if="isOpen" class="lg:hidden mt-4 space-y-2 border-t pt-4">

        <router-link to="/" class="block px-4 py-2">Home</router-link>
        <router-link to="/about" class="block px-4 py-2">About</router-link>
        <router-link to="/service" class="block px-4 py-2">Services</router-link>

        <router-link to="/destinations" class="block px-4 py-2 font-bold">
          Destinations
        </router-link>

        <router-link to="/province/kigali" class="block px-4 py-2 ml-4">
          Kigali
        </router-link>

        <router-link to="/province/northern" class="block px-4 py-2 ml-4">
          Northern
        </router-link>

        <router-link to="/province/southern" class="block px-4 py-2 ml-4">
          Southern
        </router-link>

        <router-link to="/province/western" class="block px-4 py-2 ml-4">
          Western
        </router-link>

        <router-link to="/province/eastern" class="block px-4 py-2 ml-4">
          Eastern
        </router-link>

        <router-link to="/contact" class="block px-4 py-2">
          Contact
        </router-link>

        <router-link to="/image" class="block px-4 py-2">
          Gallery
        </router-link>

        <router-link to="/contact" class="block px-4 py-2 bg-yellow-500 text-white">
          Book Now
        </router-link>
          <router-link to="/login" class="block px-4 py-2 bg-green-800 text-white"> login</router-link>   

      </div>
    </div>
  </nav>
</template>