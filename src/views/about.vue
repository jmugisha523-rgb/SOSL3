<template>
  <!-- About Section -->
  <section class="min-h-screen bg-gray-100 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Welcome Message -->
      <h1 class="text-4xl font-bold text-center mb-12 text-green-600">Welcome to About Page</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Image -->
        <div class="flex justify-center">
          <img 
            src="/src/assets/download.jpg" 
            alt="About Rwanda" 
            class="rounded-lg shadow-lg w-full max-w-md h-auto"
          />
        </div>
        
        <!-- About Content -->
        <div>
          <h2 class="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Welcome to our website dedicated to showcasing the beauty and wonder of Rwanda. 
            We are passionate about sharing the rich cultural heritage and stunning landscapes 
            of this beautiful nation.
          </p>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Rwanda, known as the "Land of a Thousand Hills," is a destination filled with 
            incredible natural beauty, vibrant culture, and warm-hearted people. Through this 
            platform, we aim to inspire and educate visitors about the wonders that await them.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Join us as we explore the diverse experiences Rwanda has to offer!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
</style>

