<template>
  <section id="schedule-section" class="schedule-section section">
    <div class="container">
      <h3 class="section-heading text-center mb-5">Schedule</h3>

      <ul class="schedule-nav nav nav-pills nav-fill" id="myTab" role="tablist">
        <li class="nav-item me-2">
          <a
            class="nav-link active"
            id="tab-1"
            data-bs-toggle="tab"
            href="#tab-1-content"
            role="tab"
            aria-controls="tab-1-content"
            aria-selected="true"
          >
            <span class="heading">Day 1</span>
            <span class="meta">(Thu 29, Sept)</span>
          </a>
        </li>
        <li class="nav-item me-2">
          <a
            class="nav-link active"
            id="tab-2"
            data-bs-toggle="tab"
            href="#tab-2-content"
            role="tab"
            aria-controls="tab-2-content"
            aria-selected="true"
          >
            <span class="heading">Day 2</span>
            <span class="meta">(Thu 29, Sept)</span>
          </a>
        </li>
        <li class="nav-item me-2">
          <a
            class="nav-link"
            id="tab-2"
            data-bs-toggle="tab"
            href="#tab-2-content"
            role="tab"
            aria-controls="tab-2-content"
            aria-selected="false"
          >
            <span class="heading">Day 3</span>
            <span class="meta">(Fri 30, Sept)</span>
          </a>
        </li>
      </ul>

      <div class="schedule-tab-content tab-content">
        <div
          class="tab-pane active"
          id="tab-1-content"
          role="tabpanel"
          aria-labelledby="tab-1"
        >
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">9:00 - 9:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-1.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >James Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">
                Best Practices And Tips For A Clean Angular Application
              </h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room A
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">9:30 - 10:00</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-2.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Sarah Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Developer Productivity</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room A
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">10:00 - 10:30</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Coffee Break</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Room A5
              </div>
              <div class="desc">
                Coffee and cakes lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">10:30 - 11:00</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-3.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Tim Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Progressive Web Apps with React.js</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room A
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">11:00 - 12:00</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-4.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Josh Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room B
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">12:00 - 13:30</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Lunch Break</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Room B6
              </div>
              <div class="desc">
                Buffet lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">13:30 - 14:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-5.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Ling Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">14:30 - 15:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-6.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Andy Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">15:30 - 16:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-7.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Alice Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">16:30 - 17:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-8.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Thomas Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">18:00 - 24:00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Dinner &amp; After-party</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Bar Lorem Ipsum
              </div>
              <div class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a
                eleifend lacinia. Phasellus dignissim augue at consectetur
                ullamcorper.
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane no-timeline"
          id="tab-2-content"
          role="tabpanel"
          aria-labelledby="tab-2"
        >
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">8:00 - 9:00</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-1.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >James Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Participants Registration</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room A
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">9:00 - 9:45</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-2.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Sarah Doe</a
                  >
                </div>
              </div>
              <!--//profile-->
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Opening Plenary Session</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room A
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">9:45 - 11:00</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Coffee Break</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Room A5
              </div>
              <div class="desc">Session ONE</div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">10:30 - 11:00</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-3.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Tim Doe</a
                  >
                </div>
              </div>
              <!--//profile-->
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Progressive Web Apps with React.js</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room A
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">11:00 - 12:00</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-4.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Josh Doe</a
                  >
                </div>
              </div>
              <!--//profile-->
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room B
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">12:00 - 13:30</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Lunch Break</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Room B6
              </div>
              <div class="desc">
                Buffet lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">13:30 - 14:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-5.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Ling Doe</a
                  >
                </div>
              </div>
              <!--//profile-->
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">14:30 - 15:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-6.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Andy Doe</a
                  >
                </div>
              </div>
              <!--//profile-->
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">15:30 - 16:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-7.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Alice Doe</a
                  >
                </div>
              </div>
              <!--//profile-->
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">16:30 - 17:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-8.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Thomas Doe</a
                  >
                </div>
              </div>
              <!--//profile-->
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
            <!--//content-->
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">18:00 - 24:00</h4>
            </div>
            <!--//meta-->
            <div class="content">
              <h3 class="title mb-3">Dinner &amp; After-party</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Bar Lorem Ipsum
              </div>
              <div class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a
                eleifend lacinia. Phasellus dignissim augue at consectetur
                ullamcorper.
              </div>
            </div>
            <!--//content-->
          </div>
        </div>
        <div
          class="tab-pane active"
          id="tab-1-content"
          role="tabpanel"
          aria-labelledby="tab-1"
        >
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">9:00 - 9:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-1.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >James Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">
                Best Practices And Tips For A Clean Angular Application
              </h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room A
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">9:30 - 10:00</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-2.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Sarah Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Developer Productivity</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room A
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">10:00 - 10:30</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Coffee Break</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Room A5
              </div>
              <div class="desc">
                Coffee and cakes lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">10:30 - 11:00</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-3.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Tim Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Progressive Web Apps with React.js</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room A
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">11:00 - 12:00</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-4.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Josh Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room B
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">12:00 - 13:30</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Lunch Break</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Room B6
              </div>
              <div class="desc">
                Buffet lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">13:30 - 14:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-5.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Ling Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">14:30 - 15:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-6.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Andy Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">15:30 - 16:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-7.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Alice Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-talk">
            <div class="meta">
              <h4 class="time mb-3">16:30 - 17:30</h4>
              <div class="profile">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    class="profile-image rounded-circle mb-2"
                    src="assets/images/speakers/speaker-8.jpg"
                    alt=""
                /></a>
                <div class="name">
                  <a
                    class="theme-link"
                    href="#modal-speaker-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1"
                    >Thomas Doe</a
                  >
                </div>
              </div>
            </div>
            <div class="content">
              <h3 class="title mb-3">Talk Title Lorem Ipsum</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Conference Room C
              </div>
              <div class="desc">
                Talk's summary goes here.
                <strong
                  >You can hook up the speaker profile image/name on the left
                  with his or her bio modal window</strong
                >. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce quis ornare nibh, pulvinar posuere justo. Aenean laoreet
                nunc a eleifend lacinia. Phasellus dignissim augue at
                consectetur ullamcorper.
              </div>
            </div>
          </div>
          <div class="item item-other">
            <div class="meta">
              <h4 class="time mb-3">18:00 - 24:00</h4>
            </div>
            <div class="content">
              <h3 class="title mb-3">Dinner &amp; After-party</h3>
              <div class="location mb-3">
                <i class="fas fa-map-marker-alt me-2"></i>Bar Lorem Ipsum
              </div>
              <div class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                quis ornare nibh, pulvinar posuere justo. Aenean laoreet nunc a
                eleifend lacinia. Phasellus dignissim augue at consectetur
                ullamcorper.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>