<template>
  <div id="app">
    <Navbar />
    <div class="pb-5">
      <router-view v-slot="{Component}">
        <transition name="fade" mode="ouit-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>
