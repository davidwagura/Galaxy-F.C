import Vue from 'vue';
import VueRouter from 'vue-router';
import ListPage from '../components/ListPage.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: ListPage },
    { path: '/add', component: Addpage },
];

const router = new VueRouter({
    routes,
});

export default router;