<template>
  <div>
    <div>
      <header id="header" class="header fixed-top" style="background-color: #00008B">
        <div class="branding">
          <div class="container-fluid">
            <nav class="main-nav navbar navbar-expand-lg">
              <div class="site-logo">
                <a class="scrollto" href="#"
                  ><img
                    class="logo-icon"
                    src="assets/images/logos/KIAC-1-400x350.png"
                    alt="kiac-logo"
                /></a>
              </div>

              <div class="navbar-btn order-lg-2">
                <a
                  class="btn btn-secondary" style="background-color: #FF8C00"
                  href="#modal-speaker-2"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-2"
                  >Register</a
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
                <!--//nav-->
              </div>
              <!--//navabr-collapse-->
            </nav>
            <!--//main-nav-->
          </div>
          <!--//container-->
        </div>
        <!--//branding-->
      </header>
      <!--//header-->

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
            <h1 class="hero-heading mb-2" style="color: #FF8C00">KIAC 10 Anniversary 2022</h1>
            <div class="hero-meta mb-3">
              <i class="far fa-calendar-alt me-2"></i>29 - 30 Sept
              <i class="fas fa-map-marker-alt mx-2"></i>Kigali City, Rwanda
            </div>
            <div class="hero-intro mb-4">
              2022 marks the 10th Anniversary of the Kigali International Arbitration Center (KIAC)
            </div>
            <div class="hero-cta">
              <a
                class="btn btn-primary btn-lg" style="background-color: #FF8C00"
                href="#modal-speaker-2"
                data-bs-toggle="modal"
                data-bs-target="#modal-speaker-2"
                >Register</a
              >
            </div>
          </div>
          <!--//hero-text-block-->
        </div>
        <!--//container-->
      </div>
      <!--//hero-block-->

      <div class="stats-block theme-bg-primary text-white py-4 text-center" style="background-color: #00008B">
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-3">
              <div class="item">
                <div class="number">2000+</div>
                <div class="unit">Attendees</div>
              </div>
              <!--//item-->
            </div>
            <!--//col-->
            <div class="col-6 col-md-3">
              <div class="item">
                <div class="number">3</div>
                <div class="unit">Days</div>
              </div>
              <!--//item-->
            </div>
            <!--//col-->
            <div class="col-6 col-md-3">
              <div class="item">
                <div class="number">60+</div>
                <div class="unit">Talks</div>
              </div>
              <!--//item-->
            </div>
            <!--//col-->
            <div class="col-6 col-md-3">
              <div class="item">
                <div class="number">10+</div>
                <div class="unit">Workshops</div>
              </div>
              <!--//item-->
            </div>
            <!--//col-->
          </div>
        </div>
        <!--//container-->
      </div>
      <!--//stats-block-->

      <About />

      <!--//about-section-->

      <Speakers />
      <!--//speakers-section-->

      <div class="container">
        <hr />
      </div>

      <Schedule />
      <!--//schedule-section-->

      <Ticket />
      <!--//tickets-section-->

      <Venue />
      <!--//venue-section-->

      <Sponsor />
      <!--//sponsors-section-->

      <Footer />
      <!--//Footer-->

      <div
        class="modal modal-speaker modal-speaker-2"
        id="modal-speaker-2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="speaker-1-ModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s">
    					<form action="#" method="post">
    						<label>NAME</label>
    						<input name="fullname" type="text" class="form-control" id="fullname">
   						  	
                            <label>EMAIL</label>
    						<input name="email" type="email" class="form-control" id="email">
   						  	
                            <label>MESSAGE</label>
    						<textarea name="message" rows="4" class="form-control" id="message"></textarea>
    						
                            <input type="submit" class="form-control">
    					</form>
    				</div>
            <!--//modal-body-->
          </div>
          <!--//modal-content-->
        </div>
        <!--//modal-dialog-->
      </div>
      <!--//modal-->
    </div>
    <router-view />
  </div>
</template>

<script>
import About from './components/About.vue'
import Speakers from './components/Speakers.vue'
import Schedule from './components/Schedule.vue'
import Venue from './components/Venue.vue'
import Sponsor from './components/Sponsor.vue'
import Ticket from './components/Ticket.vue'
import Footer from './components/Footer.vue'
export default {
  components:{
    About,
    Speakers,
    Schedule,
    Venue,
    Sponsor,
    Ticket,
    Footer
  }
}
</script>

<style>
.nav-link:hover {
  color: #FF8C00;
}
</style>
