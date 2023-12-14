// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/detail/:id", component: ()=>import("@/views/Detail.vue") },
    { path: "/food-concepts", component: ()=>import("@/views/FoodConcepts.vue") },
    { path: "/detail/:id/:slug", component: ()=>import("@/views/RecipeDetail.vue") },
    { path: "/:pathMatch(.*)*", name: 'NotFound', component: ()=>import("@/views/NotFound.vue") },
    //{ path: "/all-recipes", component: ()=>import("@/views/RecipeDetail.vue") },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(()=> resolve({ top: 0, behavior : 'smooth' }), 300)
        })
    }
});

export default router;