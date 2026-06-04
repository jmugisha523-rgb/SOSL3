<template>
  <div class="flex items-center justify-center bg-green-100 min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">Register</h2>

      <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
        <input
          v-model.trim="form.fullnames"
          placeholder="Full names"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />

        <input
          v-model.trim="form.phoneNumber"
          placeholder="Phone number"
          type="tel"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />

        <input
          v-model.number="form.age"
          placeholder="Age"
          type="number"
          min="1"
          max="120"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />

        <input
          v-model="form.password"
          placeholder="Password"
          type="password"
          required
          minlength="6"
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />

        <select
          v-model="form.gender"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          v-model.trim="form.email"
          placeholder="Email"
          type="email"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />

        <button
          type="submit"
          class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold transition duration-300"
        >
          Create Account
        </button>
      </form>

      <p v-if="error" class="text-sm mt-4 text-red-600">{{ error }}</p>
      <p v-if="success" class="text-sm mt-4 text-green-700">{{ success }}</p>

      <p class="text-center text-sm mt-4 text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-green-700 font-semibold hover:underline">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  fullnames: "",
  phoneNumber: "",
  age: null,
  password: "",
  gender: "",
  email: "",
});

const error = ref("");
const success = ref("");

const onSubmit = () => {
  error.value = "";
  success.value = "";

  if (!form.fullnames) return (error.value = "Full names is required.");
  if (!form.phoneNumber) return (error.value = "Phone number is required.");
  if (!form.age || form.age < 1) return (error.value = "Please enter a valid age.");
  if (!form.password || form.password.length < 6)
    return (error.value = "Password must be at least 6 characters.");
  if (!form.gender) return (error.value = "Please select your gender.");
  if (!form.email) return (error.value = "Email is required.");

  success.value = "Registered successfully (frontend only).";
};
</script>

