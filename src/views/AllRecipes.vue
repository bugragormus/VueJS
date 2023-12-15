<template>
  <h1 class="text-center mb-5 pt-5">All Recipes</h1>
  <div class="container">
    <div class="row m-2">
      <div class="row row-cols-1 row-cols-md-2 g-4 m-5">
        <div v-for="recipe in allRecipes" class="card mb-3" style="max-width: 540px;">
          <router-link class="router" :to="`/detail/${recipe.conceptId}/${recipe.recipe.slug}`">
            <div class="row g-5">
              <div class="col-md-4">
                <img :src="`/public/images/${recipe.recipe.slug}.jpg`" class="card-img-top" alt="Recipe Image"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{recipe.recipe.name}}</h5>
                  <p class="card-text">{{recipe.recipe.description}}</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
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

<style>
.router {
  text-decoration: none;
  color: #2c3e50;
}
</style>
  