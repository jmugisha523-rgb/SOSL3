<template>
  <!-- Services Section -->
  <section class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Page Title -->
      <h1 class="text-4xl font-bold text-center text-blue-700 mb-3">Our Services</h1>
      <p class="text-center text-lg text-gray-700 mb-12">Welcome to our premium service offerings</p>
      
      <!-- Services with Image -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <!-- Hotel Image -->
        <div class="flex justify-center order-2 md:order-1">
          <img 
            src="/src/assets/download.jpg" 
            alt="Hotel Services" 
            class="rounded-lg shadow-2xl w-full max-w-md h-auto"
          />
        </div>
        
        <!-- Services Description -->
        <div class="order-1 md:order-2">
          <h2 class="text-3xl font-bold mb-6 text-gray-800">Hospitality & Hotel Services</h2>
          
          <div class="space-y-4">
            <div class="flex items-start">
              <span class="text-green-600 font-bold text-2xl mr-4">✓</span>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Luxury Accommodation</h3>
                <p class="text-gray-600">Experience world-class hotels with stunning views and premium amenities</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-green-600 font-bold text-2xl mr-4">✓</span>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Expert Tour Guides</h3>
                <p class="text-gray-600">Knowledgeable guides to lead you through Rwanda's most beautiful destinations</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-green-600 font-bold text-2xl mr-4">✓</span>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Transportation Services</h3>
                <p class="text-gray-600">Comfortable and reliable transportation throughout your journey</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-green-600 font-bold text-2xl mr-4">✓</span>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Customized Packages</h3>
                <p class="text-gray-600">Tailored travel packages designed to meet your specific needs and preferences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
