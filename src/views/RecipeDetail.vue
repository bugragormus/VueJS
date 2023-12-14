<template>
  <!-- Recipe Header Start -->
  <div id="recipe-header"
       class="bg-image p-5 text-center shadow-1-strong mb-5 text-white"
       :style="`background-image: url(/public/images/${selectedRecipe.slug}.jpg); background-size:cover; background-position:center;`"
  >
    <div class="d-inline-flex">
      <h2 class="mb-3 jumbotext-bg rounded p-3" style="text-transform: uppercase; font-weight: bolder;">
        {{selectedRecipe.name}}</h2>
    </div>
    <p class="lead jumbotext-bg rounded p-1">
      {{selectedRecipe.description}}
    </p>
  </div>
  <!-- Recipe Header End -->
  <!-- Recipe Details -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card border-info border-2">
          <div class="card-header fw-bold bg-info-subtle border-info border-2">
            Ingredients For {{selectedRecipe.name}}
          </div>
          <div class="card-body ml-3">
            <ul style="list-style-type: none; text-align: justify; margin-left: 25%;">
              <li v-for="ingredient in selectedRecipe.ingredients">{{ingredient}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card border-info border-2">
          <div class="card-header fw-bold bg-info-subtle border-info border-2">
            Recipe
          </div>
          <div class="card-body">
            <p style="text-align: justify">{{selectedRecipe.recipe}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Recipe Details -->
</template>

<script>
import sourceData from '@/data.json';

export default {
  props : {
    id : {
      type : Number,
      required : true,
    },
    slug : {
      type : String,
      required : true,
    }
  },
  computed: {
    selectedConcept() {
      return sourceData.concepts.find(concept => concept.id === this.id);
    },
    selectedRecipe() {
      return this.selectedConcept.recipes.find(recipe => recipe.slug === this.slug);
    }
  },
}
</script>