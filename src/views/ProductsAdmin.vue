<template>
<Nav></Nav>
<div class="container">
  <div class="row justify-content-center text-center">
    <div class="col-sm-10">
<Admin></Admin>
    </div>
  </div>
</div>


</template>

<script>
import Nav from '../components/FakeNavView.vue';
import Admin from '../components/ProductsTableView.vue';


export default {
  name: 'HomeView',
  components: {
  Nav,
  Admin
  }
}
</script>