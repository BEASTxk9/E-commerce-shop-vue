<template>
  <Nav></Nav>
  <section>
    <Login></Login>
  </section>
</template>

<script>
import Nav from "../components/LandingNavView.vue";
import Login from "../components/LoginFormView.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Login,
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