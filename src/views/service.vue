<template>
  <div>

    <!-- HERO SECTION -->
    <section
      class="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop');"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Our Tourism Services
        </h1>

        <p class="text-xl md:text-2xl max-w-3xl mx-auto">
          We provide world-class tourism services to help visitors explore Rwanda comfortably and confidently.
        </p>
      </div>
    </section>

    <!-- SERVICES INTRO -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800">
            What We Offer
          </h2>

          <p class="text-gray-600 mt-4 text-lg">
            Everything you need for an unforgettable Rwanda adventure.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div class="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
            <div class="text-6xl mb-4">🏨</div>
            <h3 class="text-2xl font-bold mb-3">
              Hotel Booking
            </h3>
            <p class="text-gray-600">
              Find luxury hotels, lodges, and resorts across Rwanda.
            </p>
          </div>

          <div class="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
            <div class="text-6xl mb-4">🚐</div>
            <h3 class="text-2xl font-bold mb-3">
              Transportation
            </h3>
            <p class="text-gray-600">
              Comfortable transportation services for all destinations.
            </p>
          </div>

          <div class="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
            <div class="text-6xl mb-4">🧭</div>
            <h3 class="text-2xl font-bold mb-3">
              Tour Guides
            </h3>
            <p class="text-gray-600">
              Professional guides to enrich your travel experience.
            </p>
          </div>

          <div class="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
            <div class="text-6xl mb-4">🎒</div>
            <h3 class="text-2xl font-bold mb-3">
              Travel Packages
            </h3>
            <p class="text-gray-600">
              Customized travel packages tailored to your interests.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- FEATURED SERVICES -->
    <section class="py-20 bg-green-50">
      <div class="max-w-7xl mx-auto px-6">

        <div class="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200"
              alt="Luxury Hotel"
              class="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div>
            <span class="text-green-600 font-bold uppercase">
              Premium Experiences
            </span>

            <h2 class="text-4xl font-bold text-gray-800 mt-3 mb-6">
              Hospitality & Tourism Services
            </h2>

            <div class="space-y-5">

              <div class="flex items-start">
                <span class="text-green-600 text-3xl mr-4">✓</span>
                <div>
                  <h3 class="font-bold text-xl">
                    Luxury Accommodation
                  </h3>
                  <p class="text-gray-600">
                    Enjoy premium hotels and eco-lodges across Rwanda.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <span class="text-green-600 text-3xl mr-4">✓</span>
                <div>
                  <h3 class="font-bold text-xl">
                    Professional Tour Guides
                  </h3>
                  <p class="text-gray-600">
                    Learn about Rwanda's history, culture and wildlife.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <span class="text-green-600 text-3xl mr-4">✓</span>
                <div>
                  <h3 class="font-bold text-xl">
                    Safe Transportation
                  </h3>
                  <p class="text-gray-600">
                    Reliable travel options throughout your journey.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <span class="text-green-600 text-3xl mr-4">✓</span>
                <div>
                  <h3 class="font-bold text-xl">
                    Personalized Packages
                  </h3>
                  <p class="text-gray-600">
                    Create a trip that matches your budget and interests.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- TOUR PACKAGES -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800">
            Popular Travel Packages
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200"
              class="h-56 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">
                Gorilla Trekking
              </h3>

              <p class="text-gray-600 mb-5">
                Experience Rwanda's world-famous mountain gorillas.
              </p>

              <router-link
                to="/contact"
                class="bg-green-600 text-white px-5 py-2 rounded-lg inline-block"
              >
                Book Now
              </router-link>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200"
              class="h-56 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">
                Lake Kivu Escape
              </h3>

              <p class="text-gray-600 mb-5">
                Relax on the shores of one of Africa's most beautiful lakes.
              </p>

              <router-link
                to="/contact"
                class="bg-green-600 text-white px-5 py-2 rounded-lg inline-block"
              >
                Book Now
              </router-link>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200"
              class="h-56 w-full object-cover"
            />

            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">
                Nyungwe Adventure
              </h3>

              <p class="text-gray-600 mb-5">
                Discover rainforest trails, wildlife and canopy walks.
              </p>

              <router-link
                to="/contact"
                class="bg-green-600 text-white px-5 py-2 rounded-lg inline-block"
              >
                Book Now
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-green-700 text-center text-white">
      <div class="max-w-4xl mx-auto px-6">

        <h2 class="text-5xl font-bold mb-6">
          Ready For Your Rwanda Adventure?
        </h2>

        <p class="text-xl mb-10">
          Let us help you plan an unforgettable tourism experience.
        </p>

        <div class="flex flex-col md:flex-row justify-center gap-4">

          <router-link
            to="/contact"
            class="bg-white text-green-700 px-8 py-4 rounded-lg font-bold"
          >
            Contact Us
          </router-link>

          <router-link
            to="/destinations"
            class="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold"
          >
            Explore Destinations
          </router-link>

        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "ServicesView"
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>