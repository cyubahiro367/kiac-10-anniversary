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
          name: "Hon. Isaiah Bozimo",
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
          image: "assets/images/speakers/a2.png",
          name: "Mr. Alexandre Vagenheim",
          role: " Head of Impact & Global Relations-JUS MUNDI",
          location: "(Paris-France)",
          dataTarget: "#modal-speaker-48",
        },
        {
          image: "assets/images/speakers/15.jpg",
          name: "Ms. Nakasamba Banda Chanda",
          role: "Partner, A.M. Wood & Co.",
          location: "(Zambia)",
          dataTarget: "#modal-speaker-15",
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
          image: "assets/images/speakers/17.jpg",
          name: "Ms. Olusola Adegbonmire",
          role: "Senior Managing Partner, Sola Ajijola & Co",
          location: "(Nigeria)",
          dataTarget: "#modal-speaker-16",
        },

        {
          image: "assets/images/speakers/18.jpg",
          name: "Mr. Julien Kavaruganda",
          role: "Senior Partner, KS & P",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-18",
        },
        {
          image: "assets/images/speakers/a3.png",
          name: "Ms. Aissatou Diop,",
          role: "Legal Counsel-ICSID",
          location: "(Washington DC-USA)",
          dataTarget: "#modal-speaker-14",
        },
        {
          image: "assets/images/speakers/a5.jpg",
          name: "Dr. Ismail Selim",
          role: "Director of CRCICA",
          location: "(Egypt)",
          dataTarget: "#modal-speaker-11",
        },
        {
          image: "assets/images/speakers/a6.jpg",
          name: "Dr. Kenneth Wyne Mutuma",
          role: " C. Arb (international Arbitrato)",
          location: "(Kenya)",
          dataTarget: "#modal-speaker-45",
        },
        {
          image: "assets/images/speakers/a7.png",
          name: "Mr. John Bosco Bugingo",
          role: "Managing Partner-Fountain Advocates",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-40",
        },

        {
          image: "assets/images/speakers/a20.jpg",
          name: "Mrs. Adedoyin Rhodes-Vivour",
          role: " Managing Partner-DRV",
          location: "(Nigeria)",
          dataTarget: "#modal-speaker-39",
        },
        {
          image: "assets/images/speakers/a8.jpg",
          name: "Ms. Noella C. Lubano",
          role: "Partner Oraro & Company Advocates",
          location: "(Kenya)",
          dataTarget: "#modal-speaker-50",
        },
        {
          image: "assets/images/speakers/a21.jpg",
          name: "Mrs. Obosa Akpata",
          role: " PATRELI PARTNERS",
          location: "(Nigeria)",
          dataTarget: "#modal-speaker-46",
        },
        {
          image: "assets/images/speakers/a15.png",
          name: "Dr. Fidele Masengo",
          role: "former KIAC SG",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-38",
        },  
        {
          image: "assets/images/speakers/a13.jpg",
          name: "Mr. Isaac Bizumuremyi",
          role: " Managing Partner-Lex Chambers",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-34",
        },
        {
          image: "assets/images/speakers/a12.jpg",
          name: "Mr. James Banda",
          role: "Chairperson- CIArb Zambia Branch",
          location: "(Zambia)",
          dataTarget: "#modal-speaker-36",
        },
        {
          image: "assets/images/speakers/a11.jpg",
          name: "Mr. Moise Nkundabarashi",
          role: "President-Rwanda Bar Association",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-9",
        },

        {
          image: "assets/images/speakers/a10.jpg",
          name: "Mr. Abayomi Okubote",
          role: "Executive Director-Africa Arbitration Academy",
          location: "(Nigeria)",
          dataTarget: "#modal-speaker-25",
        },
        {
          image: "assets/images/speakers/a13.png",
          name: "Dr. Didas Kayihura Muganga",
          role: "Acting Chancellor / University of Rwanda",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-30",
        },
        {
          image: "assets/images/speakers/a14.jpg",
          name: "Mr. Eugenio Bettella",
          role: "Partner-BERGS&MORE",
          location: "(Italy)",
          dataTarget: "#modal-speaker-43",
        },
        {
          image: "assets/images/speakers/a15.jpg",
          name: "Mr. Emmanuel Butare",
          role: "Partner MRB Attorneys",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-32",
        },
        {
          image: "assets/images/speakers/a14.png",
          name: "Mr. Athanase Rutabingwa",
          role: "MP-MRB Attorneys & Chairman of CIArb/Rwanda Branch",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-28",
        },
        {
          image: "assets/images/speakers/a16.jpg",
          name: "Mr. Anish Wadia",
          role: "International Arbitrator",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-33",
        },
        {
          image: "assets/images/speakers/a17.jpg",
          name: "Mr. Christopher Adebayo Ojo",
          role: "SAN, International Arbitrator",
          location: "(Nigeria)",
          dataTarget: "#modal-speaker-12",
        },
        {
          image: "assets/images/speakers/a18.jpg",
          name: "Ms. Elodie Dulac",
          role: "Partner, King & Spalding",
          location: "(Singapore)",
          dataTarget: "#modal-speaker-19",
        }, 
        {
          image: "assets/images/speakers/a19.jpg",
          name: "Dr. Jimmy Koddo",
          role: "International Arbitrator",
          location: "(Benin)",
          dataTarget: "#modal-speaker-17",
        },
        {
          image: "assets/images/speakers/a9.jpg",
          name: "Mr. Damian James",
          role: "Quantum Expert",
          location: "(South Africa)",
          dataTarget: "#modal-speaker-37",
        },
        {
          image: "assets/images/speakers/a4.jpg",
          name: "Dr. Randi Ayman",
          role: "Senior Research Fellow Max Planck Institute Luxembourg",
          location: "(Luxembourg)",
          dataTarget: "#modal-speaker-31",
        },
        {
          image: "assets/images/speakers/a22.jpg",
          name: "Mrs. Aurélia Kamga Mafongo",
          role: " Chazai Wamba Law Firm",
          location: "(Cameroon)",
          dataTarget: "#modal-speaker-47",
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
          name: "Prof. Datuk Sundra Rajoo",
          role: "President of Council-AIADR",
          location: "(Malaysia)",
          dataTarget: "#modal-speaker-13",
        },
        // {
        //   image: "assets/images/speakers/speaker-19.jpg",
        //   name: "Prof. Ike Ehiribe",
        //   role: "International Arbitrator",
        //   location: "(Nigeria & UK)",
        //   dataTarget: "#modal-speaker-20",
        // },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Dr. Achille Ngwanza",
          role: "Managing Partner, Jus Africa",
          location: "(Cameroon)",
          dataTarget: "#modal-speaker-21",
        },
        // {
        //   image: "assets/images/speakers/speaker-19.jpg",
        //   name: "Mr. Steven Ruzibiza",
        //   role: "CEO-Private Sector Federation",
        //   location: "(Rwanda)",
        //   dataTarget: "#modal-speaker-22",
        // },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Tarik Mossadek",
          role: "Advocate-Mossadek Law Firm & Partners",
          location: "(Morocco)",
          dataTarget: "#modal-speaker-23",
        },
        // {
        //   image: "assets/images/speakers/speaker-19.jpg",
        //   name: "Mr. Lam Wai Loon",
        //   role: "Partner-Harold & Lam Partnership",
        //   location: "(Malaysia)",
        //   dataTarget: "#modal-speaker-24",
        // },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Mouhamed KEBE",
          role: "Managing Partner GENI & KEBE",
          location: "(Senegal)",
          dataTarget: "#modal-speaker-29",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Ms. Mackline Ingabire",
          role: " KIAC Board Member",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-35",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Stephen Ruzibiza",
          role: " CEO-Private Sector-Rwanda",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-41",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Mr. Hicham Zegrary",
          role: "Secretary General, CIMAC",
          location: "(Morocco)",
          dataTarget: "#modal-speaker-42",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Ms. Maggie Baingana",
          role: ", Managing Partner-Shields Associates",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-44",
        },
        {
          image: "assets/images/speakers/speaker-19.jpg",
          name: "Ms. Florida Kabasinga",
          role: " Managing Partner-Certa Law",
          location: "(Rwanda)",
          dataTarget: "#modal-speaker-49",
        },
      ],
    };
  },
};
</script>