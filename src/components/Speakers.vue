<template>
  <section id="speakers-section" class="speakers-section section">
    <div class="container">
      <h3 class="section-heading text-center mb-3">Speakers</h3>
      <div class="section-intro text-center single-col-max mx-auto mb-5">
        Speakers will include eminent international arbitration practitioners & scholars from
        across the globe (for more details about speakers visit our website www.kiac.org.rw).
        Some Confirmed speakers include:
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
          name: "Prof. Mohamed Abdel Wahab",
          location: "(Egypt)",
        },
        {
          image: "assets/images/speakers/Dr.-Faustin-NTEZILYAYO-350x350.png",
          name: "Prof. Emilia Onyema",
          location: "(SOAS/UK)",
        },
        {
          image:
            "assets/images/speakers/Hon.-Dr.-Emmanuel-UGIRASHEBUJA-350x350.png",
          name: "Hon. Isaiah Bosio",
          location: "(Nigeria)",
        },
        {
          image: "assets/images/speakers/Dr.-Faustin-NTEZILYAYO-350x350.png",
          name: "Mr. Thomas Kendra",
          location: "(France)",
        },
        {
          image: "assets/images/speakers/Dr.-Faustin-NTEZILYAYO-350x350.png",
          name: "Mr. Babatunde Ogunseitan",
          location: "(UK)",
        },
        {
          image:
            "assets/images/speakers/Hon.-Dr.-Emmanuel-UGIRASHEBUJA-350x350.png",
          name: "Mr. Thierry Ngoga",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/Dr.-Faustin-NTEZILYAYO-350x350.png",
          name: "Mr. Victor Mugabe",
          location: "(Rwanda)",
        },
      ],
    };
  },
};
</script>