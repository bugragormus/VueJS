<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
    <div class="carousel-indicators">
      <button v-for="concept in concepts"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              :class="parseInt(concept.id) === 1 ? 'active' : null"
              :arica-current="parseInt(concept.id) === 1 ? true : null"
              :data-bs-slide-to="concept.id-1"
              :aria-label="`Slide ${concept.id}`"></button>
    </div>
    <div class="carousel-inner" style="max-height: 600px; overflow: hidden;">
      <div v-for="concept in concepts" :class="parseInt(concept.id) === 1 ? 'carousel-item active' : 'carousel-item'">
        <RouterLink :to="`/detail/${concept.id}`">
          <img :src="`public/images/${concept.slug}.jpg`" alt="..." style="object-fit: cover"/>
          <div class="carousel-caption d-none d-md-block" :style="{ top: captionStyle }">
            <div class="d-inline-flex">
              <h5 class="jumbotext-bg rounded p-2" style="text-transform: uppercase; font-weight: bolder">{{concept.concept}}</h5>
            </div>
            <p class="jumbotext-bg rounded p-1">{{concept.description}}</p>
          </div>
        </RouterLink>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import {RouterLink} from 'vue-router';

export default {
  name: "Home",
  data() {
    return {
      captionStyle: "20px",
      captionBackground: 'rgba(0, 0, 0, 0.5)',
      concepts: sourceData.concepts,
    };
  },
  components: {RouterLink}
};
</script>

<style>
.jumbotext-bg {
  background-color: rgba(255, 255, 204, 0.8);
  color: darkmagenta;
}
</style>