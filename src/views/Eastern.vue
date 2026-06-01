<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white">

    <!-- HERO SECTION -->
    <section
      class="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style="background-image: url('/images/lake-muhazi.jpg');"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 text-center text-white px-6 animate-fadeInUp">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">
          🦁 Eastern Province
        </h1>

        <p class="text-lg md:text-2xl max-w-3xl mx-auto text-gray-100">
          Rwanda's gateway to wildlife, lakes, and untamed natural beauty
        </p>
      </div>
    </section>

    <!-- INTRO SECTION -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
      <div class="max-w-6xl mx-auto px-6 text-center">

        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-green-900">
          Discover Rwanda's Wild East
        </h2>

        <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          The Eastern Province offers stunning landscapes, pristine lakes, wildlife encounters, 
          and authentic rural Rwanda. Experience the country's most undiscovered natural treasures.
        </p>

        <div class="grid grid-cols-3 gap-6 mt-12">
          <div class="bg-green-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-green-700">🦓</p>
            <p class="text-sm font-semibold text-green-900 mt-2">Wildlife</p>
          </div>
          <div class="bg-yellow-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-yellow-600">💧</p>
            <p class="text-sm font-semibold text-yellow-900 mt-2">Lakes</p>
          </div>
          <div class="bg-green-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-green-700">🌾</p>
            <p class="text-sm font-semibold text-green-900 mt-2">Rural Life</p>
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
          <p class="text-gray-600 text-lg">Experience the untamed beauty of Eastern Rwanda</p>
        </div>

        <div class="space-y-20">

          <!-- 1. LAKE MUHAZI -->
          <div class="grid md:grid-cols-2 gap-10 items-center hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
            <div class="overflow-hidden rounded-2xl">
              <img
                src="/images/lake-muhazi.jpg"
                alt="Lake Muhazi"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                💧 Lake Muhazi
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Rwanda's largest lake, a stunning body of water perfect for boat rides, fishing, 
                and water sports. Surrounded by scenic hills and fishing villages.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Boat tours and cruises</li>
                <li>✓ Fishing experiences</li>
                <li>✓ Swimming and water sports</li>
                <li>✓ Stunning views</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                📍 Kayonza, Kirehe & Ngoma Districts | 🚤 Best for water activities
              </p>
            </div>
          </div>

          <!-- 2. TWIN LAKES -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1 p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                👯 Twin Lakes (Sake & Ihema)
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Beautiful crater lakes surrounded by lush vegetation and scenic landscapes. 
                Perfect for photography, picnics, and peaceful nature immersion.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Photography paradise</li>
                <li>✓ Picnic spots</li>
                <li>✓ Hiking trails</li>
                <li>✓ Bird watching</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                📍 Ngoma District | 🥾 Easy to moderate hiking
              </p>
            </div>

            <div class="order-1 md:order-2 overflow-hidden rounded-2xl">
              <img
                src="/images/twin-lakes.jpg"
                alt="Twin Lakes"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <!-- 3. AKAGERA NATIONAL PARK GATEWAY -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="overflow-hidden rounded-2xl">
              <img
                src="/images/nyandungu-park.jpg.jpg"
                alt="Akagera Park"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🦓 Akagera National Park Access
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Rwanda's largest national park, a premier safari destination teeming with wildlife. 
                Experience Big Five safari experiences from your Eastern Province base.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Big Five safari</li>
                <li>✓ Game drives</li>
                <li>✓ Wildlife photography</li>
                <li>✓ Nature lodges</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                📍 Kirehe & Ngoma Districts | 🦁 Best safari destination in Rwanda
              </p>
            </div>
          </div>

          <!-- 4. RURAL VILLAGE EXPERIENCES -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1 p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                🌾 Rural Village Immersion
              </h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Experience authentic Rwandan rural life. Visit farming communities, participate in daily activities, 
                and connect with locals in this genuine cultural experience.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Community visits</li>
                <li>✓ Farm experiences</li>
                <li>✓ Cultural exchange</li>
                <li>✓ Traditional meals</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">
                👥 Authentic encounters | 🤝 Support local communities
              </p>
            </div>

            <div class="order-1 md:order-2 overflow-hidden rounded-2xl">
              <img
                src="/images/congo-nile-trail.jpg - Copy - Copy.jpg"
                alt="Rural Village"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- EXPERIENCES -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-4xl md:text-5xl font-bold text-center text-green-900 mb-16">
          Eastern Province Adventures
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white border-2 border-green-200 rounded-2xl p-8 hover:shadow-lg transition">
            <p class="text-4xl mb-4">🐘</p>
            <h3 class="text-2xl font-bold text-green-800 mb-3">Wildlife Safari</h3>
            <p class="text-gray-700">Spot the Big Five and encounter Africa's diverse wildlife in natural habitats.</p>
          </div>

          <div class="bg-white border-2 border-yellow-200 rounded-2xl p-8 hover:shadow-lg transition">
            <p class="text-4xl mb-4">🚣</p>
            <h3 class="text-2xl font-bold text-green-800 mb-3">Water Adventures</h3>
            <p class="text-gray-700">Boat tours, fishing, and water sports on Rwanda's pristine lakes.</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-2xl p-8 hover:shadow-lg transition">
            <p class="text-4xl mb-4">🏡</p>
            <h3 class="text-2xl font-bold text-green-800 mb-3">Rural Tourism</h3>
            <p class="text-gray-700">Immerse yourself in authentic Rwandan community life and traditions.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">

        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Explore Eastern Rwanda Today
        </h2>

        <p class="text-lg md:text-xl mb-10 text-gray-100">
          Discover the untamed beauty and authentic experiences of Rwanda's Eastern Province.
        </p>

        <div class="flex flex-col md:flex-row justify-center gap-4">
          <RouterLink
            to="/contact"
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Your Adventure
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
          Welcome to Eastern Rwanda
        </h2>

        <p class="text-gray-600 text-lg leading-relaxed">
          The Eastern Province is Rwanda’s largest region, famous for Akagera National Park,
          savannah wildlife, lakes, and unforgettable safari experiences.
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

          <!-- Akagera National Park -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <img
              src="/src/assets/akagera-park.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover"
            />

            <div>
              <h3 class="text-3xl font-bold mb-3">
                Akagera National Park
              </h3>

              <p class="text-gray-600 mb-3">
                Rwanda’s only savannah national park, home to the Big Five:
                lions, elephants, rhinos, leopards, and buffalo.
              </p>

              <p class="text-gray-500">
                📍 Location: Eastern Rwanda (Kayonza District)
              </p>
            </div>

          </div>

          <!-- Lake Ihema -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <div class="order-2 md:order-1">
              <h3 class="text-3xl font-bold mb-3">
                Lake Ihema
              </h3>

              <p class="text-gray-600 mb-3">
                A beautiful lake inside Akagera National Park, famous for boat safaris,
                hippos, crocodiles, and bird watching.
              </p>

              <p class="text-gray-500">
                📍 Location: Akagera National Park
              </p>
            </div>

            <img
              src="/src/assets/lake-ihema.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover order-1 md:order-2"
            />

          </div>

          <!-- Savannah -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <img
              src="/src/assets/savannah.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover"
            />

            <div>
              <h3 class="text-3xl font-bold mb-3">
                Savannah Landscapes
              </h3>

              <p class="text-gray-600 mb-3">
                Endless golden savannah plains filled with wildlife,
                perfect for game drives and photography.
              </p>

              <p class="text-gray-500">
                📍 Location: Akagera Region
              </p>
            </div>

          </div>

          <!-- Akagera River -->
          <div class="grid md:grid-cols-2 gap-10 items-center">

            <div class="order-2 md:order-1">
              <h3 class="text-3xl font-bold mb-3">
                Akagera River
              </h3>

              <p class="text-gray-600 mb-3">
                A scenic river forming part of the Rwanda-Tanzania border,
                supporting diverse wildlife ecosystems.
              </p>

              <p class="text-gray-500">
                📍 Location: Eastern Border Area
              </p>
            </div>

            <img
              src="/src/assets/akagera-river.jpg"
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
          Activities in Eastern Province
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Game Drives</h3>
            <p class="text-gray-600">Explore wildlife including the Big Five.</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Boat Safari</h3>
            <p class="text-gray-600">Enjoy hippos, crocodiles, and birds on Lake Ihema.</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Photography Tours</h3>
            <p class="text-gray-600">Capture stunning wildlife and landscapes.</p>
          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-green-700 text-white text-center">

      <h2 class="text-5xl font-bold mb-6">
        You’ve Explored All Provinces!
      </h2>

      <p class="text-xl mb-10">
        Go back and explore Rwanda’s full tourism experience.
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-4">

        <router-link
          to="/kigali"
          class="bg-white text-green-700 px-8 py-4 rounded-lg font-bold"
        >
          Kigali City
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
  name: "EasternView"
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>





<!-- /src/assets/
  eastern-hero.jpg
  akagera-park.jpg
  lake-ihema.jpg
  savannah.jpg
  akagera-river.jpg -->