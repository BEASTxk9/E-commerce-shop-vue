<template>
  <Nav></Nav>
  <section>

          <Register></Register> 
          
  </section>
</template>

<script>
import Nav from "../components/LandingNavView.vue";
import Register from "../components/RegisterFormView.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Register,
  },
};
</script>

<style scoped>
Nav {
  background-color: transparent;
  background-image: none;
  border: none;
  z-index: 1;
}
</style>