<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>
d

<template>
  <div class="max-w-2xl mx-auto p-16 text-center">
    <h1 class="text-8xl font-bold text-green-500 m-0 leading-none">404</h1>
    <h2 class="text-3xl font-semibold text-gray-800 my-4">Page Not Found</h2>
    <p class="text-gray-600 mb-8 text-lg">
      The page you're looking for doesn't exist.
    </p>
    <div class="flex gap-4 justify-center flex-wrap">
      <router-link
        to="/"
        class="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 text-base no-underline cursor-pointer"
      >
        Go Home
      </router-link>
      <button
        @click="goBack"
        class="px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-300 text-base cursor-pointer border-none"
      >
        Go Back
      </button>
    </div>
  </div>
</template>
