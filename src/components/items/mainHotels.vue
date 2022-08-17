<template>
  <div class="col-12 col-lg-4 mb-4">
    <div class="card rounded-0">
      <a
        href="#modal-speaker-1"
        data-bs-toggle="modal"
        :data-bs-target="dataTarget"
        ><img :src="image" class="card-img-top rounded-0" alt=""
      /></a>
      <div class="card-body">
        <h5 class="card-title mb-2">{{ name }}</h5>
        <div class="card-text mb-1">
          <div class="meta">
            <p style="font-size: 15px"><b>Tel:</b>{{ contact }}</p>
          </div>
          <div class="meta">
            <p style="font-size: 15px"><b>Email:</b>{{ site }}</p>
          </div>
          <div class="meta">
            <p style="font-size: 15px"><b>Location:</b> {{ location }}</p>
          </div>
          <div class="meta">
            <p style="font-size: 15px">
              <b>Distance from Kigali International Airport:</b> {{ distanceA }}
            </p>
          </div>
          <div class="meta">
            <p style="font-size: 15px">
              <b>Distance from Kigali Convention Center:</b> {{ distanceB }}
            </p>
          </div>
        </div>
        <!--//card-text-->
        <a v-if="show !== ''" :href="link" target="_blank"
          >Visit our website &rarr;</a
        >
      </div>
      <!--//card-->
    </div>
    <!--//card-->

    <!-- Modal Main Hotels -->
    <div
      class="modal modal-speaker modal-speaker-1"
      id="modal-speaker-1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Radisson Blu Hotel &Convention Centre (Conference venue)
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/hotels/radisson.jpeg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">
                    Radisson Blu Hotel &Convention Centre (Conference venue)
                  </h2>
                  <div class="meta mb-2">(Conference venue)</div>
                </div>
              </div>
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Standard single Room: <b>$150</b> per night (Breakfast
                Inclusive) <br />
                Standard Double Room: <b>$180</b> per night (Breakfast
                Inclusive)
              </p>
              <p class="mb-0">
                <b>NB</b>. The Price is <b>Airport Pick up</b>/Transfer
                <b>exclusive</b> <br />
                <b>Contact</b>: <br />
                Ms.Natasha Kamikazi: natasha.kamikazi@radissonblu.com <b>or</b>
                <br />
                Mr. Desire Mutangana: desiree.mutangana@radissonblu.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal modal-speaker modal-speaker-2"
      id="modal-speaker-2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-1-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-2-ModalLabel" class="modal-title sr-only">
              Lemigo Hotel
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/hotels/lemigo.jpeg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Lemigo Hotel</h2>
                  <div class="meta mb-2">100m from the conference venue</div>
                </div>
              </div>
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Standard single Room: <b>$100</b> per night (Breakfast
                Inclusive) <br />
                Standard Double Room: <b>$130</b> per night (Breakfast
                Inclusive) <br />
                Deluxe Room (Single Occupancy): <b>$120</b> (Breakfast
                Inclusive) <br />
                Deluxe Room (Double Occupancy): <b>$150</b> (Breakfast
                Inclusive)
              </p>
              <p class="mb-0">
                <b>NB</b>. The Price is <b>Airport Pick up</b>/Transfer
                <b>exclusive</b> <br />
                <b>Contact</b>: <br />
                reservation@lemigohotel.com <b>or</b>
                <br />
                fom@lemigohotel.com <b>or</b> <br />
                accountant@lemigohotel.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal modal-speaker modal-speaker-3"
      id="modal-speaker-3"
      tabindex="-1"
      role="dialog"
      aria-labelledby="speaker-3-ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 id="speaker-1-ModalLabel" class="modal-title sr-only">
              Grazia Apartments
            </h4>
          </div>
          <div class="modal-body p-0">
            <div class="theme-bg-light p-5">
              <div class="row">
                <div class="col-12 col-md-auto text-center">
                  <img
                    class="
                      profile-image
                      mb-3 mb-md-0
                      me-md-4
                      rounded-circle
                      mx-auto
                    "
                    src="assets/images/hotels/grazia.jpeg"
                    alt=""
                  />
                </div>

                <div class="col text-center text-md-start mx-auto">
                  <h2 class="name mb-2">Grazia Apartments</h2>
                  <div class="meta mb-2">100m from the conference venue</div>
                </div>
              </div>
            </div>
            <div class="desc p-4 p-lg-5">
              <p>
                Standard single Room: <b>$90</b> per night (Breakfast Inclusive) <br>
                Superior Double Room: <b>$120</b> per night (Breakfast Inclusive) <br>
                Twin Bedroom: <b>$140</b> (Breakfast Inclusive) <br> 
                Apartment (1 Bedroom with kitchen): <b>$140</b> (Breakfast Inclusive) <br> 
                Apartment (1 Bedroom without kitchen): <b>$130</b> (Breakfast Inclusive)
              </p>
              <p class="mb-0">
                <b>NB</b>. The Price is <b>Airport Pick up</b>/Transfer
                inclusive <br />
                <b>Contact</b>: <br />
                graziaparts@gmail.com <b>or</b>
                <br />
                accountant@lemigohotel.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: this.link,
    };
  },
  props: {
    dataHref: {
      type: String,
      required: true,
    },
    dataTarget: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    site: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },
    distanceA: {
      type: String,
      required: true,
    },

    distanceB: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>