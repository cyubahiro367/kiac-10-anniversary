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
          name: "Hon. Isaiah Bosimo",
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
          image: "assets/images/speakers/speaker-19.jpg",
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
          name: "Mr. Moise Nkundabarashi",
          role: "President-Rwanda Bar Association",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Faustin K. Mbundu",
          role: "Chairman-BoD, MTN Rwanda",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Dr. Ismail Selim",
          role: "Director of CRCICA",
          location: "(Egypt)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Christophe Adebayo Ojo",
          role: "SAN, International Arbitrator",
          location: "(Nigeria)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Prof. Datuk Sundra Rajoo",
          role: "President of Council-AIADR",
          location: "(Malaysia)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Ms. Aissatou Diop,",
          role: "Legal Counsel-ICSID",
          location: "(Washington DC-USA)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Ms. Nakasamba Banda Chanda",
          role: "Partner, A.M. Wood & Co.",
          location: "(Zambia)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Ms. Olusola Adegbonmire",
          role: "Senior Managing Partner, Sola Ajijola & Co",
          location: "(Nigeria)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Dr. Jimmy Koddo",
          role: "International Arbitrator",
          location: "(Benin)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Julien Kavaruganda",
          role: "Senior Partner, KS & P",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Ms. Elodie Dulac",
          role: "Partner, King & Spalding",
          location: "(Singapore)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Prof. Ike Ehiribe",
          role: "International Arbitrator",
          location: "(Nigeria & UK)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Dr. Achille Ngwanza",
          role: "Managing Partner, Jus Africa",
          location: "(Cameroon)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Steven Ruzibiza",
          role: "CEO-Private Sector Federation",
          location: "(Rwanda)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Tarik Mossadek",
          role: "Advocate-Mossadek Law Firm & Partners",
          location: "(Morocco)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Lam Wai Loon",
          role: "Partner-Harold & Lam Partnership",
          location: "(Malaysia)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Abayomi Okubote",
          role: "Executive Director-Africa Arbitration Academy",
          location: "(Nigeria)",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Anish Wadia",
          role: "International Arbitrator",
          location: "(India)",
        },
      ],
    };
  },
};
</script>