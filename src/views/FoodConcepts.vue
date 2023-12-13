<template>
  <div class="container">
    <h1 class="py-5"> <u>Food Concepts</u></h1>
    <div class="row row-cols-1 row-cols-md-2 g-4">

      <div class="col" v-for="concept in concepts" :key="concept.id">

        <RouterLink :to="`/detail/${concept.id}`">
          <div class="card border-success border-2" style="width: 600px; max-height: 600px;">
            <img
                :src="`/public/images/${concept.slug}.jpg`"
                class="card-img-top image-fluid"
                alt="..."
                style="object-fit: cover; max-height: 170px"
            />
            <div class="card-body">
              <h5 class="card-title ">{{ concept.concept }}</h5>
              <p class="card-text description">
                  {{
                    concept.description
                  }}
                </p>
            </div>
          </div>
        </RouterLink>

      </div>

    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import { RouterLink } from 'vue-router';
export default {
    name: "Concept",
    data() {
        return {
            concepts: sourceData.concepts,
        };
    },
    components: { RouterLink }
};
</script>

<style scoped>
.card {
  max-width: 100%;
}

.description{
  display: none;
}

.card:hover .description{
  display: block;
}

.card-img-top {
  width: 100%;
  height: auto;
}
</style>