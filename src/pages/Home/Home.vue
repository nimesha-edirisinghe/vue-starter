<script setup lang="ts">
    import { useCounterStore, useUserStore } from '@/stores';
    import TodoList from '@/components/TodoList.vue';

    const counter = useCounterStore();
    const user = useUserStore();

    const loginUser = () => {
        user.login({
            name: 'John Doe',
            email: 'john.doe@example.com',
        });
    };
</script>

<template>
    <div class="max-w-4xl mx-auto p-8 text-center">
        <h1 class="text-4xl font-bold text-green-500 mb-4">
            Welcome to Vue Starter
        </h1>
        <p class="text-lg text-gray-700 mb-8">
            This is the home page of your Vue.js application with Pinia state
            management.
        </p>

        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                Counter Store Example
            </h2>
            <div class="text-4xl font-bold text-blue-600 mb-4">
                {{ counter.count }}
            </div>
            <div class="text-lg text-gray-600 mb-4">
                Double count: {{ counter.doubleCount }}
            </div>
            <div class="text-lg text-gray-600 mb-6">
                Double count + 1: {{ counter.doubleCountPlusOne }}
            </div>

            <div class="flex justify-center space-x-4 mb-4">
                <button
                    @click="counter.decrement()"
                    class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                    Decrement
                </button>
                <button
                    @click="counter.increment()"
                    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                    Increment
                </button>
                <button
                    @click="counter.incrementBy(5)"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    +5
                </button>
                <button
                    @click="counter.reset()"
                    class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                    Reset
                </button>
            </div>
        </div>

        <!-- User Store Example -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                User Store Example
            </h2>

            <div v-if="!user.isAuthenticated" class="mb-6">
                <div class="text-lg text-gray-600 mb-4">Not logged in</div>
                <button
                    @click="loginUser"
                    class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
                >
                    Login
                </button>
            </div>

            <div v-else class="mb-6">
                <div class="text-lg text-gray-600 mb-2">
                    Welcome, {{ user.displayName }}!
                </div>
                <div class="text-sm text-gray-500 mb-4">
                    {{ user.userInfo.email }}
                </div>
                <button
                    @click="user.logout()"
                    class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
                >
                    Logout
                </button>
            </div>
        </div>

        <TodoList class="mb-8" />
        <div class="mt-8 text-left">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
            <ul class="space-y-2">
                <li class="py-2 border-b border-gray-200 last:border-b-0">
                    Vue 3 with Composition API
                </li>
                <li class="py-2 border-b border-gray-200 last:border-b-0">
                    TypeScript support
                </li>
                <li class="py-2 border-b border-gray-200 last:border-b-0">
                    Vue Router for navigation
                </li>
                <li class="py-2 border-b border-gray-200 last:border-b-0">
                    Pinia for state management
                </li>
                <li class="py-2 border-b border-gray-200 last:border-b-0">
                    Vite for fast development
                </li>
            </ul>
        </div>
    </div>
</template>
