<template>
  <section id="about-section" class="about-section section theme-bg-light">
    <div class="container">
      <h3 class="section-heading text-center mb-3">
        ABOUT KIGALI INTERNATIONAL ARBITRATION CENTER
      </h3>
      <div class="section-intro single-col-max mx-auto mb-4">
        <p>
          Rwanda continues to make considerable improvements to its business
          environment and investment climate and being the first greenest
          destination in Africa. Rwanda is the most reformed country in the
          world and the second best destination for doing business in Africa
          according to the World Bank's 'Ease of doing business report' (2020).
          With such conducive business environment, commercial disputes are
          inevitable.
        </p>
        <p>
          Kigali International Arbitration Centre (KIAC) was established in 2010
          as an independent body to provide infrastructure for quality services
          in arbitration and other ADR mechanisms. Launched officially in May
          2012, KIAC started in April 2013 to administer cases under its
          arbitration rules after continuous sensitization cam- paign in Rwanda
          and abroad on the use of arbitration and KIAC standards Arbitration
          clauses. The KIAC Arbitration Rules (2012) are a modern set of
          arbitration rules, which provisions are consistent with interna-
          tional best practices. Currently KIAC registered more than 200 cases.
        </p>
      </div>
    </div>
    <div class="container">
      <h3 class="section-heading text-center mb-3">
        About 10 Years Anniversary Of KIAC
      </h3>
      <div class="section-intro single-col-max mx-auto mb-4">
        <p>
          The year 2022 marks the 10th Anniversary of the Kigali International
          Arbitration Center (KIAC) This event is an opportunity to celebrate
          KIAC’s Arbitration cases out of which 40% are international cases with
          parties from Burundi, China, Ethiopia, Egypt, France, India, Italy,
          Kenya, Korea, Nigeria, Pakistan, South Africa, South Korea, Singapore,
          Rwanda, Spain, Switzerland, Tanzania, Turkey, Uganda, USA, Zambia
        </p>
        <p>
          The Anniversary will be celebrated by a conference where the
          international Arbitration community will gather in Kigali to discuss
          the hot topics shaping the future of international Arbitration in one
          of the major African Arbitral institutions. Furthermore, the event
          will be an opportunity to share the role of courts in support of
          Arbitration in Rwanda where none of KIAC Awards has never been set
          aside.
        </p>
      </div>
      <div class="event-countdown text-center mb-3">
        <h4 class="countdown-intro mb-2 text-center mb-3">Event Starts In:</h4>
        <div id="countdown-box" class="countdown-box"></div>
      </div>
      <div class="about-cta text-center mb-5">
        <router-link
          to="/register"
          class="btn btn-secondary btn-lg mb-5"
          style="background-color: #00008b"
          >Register Now</router-link
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