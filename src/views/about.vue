<template>
  <div>

    <!-- HERO SECTION -->
    <section
      class="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop');"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          About Rwanda Tourism
        </h1>

        <p class="text-xl md:text-2xl max-w-3xl mx-auto">
          Discover the beauty, culture, wildlife, and unforgettable experiences
          that make Rwanda one of Africa's top tourism destinations.
        </p>
      </div>
    </section>

    <!-- ABOUT RWANDA -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200"
              alt="Rwanda Landscape"
              class="rounded-2xl shadow-xl w-full"
            />
          </div>

          <div>
            <span class="text-green-600 font-bold uppercase">
              About Rwanda
            </span>

            <h2 class="text-4xl font-bold mt-3 mb-6 text-gray-800">
              The Land of a Thousand Hills
            </h2>

            <p class="text-gray-600 mb-4 leading-relaxed">
              Rwanda is one of Africa's most beautiful countries, known for its
              rolling green hills, breathtaking scenery, rich culture, and
              remarkable wildlife.
            </p>

            <p class="text-gray-600 mb-4 leading-relaxed">
              Visitors from around the world come to experience mountain gorilla
              trekking, national parks, beautiful lakes, cultural heritage sites,
              and the warm hospitality of the Rwandan people.
            </p>

            <p class="text-gray-600 leading-relaxed">
              Our mission is to showcase Rwanda's incredible tourism potential
              and inspire travelers to explore its unique destinations.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- MISSION & VISION -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">

        <div class="grid md:grid-cols-2 gap-8">

          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <div class="text-5xl mb-4">🎯</div>

            <h3 class="text-3xl font-bold mb-4 text-green-700">
              Our Mission
            </h3>

            <p class="text-gray-600">
              To promote Rwanda as a world-class tourism destination by
              connecting travelers with unforgettable experiences, natural
              wonders, and cultural treasures.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <div class="text-5xl mb-4">🌍</div>

            <h3 class="text-3xl font-bold mb-4 text-green-700">
              Our Vision
            </h3>

            <p class="text-gray-600">
              To become the leading digital platform for exploring Rwanda,
              helping visitors discover every corner of this beautiful nation.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- WHY CHOOSE RWANDA -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800">
            Why Choose Rwanda?
          </h2>

          <p class="text-gray-600 mt-4">
            Experience adventure, culture, wildlife, and nature in one destination.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="text-center p-8 bg-gray-50 rounded-2xl shadow-md">
            <div class="text-6xl mb-4">🦍</div>
            <h3 class="text-2xl font-bold mb-3">
              Gorilla Trekking
            </h3>
            <p class="text-gray-600">
              Meet the famous mountain gorillas in their natural habitat.
            </p>
          </div>

          <div class="text-center p-8 bg-gray-50 rounded-2xl shadow-md">
            <div class="text-6xl mb-4">🌿</div>
            <h3 class="text-2xl font-bold mb-3">
              Natural Beauty
            </h3>
            <p class="text-gray-600">
              Explore forests, lakes, waterfalls and rolling hills.
            </p>
          </div>

          <div class="text-center p-8 bg-gray-50 rounded-2xl shadow-md">
            <div class="text-6xl mb-4">🎭</div>
            <h3 class="text-2xl font-bold mb-3">
              Rich Culture
            </h3>
            <p class="text-gray-600">
              Discover Rwanda's traditions, music, dance and heritage.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- TOURISM STATS -->
    <section class="py-20 bg-green-700 text-white">
      <div class="max-w-6xl mx-auto px-6">

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 class="text-5xl font-bold">5</h3>
            <p class="mt-2">Provinces</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">4</h3>
            <p class="mt-2">National Parks</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">1000+</h3>
            <p class="mt-2">Beautiful Hills</p>
          </div>

          <div>
            <h3 class="text-5xl font-bold">1M+</h3>
            <p class="mt-2">Annual Visitors</p>
          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-gray-900 text-white text-center">
      <div class="max-w-4xl mx-auto px-6">

        <h2 class="text-5xl font-bold mb-6">
          Ready To Explore Rwanda?
        </h2>

        <p class="text-xl text-gray-300 mb-10">
          Start your journey today and discover Rwanda's most beautiful destinations.
        </p>

        <div class="flex flex-col md:flex-row justify-center gap-4">

          <router-link
            to="/destinations"
            class="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold"
          >
            Explore Destinations
          </router-link>

          <router-link
            to="/contact"
            class="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold"
          >
            Contact Us
          </router-link>

        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "AboutView"
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>