<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<footer class="bg-gradient-to-b from-green-800 to-green-900 text-white">
  <!-- Main Footer Content -->
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid md:grid-cols-4 gap-12 mb-12">
      <!-- Brand Section -->
      <div class="md:col-span-1">
        <h3 class="text-3xl font-bold text-yellow-400 mb-2">Tembera</h3>
        <p class="text-yellow-300 font-semibold text-lg">URWANDA</p>
        <p class="text-gray-300 mt-4 leading-relaxed text-sm">
          Discover the magic of Rwanda - the Land of a Thousand Hills. Experience unforgettable adventures, vibrant culture, and breathtaking landscapes.
        </p>
        <div class="flex gap-3 mt-6">
          <a href="#" class="w-10 h-10 bg-green-700 hover:bg-yellow-500 rounded-full flex items-center justify-center transition">f</a>
          <a href="#" class="w-10 h-10 bg-green-700 hover:bg-yellow-500 rounded-full flex items-center justify-center transition">𝕏</a>
          <a href="#" class="w-10 h-10 bg-green-700 hover:bg-yellow-500 rounded-full flex items-center justify-center transition">📷</a>
        </div>
      </div>

      
      <div>
        <h3 class="text-xl font-bold text-yellow-300 mb-6 border-b-2 border-yellow-400 pb-2">Quick Links</h3>
        <ul class="space-y-3 text-sm">
          <li>
            <RouterLink to="/" class="text-gray-300 hover:text-yellow-300 transition font-medium">🏠 Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="text-gray-300 hover:text-yellow-300 transition font-medium">ℹ️ About Us</RouterLink>
          </li>
          <li>
            <RouterLink to="/service" class="text-gray-300 hover:text-yellow-300 transition font-medium">💼 Services</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="text-gray-300 hover:text-yellow-300 transition font-medium">📧 Contact Us</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Destinations -->
      <div>
        <h3 class="text-xl font-bold text-yellow-300 mb-6 border-b-2 border-yellow-400 pb-2">Destinations</h3>
        <ul class="space-y-3 text-sm">
          <li>
            <RouterLink to="/north" class="text-gray-300 hover:text-yellow-300 transition font-medium">⛰️ Northern Province</RouterLink>
          </li>
          <li>
            <RouterLink to="/south" class="text-gray-300 hover:text-yellow-300 transition font-medium">🌿 Southern Province</RouterLink>
          </li>
          <li>
            <RouterLink to="/west" class="text-gray-300 hover:text-yellow-300 transition font-medium">🌊 Western Province</RouterLink>
          </li>
          <li>
            <RouterLink to="/east" class="text-gray-300 hover:text-yellow-300 transition font-medium">🦁 Eastern Province</RouterLink>
          </li>
          <li>
            <RouterLink to="/kigali" class="text-gray-300 hover:text-yellow-300 transition font-medium">🏙️ Kigali City</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div>
        <h3 class="text-xl font-bold text-yellow-300 mb-6 border-b-2 border-yellow-400 pb-2">Contact Us</h3>
        <ul class="space-y-4 text-sm text-gray-300">
          <li class="flex gap-3">
            <span>📧</span>
            <div>
              <p class="font-semibold text-yellow-300">Email</p>
              <a href="mailto:jmugisha523@gmail.com" class="hover:text-yellow-300 transition">jmugisha523@gmail.com</a>
            </div>
          </li>
          <li class="flex gap-3">
            <span>📱</span>
            <div>
              <p class="font-semibold text-yellow-300">Phone</p>
              <a href="tel:+250796608954" class="hover:text-yellow-300 transition">+250 796 608 954</a>
            </div>
          </li>
          <li class="flex gap-3">
            <span>📍</span>
            <div>
              <p class="font-semibold text-yellow-300">Address</p>
              <p>Kagugu, Kigali, Rwanda</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-green-700 my-8"></div>

    <!-- Bottom Footer -->
    <div class="grid md:grid-cols-3 gap-8 items-center">
      <!-- Copyright -->
      <div class="md:col-span-2 text-sm text-gray-400">
        <p>&copy; 2026 Tembera URWANDA. All rights reserved. | Crafted with ❤️ for Rwanda</p>
      </div>

      <!-- Footer Links -->
      <div class="flex justify-end gap-6 text-sm">
        <a href="#" class="text-gray-400 hover:text-yellow-300 transition">Privacy Policy</a>
        <a href="#" class="text-gray-400 hover:text-yellow-300 transition">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
</template>

<style scoped>
footer {
  margin-top: auto;
}
</style>