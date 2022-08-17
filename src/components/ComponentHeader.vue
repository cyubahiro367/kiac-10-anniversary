<template>
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
                  to="/"
                  class="btn btn-secondary"
                  style="background-color: #ff8c00"
                  >Back to Home Page</router-link
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
              <marquee behavior="" direction="left"><h1 class="hero-heading mb-2" style="color: #ff8c00">
              KIAC 10 Anniversary 2022
            </h1></marquee>
                <ul class="nav navbar-nav">
                  <li class="nav-item">
                  </li>
                  <li class="nav-item">
                  </li>
                  <li class="nav-item">
                  </li>
                  <li class="nav-item">
                  </li>
                  <li class="nav-item">
                  </li>
                  <li class="nav-item">
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
</template>