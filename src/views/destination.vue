<template>
  <div class="py-16 bg-gray-50 min-h-screen">

    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-green-700">
        Explore Rwanda Destinations
      </h1>

      <p class="text-gray-600 mt-3 text-lg">
        Click on any province to explore tourist attractions
      </p>
    </div>

    <!-- GRID OF PROVINCES -->
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

      <!-- Kigali -->
      <router-link to="/kigali" class="bg-white rounded-xl shadow hover:scale-105 transition overflow-hidden">
        <img src="/kigali-hero.jpg" class="h-48 w-full object-cover" />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">Kigali City</h2>
          <p class="text-gray-600">Culture, museums, city tours</p>
        </div>
      </router-link>

      <!-- Northern -->
      <router-link to="/northern" class="bg-white rounded-xl shadow hover:scale-105 transition overflow-hidden">
        <img src="/northern-hero.jpg" class="h-48 w-full object-cover" />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">Northern Province</h2>
          <p class="text-gray-600">Gorillas, volcanoes, mountains</p>
        </div>
      </router-link>

      <!-- Southern -->
      <router-link to="/southern" class="bg-white rounded-xl shadow hover:scale-105 transition overflow-hidden">
        <img src="/southern-hero.jpg" class="h-48 w-full object-cover" />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">Southern Province</h2>
          <p class="text-gray-600">Nyungwe forest & culture</p>
        </div>
      </router-link>

      <!-- Western -->
      <router-link to="/western" class="bg-white rounded-xl shadow hover:scale-105 transition overflow-hidden">
        <img src="/western-hero.jpg" class="h-48 w-full object-cover" />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">Western Province</h2>
          <p class="text-gray-600">Lake Kivu beaches & sunsets</p>
        </div>
      </router-link>

      <!-- Eastern -->
      <router-link to="/eastern" class="bg-white rounded-xl shadow hover:scale-105 transition overflow-hidden">
        <img src="/eastern-hero.jpg" class="h-48 w-full object-cover" />
        <div class="p-5">
          <h2 class="text-2xl font-bold text-green-700">Eastern Province</h2>
          <p class="text-gray-600">Safari, Akagera National Park</p>
        </div>
      </router-link>

    </div>

  </div>
</template>

<script>
export default {
  name: "DestinationsView",
};
</script>