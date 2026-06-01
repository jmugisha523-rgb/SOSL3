<template>
  <div>

    <!-- HERO -->
    <section
      class="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070');"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">
          Contact Us
        </h1>

        <p class="text-xl md:text-2xl max-w-3xl mx-auto">
          Let's help you plan your perfect Rwanda adventure.
        </p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">

        <div class="grid lg:grid-cols-2 gap-12">

          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-2xl shadow-xl">

            <h2 class="text-3xl font-bold mb-6 text-gray-800">
              Send Us A Message
            </h2>

            <form class="space-y-5">

              <div>
                <label class="block mb-2 font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
              </div>

              <div>
                <label class="block mb-2 font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
              </div>

              <div>
                <label class="block mb-2 font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+250..."
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
              </div>

              <div>
                <label class="block mb-2 font-semibold text-gray-700">
                  Destination Interested In
                </label>

                <select
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option>Kigali City</option>
                  <option>Volcanoes National Park</option>
                  <option>Nyungwe Forest</option>
                  <option>Lake Kivu</option>
                  <option>Akagera National Park</option>
                </select>
              </div>

              <div>
                <label class="block mb-2 font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your travel plans..."
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold transition"
              >
                Send Message
              </button>

            </form>
          </div>

          <!-- Contact Information -->
          <div>

            <h2 class="text-3xl font-bold mb-8 text-gray-800">
              Get In Touch
            </h2>

            <div class="space-y-6">

              <div class="bg-white p-6 rounded-2xl shadow-lg">
                <h3 class="font-bold text-xl mb-2">
                  📍 Office Location
                </h3>

                <p class="text-gray-600">
                  Kigali City, Rwanda
                </p>
              </div>

              <div class="bg-white p-6 rounded-2xl shadow-lg">
                <h3 class="font-bold text-xl mb-2">
                  📞 Phone Number
                </h3>

                <p class="text-gray-600">
                  +250 788 000 000
                </p>
              </div>

              <div class="bg-white p-6 rounded-2xl shadow-lg">
                <h3 class="font-bold text-xl mb-2">
                  ✉️ Email Address
                </h3>

                <p class="text-gray-600">
                  info@rwandatourism.com
                </p>
              </div>

              <div class="bg-white p-6 rounded-2xl shadow-lg">
                <h3 class="font-bold text-xl mb-2">
                  🕒 Working Hours
                </h3>

                <p class="text-gray-600">
                  Monday - Friday: 8:00 AM - 5:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-green-700 text-white text-center">

      <div class="max-w-4xl mx-auto px-6">

        <h2 class="text-5xl font-bold mb-6">
          Start Your Rwanda Journey Today
        </h2>

        <p class="text-xl mb-10">
          Contact our tourism experts and begin planning your unforgettable experience.
        </p>

        <router-link
          to="/destinations"
          class="bg-white text-green-700 px-8 py-4 rounded-lg font-bold inline-block"
        >
          Explore Destinations
        </router-link>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "ContactView"
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>