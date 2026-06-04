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

const slides = [
  {
    src: '/images/congo-nile-trail.jpg - Copy - Copy.jpg',
    alt: 'Congo Nile Trail',
    caption: {
      en: 'Congo Nile Trail',
      fr: 'Sentier Congo Nil',
      rw: 'Inzira ya Congo Nil',
    },
  },
  {
    src: '/images/canopy-walk - Copy - Copy.jpg',
    alt: 'Canopy Walk',
    caption: {
      en: 'Canopy Walk',
      fr: 'Promenade dans la canopée',
      rw: 'Kuroba hejuru (Canopy Walk)',
    },
  },
  {
    src: '/images/convention-center.jpg',
    alt: 'Convention Center',
    caption: {
      en: 'Convention Center',
      fr: 'Centre de Convention',
      rw: 'Amahugurwa',
    },
  },
  {
    src: '/images/genocide-memorial.jpg - Copy - Copy.jpg',
    alt: 'Genocide Memorial',
    caption: {
      en: 'Genocide Memorial',
      fr: 'Mémorial du Génocide',
      rw: 'Urwibutso rw’Urwandy',
    },
  },
  {
    src: '/images/kibuye.jpg - Copy.jpg',
    alt: 'Kibuye',
    caption: {
      en: 'Kibuye',
      fr: 'Kibuye',
      rw: 'Kibuye',
    },
  },
  {
    src: '/images/kigali-skyline.jpg.jpg',
    alt: 'Kigali Skyline',
    caption: {
      en: 'Kigali Skyline',
      fr: 'Panorama de Kigali',
      rw: 'Aho Kigali igaragaza',
    },
  },
  {
    src: '/images/kimironko-market.jpg',
    alt: 'Kimironko Market',
    caption: {
      en: 'Kimironko Market',
      fr: 'Marché Kimironko',
      rw: 'Isoko rya Kimironko',
    },
  },
  {
    src: '/images/lake-kivu-islands.jpg.jpg',
    alt: 'Lake Kivu Islands',
    caption: {
      en: 'Lake Kivu Islands',
      fr: 'Îles du lac Kivu',
      rw: 'Inyabutatu z’ikiyaga cya Kivu',
    },
  },
  {
    src: '/images/lake-kivu-sunset.jpg.jpg',
    alt: 'Lake Kivu Sunset',
    caption: {
      en: 'Lake Kivu Sunset',
      fr: 'Coucher de soleil sur le lac Kivu',
      rw: 'Izuba rirenze i Kivu',
    },
  },
  {
    src: '/images/lake-kivu.jpg',
    alt: 'Lake Kivu',
    caption: {
      en: 'Lake Kivu',
      fr: 'Lac Kivu',
      rw: 'Ikiyaga cya Kivu',
    },
  },
  {
    src: '/images/lake-muhazi.jpg',
    alt: 'Lake Muhazi',
    caption: {
      en: 'Lake Muhazi',
      fr: 'Lac Muhazi',
      rw: 'Ikiyaga cya Muhazi',
    },
  },
  {
    src: '/images/mountain-gorillas.jpg.jpg',
    alt: 'Mountain Gorillas',
    caption: {
      en: 'Mountain Gorillas',
      fr: 'Gorilles des montagnes',
      rw: 'Impyisi zo mu misozi',
    },
  },
  {
    src: '/images/nyandungu-park.jpg.jpg',
    alt: 'Nyandungu Park',
    caption: {
      en: 'Nyandungu Park',
      fr: 'Parc Nyandungu',
      rw: 'Pariki ya Nyandungu',
    },
  },
  {
    src: '/images/nyungwe.jpg',
    alt: 'Nyungwe',
    caption: {
      en: 'Nyungwe',
      fr: 'Nyungwe',
      rw: 'Nyungwe',
    },
  },
  {
    src: '/images/rubavu-beach.jpg.jpg',
    alt: 'Rubavu Beach',
    caption: {
      en: 'Rubavu Beach',
      fr: 'Plage de Rubavu',
      rw: 'Inyanja ya Rubavu',
    },
  },
  {
    src: '/images/rwanda-banner.jpg',
    alt: 'Rwanda Banner',
    caption: {
      en: 'Rwanda Banner',
      fr: 'Bannière du Rwanda',
      rw: 'Ibendera ry’u Rwanda',
    },
  },
  {
    src: '/images/tea-plantation.jpg',
    alt: 'Tea Plantation',
    caption: {
      en: 'Tea Plantation',
      fr: 'Plantation de thé',
      rw: 'Ubusitani bw’icyayi',
    },
  },
  {
    src: '/images/twin-lakes.jpg',
    alt: 'Twin Lakes',
    caption: {
      en: 'Twin Lakes',
      fr: 'Lacs Jumeaux',
      rw: 'Amakiyaga abiri',
    },
  },
  {
    src: '/images/virunga-volcanoes.jpg.jpg',
    alt: 'Virunga Volcanoes',
    caption: {
      en: 'Virunga Volcanoes',
      fr: 'Volcans des Virunga',
      rw: 'Imisozi y’Inkangu z’i Virunga',
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

