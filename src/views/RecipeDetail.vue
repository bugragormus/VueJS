<template>
    <!-- Recipe Header Start -->
    <div id="recipe-header"
        class="bg-image p-5 text-center shadow-1-strong mb-5 text-white"
        :style="`background-image: url(/public/images/${selectedRecipe.slug}.jpg); background-size:cover; background-position:center;`"
        >
        <div class="d-inline-flex">
            <h1 class="mb-3 jumbotext-bg rounded p-3" style="width: min-content;">{{ selectedRecipe.name }}</h1>
        </div>
        <p class="lead jumbotext-bg rounded p-1">
            {{ selectedRecipe.description }}
        </p>
    </div>
    <!-- Recipe Header End -->
    <!-- Recipe Details -->
    <div class="container-fluid">
        <h2>Ingredients</h2>
        <ul style="list-style-type: none;">
            <li v-for="ingredient in selectedRecipe.ingredients">{{ ingredient }}</li>
        </ul>
        <h4>Recipe</h4>
        <p>{{ selectedRecipe.recipe }}</p>
    </div>
    <!-- Recipe Details -->
</template>

<script>
    import sourceData from '@/data.json';
    export default {
        data() {
            
        },
        computed : {
            conceptId(){
                return parseInt(this.$route.params.id);
            },
            recipeSlug(){
                return this.$route.params.slug;
            },
            selectedConcept(){
                return sourceData.concepts.find( concept => concept.id === this.conceptId);
            },
            selectedRecipe(){
                return this.selectedConcept.recipes.find(recipe => recipe.slug == this.recipeSlug);
            }
        },
    }
</script>