<template>
  <div>
    <div>
      <div id="hero-block" class="hero-block">
        <div
          id="hero-carousel"
          class="hero-carousel carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item-1 carousel-item active"></div>
            <div class="carousel-item-2 carousel-item"></div>
            <div class="carousel-item-3 carousel-item"></div>
          </div>
        </div>
        <div class="hero-block-mask"></div>
        <div class="container">
          <div class="hero-text-block">
            <h1 class="hero-heading mb-2" style="color: #ff8c00">
              KIAC 10 Anniversary 2022
            </h1>
            <div class="hero-meta mb-3">
              <i class="far fa-calendar-alt me-2"></i>29 - 30 Sept
              <i class="fas fa-map-marker-alt mx-2"></i>Kigali City, Rwanda
            </div>
            <div class="hero-intro mb-4">
              2022 marks the 10th Anniversary of the Kigali International
              Arbitration Center (KIAC)
            </div>
            <div class="hero-cta">
              <router-link
                  to="/register"
                  class="btn btn-secondary"
                  style="background-color: #ff8c00"
                  >Register</router-link
                >
            </div>
          </div>
        </div>
      </div>

      <div
        class="stats-block theme-bg-primary text-white py-4 text-center"
        style="background-color: #00008b"
      >
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-3">
              <div class="item">
                <div class="number">2000+</div>
                <div class="unit">Attendees</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="item">
                <div class="number">3</div>
                <div class="unit">Days</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="item">
                <div class="number">60+</div>
                <div class="unit">Talks</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="item">
                <div class="number">10+</div>
                <div class="unit">Workshops</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />

      <Speakers />

      <div class="container">
        <hr />
      </div>

      <Schedule />

      <Ticket />

      <Venue />

      <Sponsor />
    </div>
  </div>
</template>

<script>
import About from "../components/About.vue";
import Speakers from "../components/Speakers.vue";
import Schedule from "../components/Schedule.vue";
import Venue from "../components/Venue.vue";
import Sponsor from "../components/Sponsor.vue";
import Ticket from "../components/Ticket.vue";
export default {
  components: {
    About,
    Speakers,
    Schedule,
    Venue,
    Sponsor,
    Ticket,
  },
};
</script>

<style>
.nav-link:hover {
  color: #ff8c00;
}
</style>
