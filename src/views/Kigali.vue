<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white">

    <!-- HERO SECTION -->
    <section
      class="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style="background-image: url('/images/kigali-skyline.jpg.jpg');"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 text-center text-white px-6 animate-fadeInUp">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">
          🏙️ Kigali City
        </h1>

        <p class="text-lg md:text-2xl max-w-3xl mx-auto text-gray-100">
          Rwanda's vibrant capital - clean, modern, and pulsing with African energy
        </p>
      </div>
    </section>

    <!-- INTRO SECTION -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
      <div class="max-w-6xl mx-auto px-6 text-center">

        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-green-900">
          Welcome to Africa's Cleanest Capital
        </h2>

        <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Kigali is Rwanda's capital and largest city, known for its cleanliness, modern infrastructure, 
          vibrant culture, and thriving social scene. Experience world-class restaurants, museums, markets, 
          and the warmth of Rwandan hospitality.
        </p>

        <div class="grid grid-cols-3 gap-6 mt-12">
          <div class="bg-green-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-green-700">🏛️</p>
            <p class="text-sm font-semibold text-green-900 mt-2">Museums</p>
          </div>
          <div class="bg-yellow-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-yellow-600">🍽️</p>
            <p class="text-sm font-semibold text-yellow-900 mt-2">Dining Scene</p>
          </div>
          <div class="bg-green-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-green-700">🛍️</p>
            <p class="text-sm font-semibold text-green-900 mt-2">Shopping</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ATTRACTIONS SECTION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Top Attractions in Kigali
          </h2>
          <p class="text-gray-600 text-lg">Explore Rwanda's dynamic capital city</p>
        </div>

        <div class="space-y-20">

          <!-- 1. KIGALI SKYLINE & CITY CENTER -->
          <div class="grid md:grid-cols-2 gap-10 items-center hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
            <div class="overflow-hidden rounded-2xl">
              <img
                src="/images/kigali-skyline.jpg.jpg"
                alt="Kigali Skyline"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🏙️ Kigali City Center
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Experience Rwanda's modern capital with its vibrant downtown area, contemporary architecture, 
                bustling business district, and thriving cultural scene.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Modern skyline views</li>
                <li>✓ Shopping malls</li>
                <li>✓ Business district tours</li>
                <li>✓ Contemporary restaurants</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                📍 Central Kigali | 🌃 Beautiful at night
              </p>
            </div>
          </div>

          <!-- 2. KIGALI CONVENTION CENTER -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1 p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🏢 Kigali Convention Centre
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                An iconic modern facility hosting international conferences, events, and exhibitions. 
                Marvel at its contemporary architecture and learn about Rwanda's development.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Architectural tours</li>
                <li>✓ Event attendance</li>
                <li>✓ Conference facilities</li>
                <li>✓ Business hub</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                🌐 Symbol of Rwanda's progress | 📅 Check event calendar
              </p>
            </div>

            <div class="order-1 md:order-2 overflow-hidden rounded-2xl">
              <img
                src="/images/convention-center.jpg"
                alt="Convention Center"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <!-- 3. KIMIRONKO MARKET -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="overflow-hidden rounded-2xl">
              <img
                src="/images/kimironko-market.jpg"
                alt="Kimironko Market"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🛒 Kimironko Market
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Kigali's largest and most vibrant market. Experience authentic Rwandan culture, 
                local produce, crafts, and the energy of daily city life.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Fresh local produce</li>
                <li>✓ Traditional crafts</li>
                <li>✓ Cultural immersion</li>
                <li>✓ Local food vendors</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                📍 Central Kigali | 🎯 Best visited in morning
              </p>
            </div>
          </div>

          <!-- 4. KIGALI MEMORIALS & MUSEUMS -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1 p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🏛️ Museums & Cultural Sites
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Learn about Rwanda's powerful history through world-class museums and memorials. 
                Understand the country's journey from tragedy to resilience and peace.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Genocide Memorial Centre</li>
                <li>✓ Rwanda Museum</li>
                <li>✓ Contemporary art galleries</li>
                <li>✓ Historical exhibitions</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                📚 Educational experiences | 🕊️ Powerful and moving
              </p>
            </div>

            <div class="order-1 md:order-2 overflow-hidden rounded-2xl">
              <img
                src="/images/genocide-memorial.jpg - Copy - Copy.jpg"
                alt="Museum"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <!-- 5. KIGALI NIGHTLIFE & DINING -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="overflow-hidden rounded-2xl">
              <img
                src="/images/convention-center.jpg"
                alt="Kigali Nightlife"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🌃 Nightlife & Dining Scene
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Kigali has one of East Africa's best dining and entertainment scenes. 
                From fine dining to street food, from rooftop bars to live music venues.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ International restaurants</li>
                <li>✓ Traditional Rwandan cuisine</li>
                <li>✓ Rooftop bars & lounges</li>
                <li>✓ Live music venues</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                🍽️ World-class cuisine | 🎵 Vibrant entertainment scene
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- CITY EXPERIENCES -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-4xl md:text-5xl font-bold text-center text-green-900 mb-16">
          Kigali City Experiences
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white border-2 border-green-200 rounded-2xl p-8 hover:shadow-lg transition">
            <p class="text-4xl mb-4">🚕</p>
            <h3 class="text-2xl font-bold text-green-800 mb-3">City Tours</h3>
            <p class="text-gray-700">Guided tours of Kigali's main attractions, neighborhoods, and hidden gems with knowledgeable local guides.</p>
          </div>

          <div class="bg-white border-2 border-yellow-200 rounded-2xl p-8 hover:shadow-lg transition">
            <p class="text-4xl mb-4">🎨</p>
            <h3 class="text-2xl font-bold text-green-800 mb-3">Art & Culture</h3>
            <p class="text-gray-700">Explore contemporary galleries, traditional crafts markets, and support local Rwandan artists and artisans.</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-2xl p-8 hover:shadow-lg transition">
            <p class="text-4xl mb-4">🏃</p>
            <h3 class="text-2xl font-bold text-green-800 mb-3">Active Recreation</h3>
            <p class="text-gray-700">Gym memberships, running clubs, yoga studios, and sports facilities for active travelers.</p>
          </div>

          <div class="bg-white border-2 border-green-200 rounded-2xl p-8 hover:shadow-lg transition">
            <p class="text-4xl mb-4">🛏️</p>
            <h3 class="text-2xl font-bold text-green-800 mb-3">Accommodations</h3>
            <p class="text-gray-700">Luxury hotels, boutique guesthouses, and budget hostels across all neighborhoods and price ranges.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">

        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Explore Kigali Now
        </h2>

        <p class="text-lg md:text-xl mb-10 text-gray-100">
          Discover Rwanda's vibrant capital and experience the warmth of its people and culture.
        </p>

        <div class="flex flex-col md:flex-row justify-center gap-4">
          <RouterLink
            to="/contact"
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Your Kigali Experience
          </RouterLink>

          <RouterLink
            to="/"
            class="bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Home
          </RouterLink>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out;
}

html {
  scroll-behavior: smooth;
}
</style>

