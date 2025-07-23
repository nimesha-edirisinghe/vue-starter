<template>
  <div class="about">
    <h1>About</h1>
    <p>This is the about page of your Vue.js application.</p>
    <div class="content">
      <h2>About This Project</h2>
      <p>
        This is a Vue.js starter project built with modern tools and best
        practices. It includes TypeScript support, Vue Router for navigation,
        and Vite for fast development.
      </p>
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Vue 3:</strong> Progressive JavaScript framework</li>
        <li><strong>TypeScript:</strong> Type-safe JavaScript</li>
        <li><strong>Vue Router:</strong> Official router for Vue.js</li>
        <li><strong>Vite:</strong> Next generation frontend tooling</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// About page component logic can be added here
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #42b883;
  margin-bottom: 1rem;
  text-align: center;
}

.content {
  margin-top: 2rem;
}

.content h2 {
  color: #35495e;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.content p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.content ul {
  list-style-type: none;
  padding: 0;
}

.content li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.content li:last-child {
  border-bottom: none;
}

.content strong {
  color: #42b883;
}
</style>
