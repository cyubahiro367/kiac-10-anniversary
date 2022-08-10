<template>
    <div class="col-6 col-lg-3 mb-4">
              <div class="card rounded-0">
                <a
                  href="#modal-speaker-1"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-speaker-1"
                  ><img
                    :src= " image "
                    class="card-img-top rounded-0"
                    alt=""
                /></a>
                <div class="card-body">
                  <h5 class="card-title mb-2">{{ name }}</h5>
                  <div class="card-text mb-3">
                    <div class="meta">{{ role }}</div>
                    <div class="meta">{{ location }}</div>
                  </div>
                </div>
                <!--//card-->
              </div>
              <!--//card-->
            </div>
</template>

<script>
export default {
  props:{
    image:{
      type: String,
      required: true
    },
    name:{
      type: String,
      required: true
    },
    role:{
      type: String,
      required: true
    },
    location:{
      type: String,
      required: true
    }
  }
}
</script>