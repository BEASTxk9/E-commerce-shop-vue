<template>
<Nav></Nav>
<section v-if="true">

  <h1>Contact</h1>

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
import Nav from '../components/NavView.vue'


export default {
  name: 'HomeView',
  components: {
  Nav
  }
}
</script>