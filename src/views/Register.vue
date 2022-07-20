<template>
  <div class="container" style="margin-top: 100px">
    <h3 class="section-heading text-center mb-3">Register</h3>
    <form @submit.prevent="createAttender()">
      <div class="row">
        <div class="col-md-2 col-sm-2 col-xs-12"></div>
        <div class="col-md-8 col-sm-8 col-xs-12">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>NAMES <span style="color: red">*</span></label>
              <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <input
                    name="firstName"
                    type="text"
                    class="form-control"
                    id="fullname"
                    placeholder="First Name"
                    v-model="attender.firstName"
                  />
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <input
                    name="lastName"
                    type="text"
                    class="form-control"
                    id="fullname"
                    placeholder="Last Name"
                    v-model="attender.lastName"
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
                v-model="attender.organisation"
              />
            </div>

            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>JOB TITLE <span style="color: red">*</span></label>
              <input
                name="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Job Title"
                v-model="attender.email"
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
              />
            </div>

            <div class="col-md-6 col-sm-12 col-xs-12">
              <label>COUNTRY <span style="color: red">*</span></label>
              <input
                name="country"
                type="text"
                class="form-control"
                id="fullname"
                placeholder="Country"
                v-model="attender.country"
              />
            </div>
          </div>
          <br />
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

export default {
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
      },
    };
  },
  methods: {
    async createAttender() {
      this.$Progress.start();
      const data = {
        firstName: this.attender.firstName,
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
        this.$Progress.finish();
        this.$noty.success("success");
        this.$router.push({ name: "Home" });
      } catch (error) {
        this.$Progress.fail();
        console.log(error);
      }
    },
  },
};
</script>