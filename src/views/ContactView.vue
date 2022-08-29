<template>
<Nav></Nav>
<section v-if="true">

<Form></Form>

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
import Nav from '../components/NavView.vue';
import Form from '../components/ContactFormView.vue';


export default {
  name: 'HomeView',
  components: {
  Nav,
  Form
  }
}
</script>