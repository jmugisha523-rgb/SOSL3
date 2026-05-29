<template>
  <!-- Hero Section -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    style="background-image: url('/src/assets/download.jpg')"
  >
    <div class="bg-black/50 absolute inset-0"></div>
    <div class="relative text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">
        Welcome to Rwanda
      </h1>
      <p class="text-2xl md:text-3xl mb-8 text-green-300 drop-shadow-lg font-light">
        The Land of a Thousand Hills
      </p>
      <p class="text-lg md:text-xl mb-12 text-gray-100 drop-shadow-lg">
        Discover the beauty, culture, and warmth of Rwanda
      </p>
      <div class="flex flex-col md:flex-row gap-6 justify-center">
        <router-link
          to="/about"
          class="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore More
        </router-link>
        <router-link
          to="/contact"
          class="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Plan Your Trip
        </router-link>
      </div>
    </div>
  </section>

  <!-- Featured Destinations -->
  <section class="py-20 bg-gray-50">
    <!-- AKagera card images are shown above; ensure layout is correct -->
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-5xl font-bold text-center mb-4 text-gray-800">
        Featured Destinations
      </h2>
      <p class="text-center text-gray-600 mb-16 text-lg">
        Explore the most breathtaking places Rwanda has to offer
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Destination Card 1 -->
        <div
          class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="h-64 relative">
            <img
              src="/src/assets/download.jpg"
              alt="Volcanoes National Park"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 text-gray-800">Volcanoes National Park</h3>
            <p class="text-gray-600 mb-4">
              Home to endangered mountain gorillas and stunning volcanic peaks with panoramic views.
            </p>
            <router-link
              to="/about"
              class="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
            >
              Learn More →
            </router-link>
          </div>
        </div>

        <!-- Destination Card 2 -->
        <div
          class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="h-64 relative">
            <img
              src="/src/assets/download.webp"
              alt="Lake Kivu"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 text-gray-800">Lake Kivu</h3>
            <p class="text-gray-600 mb-4">
              Africa's largest freshwater lake with pristine beaches, water sports, and vibrant islands.
            </p>
            <router-link
              to="/about"
              class="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
            >
              Learn More →
            </router-link>
          </div>
        </div>

        <!-- Destination Card 3 -->
        <div
          class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="h-64 relative">
            <img
              src="/src/assets/image.png"
              alt="Akagera National Park"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 text-gray-800">Akagera National Park</h3>
            <p class="text-gray-600 mb-4">
              Experience the Big Five in their natural habitat with thrilling safari adventures.
            </p>
            <router-link
              to="/about"
              class="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
            >
              Learn More →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Rwanda Section -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-5xl font-bold text-center mb-4 text-gray-800">
        Why Choose Rwanda?
      </h2>
      <p class="text-center text-gray-600 mb-16 text-lg">
        Experience what makes Rwanda truly special
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Feature 1 -->
        <div class="text-center">
          <div
            class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-4xl">🏞️</span>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-800">Natural Beauty</h3>
          <p class="text-gray-600">
            Stunning landscapes from misty mountains to pristine lakes
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="text-center">
          <div
            class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-4xl">👥</span>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-800">Warm People</h3>
          <p class="text-gray-600">
            Welcoming locals known for their hospitality and kindness
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="text-center">
          <div
            class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-4xl">🏨</span>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-800">Quality Facilities</h3>
          <p class="text-gray-600">
            Modern accommodations and services for comfort and convenience
          </p>
        </div>

        <!-- Feature 4 -->
        <div class="text-center">
          <div
            class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <span class="text-4xl">🛡️</span>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-800">Safe Travel</h3>
          <p class="text-gray-600">
            One of Africa's safest destinations with excellent infrastructure
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-5xl font-bold text-center mb-4">What Travelers Say</h2>
      <p class="text-center mb-16 text-lg text-green-100">
        Hear from visitors who've experienced Rwanda's magic
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
          <div class="flex items-center mb-4">
            <span class="text-3xl">⭐⭐⭐⭐⭐</span>
          </div>
          <p class="mb-4 text-gray-100 leading-relaxed">
            "Rwanda exceeded all my expectations! The gorilla trekking experience was unforgettable, and the people were incredibly warm and welcoming."
          </p>
          <p class="font-bold">- Sarah Johnson</p>
          <p class="text-gray-300 text-sm">USA</p>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
          <div class="flex items-center mb-4">
            <span class="text-3xl">⭐⭐⭐⭐⭐</span>
          </div>
          <p class="mb-4 text-gray-100 leading-relaxed">
            "The combination of stunning nature, rich culture, and adventure makes Rwanda a must-visit destination. I'm already planning my next trip!"
          </p>
          <p class="font-bold">- Michel Pierre</p>
          <p class="text-gray-300 text-sm">France</p>
        </div>

        <!-- Testimonial 3 -->
        <div class="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
          <div class="flex items-center mb-4">
            <span class="text-3xl">⭐⭐⭐⭐⭐</span>
          </div>
          <p class="mb-4 text-gray-100 leading-relaxed">
            "Rwanda is a gem! The natural landscapes are breathtaking, and the tourist infrastructure is excellent. Highly recommended!"
          </p>
          <p class="font-bold">- Amara Okonkwo</p>
          <p class="text-gray-300 text-sm">Nigeria</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Quick Stats Section -->
  <section class="py-20 bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 class="text-5xl font-bold mb-2 text-green-400">26,000</h3>
          <p class="text-gray-300">Square Kilometers</p>
        </div>
        <div>
          <h3 class="text-5xl font-bold mb-2 text-green-400">13M+</h3>
          <p class="text-gray-300">Population</p>
        </div>
        <div>
          <h3 class="text-5xl font-bold mb-2 text-green-400">5</h3>
          <p class="text-gray-300">National Parks</p>
        </div>
        <div>
          <h3 class="text-5xl font-bold mb-2 text-green-400">1000+</h3>
          <p class="text-gray-300">Mountain Gorillas</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Newsletter Section -->
  <section class="py-20 bg-white">
    <div class="max-w-2xl mx-auto px-4 text-center">
      <h2 class="text-5xl font-bold mb-4 text-gray-800">Stay Updated</h2>
      <p class="text-gray-600 mb-8 text-lg">
        Subscribe to our newsletter for travel tips, special offers, and Rwanda insights
      </p>
      <div class="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          class="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
        />
        <button
          class="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all duration-300"
        >
          Subscribe
        </button>
      </div>
      <p class="text-gray-500 text-sm">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-5xl font-bold mb-6">Ready to Explore Rwanda?</h2>
      <p class="text-xl mb-10 text-green-100">
        Start planning your adventure today and create memories that will last a lifetime
      </p>
      <router-link
        to="/contact"
        class="inline-block px-10 py-5 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Get Started Now
      </router-link>
    </div>
  </section>
</template>