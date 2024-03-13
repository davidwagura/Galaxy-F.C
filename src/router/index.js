import { createRouter, createWebHistory } from 'vue-router'
import ListPage from '../components/ListPage.vue'
import Addpage from '../components/AddPage.vue'


const routes = [
    { path: '/', component: ListPage },
    { path: '/add', component: Addpage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;