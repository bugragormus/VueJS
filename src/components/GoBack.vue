<template>
  <div class="dropup position-absolute bottom-0 end-0 rounded-circle m-5">
    <button @click="$router.back()" type="button" class="btn btn-lg show-on-hover" aria-expanded="false"
            title="go to previous page">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward"
           viewBox="0 0 16 16">
        <path
            d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m7 1.133L1.696 8 7.5 11.367zm7.5 0L9.196 8 15 11.367z"/>
      </svg>
      Go Back
    </button>
  </div>
</template>

<style>
.show-on-hover {
  position: fixed;
  bottom: 25px;
  right: 50px;
  z-index: 5;
}

.btn {
  background-color: blueviolet;
  color: #f8f8f8;
}
</style>
<script setup>
</script>