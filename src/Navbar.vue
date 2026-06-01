<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-green-800">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo Section -->
        <div class="flex items-center gap-3 flex-shrink-0">
          <div class="hidden sm:block">
            <p class="text-green-800 font-bold text-lg">Tembera URWANDA</p>
            <p class="text-xs text-yellow-600 font-semibold">Discover Rwanda</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex gap-1 items-center">
          <li>
            <router-link 
              to="/" 
              class="px-4 py-2 text-green-800 font-medium rounded-lg transition-all duration-300 hover:bg-green-50 hover:text-green-900"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link 
              to="/about" 
              class="px-4 py-2 text-green-800 font-medium rounded-lg transition-all duration-300 hover:bg-green-50 hover:text-green-900"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link 
              to="/service" 
              class="px-4 py-2 text-green-800 font-medium rounded-lg transition-all duration-300 hover:bg-green-50 hover:text-green-900"
            >
              Services
            </router-link>
          </li>

          <!-- Gallery Dropdown -->
          <li class="relative group">
            <button class="px-4 py-2 text-green-800 font-medium rounded-lg transition-all duration-300 hover:bg-green-50 hover:text-green-900 flex items-center gap-1">
              Gallery
              <span class="text-sm">▼</span>
            </button>
            <ul class="absolute left-0 mt-0 w-48 bg-white text-green-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2 border-t-4 border-yellow-500">
              <li><router-link to="/image" class="block px-4 py-3 rounded-lg hover:bg-green-50 font-medium transition">📸 Images</router-link></li>
              <li><router-link to="/video" class="block px-4 py-3 rounded-lg hover:bg-green-50 font-medium transition">🎥 Videos</router-link></li>
            </ul>
          </li>

          <!-- Destination Dropdown -->
          <li class="relative group">
            <button class="px-4 py-2 text-green-800 font-medium rounded-lg transition-all duration-300 hover:bg-green-50 hover:text-green-900 flex items-center gap-1">
              Destination
              <span class="text-sm">▼</span>
            </button>
            <ul class="absolute left-0 mt-0 w-48 bg-white text-green-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2 border-t-4 border-red-500">
              <li><router-link to="/kigali" class="block px-4 py-3 rounded-lg hover:bg-green-50 font-medium transition">🏙️ Kigali</router-link></li>
              <li><router-link to="/north" class="block px-4 py-3 rounded-lg hover:bg-green-50 font-medium transition">⛰️ Northern</router-link></li>
              <li><router-link to="/south" class="block px-4 py-3 rounded-lg hover:bg-green-50 font-medium transition">🌿 Southern</router-link></li>
              <li><router-link to="/west" class="block px-4 py-3 rounded-lg hover:bg-green-50 font-medium transition">🏞️ Western</router-link></li>
              <li><router-link to="/east" class="block px-4 py-3 rounded-lg hover:bg-green-50 font-medium transition">🌾 Eastern</router-link></li>
            </ul>
          </li>

          <li>
            <router-link 
              to="/contact" 
              class="px-4 py-2 text-green-800 font-medium rounded-lg transition-all duration-300 hover:bg-green-50 hover:text-green-900"
            >
              Contact
            </router-link>
          </li>
        </ul>

        <!-- CTA Button -->
        <router-link
          to="/contact"
          class="hidden lg:block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Book Now
        </router-link>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isOpen = !isOpen"
          class="lg:hidden text-green-800 text-2xl"
        >
          ☰
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isOpen" class="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-2">
        <router-link to="/" class="block px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50">Home</router-link>
        <router-link to="/about" class="block px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50">About</router-link>
        <router-link to="/service" class="block px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50">Services</router-link>
        <router-link to="/image" class="block px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50 ml-4">📸 Images</router-link>
        <router-link to="/video" class="block px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50 ml-4">🎥 Videos</router-link>
        <router-link to="/kigali" class="block px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50 ml-4">🏙️ Kigali</router-link>
        <router-link to="/contact" class="block px-4 py-2 text-green-800 font-medium rounded-lg hover:bg-green-50">Contact</router-link>
        <router-link to="/contact" class="block px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 mt-2">Book Now</router-link>
      </div>
    </div>
  </nav>
</template>