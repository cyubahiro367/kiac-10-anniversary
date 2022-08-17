<template>
  <section id="speakers-section" class="speakers-section section">
    <div class="container">
      <h3 class="section-heading text-center mb-3">Speakers</h3>
      <div class="section-intro text-center single-col-max mx-auto mb-5">
        Speakers will include eminent international arbitration practitioners &
        scholars from across the globe (for more details about speakers visit
        our website www.kiac.org.rw). Some Confirmed speakers include:
      </div>
      <div class="row">
        <SpeakersCard
          v-for="(speaker, key) in speakers"
          :key="key"
          :image="speaker.image"
          :name="speaker.name"
          :role="speaker.role"
          :location="speaker.location"
        />
      </div>
      <div class="sponsors-cta text-center pt-5">
        <router-link to="/speaker" class="btn-primary btn btn-lg"
          >See More Speakers</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import SpeakersCard from "./items/SpeakersCard.vue";
export default {
  components: {
    SpeakersCard,
  },
  data() {
    return {
      speakers: [
        {
          image: "assets/images/speakers/speaker-1.jpg",
          name: "Prof. Mohamed Abdel Wahab",
          role: "Keynote Speaker",
          location: "(Egypt)",
        },
        {
          image: "assets/images/speakers/speaker-2.jpg",
          name: "Prof. Emilia Onyema",
          role: "SOAS-University of London",
          location: "(SOAS/UK)",
        },
        {
          image: "assets/images/speakers/Isaiah Bozimo.jpg",
          name: "Hon. Isaiah Bosio",
          role: "Attorney General & Commissioner for Justice",
          location: "(Delta State/Nigeria)",
        },
        {
          image: "assets/images/speakers/speaker-4.jpg",
          name: "Mr. Thomas Kendra",
          role: "Partner, Hogan Lovells",
          location: "(paris-France)",
        },
      ],
    };
  },
};
</script>