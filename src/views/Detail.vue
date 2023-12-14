<template>
  <!-- Concept Header Start -->
  <div
  class="bg-image p-5 text-center shadow-1-strong mb-5 text-white"
  :style="`background-image: url(/public/images/${selectedConcept.slug}.jpg); background-size:cover; background-position:center;`"
>
  <div class="d-inline-flex">
    <h1 class="mb-3 jumbotext-bg rounded p-3" style="text-transform: uppercase; font-weight: bolder;">{{ selectedConcept.concept }}</h1>
  </div>
  <p class="lead jumbotext-bg rounded p-1">
    {{ selectedConcept.description }}
  </p>
</div>
<!-- Concept Header End -->

<!-- Recipes Start -->

<div class="container">
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="(recipe,index) in selectedConcept.recipes" :key="index">
      <RouterLink :to="`/detail/${selectedConcept.id}/${recipe.slug}`">
        <div class="card">
          <img
              :src="`/public/images/${recipe.slug}.jpg`"
              class="card-img-top image-fluid"
              alt="..."
              style="object-fit: cover; max-height: 200px"
          />
          <div class="card-body">
            <h5 class="card-title ">{{ recipe.name }}</h5>
            <p class="card-text description">
                {{
                  recipe.description
                }}
              </p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</div>
<!-- Recipes End -->

</template>

<script>
  import sourceData from '@/data.json'
  export default {
    props : {
      id: {
        type : Number, //router icerisinde parseInt ettim bu nedenle type Number.
        required : true,
      }
    },
    computed : {
      //Artık aşağıdaki kkısma gerek yok props ekledik ve id parametresini props içerisinde aldık
      // conceptId(){
      //   return parseInt(this.$route.params.id);
      // },
      selectedConcept(){
        return sourceData.concepts.find( concept => concept.id === this.id);
      }
    },
    data(){
      return {
        
      }
    },
  };
</script>

<style>

  .jumbotext-bg {
    background-color: rgba(255, 255, 204, 0.8);
    color: darkmagenta;
  }

</style>
