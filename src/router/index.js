import { createRouter, createWebHistory } from 'vue-router'
import ListPage from '../components/ListPage.vue'
import Addpage from '../components/AddPage.vue'
import EditPage from '../components/EditPage.vue'


const routes = [
    { path: '/', component: ListPage },
    { path: '/add', component: Addpage },
    { path: '/edit', component: EditPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;