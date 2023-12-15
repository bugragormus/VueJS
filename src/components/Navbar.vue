<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-warning fixed-top">
    <div class="container-fluid">
      <router-link
          class="navbar-brand text-black"
          to="/"
      >
        Culinary Canvas
      </router-link>

      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link text-black" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-black" to="/food-concepts">Food Concepts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-black" to="/all-recipes">All Recipes</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>