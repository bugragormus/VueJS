<template>
  <div
  class="bg-image p-5 text-center shadow-1-strong mb-5 text-white"
  :style="`background-image: url(/public/images/${selectedConcept.slug}.jpg); background-size:cover; background-position:center;`"
>
  <div class="d-inline-flex">
    <h1 class="mb-3 jumbotext-bg rounded p-3" style="width: min-content;">{{ selectedConcept.concept }}</h1>
  </div>
  <p class="lead jumbotext-bg rounded p-1">
    {{ selectedConcept.description }}
  </p>
</div>













</template>

<script>
  import sourceData from '@/data.json'
  export default {
    computed : {
      conceptId(){
        return parseInt(this.$route.params.id);
      },
      selectedConcept(){
        return sourceData.concepts.find( concept => concept.id === this.conceptId);
      }
    },
    data(){
      return {
        
      }
    }
  };
</script>

<style>

  .jumbotext-bg {
    background-color: rgba(0, 255, 255, 0.811);
    color: black;
    text-decoration: black;
  }

</style>
