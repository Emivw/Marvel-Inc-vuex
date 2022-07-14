import { createStore } from 'vuex'

export default createStore({
    state: {
        products: null,
        product: null,
        users: null,
    },
    getters: {},
    mutations: {
        setUsers: (state, users) => {
            state.users = users;
        },
        setProducts: (state, products) => {
            state.products = products;
        },
        setProduct: (state, product) => {
            state.product = product;
        }
    },
    actions: {
        getProducts: async(context) => {
            fetch(`http://localhost:3000/products`)
                .then((res) => res.json())
                .then((products) => context.commit("setProducts", products))
        },
        getProduct: async(context, id) => {
            fetch(`http://localhost:3000/products/${id}`)
                .then((res) => res.json())
                .then((product) => context.commit("setProduct", product))
        },
        getUser: async(context, id) => {
            fetch(`http://localhost:3000/users/${id}`)
                .then((res) => res.json())
                .then((users) => context.commit("setUsers", users))
        },

        login: async(context, payload) => {
            const { email, password } = payload;

            const response = await fetch(
                `http://localhost:3000/users?email=${email}&password=${password}`
            );
            const userData = await response.json();
            context.commit("setUsers", userData[0]);
        },
        register: async(context, payload) => {
            const { firstname, lastname, email, password } = payload;
            fetch("http://localhost:3000/users", {
                    method: "POST",
                    body: JSON.stringify({
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        password: password
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                .then((response) => response.json())
                .then((json) => context.commit("setUsers", json))
                .then(console.log("user created"))
        }
    },
    modules: {}
})