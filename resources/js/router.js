import {createWebHashHistory, createRouter} from "vue-router";
import Register from './components/Authentication/Register.vue';
import Login from './components/Authentication/Login.vue';
import Home from './components/Home.vue';
import User from './components/User.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/signup',
        name: 'Register',
        component: Register,
    },
    {
        path: '/signin',
        name: 'Login',
        component: Login,
    },
    {
        path: '/user/:id',
        name: 'User',
        component: User,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
