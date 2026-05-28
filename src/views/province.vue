<template>
  <div class="p-8 mt-12 text-center">
    <h1 class="text-3xl font-bold text-blue-700 mb-4">Welcome in {{ provinceName }}</h1>
    <p class="text-lg text-gray-700">You selected the {{ provinceName }} province.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const provinceName = computed(() => {
  const p = route.params.province
  if (!p) return 'province'
  return String(p)
    .replaceAll('-', ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
})
</script>

