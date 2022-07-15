import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',

        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',

        component: () =>
            import ('../views/Contact.vue')
    },
    {
        path: '/products',
        name: 'products',

        component: () =>
            import ('../views/Products.vue')
    },
    {
        path: '/products/:id',
        name: 'product',

        component: () =>
            import ('../views/Product.vue'),
            props: true
    },
    {
        path: '/admin',
        name: 'admin',

        component: () =>
            import ('../views/Admin.vue')
    },
    {
        path: '/login',
        name: 'login',

        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',

        component: () =>
            import ('../views/Register.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router