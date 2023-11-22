import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home/Home.vue"

export const routers = createRouter({
    routes: [{
        'name': "Home",
        'path': "/",
        'component': Home
    }],

    history: createWebHistory()
})