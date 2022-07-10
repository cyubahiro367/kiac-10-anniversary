<template>
    <section id="speakers-section" class="speakers-section section">
        <div class="container">
          <h3 class="section-heading text-center mb-3">Speakers</h3>
          <div class="section-intro text-center single-col-max mx-auto mb-5">
            List your featured speakers here. You can provide more info about
            each speaker in the relevant modal windows. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </div>
          <div class="row">
            <SpeakersCard
            v-for="(speaker, key) in speakers"
            :key="key"
            :image = speaker.image
            :name = speaker.name
            :role = speaker.role
            :location = speaker.location
             />
          </div>
          <!--//row-->
          <div class="speakers-cta text-center py-3">
            <a
              class="btn btn-primary btn-lg"
              href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devconf-free-bootstrap-4-conference-template-for-tech-conferences-and-events/"
              target="_blank"
              >Get Tickets</a
            >
          </div>
        </div>
        <!--//container-->
      </section>
      <!--//speakers-section-->
</template>

<script>
import SpeakersCard from './items/SpeakersCard.vue'
export default {
  components:{
    SpeakersCard
  },
  data(){
    return {
      speakers: [
        {
          image: "assets/images/speakers/speaker-1.jpg",
          name: "James Doe",
          role: "Senior Software Developer",
          location: "Angular Core Team"
        },
        {
          image: "assets/images/speakers/speaker-2.jpg",
          name: "Sarah Doe",
          role: "Developer Advocate",
          location: "Google"
        }
      ]
    }
  }
}
</script>