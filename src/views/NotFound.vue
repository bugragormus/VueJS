<template>
  <div class="error-container">
    <div class="text-center">
      <img src="/public/images/404.png" alt="Error Image" class="error-image" />
    </div>
    <div class="error-content">
      <h1 class="error-title">Oops!</h1>
      <p class="error-message">We couldn't find the page you're looking for.</p>
      <p class="error-suggestion">Perhaps you'd like to go <router-link to="/">home</router-link>?</p>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.error-image {
  max-width: 100%;
  height: auto;
}

.error-content {
  text-align: center;
  margin-top: 20px;
}

.error-title {
  font-size: 2.5em;
  color: #d9534f; /* Bootstrap's danger color */
}

.error-message {
  font-size: 1.2em;
}

.error-suggestion {
  font-size: 1.2em;
  margin-top: 10px;
}
</style>
