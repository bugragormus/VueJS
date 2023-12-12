<template>
  <!-- SİLİNECEK ALT SATIR -->
  <!-- <img v-for="concept in concepts" :src="`/public/images/${concept.slug}.jpg`" style="max-height: 600px; overflow: hidden;"  /> -->

  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button v-for="concept in concepts" type="button" data-bs-target="#carouselExampleCaptions" :class="parseInt(concept.id) == 1 ? 'active' : null" :arica-current="parseInt(concept.id) == 1 ? true : null" :data-bs-slide-to="concept.id-1"  :aria-label="`Slide ${concept.id}`"></button>
    </div>
    <div class="carousel-inner" style="max-height: 600px; overflow: hidden;">
      <div v-for="concept in concepts" :class="parseInt(concept.id) == 1 ? 'carousel-item active' : 'carousel-item'">
        <img :src="`public/images/${concept.slug}.jpg`" style="object-fit: fill; height: 600px;"/>
        <div class="carousel-caption d-none d-md-block" :style="{ top: captionStyle }">
          <h5 :style="{backgroundColor: captionBackground}">{{concept.concept}}</h5>
          <p :style="{backgroundColor: captionBackground}">{{ concept.description }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  name: "Home",
  data() {
    return {
      captionStyle: "20px",
      captionBackground: 'rgba(0, 0, 0, 0.5)',
      concepts : sourceData.concepts,
    };
  },
  computed : {
    setCarouselClass(i){
      return parseInt(i) == 0 ? 'active' : ''; 
    }
  }
};
</script>