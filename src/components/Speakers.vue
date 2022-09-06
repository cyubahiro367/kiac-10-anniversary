<template>
  <section id="speakers-section" class="speakers-section section">
    <div class="container">
      <h3 class="section-heading text-center mb-3">Speakers</h3>
      <div class="section-intro text-center single-col-max mx-auto mb-5">
        Speakers will include eminent international arbitration practitioners &
        scholars from across the globe (for more details about speakers visit
        our website <a href="https://www.kiac.org.rw"> www.kiac.org.rw</a> ). Some Confirmed speakers include:
      </div>
      <div class="row">
        <SpeakersCard
          v-for="(speaker, key) in speakers"
          :key="key"
          :image="speaker.image"
          :name="speaker.name"
          :role="speaker.role"
          :location="speaker.location"
          :dataTarget="speaker.dataTarget"
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
          image: "assets/images/speakers/Dr.-Faustin-NTEZILYAYO-350x350.png",
          name: "His Lordship Dr. Faustin Ntezilyayo",
          role: "The Chief Justice of Rwanda",
          location: "(Chief Guest)",
          dataTarget: "#modal-speaker-1",
        },
        {
          image: "assets/images/speakers/Hon.-Dr.-Emmanuel-UGIRASHEBUJA-350x350.png",
          name: "Dr. Emmanuel Ugirashebuja",
          role: "Minister of Justice & Attorney General",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-2",
        },
        {
          image: "assets/images/speakers/speaker-7.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-8",
        },
        {
          image: "assets/images/speakers/speaker-1.jpg",
          name: "Prof. Mohamed Abdel Wahab",
          role: "Keynote Speaker",
          location: "(Egypt)",
          dataTarget: "#modal-speaker-3",
        }
      ],
    };
  },
};
</script>