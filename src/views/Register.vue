<template>
  <div class="container" style="margin-top: 100px">
    <h3 class="section-heading text-center mb-3">Register</h3>
    <div class="row">
      <div class="col-md-4 col-sm-4"></div>
      <div
        class="col-md-4 col-sm-4 col-xs-12 wow fadeInLeft"
        data-wow-offset="50"
        data-wow-delay="0.9s"
      >
        <form @submit.prevent="createAttender()">
          <label>FIRST NAME</label>
          <input
            name="firstName"
            type="text"
            class="form-control"
            id="fullname"
            v-model="attender.firstName"
          />
          <label>LAST NAME</label>
          <input
            name="lastName"
            type="text"
            class="form-control"
            id="fullname"
            v-model="attender.lastName"
          />
          <label>EMAIL</label>
          <input name="email" type="email" class="form-control" id="email" v-model="attender.email" />

          <label>ORGANISATION</label>
          <input
            name="organisation"
            type="text"
            class="form-control"
            id="fullname"
            v-model="attender.organisation"
          />
          <label>JOB TITLE</label>
          <input
            name="jobTitle"
            type="text"
            class="form-control"
            id="fullname"
            v-model="attender.jobTitle"
          />
          <label>COMPANY ADDRESS</label>
          <input
            name="companyAddress"
            type="text"
            class="form-control"
            id="fullname"
            v-model="attender.companyAddress"
          />
          <label>PHONE NUMBER</label>
          <input
            name="phoneNumber"
            type="text"
            class="form-control"
            id="fullname"
            v-model="attender.phoneNumber"
          />
          <label>COUNTRY</label>
          <input
            name="country"
            type="text"
            class="form-control"
            id="fullname"
            v-model="attender.country"
          />

          <input
            type="submit"
            class="btn btn-secondary"
            style="background-color: #00008b"
          />
        </form>
      </div>
      <div class="col-md-4 col-sm-4"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      attender:{
        firstName: null, 
        lastName: null,
        email: null, 
        organisation: null,
        jobTitle: null, 
        companyAddress: null, 
        phoneNumber: null,
        country: null
      }
    }
  },
  methods: {
    async createAttender() {

      const data = {
        firstName: this.attender.firstName, 
        lastName: this.attender.lastName,
        email: this.attender.email,
        organisation: this.attender.organisation,
        jobTitle: this.attender.jobTitle,
        companyAddress: this.attender.companyAddress,
        phoneNumber: this.attender.phoneNumber,
        country: this.attender.country
      };

      try {
        await axios.post(`/api/attender`, data);
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>