<template>
  <div class="home">
    <h1>Welcome to Vue Starter</h1>
    <p>This is the home page of your Vue.js application.</p>
    <div class="features">
      <h2>Features</h2>
      <ul>
        <li>Vue 3 with Composition API</li>
        <li>TypeScript support</li>
        <li>Vue Router for navigation</li>
        <li>Vite for fast development</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// Home page component logic can be added here
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #42b883;
  margin-bottom: 1rem;
}

.features {
  margin-top: 2rem;
  text-align: left;
}

.features h2 {
  color: #35495e;
  margin-bottom: 1rem;
}

.features ul {
  list-style-type: none;
  padding: 0;
}

.features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.features li:last-child {
  border-bottom: none;
}
</style>
