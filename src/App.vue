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
                <!-- <router-link
                  to="/"
                  :class="{ 'mm-active': $route.path === '/' }"
                > -->
                <router-link to="/register" class="btn btn-secondary" style="background-color: #FF8C00" >Register</router-link>
                <!-- <a
                  class="btn btn-secondary" style="background-color: #FF8C00"
                  href="#modal-speaker-2"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-2"
                  >Register</a
                > -->
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

      <router-view />

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
    						<label>FIRST NAME</label>
    						<input name="firstName" type="text" class="form-control" id="fullname">
                <label>LAST NAME</label>
    						<input name="lastName" type="text" class="form-control" id="fullname">
                <label>EMAIL</label>
    						<input name="email" type="email" class="form-control" id="email">
                <label>ORGANISATION</label>
    						<input name="organisation" type="text" class="form-control" id="fullname">
                <label>JOB TITLE</label>
    						<input name="jobTitle" type="text" class="form-control" id="fullname">
                <label>COMPANY ADDRESS</label>
    						<input name="companyAddress" type="text" class="form-control" id="fullname">
                <label>NAME</label>
    						<input name="phoneNumber" type="text" class="form-control" id="fullname">
                <label>NAME</label>
    						<input name="country" type="text" class="form-control" id="fullname">
    						
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
    
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  components:{
    Footer
  }
}
</script>

<style>
.nav-link:hover {
  color: #FF8C00;
}
</style>
