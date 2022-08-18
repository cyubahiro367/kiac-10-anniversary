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
                <div class="col-md-3 col-sm-12 col-xs-12">
                  <select v-model="attender.title" class="form-control" name="cars" id="cars">
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                  </select>
                </div>
                <div class="col-md-9 col-sm-12 col-xs-12">
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
              </div>
            </div>

            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>LAST NAME <span style="color: red">*</span></label>
              <input
                name="lastName"
                type="lastName"
                class="form-control"
                id="lastName"
                placeholder="Enter your last name"
                v-model="attender.lastName"
                required
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>EMAIL <span style="color: red">*</span></label>
              <input
                name="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="email"
                v-model="attender.email"
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
              <label>COMPANY ADDRESS <span style="color: red">*</span></label>
              <input
                name="companyAddress"
                type="text"
                class="form-control"
                id="CompanyAddress"
                placeholder="Company Address"
                v-model="attender.companyAddress"
                required
              />
            </div>
          </div>
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
import 'vuejs-noty/dist/vuejs-noty.css'
import ComponentHeader from "../components/ComponentHeader.vue";

export default {
  components: {
    ComponentHeader,
  },
  data() {
    return {
      attender: {
        title: null,
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

      const data = {
        firstName: this.attender.title + " " + this.attender.firstName,
        lastName: this.attender.lastName,
        email: this.attender.email,
        organisation: this.attender.organisation,
        jobTitle: this.attender.jobTitle,
        companyAddress: this.attender.companyAddress,
        phoneNumber: this.attender.phoneNumber,
        country: this.attender.country,
      };

      try {
        await axios.post(`/api/attender`, data);
        this.$noty.success("you have been registered to attend kiac 100 anniversary");
        this.$router.push({ name: "ThankYou" });
        this.$Progress.finish();
      } catch (error) {
        this.$Progress.fail();
        this.$noty.error("failed contact support");
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
        this.$noty.error("not found countries contact support");
        console.log(error);
      }
    },
  },
  mounted() {
    this.loadRequiredData();
  },
};
</script>