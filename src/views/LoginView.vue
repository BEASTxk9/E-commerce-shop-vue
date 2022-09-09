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

</style>