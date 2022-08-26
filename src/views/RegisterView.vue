<template>
<Nav></Nav>
<section v-if="true">

<Register></Register>

</section>

<div v-else class="container">
<div class="loader">
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
</div>
</div>

</template>

<script>
import Nav from '../components/LandingNavView.vue';
import Register from '../components/RegisterFormView.vue';

export default {
  name: 'HomeView',
  components: {
  Nav,
  Register
  }
}
</script>

<style scoped>
Nav{
  background-color: transparent;
  background-image: none;
  border: none;
  z-index: 1;
}
</style>