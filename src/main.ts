import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/main.css';
import App from './App.vue';
import router from './router';

// Initialize MSW in development mode
async function enableMocking() {
    if (import.meta.env.DEV) {
        const { worker } = await import('./mocks/browser');
        return worker.start({
            onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
        });
    }
}

// Start the app after MSW is initialized
enableMocking().then(() => {
    const app = createApp(App);
    const pinia = createPinia();

    app.use(pinia);
    app.use(router);
    app.mount('#app');
});
