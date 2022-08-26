<template>
<Nav></Nav>
<div v-if="true" class="container">
  <div class="row justify-content-center text-center">
    <div class="col-sm-10">
<Admin></Admin>
    </div>
  </div>
</div>


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
import Admin from '../components/ProductsTableView.vue';


export default {
  name: 'HomeView',
  components: {
  Nav,
  Admin
  }
}
</script>