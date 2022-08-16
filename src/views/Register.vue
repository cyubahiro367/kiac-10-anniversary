<template>
  <div class="container" style="margin-top: 100px">
    <ComponentHeader />
    <h3 class="section-heading text-center mb-3">Register</h3>
    <form @submit.prevent="createAttender()">
      <div class="row">
        <div class="col-md-2 col-sm-2 col-xs-12"></div>
        <div class="col-md-8 col-sm-8 col-xs-12">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>TITLE NAMES <span style="color: red">*</span></label>
              <div class="row">
                <div class="col-md-2 col-sm-12 col-xs-12">
                  <select class="form-control" name="cars" id="cars">
                    <option value="volvo">Mr</option>
                    <option value="saab">Mrs</option>
                    <option value="mercedes">Ms</option>
                  </select>

                  <!-- <input
                    name="firstName"
                    type="text"
                    class="form-control"
                    id="fullname"
                    placeholder="First Name"
                    v-model="attender.firstName"
                    required
                  /> -->
                </div>
                <div class="col-md-5 col-sm-12 col-xs-12">
                  <input
                    name="firstName"
                    type="text"
                    class="form-control"
                    id="fullname"
                    placeholder="First Name"
                    v-model="attender.firstName"
                    required
                  />
                </div>
                <div class="col-md-5 col-sm-12 col-xs-12">
                  <input
                    name="lastName"
                    type="text"
                    class="form-control"
                    id="fullname"
                    placeholder="Last Name"
                    v-model="attender.lastName"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>EMAIL <span style="color: red">*</span></label>
              <input
                name="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="example@example.com"
                v-model="attender.email"
                required
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>ORGANISATION <span style="color: red">*</span></label>
              <input
                name="organisation"
                type="text"
                class="form-control"
                id="fullname"
                placeholder="organisation"
                v-model="attender.organisation"
                required
              />
            </div>

            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>JOB TITLE <span style="color: red">*</span></label>
              <input
                name="jobTitle"
                type="text"
                class="form-control"
                id="email"
                placeholder="Job Title"
                v-model="attender.jobTitle"
                required
              />
            </div>
          </div>
          <br />
          <label>COMPANY ADDRESS <span style="color: red">*</span></label>
          <input
            name="companyAddress"
            type="text"
            class="form-control"
            id="fullname"
            placeholder="Company Address"
            v-model="attender.companyAddress"
            required
          />
          <br />
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>PHONE NUMBER <span style="color: red">*</span></label>
              <input
                name="phoneNumber"
                type="text"
                class="form-control"
                id="fullname"
                placeholder="Phone Number"
                v-model="attender.phoneNumber"
                required
              />
            </div>

            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>COUNTRY <span style="color: red">*</span></label>
              <select v-model="attender.country" class="form-control">
                <option
                  v-for="count in countries"
                  :key="count.id"
                  :value="count.name"
                >
                  {{ count.name }}
                </option>
              </select>
            </div>
          </div>
          <br />
          <!-- <label
            >Do you have a proof of payment? if you have already made a payment
            you can upload it here <span style="color: red">*</span></label
          >
          <input
            name="attach proof of payment"
            type="file"
            @change="switchSelect($event)"
            class="form-control"
            id="payment"
            placeholder="proof of payment"
          />
          <br /> -->
          <center>
            <input
              type="submit"
              class="btn btn-secondary"
              style="background-color: #00008b; margin-bottom: 10px"
            />
          </center>
          <br />
        </div>
        <div class="col-md-2 col-sm-4"></div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import ComponentHeader from '../components/ComponentHeader.vue'

export default {
  components:{
    ComponentHeader
  },
  data() {
    return {
      attender: {
        firstName: null,
        lastName: null,
        email: null,
        organisation: null,
        jobTitle: null,
        companyAddress: null,
        phoneNumber: null,
        country: null,
        paymentProof: null,
      },
      countries: [],
    };
  },
  methods: {
    async createAttender() {
      this.$Progress.start();
      // var formData = new FormData();
      // formData.append('firstName', this.attender.firstName);
      // formData.append('lastName', this.attender.lastName);
      // formData.append('email', this.attender.email);
      // formData.append('organisation', this.attender.organisation);
      // formData.append('jobTitle', this.attender.jobTitle);
      // formData.append('companyAddress', this.attender.companyAddress);
      // formData.append('phoneNumber', this.attender.phoneNumber);
      // formData.append('country', this.attender.country);
      // formData.append('paymentProof', this.attender.paymentProof);

      const data = {
        'firstName': this.attender.firstName,
        'lastName': this.attender.lastName,
        'email': this.attender.email,
        'organisation': this.attender.organisation,
        'jobTitle': this.attender.jobTitle,
        'companyAddress': this.attender.companyAddress,
        'phoneNumber': this.attender.phoneNumber,
        'country': this.attender.country,
      }

      try {
        await axios.post(`/api/attender`, data);
        this.$Progress.finish();
        this.$router.push({ name: "ThankYou" });
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },

    switchSelect(event) {
      this.attender.paymentProof = event.target.value;
    },

    async loadRequiredData() {
      this.$Progress.start();

      try {
        const reponse = await axios.get("/api/country");
        this.$Progress.finish();
        this.countries = reponse.data;
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
  },
  mounted() {
    this.loadRequiredData();
  },
};
</script>