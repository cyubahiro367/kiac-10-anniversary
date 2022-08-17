<template>
  <div class="col-6 col-lg-3 mb-4">
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
            <p style="font-size: 13px"><b>Tel:</b>{{ contact }}</p>
          </div>
          <div class="meta">
            <p style="font-size: 13px"><b>Email:</b>{{ site }}</p>
          </div>
          <div class="meta">
            <p style="font-size: 13px"><b>Location:</b> {{ location }}</p>
          </div>
          <div class="meta">
            <p style="font-size: 13px">
              <b>Distance from Kigali International Airport:</b> {{ distanceA }}
            </p>
          </div>
          <div class="meta">
            <p style="font-size: 13px">
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