import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Counter Store',
    }),

    getters: {
        doubleCount: state => state.count * 2,
        doubleCountPlusOne(): number {
            return this.doubleCount + 1;
        },
    },

    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        incrementBy(amount: number) {
            this.count += amount;
        },
        reset() {
            this.count = 0;
        },
    },
});
