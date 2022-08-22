<template>
<Nav></Nav>

  <h1>Admin Products</h1>
<Admin></Admin>

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