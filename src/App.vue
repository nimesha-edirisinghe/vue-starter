<script setup lang="ts">
    // App component with router integration
</script>

<template>
    <div id="app" class="min-h-screen flex flex-col">
        <nav class="bg-gray-800 py-4 shadow-md">
            <div
                class="max-w-6xl mx-auto px-8 flex justify-between items-center"
            >
                <router-link
                    to="/"
                    class="text-green-400 text-2xl font-bold hover:text-green-300 transition-colors duration-300"
                >
                    Vue Starter
                </router-link>
                <div class="flex gap-8">
                    <router-link
                        to="/"
                        class="text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-white hover:bg-opacity-10"
                        :class="{
                            'bg-green-400 text-white': $route.path === '/',
                        }"
                    >
                        Home
                    </router-link>
                    <router-link
                        to="/about"
                        class="text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-white hover:bg-opacity-10"
                        :class="{
                            'bg-green-400 text-white': $route.path === '/about',
                        }"
                    >
                        About
                    </router-link>
                    <router-link
                        to="/headless-ui-demo"
                        class="text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-white hover:bg-opacity-10"
                        :class="{
                            'bg-green-400 text-white':
                                $route.path === '/headless-ui-demo',
                        }"
                    >
                        Headless UI Demo
                    </router-link>
                </div>
            </div>
        </nav>

        <main class="flex-1 py-8">
            <router-view />
        </main>
    </div>
</template>
