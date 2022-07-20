<template>
  <section id="speakers-section" class="speakers-section section">
    <div class="container">
      <h3 class="section-heading text-center mb-3">Speakers</h3>
      <div class="section-intro text-center single-col-max mx-auto mb-5">
        List your featured speakers here. You can provide more info about each
        speaker in the relevant modal windows. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
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
          image:
            "assets/images/speakers/Hon.-Dr.-Emmanuel-UGIRASHEBUJA-350x350.png",
          name: "Hon Dr Emmanuel UGIRASHEBUJA",
          role: "Senior Software Developer",
          location: "Rwanda",
        },
        {
          image: "assets/images/speakers/Dr.-Faustin-NTEZILYAYO-350x350.png",
          name: "Dr Faustin NTEZILYAYO",
          role: "Developer Advocate",
          location: "Rwanda",
        },
        {
          image:
            "assets/images/speakers/Hon.-Dr.-Emmanuel-UGIRASHEBUJA-350x350.png",
          name: "Hon Dr Emmanuel UGIRASHEBUJA",
          role: "Senior Software Developer",
          location: "Rwanda",
        },
        {
          image: "assets/images/speakers/Dr.-Faustin-NTEZILYAYO-350x350.png",
          name: "Dr Faustin NTEZILYAYO",
          role: "Developer Advocate",
          location: "Rwanda",
        },
      ],
    };
  },
};
</script>