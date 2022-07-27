<template>
  <div>
    <div>
      <header
        id="header"
        class="header fixed-top"
        style="background-color: #00008b"
      >
        <div class="branding">
          <div class="container-fluid">
            <nav class="main-nav navbar navbar-expand-lg">
              <div class="site-logo">
                <router-link
                  to="/"
                  class="scrollto"
                  style="background-color: #ff8c00"
                  ><img
                    class="logo-icon"
                    src="assets/images/logos/KIAC-1-400x350.png"
                    alt="kiac-logo"
                /></router-link
                >
                <!-- <a class="scrollto" href="#"
                  ><img
                    class="logo-icon"
                    src="assets/images/logos/KIAC-1-400x350.png"
                    alt="kiac-logo"
                /></a> -->
              </div>
              <div class="navbar-btn order-lg-2">
                <router-link
                  to="/register"
                  class="btn btn-secondary"
                  style="background-color: #ff8c00"
                  >Register</router-link
                >
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                id="navigation"
                class="navbar-collapse collapse justify-content-lg-end me-lg-3"
              >
                <ul class="nav navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link scrollto" href="#about-section">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link scrollto" href="#speakers-section"
                      >Speakers</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link scrollto" href="#schedule-section"
                      >Schedule</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link scrollto" href="#tickets-section"
                      >Tickets</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link scrollto" href="#venue-section">Venue</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link scrollto" href="#sponsors-section"
                      >Sponsors</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
.nav-link:hover {
  color: #ff8c00;
}
</style>
