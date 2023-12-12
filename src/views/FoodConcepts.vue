<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="concept in concepts" :key="concept.id">
        <div class="card" style="width: 600px; max-height: 600px;">
          <img
              :src="`/public/images/${concept.slug}.jpg`"
              class="card-img-top"
              alt="..."
              style="object-fit: cover;"
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
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  name: "Concept",
  data() {
    return {
      concepts : sourceData.concepts,
    }
  },
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
