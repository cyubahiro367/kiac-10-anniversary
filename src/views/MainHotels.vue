<template>
  <div>
    <ComponentHeader />
    <section
      id="speakers-section"
      class="speakers-section section"
      style="margin-top: 100px"
    >
      <div class="container">
        <h3 class="section-heading text-center mb-3">
          HOTELS & APARTMENTS IN KIGALI
        </h3>
        <h6 class="text-left mb-3">TRAVEL AND ACCOMODATION</h6>
        <div class="section-intro text-left mx-auto mb-5">
          Participants are responsible for making their own travel arrangements
          and hotel reservations. Hotel reservation can be made through any of
          the below Hotels which are nearby the conference venue. As they will
          be distributed on a “first-come, first-served” basis, we recommend
          that you make your reservation ASAP.
        </div>

        <h6 class="text-left mb-3">ACCOMMODATION ARRANGEMENTS</h6>
        <div class="section-intro text-left mx-auto mb-5">
          To ease logistical burdens to the participants, KIAC has reached out
          to the nearby hotels and negotiated the discounted accommodation
          prices for the participants to the KIAC 10th Anniversary Conference.
        </div>

        <div class="section-intro text-left mx-auto mb-5">
          The negotiated hotels, prices and contacts are as follow:
        </div>
        <div class="row">
          <Hotel
            v-for="(Hotel, key) in Hotels"
            :key="key"
            :dataHref="Hotel.dataHref"
            :dataTarget="Hotel.dataTarget"
            :image="Hotel.image"
            :name="Hotel.name"
            :contact="Hotel.contact"
            :site="Hotel.site"
            :location="Hotel.location"
            :distanceA="Hotel.distanceA"
            :distanceB="Hotel.distanceB"
            :link="Hotel.link"
          />
        </div>
        <div class="offers text-center bg-white p-4 p-lg-5">
          <p>
            Please remember to mention that you are booking your accommodation
            to attend the KIAC 10th Anniversary Conference scheduled for 29 th &
            30 th September 2022 and copy in KIAC Secretariat through
            info@kiac.org.rw, for follow up and assistance if need be.
          </p>
          <p class="text-center mb-3">
            But participants are free to go make contact of other hotels of
            their choice around the conference venue by clicking
            <router-link to="/hotels">here</router-link>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hotel from "../components/items/mainHotels.vue";
import ComponentHeader from "../components/ComponentHeader.vue";
export default {
  components: {
    Hotel,
    ComponentHeader,
  },
  data() {
    return {
      Hotels: [
        {
          dataHref: "#modal-speaker-1",
          dataTarget: "#modal-speaker-1",
          image: "assets/images/hotels/radisson.jpeg",
          name: "Radisson Blu Hotel &Convention Centre (Conference venue)",
          contact: "+250 252 252 252",
          site: "info.kigali@radissonblu.com/",
          location: "KG 2 Round-about, Kigali",
          distanceA: "5km",
          distanceB: "0 km",
          link: "https://www.radissonblu.com",
        },
        {
          dataHref: "#modal-speaker-2",
          dataTarget: "#modal-speaker-2",
          image: "assets/images/hotels/lemigo.jpeg",
          name: "Lemigo Hotel",
          contact: "+250784040924",
          site: "info@lemigohotel.com",
          location: "KG 624 St, Kigali",
          distanceA: "5Km",
          distanceB: "300m",
          link: "https://www.lemigohotel.com",
        },
        {
          dataHref: "#modal-speaker-3",
          dataTarget: "#modal-speaker-3",
          image: "assets/images/hotels/grazia.jpeg",
          name: "Grazia Apartments Hote",
          contact: "+250788862351",
          site: "graziaparts@gmail.com",
          location: "KG 624 stKigali",
          distanceA: "5km",
          distanceB: "300m",
          link: "https://www.graziaapartments.com",
        },
      ],
    };
  },
};
</script>