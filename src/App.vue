<template>
  <div>
    <div>
      <router-view />
      <Footer />
    </div>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
.nav-link:hover {
  color: #ff8c00;
}
</style>
