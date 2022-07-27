<template>
  <section id="about-section" class="about-section section theme-bg-light">
    <div class="container">
      <h3 class="section-heading text-center mb-3">
        About 10 Years Anniversary Of KIAC
      </h3>
      <div class="section-intro single-col-max mx-auto mb-4">
        <p>
          2022 marks the 10th Anniversary of the Kigali International
          Arbitration Center (KIAC) This event is an opportunity to celebrate
          KIAC's Arbitration cases out of which 40% are international cases with
          parties from Burundi, China, Ethiopia, Egypt, France, India, Italy,
          Kenya, Korea, Nigeria, Pakistan, South Africa, South Korea, Singapore,
          Rwanda, Spain, Switzerland, Tanzania, Turkey, Uganda, USA, Zambia
        </p>
        <p>
          The Anniversary will be celebrated by a conference where the
          international Arbitration community will gather in kigali to discuss
          the hot topics shaping the future of international Arbitration in one
          of the major African Arbitral institutions. Funthermore, the event
          will be an opportunity to share the role of courts in support of
          Arbitration in Rwanda where none of KIAC Awards has never been set
          aside.
        </p>
      </div>
      <div class="benefits-list text-center mb-3">
        <h4 class="text-center mb-4">Topics include:</h4>
        <ul class="list-unstyled text-start d-inline-block">
          <li>
            <i class="fas fa-check-circle me-2" style="color: #00008b"></i>Disclosure in international
            Arbitration: Current trends
          </li>
          <li>
            <i class="fas fa-check-circle me-2" style="color: #00008b"></i>Joinder and Multiparty
            Arbitration: Comparative perspectives
          </li>
          <li>
            <i class="fas fa-check-circle me-2" style="color: #00008b"></i>The Revised 2020 IBA Rules
            of Evidence in international Arbitration and its commentary
          </li>
          <li>
            <i class="fas fa-check-circle me-2" style="color: #00008b"></i>The virtual hearing
            Protocols: What Practitioners need to know
          </li>
          <li>
            <i class="fas fa-check-circle me-2" style="color: #00008b"></i>Analysis of what need to be
            amended in the Rwanda Arbitration act 2018
          </li>
          <li>
            <i class="fas fa-check-circle me-2" style="color: #00008b"></i>The Dispute Resolution
            options under Africa Continental Free Trade Agreement (AFCTA)
          </li>
        </ul>
      </div>
      <div class="event-countdown text-center mb-3">
        <h4 class="countdown-intro mb-2 text-center mb-3">Event Starts In:</h4>
        <div id="countdown-box" class="countdown-box"></div>
      </div>
      <div class="about-cta text-center mb-5">
        <a
          class="btn btn-secondary btn-lg mb-5"
          style="background-color: #00008b"
          href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devconf-free-bootstrap-4-conference-template-for-tech-conferences-and-events/"
          target="_blank"
          >Get Your Ticket Today</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    };
  },
  mounted() {
    this.count();
  },
  methods: {
    count() {
      // set the date we're counting down to
      var target_date = new Date("Sept 29, 2022").getTime();

      // variables for time units
      var days, hours, minutes, seconds;

      // get tag element
      var countdown = document.getElementById("countdown-box");
      var days_span = document.createElement("SPAN");
      days_span.className = "days";
      countdown.appendChild(days_span);
      var hours_span = document.createElement("SPAN");
      hours_span.className = "hours";
      countdown.appendChild(hours_span);
      var minutes_span = document.createElement("SPAN");
      minutes_span.className = "minutes";
      countdown.appendChild(minutes_span);
      var secs_span = document.createElement("SPAN");
      secs_span.className = "secs";
      countdown.appendChild(secs_span);

      // update the tag with id "countdown" every 1 second
      setInterval(function () {
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // format countdown string + set tag value.
        days_span.innerHTML =
          '<span class="number">' +
          days +
          "</span>" +
          '<span class="unit">Days</span>';
        hours_span.innerHTML =
          '<span class="number">' +
          hours +
          "</span>" +
          '<span class="unit">Hrs</span>';
        minutes_span.innerHTML =
          '<span class="number">' +
          minutes +
          "</span>" +
          '<span class="unit">Mins</span>';
        secs_span.innerHTML =
          '<span class="number">' +
          seconds +
          "</span>" +
          '<span class="unit">Secs</span>';
      }, 1000);
    },
  },
};
</script>