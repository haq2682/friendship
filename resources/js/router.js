import {createWebHashHistory, createRouter} from "vue-router";
import axios from 'axios';
import Register from './components/Authentication/Register.vue';
import Login from './components/Authentication/Login.vue';
import Home from './components/Home.vue';
import User from './components/User.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter(to, from, next) {
            axios.get('api/user')
                .then(()=> {
                    next();
                })
                .catch(()=> {
                    return next({name: 'Login'});
                });
        }
    },
    {
        path: '/signup',
        name: 'Register',
        component: Register,
        beforeEnter(to, from, next) {
            axios.get('api/user')
                .then(()=> {
                    return next({name: 'Home'});
                })
                .catch(()=> {
                    next();
                })
        }
    },
    {
        path: '/signin',
        name: 'Login',
        component: Login,
        beforeEnter(to, from, next) {
            axios.get('api/user')
                .then(()=> {
                    return next({name: 'Home'});
                })
                .catch(()=> {
                    next();
                });
        }
    },
    {
        path: '/user/:id',
        name: 'User',
        component: User,
        beforeEnter(to, from, next) {
            axios.get('api/user')
                .then(() => {
                    next();
                })
                .catch(()=> {
                    return next({name: 'Login'})
                })
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
