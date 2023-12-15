<template>
    <h1 class="text-center mb-5 pt-5">All Recipes</h1>
      <div class="container">
        <div class="row">
          <div v-for="recipe in allRecipes" class="col-md-4">
            <router-link :to="`/detail/${recipe.conceptId}/${recipe.recipe.slug}`">
              <div class="card mb-4">
                <img :src="`/public/images/${recipe.recipe.slug}.jpg`" class="card-img-top" alt="Recipe Image" />
                <div class="card-body">
                  <h5 class="card-title">{{ recipe.recipe.name }}</h5>
                  <p class="card-text">{{ recipe.recipe.description }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import sourceData from '@/data.json';
  
  export default {
    computed: {
      allRecipes() {
        let recipesAll = [];
        sourceData.concepts.forEach(concept => {
          concept.recipes.forEach(recipe => {
            recipesAll.push({
              conceptId: concept.id,
              recipe: recipe,
            });
          });
        });
        return recipesAll;
      },
    },
  };
  </script>
  