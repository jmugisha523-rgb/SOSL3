<template>
  <nav class="bg-white shadow-lg px-12 py-5 flex items-center justify-between border-b border-gray-100">
    
    <!-- Logo -->
    <h3 class="text-3xl font-extrabold text-blue-700 tracking-wide">
      Tembera U'Rwanda
    </h3>

    <!-- Navigation Links -->
    <div class="flex items-center gap-4">
      
      <h4 class="px-5 py-2 rounded-xl font-medium text-gray-700 hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer">
        HOME
      </h4>

      <!-- Dropdown -->
      <div class="relative group">
        
        <h4 class="px-5 py-2 rounded-xl font-medium text-gray-700 hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer">
          MEDIA
        </h4>

        <!-- Dropdown Menu -->
        <div class="absolute hidden group-hover:block bg-white shadow-lg rounded-xl mt-2 w-40 overflow-hidden">
          
          <p class="px-4 py-3 hover:bg-blue-700 hover:text-white cursor-pointer transition">
            Images
          </p>

          <p class="px-4 py-3 hover:bg-blue-700 hover:text-white cursor-pointer transition">
            Videos
          </p>

        </div>

      </div>

      <h4 class="px-5 py-2 rounded-xl font-medium text-gray-700 hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer">
        ABOUT US
      </h4>

      <h4 class="px-5 py-2 rounded-xl font-medium text-gray-700 hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer">
        CONTACT US
      </h4>

    </div>

  </nav>
</template>
