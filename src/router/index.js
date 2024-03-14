import { createRouter, createWebHistory } from 'vue-router'
import ListPage from '../components/ListPage.vue'
import Addpage from '../components/AddPage.vue'
import EditPage from '../components/EditPage.vue'
import DeletePage from '../components/DeletePage.vue'


const routes = [
    { path: '/', component: ListPage },
    { path: '/add', component: Addpage },
    { path: '/edit/:id', component: EditPage },
    { path: '/delete', component: DeletePage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;