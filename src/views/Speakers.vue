<template>
  <section id="speakers-section" class="speakers-section section">
    <div class="container" style="margin-top: 100px">
      <ComponentHeader />
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
    </div>
  </section>
</template>

<script>
import SpeakersCard from "../components/items/SpeakersCard.vue";
import ComponentHeader from "../components/ComponentHeader.vue";
export default {
  components: {
    SpeakersCard,
    ComponentHeader,
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
        {
          image: "assets/images/speakers/speaker-5.jpg",
          name: "Mr. Babatunde Ogunseitan",
          role: "International Arbitrator",
          location: "(UK)",
        },
        {
          image: "assets/images/speakers/speaker-6.jpg",
          name: "Mr. Thierry Ngoga",
          role: "Partner, Legal Line Partners",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-7.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-7.jpg",
          name: "His Lordship Dr. Faustin Ntezilyayo",
          role: "The Chief Justice of Rwanda",
          location: "(Chief Guest)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Dr. Emmanuel Ugirashebuja",
          role: "Minister of Justice & Attorney General",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Victor Mugabe",
          role: "Secretary General, KIAC",
          location: "(Rwanda)",
        },
      ],
    };
  },
};
</script>