<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white">

    <!-- HERO SECTION -->
    <section
      class="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style="background-image: url('/images/tea-plantation.jpg');"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 text-center text-white px-6 animate-fadeInUp">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">
          🌿 Southern Province
        </h1>

        <p class="text-lg md:text-2xl max-w-3xl mx-auto text-gray-100">
          Rwanda's cultural heart with ancient history, rainforests, and tea plantations
        </p>
      </div>
    </section>

    <!-- INTRO SECTION -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
      <div class="max-w-6xl mx-auto px-6 text-center">

        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-green-900">
          Explore Rwanda's Soul and Heritage
        </h2>

        <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          The Southern Province is the cultural heart of Rwanda, home to ancient royal traditions, 
          the magnificent Nyungwe rainforest, world-class museums, and lush tea plantations. 
          Experience Rwanda's rich history and pristine nature.
        </p>

        <div class="grid grid-cols-3 gap-6 mt-12">
          <div class="bg-green-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-green-700">🌳</p>
            <p class="text-sm font-semibold text-green-900 mt-2">Rainforest</p>
          </div>
          <div class="bg-yellow-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-yellow-600">🏛️</p>
            <p class="text-sm font-semibold text-yellow-900 mt-2">Culture & History</p>
          </div>
          <div class="bg-green-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-green-700">☕</p>
            <p class="text-sm font-semibold text-green-900 mt-2">Tea Plantations</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ATTRACTIONS SECTION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Top Attractions to Visit
          </h2>
          <p class="text-gray-600 text-lg">Discover nature, culture, and history</p>
        </div>

        <div class="space-y-20">

          <!-- 1. NYUNGWE FOREST -->
          <div class="grid md:grid-cols-2 gap-10 items-center hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
            <div class="overflow-hidden rounded-2xl">
              <img
                src="/images/nyungwe.jpg"
                alt="Nyungwe Forest"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🌳 Nyungwe Forest National Park
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                One of Africa's oldest and most biodiverse rainforests. Home to chimpanzees, colobus monkeys, 
                forest elephants, and over 300 bird species. A paradise for nature enthusiasts.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Chimpanzee tracking</li>
                <li>✓ Forest hiking trails</li>
                <li>✓ Bird watching sanctuary</li>
                <li>✓ Nature photography</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                📍 Nyamagabe & Rusizi Districts | 🌍 UNESCO Biosphere Reserve
              </p>
            </div>
          </div>

          <!-- 2. CANOPY WALKWAY -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1 p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🌉 Canopy Walkway (Isumo Ecolodge)
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                A thrilling suspended bridge experience above the Nyungwe rainforest canopy. 
                Walk 60 meters above the forest floor and experience wildlife from a unique perspective.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Sky-high adventure</li>
                <li>✓ Canopy bird watching</li>
                <li>✓ Breathtaking views</li>
                <li>✓ Safe equipment</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                ⏱️ Duration: 1-2 hours | 🎫 Book in advance
              </p>
            </div>

            <div class="order-1 md:order-2 overflow-hidden rounded-2xl">
              <img
                src="/images/canopy-walk - Copy - Copy.jpg"
                alt="Canopy Walkway"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <!-- 3. TEA PLANTATIONS -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="overflow-hidden rounded-2xl">
              <img
                src="/images/tea-plantation.jpg"
                alt="Tea Plantations"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                ☕ Tea Plantations Tours
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Visit the lush green tea gardens of Southern Rwanda. Learn about tea production, 
                meet local farmers, and enjoy fresh tea while overlooking rolling hills.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Farm tours and tastings</li>
                <li>✓ Meet tea farmers</li>
                <li>✓ Scenic walking trails</li>
                <li>✓ Local hospitality</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                📍 Muhanga & Huye Districts | 🥾 Easy walking difficulty
              </p>
            </div>
          </div>

          <!-- 4. KING'S PALACE MUSEUM -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1 p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🏛️ King's Palace Museum (Nyanza)
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Experience Rwanda's royal heritage at this reconstructed traditional palace. 
                Learn about the Rwandan monarchy, royal traditions, and the fascinating history of Rwanda's kingdoms.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Royal palace tour</li>
                <li>✓ Cultural exhibitions</li>
                <li>✓ Traditional crafts</li>
                <li>✓ Expert guides</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                📍 Nyanza District | 📚 Rich historical significance
              </p>
            </div>

            <div class="order-1 md:order-2 overflow-hidden rounded-2xl">
              <img
                src="/images/convention-center.jpg"
                alt="Palace Museum"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <!-- 5. ETHNOGRAPHIC MUSEUM -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="overflow-hidden rounded-2xl">
              <img
                src="/images/genocide-memorial.jpg - Copy - Copy.jpg"
                alt="Ethnographic Museum"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🎭 Ethnographic Museum (Huye)
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                One of East Africa's finest museums showcasing Rwanda's cultural heritage, 
                traditional tools, historical artifacts, and ethnographic collections.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Extensive collections</li>
                <li>✓ Cultural education</li>
                <li>✓ Traditional crafts</li>
                <li>✓ Historical displays</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                📍 Huye (Butare) District | 📖 UNESCO recognized
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- CULTURAL HIGHLIGHTS -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-4xl md:text-5xl font-bold text-center text-green-900 mb-16">
          Southern Rwanda Experiences
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white border-2 border-green-200 rounded-2xl p-8 hover:shadow-lg transition">
            <p class="text-4xl mb-4">🏞️</p>
            <h3 class="text-2xl font-bold text-green-800 mb-3">Nature Trails</h3>
            <p class="text-gray-700">Hike through the misty Nyungwe rainforest on well-maintained trails with expert naturalists.</p>
          </div>

          <div class="bg-white border-2 border-yellow-200 rounded-2xl p-8 hover:shadow-lg transition">
            <p class="text-4xl mb-4">🎓</p>
            <h3 class="text-2xl font-bold text-green-800 mb-3">Cultural Learning</h3>
            <p class="text-gray-700">Dive deep into Rwanda's rich history, traditions, and the stories of its people.</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-2xl p-8 hover:shadow-lg transition">
            <p class="text-4xl mb-4">🍵</p>
            <h3 class="text-2xl font-bold text-green-800 mb-3">Agritourism</h3>
            <p class="text-gray-700">Experience traditional farming and tea production with local communities.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">

        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Plan Your Southern Province Visit
        </h2>

        <p class="text-lg md:text-xl mb-10 text-gray-100">
          Explore Rwanda's cultural heritage and natural wonders with our expert team.
        </p>

        <div class="flex flex-col md:flex-row justify-center gap-4">
          <RouterLink
            to="/contact"
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Your Tour
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
</style>

    <!-- INTRO -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 text-center">

        <h2 class="text-4xl font-bold mb-6 text-gray-800">
          Welcome to Southern Rwanda
        </h2>

        <p class="text-gray-600 text-lg leading-relaxed">
          The Southern Province is rich in culture, history, and natural beauty.
          It is home to ancient kingdoms, museums, tea plantations, and one of Africa’s oldest rainforests.
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

          <!-- Nyungwe Forest -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <img
              src="/src/assets/nyungwe-forest.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover"
            />

            <div>
              <h3 class="text-3xl font-bold mb-3">
                Nyungwe Forest National Park
              </h3>

              <p class="text-gray-600 mb-3">
                One of Africa’s oldest rainforests, home to chimpanzees, colobus monkeys,
                and hundreds of bird species. A paradise for nature lovers and hikers.
              </p>

              <p class="text-gray-500">
                📍 Location: Nyamagabe & Rusizi Districts
              </p>
            </div>

          </div>

          <!-- Canopy Walk -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <div class="order-2 md:order-1">
              <h3 class="text-3xl font-bold mb-3">
                Canopy Walkway
              </h3>

              <p class="text-gray-600 mb-3">
                A suspended bridge above the forest giving breathtaking views of Nyungwe’s
                wildlife and treetops. One of Rwanda’s top adventure experiences.
              </p>

              <p class="text-gray-500">
                📍 Location: Nyungwe Forest National Park
              </p>
            </div>

            <img
              src="/src/assets/canopy-walk.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover order-1 md:order-2"
            />

          </div>

          <!-- King's Palace -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <img
              src="/src/assets/kings-palace.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover"
            />

            <div>
              <h3 class="text-3xl font-bold mb-3">
                King’s Palace Museum (Nyanza)
              </h3>

              <p class="text-gray-600 mb-3">
                A reconstructed traditional royal palace showcasing Rwanda’s monarchy history,
                royal traditions, and cultural heritage.
              </p>

              <p class="text-gray-500">
                📍 Location: Nyanza District
              </p>
            </div>

          </div>

          <!-- Ethnographic Museum -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <div class="order-2 md:order-1">
              <h3 class="text-3xl font-bold mb-3">
                Ethnographic Museum
              </h3>

              <p class="text-gray-600 mb-3">
                One of the best museums in East Africa, showcasing Rwandan culture,
                traditional tools, clothing, and historical artifacts.
              </p>

              <p class="text-gray-500">
                📍 Location: Huye (Butare) District
              </p>
            </div>

            <img
              src="/src/assets/ethnographic-museum.jpg"
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
          Activities in Southern Province
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Forest Hiking</h3>
            <p class="text-gray-600">Explore Nyungwe’s ancient rainforest trails.</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Cultural Tours</h3>
            <p class="text-gray-600">Learn Rwanda’s royal history and traditions.</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Canopy Walk</h3>
            <p class="text-gray-600">Experience thrilling views above the forest.</p>
          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-green-700 text-white text-center">

      <h2 class="text-5xl font-bold mb-6">
        Continue Exploring Rwanda
      </h2>

      <p class="text-xl mb-10">
        Discover lakes, wildlife, and more adventures.
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
  name: "SouthernView"
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>





<!-- /src/assets/
  southern-hero.jpg
  nyungwe-forest.jpg
  canopy-walk.jpg
  kings-palace.jpg
  ethnographic-museum.jpg -->