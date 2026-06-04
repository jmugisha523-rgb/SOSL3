<template>
  <div class="bg-white">

    <!-- HERO SECTION -->
    <section
      class="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style="background-image: linear-gradient(135deg, rgba(34, 197, 94, 0.6) 0%, rgba(20, 83, 49, 0.6) 100%), url('/images/virunga-volcanoes.jpg.jpg'); background-attachment: fixed;"
    >
      <div class="relative z-10 text-center text-white px-6 max-w-4xl mx-auto animate-fadeInUp">
        <div class="inline-block bg-yellow-500 px-6 py-2 rounded-full text-sm font-bold mb-6 text-white">
          🇷🇼 Welcome to Rwanda - Land of a Thousand Hills
        </div>

        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover <span class="text-yellow-300">Rwanda's</span> Beauty
        </h1>

        <p class="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed max-w-3xl mx-auto">
          Experience breathtaking landscapes, encounter rare mountain gorillas, immerse yourself in vibrant Rwandan culture, and create unforgettable memories in Africa's most stunning destination.
        </p>

        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <router-link
            to="/destination"
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore Destinations
          </router-link>

          <router-link
            to="/contact"
            class="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Plan Your Adventure
          </router-link>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- WHY VISIT RWANDA -->
    <section class="py-24 bg-gradient-to-b from-white to-green-50">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Why Visit Rwanda?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Rwanda offers unique experiences you'll find nowhere else on Earth
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white p-8 rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-green-600">
            <div class="text-6xl mb-4">🦍</div>
            <h3 class="text-2xl font-bold text-green-800 mb-3">
              Mountain Gorillas
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Come face-to-face with the majestic mountain gorillas in their natural habitat at Volcanoes National Park - a once-in-a-lifetime experience.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-500">
            <div class="text-6xl mb-4">🏔️</div>
            <h3 class="text-2xl font-bold text-green-800 mb-3">
              Stunning Landscapes
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Explore rolling green hills, pristine lakes, lush forests, and breathtaking vistas that will leave you speechless at every turn.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-red-500">
            <div class="text-6xl mb-4">🎭</div>
            <h3 class="text-2xl font-bold text-green-800 mb-3">
              Rich Culture
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Experience vibrant Rwandan traditions, warm hospitality, traditional arts, music, and centuries-old customs that define this remarkable nation.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- RWANDAN CULTURE SPOTLIGHT -->
    <section class="py-24 bg-green-700 text-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Experience Rwandan Culture
          </h2>
          <p class="text-lg text-green-100">
            Discover the heartbeat of Rwanda through its traditions and people
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">

          <div class="bg-green-600 bg-opacity-50 backdrop-blur-xs p-8 rounded-xl border border-green-500">
            <h3 class="text-2xl font-bold mb-3 text-yellow-300">🎪 Intore Dancers</h3>
            <p class="text-gray-100 leading-relaxed mb-4">
              The legendary Intore dancers are Rwanda's cultural ambassadors, performing traditional dances that tell stories of history, valor, and cultural pride. Their spectacular high jumps and rhythmic movements are mesmerizing.
            </p>
            <a href="#" class="inline-block text-yellow-300 font-semibold hover:text-yellow-200">Learn More →</a>
          </div>

          <div class="bg-green-600 bg-opacity-50 backdrop-blur-xs p-8 rounded-xl border border-green-500">
            <h3 class="text-2xl font-bold mb-3 text-yellow-300">🏘️ Gacaca Traditions</h3>
            <p class="text-gray-100 leading-relaxed mb-4">
              Gacaca represents the traditional community gathering where locals settle disputes, share knowledge, and strengthen community bonds. It's the essence of Rwandan communal living and harmony.
            </p>
            <a href="#" class="inline-block text-yellow-300 font-semibold hover:text-yellow-200">Learn More →</a>
          </div>

          <div class="bg-green-600 bg-opacity-50 backdrop-blur-xs p-8 rounded-xl border border-green-500">
            <h3 class="text-2xl font-bold mb-3 text-yellow-300">🎨 Traditional Crafts</h3>
            <p class="text-gray-100 leading-relaxed mb-4">
              Rwandan artisans create exquisite handcrafted goods including woven baskets, pottery, and beadwork. Each piece tells a story and supports local communities and traditional knowledge.
            </p>
            <a href="#" class="inline-block text-yellow-300 font-semibold hover:text-yellow-200">Learn More →</a>
          </div>

          <div class="bg-green-600 bg-opacity-50 backdrop-blur-xs p-8 rounded-xl border border-green-500">
            <h3 class="text-2xl font-bold mb-3 text-yellow-300">🎵 Traditional Music</h3>
            <p class="text-gray-100 leading-relaxed mb-4">
              From the rhythmic drums of traditional percussion to contemporary Rwandan music, the sound of Rwanda reflects its soul. Experience live performances and authentic musical traditions.
            </p>
            <a href="#" class="inline-block text-rwanda-gold-300 font-semibold hover:text-rwanda-gold-200">Learn More →</a>
          </div>

        </div>
      </div>
    </section>

    <!-- TOP ATTRACTIONS -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Top Attractions
          </h2>
          <p class="text-lg text-gray-600">
            Must-see destinations that showcase Rwanda's diversity
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div class="relative overflow-hidden h-72">
              <img
                src="/images/mountain-gorillas.jpg.jpg"
                class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Volcanoes National Park"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-3">
                Volcanoes National Park
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Home to Rwanda's famous mountain gorillas and stunning volcanic landscapes. Experience mountain trekking and wildlife encounters.
              </p>

              <router-link
                to="/north"
                class="inline-block text-yellow-600 font-bold hover:text-yellow-700 transition"
              >
                Explore →
              </router-link>
            </div>
          </div>

          <div class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div class="relative overflow-hidden h-72">
              <img
                src="/images/nyungwe.jpg"
                class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Nyungwe Forest"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-3">
                Nyungwe Forest
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Discover ancient rainforest with thrilling canopy walks, wildlife viewing, and hundreds of bird species in this biodiverse sanctuary.
              </p>

              <router-link
                to="/south"
                class="inline-block text-yellow-600 font-bold hover:text-yellow-700 transition"
              >
                Explore →
              </router-link>
            </div>
          </div>

          <div class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
            <div class="relative overflow-hidden h-72">
              <img
                src="/images/lake-kivu.jpg"
                class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Lake Kivu"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-green-800 mb-3">
                Lake Kivu
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Beautiful shores with relaxing beaches, water activities, and stunning sunsets. Perfect for unwinding and enjoying nature's beauty.
              </p>

              <router-link
                to="/west"
                class="inline-block text-yellow-600 font-bold hover:text-yellow-700 transition"
              >
                Explore →
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- PROVINCES -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Explore Rwanda's 5 Provinces
          </h2>
          <p class="text-lg text-gray-600">
            Each province offers unique landscapes, attractions, and experiences
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="province in provinces"
            :key="province.name"
            class="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <div class="relative overflow-hidden h-64">
              <img
                :src="province.image"
                :alt="province.name"
                class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            <div class="p-6 relative">
              <h3 class="text-2xl font-bold text-green-800 mb-2">
                {{ province.name }}
              </h3>

              <p class="text-gray-600 mb-5 leading-relaxed">
                {{ province.description }}
              </p>

              <router-link
                :to="province.route"
                class="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Discover More
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- STATISTICS -->
    <section class="py-24 bg-gradient-to-r from-green-800 to-blue-900 text-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div class="p-6">
            <h3 class="text-5xl font-bold text-yellow-300 mb-2">5</h3>
            <p class="text-lg text-gray-100 font-medium">Provinces</p>
            <p class="text-sm text-gray-300 mt-1">to explore</p>
          </div>

          <div class="p-6">
            <h3 class="text-5xl font-bold text-yellow-300 mb-2">4</h3>
            <p class="text-lg text-gray-100 font-medium">National Parks</p>
            <p class="text-sm text-gray-300 mt-1">pristine nature</p>
          </div>

          <div class="p-6">
            <h3 class="text-5xl font-bold text-yellow-300 mb-2">1000+</h3>
            <p class="text-lg text-gray-100 font-medium">Hills</p>
            <p class="text-sm text-gray-300 mt-1">breathtaking views</p>
          </div>

          <div class="p-6">
            <h3 class="text-5xl font-bold text-yellow-300 mb-2">1M+</h3>
            <p class="text-lg text-gray-100 font-medium">Visitors</p>
            <p class="text-sm text-gray-300 mt-1">annual visitors</p>
          </div>

        </div>

      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            What Visitors Say
          </h2>
          <p class="text-lg text-gray-600">
            Join thousands of satisfied travelers
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-200 shadow-card">
            <div class="flex gap-1 mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-700 mb-4 italic">
              "Rwanda exceeded all my expectations. The mountain gorillas were incredible, and the people were so welcoming. Truly a life-changing experience!"
            </p>
            <p class="font-semibold text-green-800">Sarah Johnson</p>
            <p class="text-sm text-gray-600">USA</p>
          </div>

          <div class="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-200 shadow-card">
            <div class="flex gap-1 mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-700 mb-4 italic">
              "The landscapes are absolutely stunning. Every turn reveals another breathtaking view. Rwanda is truly the 'Land of a Thousand Hills'."
            </p>
            <p class="font-semibold text-green-800">Pierre Dupont</p>
            <p class="text-sm text-gray-600">France</p>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-200 shadow-card">
            <div class="flex gap-1 mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-700 mb-4 italic">
              "The culture, the people, the nature - everything about Rwanda is special. I've already booked my return trip!"
            </p>
            <p class="font-semibold text-green-800">Amara Okonkwo</p>
            <p class="text-sm text-gray-600">Nigeria</p>
          </div>

        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="py-24 bg-gradient-to-r from-green-700 to-green-900 text-center text-white">
      <div class="max-w-4xl mx-auto px-6">

        <h2 class="text-5xl font-bold mb-6">
          Ready To Explore Rwanda?
        </h2>

        <p class="text-xl mb-10 leading-relaxed text-gray-100">
          Start planning your adventure today and discover why Rwanda is Africa's most beautiful and welcoming destination.
        </p>

        <div class="flex flex-col md:flex-row justify-center gap-4">

          <router-link
            to="/contact"
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us Now
          </router-link>

          <router-link
            to="/about"
            class="bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Learn About Rwanda
          </router-link>

        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      provinces: [
        {
          name: "🏙️ Kigali City",
          description: "Rwanda's vibrant, clean, and modern capital. Explore museums, markets, contemporary cuisine, and the heart of Rwanda's development.",
          image: "/images/kigali-skyline.jpg.jpg",
          route: "/kigali"
        },
        {
          name: "⛰️ Northern Province",
          description: "Home to Volcanoes National Park and mountain gorillas. Experience trekking, cultural encounters, and breathtaking volcanic landscapes.",
          image: "/images/virunga-volcanoes.jpg.jpg",
          route: "/north"
        },
        {
          name: "🌊 Western Province",
          description: "Beautiful Lake Kivu beaches, scenic landscapes, and vibrant communities. Perfect for relaxation and water activities.",
          image: "/images/lake-kivu-sunset.jpg.jpg",
          route: "/west"
        },
        {
          name: "🦁 Eastern Province",
          description: "Wildlife safaris in Akagera National Park. Experience diverse wildlife, grasslands, and authentic African safari adventures.",
          image: "/images/lake-muhazi.jpg",
          route: "/east"
        },
        {
          name: "🌿 Southern Province",
          description: "Nyungwe Forest with its canopy walks, tea plantations, and rich cultural heritage. A haven for nature lovers and adventurers.",
          image: "/images/tea-plantation.jpg",
          route: "/south"
        }
      ]
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out;
}
</style>





<!-- src/assets/

Use names like:

kigali-hero.jpg
kigali-memorial.jpg
kimironko-market.jpg
inema-art.jpg
kcc.jpg
mount-kigali.jpg -->
