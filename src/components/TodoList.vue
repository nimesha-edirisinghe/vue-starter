<template>
    <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Todo List Example
        </h2>

        <!-- Add Todo Form -->
        <div class="mb-6">
            <div class="flex gap-2">
                <input
                    v-model="newTodo"
                    @keyup.enter="addTodo"
                    type="text"
                    placeholder="Add a new todo..."
                    class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    @click="addTodo"
                    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add
                </button>
            </div>
        </div>

        <!-- Todo List -->
        <div v-if="todoStore.filteredTodos.length > 0" class="mb-4">
            <div class="space-y-2">
                <div
                    v-for="todo in todoStore.filteredTodos"
                    :key="todo.id"
                    class="flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                >
                    <input
                        :checked="todo.completed"
                        @change="todoStore.toggleTodo(todo.id)"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span
                        :class="{
                            'line-through text-gray-500': todo.completed,
                            'text-gray-800': !todo.completed,
                        }"
                        class="flex-1"
                    >
                        {{ todo.text }}
                    </span>
                    <button
                        @click="todoStore.removeTodo(todo.id)"
                        class="text-red-500 hover:text-red-700"
                    >
                        ×
                    </button>
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center text-gray-500 py-4">No todos found</div>

        <!-- Filters and Actions -->
        <div
            class="flex justify-between items-center pt-4 border-t border-gray-200"
        >
            <div class="text-sm text-gray-600">
                {{ todoStore.activeCount }} active,
                {{ todoStore.completedCount }} completed
            </div>

            <div class="flex gap-2">
                <button
                    v-for="filter in ['all', 'active', 'completed']"
                    :key="filter"
                    @click="todoStore.setFilter(filter as any)"
                    :class="{
                        'bg-blue-500 text-white': todoStore.filter === filter,
                        'bg-gray-200 text-gray-700 hover:bg-gray-300':
                            todoStore.filter !== filter,
                    }"
                    class="px-3 py-1 rounded text-sm"
                >
                    {{ filter.charAt(0).toUpperCase() + filter.slice(1) }}
                </button>
            </div>

            <div class="flex gap-2">
                <button
                    v-if="todoStore.completedCount > 0"
                    @click="todoStore.clearCompleted"
                    class="text-sm text-red-500 hover:text-red-700"
                >
                    Clear completed
                </button>
                <button
                    v-if="todoStore.totalCount > 0"
                    @click="todoStore.toggleAll"
                    class="text-sm text-blue-500 hover:text-blue-700"
                >
                    Toggle all
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useTodoStore } from '@/stores';

    const todoStore = useTodoStore();
    const newTodo = ref('');

    const addTodo = () => {
        if (newTodo.value.trim()) {
            todoStore.addTodo(newTodo.value);
            newTodo.value = '';
        }
    };
</script>
