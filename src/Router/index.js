// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import sourceData from '@/data.json'

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
        props : route => ({ ...route.params, id : parseInt(route.params.id)}),
        beforeEnter(to, from){
            const exists = sourceData.concepts.find( concept => concept.id === parseInt(to.params.id));
            if(!exists) return {
                name : 'NotFound',
                params : { patchMatch : to.path.split('/').slice(1) },
                query : to.query,
                hash : to.hash,
            }
        }
    },
    // Recipe Details Page
    { 
        path: "/detail/:id/:slug", 
        name : 'recipe.details',
        component: ()=>import("@/views/RecipeDetail.vue"),
        props : route => ({...route.params, id : parseInt(route.params.id), slug : route.params.slug}),
        beforeEnter(to, from){
            const conceptExist = sourceData.concepts.find( concept => concept.id === parseInt(to.params.id));
            const recipeExist = conceptExist.recipes.find(recipe => recipe.slug === to.params.slug );
            if(conceptExist == undefined || recipeExist == undefined) return {
                name : 'NotFound',
            }
        }
    },
    // 404 Page
    { 
        path: "/:pathMatch(.*)*", 
        name: 'NotFound', 
        component: ()=>import("@/views/NotFound.vue") 
    },
    // All Recipes Page
    { 
        path: "/all-recipes", 
        component: ()=>import("@/views/AllRecipes.vue") 
    },
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