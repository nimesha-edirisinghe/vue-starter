import { defineStore } from 'pinia';

interface User {
    id: number;
    name: string;
    email: string;
    isLoggedIn: boolean;
}

export const useUserStore = defineStore('user', {
    state: (): User => ({
        id: 0,
        name: '',
        email: '',
        isLoggedIn: false,
    }),

    getters: {
        displayName: state => state.name || 'Guest',
        isAuthenticated: state => state.isLoggedIn,
        userInfo: state => ({
            id: state.id,
            name: state.name,
            email: state.email,
        }),
    },

    actions: {
        login(userData: { name: string; email: string }) {
            this.id = Date.now(); // Simple ID generation
            this.name = userData.name;
            this.email = userData.email;
            this.isLoggedIn = true;
        },

        logout() {
            this.id = 0;
            this.name = '';
            this.email = '';
            this.isLoggedIn = false;
        },

        updateProfile(updates: Partial<Pick<User, 'name' | 'email'>>) {
            if (updates.name) this.name = updates.name;
            if (updates.email) this.email = updates.email;
        },
    },
});
