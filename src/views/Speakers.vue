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
          :dataTarget="speaker.dataTarget"
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
        },
        {
          image: "assets/images/speakers/speaker-2.jpg",
          name: "Prof. Emilia Onyema",
          role: "SOAS-University of London",
          location: "(SOAS/UK)",
          dataTarget: "#modal-speaker-4",
        },
        {
          image: "assets/images/speakers/Isaiah Bozimo.jpg",
          name: "Hon. Isaiah Bosimo",
          role: "Attorney General & Commissioner for Justice",
          location: "(Delta State/Nigeria)",
          dataTarget: "#modal-speaker-27",
        },
        {
          image: "assets/images/speakers/speaker-4.jpg",
          name: "Mr. Thomas Kendra",
          role: "Partner, Hogan Lovells",
          location: "(paris-France)",
          dataTarget: "#modal-speaker-5",
        },
        {
          image: "assets/images/speakers/speaker-5.jpg",
          name: "Mr. Babatunde Ogunseitan",
          role: "International Arbitrator",
          location: "(UK)",
          dataTarget: "#modal-speaker-6",
        },
        {
          image: "assets/images/speakers/speaker-6.jpg",
          name: "Mr. Thierry Ngoga",
          role: "Partner, Legal Line Partners",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-7",
        },
        {
          image: "assets/images/speakers/15.jpg",
          name: "Ms. Nakasamba Banda Chanda",
          role: "Partner, A.M. Wood & Co.",
          location: "(Zambia)",
          dataTarget: "#modal-speaker-15",
        },
        {
          image: "assets/images/speakers/18.jpg",
          name: "Mr. Julien Kavaruganda",
          role: "Senior Partner, KS & P",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-18",
        },
        {
          image: "assets/images/speakers/17.jpg",
          name: "Ms. Olusola Adegbonmire",
          role: "Senior Managing Partner, Sola Ajijola & Co",
          location: "(Nigeria)",
          dataTarget: "#modal-speaker-16",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Moise Nkundabarashi",
          role: "President-Rwanda Bar Association",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-9",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Faustin K. Mbundu",
          role: "Chairman-BoD, MTN Rwanda",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-10",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Dr. Ismail Selim",
          role: "Director of CRCICA",
          location: "(Egypt)",
          dataTarget: "#modal-speaker-11",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Christophe Adebayo Ojo",
          role: "SAN, International Arbitrator",
          location: "(Nigeria)",
          dataTarget: "#modal-speaker-12",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Prof. Datuk Sundra Rajoo",
          role: "President of Council-AIADR",
          location: "(Malaysia)",
          dataTarget: "#modal-speaker-13",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Ms. Aissatou Diop,",
          role: "Legal Counsel-ICSID",
          location: "(Washington DC-USA)",
          dataTarget: "#modal-speaker-14",
        }, 
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Dr. Jimmy Koddo",
          role: "International Arbitrator",
          location: "(Benin)",
          dataTarget: "#modal-speaker-17",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Ms. Elodie Dulac",
          role: "Partner, King & Spalding",
          location: "(Singapore)",
          dataTarget: "#modal-speaker-19",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Prof. Ike Ehiribe",
          role: "International Arbitrator",
          location: "(Nigeria & UK)",
          dataTarget: "#modal-speaker-20",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Dr. Achille Ngwanza",
          role: "Managing Partner, Jus Africa",
          location: "(Cameroon)",
          dataTarget: "#modal-speaker-21",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Steven Ruzibiza",
          role: "CEO-Private Sector Federation",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-22",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Tarik Mossadek",
          role: "Advocate-Mossadek Law Firm & Partners",
          location: "(Morocco)",
          dataTarget: "#modal-speaker-23",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Lam Wai Loon",
          role: "Partner-Harold & Lam Partnership",
          location: "(Malaysia)",
          dataTarget: "#modal-speaker-24",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Abayomi Okubote",
          role: "Executive Director-Africa Arbitration Academy",
          location: "(Nigeria)",
          dataTarget: "#modal-speaker-25",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Anish Wadia",
          role: "International Arbitrator",
          location: "(India)",
          dataTarget: "#modal-speaker-26",
        },
      ],
    };
  },
};
</script>