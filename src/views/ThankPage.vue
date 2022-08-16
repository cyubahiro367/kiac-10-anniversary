<template>
  <div id="hero-block" class="hero-block">
        <div
          id="hero-carousel"
          class="hero-carousel carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner" style=" ">
            <div class="carousel-item-1 carousel-item active"></div>
            <div class="carousel-item-2 carousel-item"></div>
            <div class="carousel-item-3 carousel-item"></div>
          </div>
        </div>
        <div class="hero-block-mask"></div>
        <div class="container">
          <div class="hero-text-block">
            <h1 class="hero-heading mb-2" style="color: #ff8c00">
              THANK YOU FOR REGISTERING 
            </h1>
            <div class="hero-cta">
              <router-link
                  to="/"
                  class="btn btn-secondary"
                  style="background-color: #ff8c00"
                  >Back to Home page</router-link
                >
            </div>
          </div>
        </div>
      </div>
</template>