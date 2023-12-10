// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/detail", component: Detail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
