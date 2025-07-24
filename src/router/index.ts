import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { Home, About, HeadlessUIDemo, NotFound } from '../pages';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home',
        },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About',
        },
    },
    {
        path: '/headless-ui-demo',
        name: 'HeadlessUIDemo',
        component: HeadlessUIDemo,
        meta: {
            title: 'Headless UI Demo',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'Page Not Found',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

router.beforeEach((to, _from, next) => {
    if (to.meta.title) {
        document.title = `${to.meta.title} - Vue Starter`;
    }
    next();
});

export default router;
