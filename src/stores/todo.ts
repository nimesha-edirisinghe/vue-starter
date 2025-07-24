import { defineStore } from 'pinia';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
    createdAt: Date;
}

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as Todo[],
        filter: 'all' as 'all' | 'active' | 'completed',
    }),

    getters: {
        filteredTodos: state => {
            switch (state.filter) {
                case 'active':
                    return state.todos.filter(todo => !todo.completed);
                case 'completed':
                    return state.todos.filter(todo => todo.completed);
                default:
                    return state.todos;
            }
        },

        completedCount: state =>
            state.todos.filter(todo => todo.completed).length,

        activeCount: state =>
            state.todos.filter(todo => !todo.completed).length,

        totalCount: state => state.todos.length,
    },

    actions: {
        addTodo(text: string) {
            if (text.trim()) {
                const todo: Todo = {
                    id: Date.now(),
                    text: text.trim(),
                    completed: false,
                    createdAt: new Date(),
                };
                this.todos.push(todo);
            }
        },

        toggleTodo(id: number) {
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

        removeTodo(id: number) {
            const index = this.todos.findIndex(todo => todo.id === id);
            if (index > -1) {
                this.todos.splice(index, 1);
            }
        },

        updateTodo(id: number, text: string) {
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text.trim();
            }
        },

        setFilter(filter: 'all' | 'active' | 'completed') {
            this.filter = filter;
        },

        clearCompleted() {
            this.todos = this.todos.filter(todo => !todo.completed);
        },

        toggleAll() {
            const allCompleted = this.todos.every(todo => todo.completed);
            this.todos.forEach(todo => {
                todo.completed = !allCompleted;
            });
        },
    },
});
