<script setup>
import { computed, ref } from 'vue'

const language = ref('en')

const messages = {
  en: {
    title: 'Rwanda Culture Gallery',
    subtitle: 'Rwanda traditional dance moments (online images)',
    languageLabel: 'Language',
    prev: 'Previous',
    next: 'Next',
    slideOf: 'Slide',
    autoplayOn: 'Autoplay: On',
    autoplayOff: 'Autoplay: Off',
  },
  fr: {
    title: 'Galerie Culturelle du Rwanda',
    subtitle: 'Moments de danse traditionnelle rwandaise (images en ligne)',
    languageLabel: 'Langue',
    prev: 'Précédent',
    next: 'Suivant',
    slideOf: 'Diapositive',
    autoplayOn: 'Lecture automatique : Activée',
    autoplayOff: 'Lecture automatique : Désactivée',
  },
  rw: {
    title: 'Imurikabikorwa y’Umuco w’u Rwanda',
    subtitle: 'Ibyishimo bya #danses gakondo z’u Rwanda (amafoto yo kuri interineti)',
    languageLabel: 'Ururimi',
    prev: 'Iburyo rirutaduka',
    next: 'Ibikurikira',
    slideOf: 'Icyiciro',
    autoplayOn: 'Autoplay: Yafunguwe',
    autoplayOff: 'Autoplay: Irahagaritswe',
  },
}

const t = computed(() => messages[language.value] ?? messages.en)

// Sliding carousel (no external dependency)
const slides = [
  {
    // Rwandan traditional dance (remote image)
    src: 'https://images.unsplash.com/photo-1526779259212-321de3f5a0a5?auto=format&fit=crop&w=1600&q=80',
    alt: 'Traditional dance in Rwanda',
    caption: {
      en: 'Traditional dance energy',
      fr: 'Énergie de la danse traditionnelle',
      rw: 'Imbaraga z’imbyino gakondo',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1541701494084-1e3d6f0cc0c1?auto=format&fit=crop&w=1600&q=80',
    alt: 'People dancing',
    caption: {
      en: 'Joyful community performance',
      fr: 'Performance joyeuse et collective',
      rw: 'Imbyino z’urukundo n’abandi hamwe',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    alt: 'Traditional drumming and dance',
    caption: {
      en: 'Culture through rhythm',
      fr: 'La culture à travers le rythme',
      rw: 'Umuco ugaragara mu njyana',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80',
    alt: 'Traditional celebration dance',
    caption: {
      en: 'Celebration & tradition',
      fr: 'Célébration & tradition',
      rw: 'Iserukiramuco n’umuco',
    },
  },
]

const index = ref(0)
const isAutoplay = ref(true)
const autoplayMs = 3500
let timer = null

function goTo(i) {
  const len = slides.length
  index.value = (i + len) % len
}
function prev() {
  goTo(index.value - 1)
}
function next() {
  goTo(index.value + 1)
}

function startAutoplay() {
  stopAutoplay()
  timer = setInterval(() => {
    if (isAutoplay.value) next()
  }, autoplayMs)
}
function stopAutoplay() {
  if (timer) clearInterval(timer)
  timer = null
}

startAutoplay()
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header + language selector -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold text-blue-700">
            {{ t.title }}
          </h1>
          <p class="text-gray-600 mt-2">{{ t.subtitle }}</p>
        </div>

        <div class="flex items-center gap-3">
          <label class="text-sm font-semibold text-gray-700">{{ t.languageLabel }}</label>
          <select
            v-model="language"
            class="border border-gray-300 bg-white rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="rw">Kinyarwanda</option>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>

          <button
            type="button"
            @click="isAutoplay = !isAutoplay"
            class="hidden sm:inline-flex items-center rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold bg-white hover:bg-gray-100"
            :title="isAutoplay ? t.autoplayOn : t.autoplayOff"
          >
            {{ isAutoplay ? t.autoplayOn : t.autoplayOff }}
          </button>
        </div>
      </div>

      <!-- Carousel -->
      <div
        class="relative rounded-2xl overflow-hidden shadow-2xl bg-white"
        @mouseenter="isAutoplay = false"
        @mouseleave="isAutoplay = true"
      >
        <div class="relative h-[320px] sm:h-[420px]">
          <!-- Slide track -->
          <div
            class="absolute inset-0 flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${index * 100}%)` }"
          >
            <div
              v-for="(s, i) in slides"
              :key="i"
              class="w-full shrink-0 h-full relative"
            >
              <img
                :src="s.src"
                :alt="s.alt"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-black/35" />

              <div class="absolute bottom-0 left-0 right-0 p-5">
                <div class="flex items-center justify-between gap-3">
                  <div class="text-white">
                    <p class="text-xs sm:text-sm opacity-90">
                      {{ t.slideOf }} {{ i + 1 }} / {{ slides.length }}
                    </p>
                    <h2 class="text-lg sm:text-2xl font-bold">
                      {{ s.caption[language] ?? s.caption.en }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <button
          type="button"
          @click="prev"
          class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 shadow"
          :aria-label="t.prev"
        >
          <span class="text-gray-800 font-bold">‹</span>
        </button>

        <button
          type="button"
          @click="next"
          class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white p-2 shadow"
          :aria-label="t.next"
        >
          <span class="text-gray-800 font-bold">›</span>
        </button>

        <!-- Dots -->
        <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <button
            v-for="(s, i) in slides"
            :key="i"
            type="button"
            @click="goTo(i)"
            class="h-2.5 w-8 rounded-full transition-all"
            :class="index === i ? 'bg-blue-600 w-10' : 'bg-white/60 hover:bg-white/90'"
            :aria-label="`Go to slide ${i + 1}`"
          />
        </div>
      </div>

      <!-- Small note -->
      <p class="text-xs text-gray-500 mt-4 text-center">
        Images are loaded from the internet (Unsplash). Replace links if you have local media.
      </p>
    </div>
  </div>
</template>

