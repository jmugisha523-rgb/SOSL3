<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- HERO SECTION -->
    <section
      class="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style="background-image: url('/images/lake-kivu-sunset.jpg.jpg');"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 text-center text-white px-6 animate-fadeInUp">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">🌊 Western Province</h1>

        <p class="text-lg md:text-2xl max-w-3xl mx-auto text-gray-100">
          Rwanda's lake paradise with sandy beaches, islands, and stunning sunsets
        </p>
      </div>
    </section>

    <!-- INTRO SECTION -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-green-900">
          Relax by Africa's Great Lakes
        </h2>

        <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          The Western Province is home to Lake Kivu, one of Africa's most beautiful Great Lakes.
          Enjoy pristine beaches, island hopping, water sports, and the most spectacular sunsets in Rwanda.
        </p>

        <div class="grid grid-cols-3 gap-6 mt-12">
          <div class="bg-green-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-green-700">🏖️</p>
            <p class="text-sm font-semibold text-green-900 mt-2">Beaches</p>
          </div>
          <div class="bg-yellow-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-yellow-600">🚤</p>
            <p class="text-sm font-semibold text-yellow-900 mt-2">Water Sports</p>
          </div>
          <div class="bg-green-100 rounded-lg p-4">
            <p class="text-3xl font-bold text-green-700">🏝️</p>
            <p class="text-sm font-semibold text-green-900 mt-2">Island Tours</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ATTRACTIONS SECTION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-green-900 mb-4">Top Attractions to Visit</h2>
          <p class="text-gray-600 text-lg">Discover lakeside beauty and adventure</p>
        </div>

        <div class="space-y-20">
          <!-- 1. LAKE KIVU -->
          <div
            class="grid md:grid-cols-2 gap-10 items-center hover:shadow-xl transition-shadow rounded-2xl overflow-hidden"
          >
            <div class="overflow-hidden rounded-2xl">
              <img
                src="/images/lake-kivu.jpg"
                alt="Lake Kivu"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">💧 Lake Kivu</h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                One of Africa's Great Lakes, spanning between Rwanda and the Democratic Republic of Congo.
                The lake is famous for its pristine waters, beautiful beaches, and picturesque sunsets.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Swimming and water sports</li>
                <li>✓ Boat tours and cruises</li>
                <li>✓ Beach relaxation</li>
                <li>✓ Photography paradise</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">📍 Karongi & Rusizi Districts | 🌅 Best sunsets: 5-7 PM</p>
            </div>
          </div>

          <!-- 2. KIBUYE (LAKE RESORT TOWN) -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1 p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">🏘️ Kibuye Beach Resort</h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                A charming lakeside town perfect for relaxation and recreation. Enjoy beachfront restaurants,
                water activities, and stunning lake views.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Beach resorts</li>
                <li>✓ Waterfront dining</li>
                <li>✓ Swimming</li>
                <li>✓ Local markets</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">📍 Karongi District | 🏨 Multiple accommodation options</p>
            </div>

            <div class="order-1 md:order-2 overflow-hidden rounded-2xl">
              <img
                src="/images/kibuye.jpg - Copy.jpg"
                alt="Kibuye Beach"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <!-- 3. LAKE KIVU ISLANDS -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="overflow-hidden rounded-2xl">
              <img
                src="/images/lake-kivu-islands.jpg.jpg"
                alt="Lake Kivu Islands"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div class="p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">🏝️ Lake Kivu Island Hopping</h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Explore the beautiful islands dotting Lake Kivu. Visit fishing villages, pristine beaches, and
                remote communities while enjoying spectacular water views.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Island boat tours</li>
                <li>✓ Fishing village visits</li>
                <li>✓ Beach exploration</li>
                <li>✓ Cultural encounters</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">🚤 Boat tours available daily | 📸 Great for photography</p>
            </div>
          </div>

          <!-- 4. LAKE KIVU SUNSET EXPERIENCE -->
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1 p-6">
              <h3 class="text-3xl md:text-4xl font-bold text-green-800 mb-4">🌅 Lake Kivu Sunset Cruise</h3>

              <p class="text-gray-700 mb-4 text-lg leading-relaxed">
                Experience the most spectacular sunsets in Rwanda on a romantic cruise across Lake Kivu.
                Watch the sun paint the sky in brilliant colors as the day ends.
              </p>

              <ul class="space-y-2 mb-6 text-gray-700">
                <li>✓ Sunset viewing</li>
                <li>✓ Dinner options</li>
                <li>✓ Live music cruises</li>
                <li>✓ Perfect for couples</li>
              </ul>

              <p class="text-sm text-gray-600 font-semibold">⏱️ Duration: 2-3 hours | 🎟️ Book in advance</p>
            </div>

            <div class="order-1 md:order-2 overflow-hidden rounded-2xl">
              <img
                src="/images/lake-kivu-sunset.jpg.jpg"
                alt="Sunset Cruise"
                class="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WATER ACTIVITIES -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-green-900 mb-16">
          Water Sports & Activities
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white border-2 border-green-200 rounded-2xl p-6 hover:shadow-lg transition">
            <p class="text-4xl mb-3">🏊</p>
            <h3 class="text-lg font-bold text-green-800 mb-2">Swimming</h3>
            <p class="text-sm text-gray-700">Safe and pristine lake waters ideal for swimming.</p>
          </div>

          <div class="bg-white border-2 border-yellow-200 rounded-2xl p-6 hover:shadow-lg transition">
            <p class="text-4xl mb-3">🚣</p>
            <h3 class="text-lg font-bold text-green-800 mb-2">Kayaking</h3>
            <p class="text-sm text-gray-700">Explore the lake at your own pace on a kayak.</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition">
            <p class="text-4xl mb-3">🎣</p>
            <h3 class="text-lg font-bold text-green-800 mb-2">Fishing</h3>
            <p class="text-sm text-gray-700">Traditional fishing experiences with local fishermen.</p>
          </div>

          <div class="bg-white border-2 border-green-200 rounded-2xl p-6 hover:shadow-lg transition">
            <p class="text-4xl mb-3">🏄</p>
            <h3 class="text-lg font-bold text-green-800 mb-2">Windsurfing</h3>
            <p class="text-sm text-gray-700">Adventure sports for experienced water enthusiasts.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRO (kept from original, but moved inside main template) -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6 text-gray-800">Welcome to Western Rwanda</h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          The Western Province is famous for Lake Kivu, one of Africa’s Great Lakes. It offers beaches,
          boat trips, islands, fishing villages, and breathtaking sunsets.
        </p>
      </div>
    </section>

    <!-- ATTRACTIONS (simplified section from original, but kept inside template) -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16">Top Tourist Attractions</h2>

        <div class="space-y-16">
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <img src="/images/lake-kivu.jpg" class="rounded-2xl shadow-xl w-full h-80 object-cover" />
            <div>
              <h3 class="text-3xl font-bold mb-3">Lake Kivu</h3>
              <p class="text-gray-600 mb-3">
                One of Africa’s largest lakes, offering peaceful beaches, swimming areas, boat rides, and stunning
                sunset views.
              </p>
              <p class="text-gray-500">📍 Location: Western Rwanda (Rubavu, Karongi, Rusizi)</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1">
              <h3 class="text-3xl font-bold mb-3">Gisenyi (Rubavu Beach)</h3>
              <p class="text-gray-600 mb-3">
                A beautiful lakeside town with sandy beaches, hotels, nightlife, and direct views of the
                Democratic Republic of Congo.
              </p>
              <p class="text-gray-500">📍 Location: Rubavu District</p>
            </div>
            <img
              src="/images/rubavu-beach.jpg.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover order-1 md:order-2"
            />
          </div>

          <div class="grid md:grid-cols-2 gap-10 items-center">
            <img src="/images/kibuye.jpg - Copy.jpg" class="rounded-2xl shadow-xl w-full h-80 object-cover" />
            <div>
              <h3 class="text-3xl font-bold mb-3">Karongi (Kibuye)</h3>
              <p class="text-gray-600 mb-3">
                Known for its peaceful islands, boat cruises, and romantic sunsets over Lake Kivu.
              </p>
              <p class="text-gray-500">📍 Location: Karongi District</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1">
              <h3 class="text-3xl font-bold mb-3">Lake Kivu Islands</h3>
              <p class="text-gray-600 mb-3">
                Small islands across Lake Kivu where visitors can enjoy boat tours, bird watching, and peaceful
                nature experiences.
              </p>
              <p class="text-gray-500">📍 Location: Lake Kivu (Various districts)</p>
            </div>
            <img
              src="/images/lake-kivu-islands.jpg.jpg"
              class="rounded-2xl shadow-xl w-full h-80 object-cover order-1 md:order-2"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ACTIVITIES -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-10">Activities in Western Province</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Beach Relaxation</h3>
            <p class="text-gray-600">Enjoy calm beaches along Lake Kivu.</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Boat Trips</h3>
            <p class="text-gray-600">Explore islands and scenic lake views.</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl shadow">
            <h3 class="font-bold text-xl mb-2">Sunset Viewing</h3>
            <p class="text-gray-600">Experience one of Africa’s best sunsets.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-green-700 text-white text-center">
      <h2 class="text-5xl font-bold mb-6">Explore Eastern Rwanda Next</h2>
      <p class="text-xl mb-10">Discover wildlife safaris and national parks.</p>

      <div class="flex flex-col md:flex-row justify-center gap-4">
        <RouterLink to="/eastern" class="bg-white text-green-700 px-8 py-4 rounded-lg font-bold">
          Eastern Province
        </RouterLink>

        <RouterLink
          to="/destinations"
          class="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold"
        >
          All Destinations
        </RouterLink>
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

