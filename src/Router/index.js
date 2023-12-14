// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
    // Home Page
    { path: "/", 
        component: Home,
        name: 'Home',
    },
    // Concepts Page
    { 
        path: "/food-concepts",
        name : 'Concepts', 
        component: ()=>import("@/views/FoodConcepts.vue"),
    },
    // Concept Details Page
    { 
        path: "/detail/:id",
        name : 'concept.detail', 
        component: ()=>import("@/views/Detail.vue"),
        props : route => ({id : parseInt(route.params.id)}),
    },
    // Recipe Details Page
    { 
        path: "/detail/:id/:slug", 
        name : 'recipe.details',
        component: ()=>import("@/views/RecipeDetail.vue"),
        //props : true,
    },
    // 404 Page
    { 
        path: "/:pathMatch(.*)*", 
        name: 'NotFound', 
        component: ()=>import("@/views/NotFound.vue") 
    },
    // All Recipes Page
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