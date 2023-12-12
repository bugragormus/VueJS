// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/detail/:id", component: ()=>import("@/views/Detail.vue") },
    { path: "/food-concepts", component: ()=>import("@/views/FoodConcepts.vue") },
    //{ path: "/detail/:id/:slug", component: ()=>import("@/views/RecipeDetail.vue") },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
