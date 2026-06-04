<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')


function handleLogin() {
  router.push('/dashboard')
}
</script>

<template>
  <div class="flex items-center justify-center bg-green-100 min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">Login</h2>

      <form class="flex flex-col gap-4" @submit.prevent="handleLogin">
        <input
          v-model="email"
          placeholder="Please enter user email"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Please enter user password"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />

        <button
          type="submit"
          class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold transition duration-300"
        >
          Sign In
        </button>
      </form>

      <p class="text-center text-sm mt-4 text-gray-600">
        Don't have an account?
        <router-link to="/register" class="text-green-700 font-semibold hover:underline">
          Click here
        </router-link>
      </p>
    </div>
  </div>
</template>

