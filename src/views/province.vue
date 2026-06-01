<template>
  <div class="provinces">
    <h2>Explore Rwanda by Province</h2>

    <div class="grid">
      <div v-for="p in provinces" :key="p.name" class="card">
        <img :src="p.image" />
        <h3>{{ p.name }}</h3>
        <p>{{ p.description }}</p>
        <button @click="goTo(p.name)">View Destinations</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      provinces: [
        {
          name: "Kigali City",
          image: "/src/assets/kigali.jpg",
          description: "The cleanest and capital city of Rwanda"
        },
        {
          name: "Southern Province",
          image: "/src/assets/southern.jpg",
          description: "Home of culture and history"
        },
        {
          name: "Northern Province",
          image: "/src/assets/northern.jpg",
          description: "Mountains and Volcanoes experience"
        },
        {
          name: "Eastern Province",
          image: "/src/assets/eastern.jpg",
          description: "Akagera wildlife and savannah"
        },
        {
          name: "Western Province",
          image: "/src/assets/western.jpg",
          description: "Lake Kivu beaches and relaxation"
        }
      ]
    };
  },
  methods: {
    goTo(province) {
      this.$router.push(`/destination/${province}`);
    }
  }
};
</script>

<style>
.provinces {
  padding: 60px;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>