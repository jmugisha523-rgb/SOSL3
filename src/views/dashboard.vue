<script setup lang="ts">
import { ref } from 'vue'
const activeMenu = ref<'overview' | 'booking' | 'users'>('overview')

function Logout() {
  
  window.location.href = '/login'
}
</script>

<template>
  <div class="flex h-screen bg-green-100">
  
    <aside class="w-68 bg-green-800 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold border-b border-green-700">Dashboard</div>

      <nav class="flex-1 p-4">
        <button
          @click="activeMenu = 'overview'"
          :class="activeMenu === 'overview' ? 'bg-green-700' : 'hover:bg-green-700'"
          class="w-full text-left px-4 py-3 rounded mb-2"
        >
          Overview
        </button>

        <button
          @click="activeMenu = 'booking'"
          :class="activeMenu === 'booking' ? 'bg-green-700' : 'hover:bg-green-700'"
          class="w-full text-left px-4 py-3 rounded mb-2"
        >
          Booking
        </button>

        <button
          @click="activeMenu = 'users'"
          :class="activeMenu === 'users' ? 'bg-green-700' : 'hover:bg-green-700'"
          class="w-full text-left px-4 py-3 rounded mb-2"
        >
          Users
        </button>
      </nav>

      <div class="p-4 border-t border-green-700">
        <button
          @click="Logout"
          class="w-full bg-red-600 hover:bg-red-600 text-white py-2 rounded"
        >
          Logout
        </button>
      </div>
    </aside>

    <!-- main content -->
    <main class="flex-1 overflow-y-auto p-8">
      <!-- Overview -->
      <div v-if="activeMenu === 'overview'" class="space-y-6">
        <div class="text-2xl font-bold text-green-800">Overview</div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg shadow p-5">
            
            
          </div>
          <div class="bg-white rounded-lg shadow p-5">
           
          
          </div>
          <div class="bg-white rounded-lg shadow p-5">
            
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold text-green-900">About this dashboard</h3>
          <p class="mt-2 text-gray-700">
            This is our over view page. Use the left menu to switch between Overview and Booking.
          </p>
        </div>
      </div>

      <!-- Booking -->
      <div v-else-if="activeMenu === 'booking'" class="space-y-4">
        <div class="text-2xl font-bold text-green-800">Booking</div>
        
      </div>

      <!-- Users -->
      <div v-else-if="activeMenu === 'users'" class="space-y-4">
        <div class="text-2xl font-bold text-green-800">Users</div>
        
      </div>
    </main>
  </div>
</template>

