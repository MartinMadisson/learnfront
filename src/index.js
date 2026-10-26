import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Todo from './pages/Todo.vue';
import Modals from './pages/Modals.vue';
import Important from './pages/Important.vue';

const routes = [
    { path: '/', name: 'Todo', component: Todo },
    { path: '/modals', name: 'Modals', component: Modals },
    { path: '/important', name: 'Important', component: Important },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
