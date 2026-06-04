<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white">

    <!-- HERO SECTION -->
    <section
      class="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style="background-image: url('/images/virunga-volcanoes.jpg.jpg');"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 text-center text-white px-6 animate-fadeInUp">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">
          ⛰️ Northern Province
        </h1>

        <p class="text-lg md:text-2xl max-w-3xl mx-auto text-gray-100">
          Home of volcanoes, mountain gorillas, and breathtaking natural wonders
        </p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 text-center">

        <h2 class="text-4xl font-bold mb-6 text-gray-800">
          Discover Northern Rwanda
        </h2>

        <p class="text-gray-600 text-lg leading-relaxed">
          The Northern Province is one of Rwanda’s most famous tourism regions,
          known for Volcanoes National Park, gorilla trekking, volcanic mountains,
          twin lakes, and unforgettable adventure experiences.
        </p>

      </div>
    </section>

    <!-- ATTRACTIONS -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-4xl font-bold text-center mb-16">
          Top Tourist Attractions
        </h2>

        <div class="space-y-16">

          <!-- 1 Volcanoes National Park -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <img
              src="/images/virunga-volcanoes.jpg.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover"
            />

            <div>
              <h3 class="text-3xl font-bold mb-3">
                Volcanoes National Park
              </h3>

              <p class="text-gray-600 mb-3">
                One of Africa’s most famous national parks, home to the endangered
                mountain gorillas. It offers gorilla trekking, golden monkey tracking,
                and volcanic hiking adventures.
              </p>

              <p class="text-gray-500">
                📍 Location: Musanze District, Northern Rwanda
              </p>
            </div>

          </div>

          <!-- 2 Musanze Caves -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <div class="order-2 md:order-1">
              <h3 class="text-3xl font-bold mb-3">
                Musanze Caves
              </h3>

              <p class="text-gray-600 mb-3">
                A fascinating underground cave system formed by volcanic activity.
                Visitors can explore ancient tunnels and learn about Rwanda’s geology.
              </p>

              <p class="text-gray-500">
                📍 Location: Musanze District
              </p>
            </div>

            <img
              src="/images/virunga-volcanoes.jpg.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover order-1 md:order-2"
            />

          </div>

          <!-- 3 Twin Lakes -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <img
              src="/images/twin-lakes.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover"
            />

            <div>
              <h3 class="text-3xl font-bold mb-3">
                Twin Lakes (Burera & Ruhondo)
              </h3>

              <p class="text-gray-600 mb-3">
                Beautiful twin lakes surrounded by green hills and volcanoes.
                Perfect for boat rides, photography, and relaxation.
              </p>

              <p class="text-gray-500">
                📍 Location: Burera & Musanze Districts
              </p>
            </div>

          </div>

          <!-- 4 Dian Fossey Tomb -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <div class="order-2 md:order-1">
              <h3 class="text-3xl font-bold mb-3">
                Dian Fossey Tomb
              </h3>

              <p class="text-gray-600 mb-3">
                A historic site dedicated to the famous primatologist Dian Fossey,
                known for her work in protecting mountain gorillas in Rwanda.
              </p>

              <p class="text-gray-500">
                📍 Location: Volcanoes National Park area
              </p>
            </div>

            <img
              src="/images/tea-plantation.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover order-1 md:order-2"
            />

          </div>

        </div>

      </div>
    </section>

    <!-- ACTIVITIES -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 text-center">

        <h2 class="text-4xl font-bold mb-10">
          Activities in Northern Province
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Gorilla Trekking</h3>
            <p class="text-gray-600">Meet mountain gorillas in Volcanoes National Park.</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Hiking</h3>
            <p class="text-gray-600">Climb volcanic mountains and enjoy scenic views.</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Boat Rides</h3>
            <p class="text-gray-600">Relax at Twin Lakes with peaceful boat tours.</p>
          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-green-700 text-white text-center">

      <h2 class="text-5xl font-bold mb-6">
        Explore More Provinces
      </h2>

      <p class="text-xl mb-10">
        Continue your journey across Rwanda.
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-4">

        <router-link
          to="/western"
          class="bg-white text-green-700 px-8 py-4 rounded-lg font-bold"
        >
          Western Province
        </router-link>

        <router-link
          to="/destinations"
          class="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold"
        >
          All Destinations
        </router-link>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "NorthernView"
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>





<!-- /src/assets/
  northern-hero.jpg
  volcanoes-park.jpg
  musanze-caves.jpg
  twin-lakes.jpg
  dian-fossey.jpg -->