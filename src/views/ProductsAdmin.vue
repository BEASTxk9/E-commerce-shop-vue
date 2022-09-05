<template>
<Nav></Nav>

<div class="container">
  <div class="row">
    <div class="col-sm-12">
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

<style scoped>
#notlogged{
  min-height: 87vh;
  font-family: 'Libre Baskerville', serif;
}

h1, a{
  position: relative;
  top: 25vh;
  color: goldenrod;

}

a{
  font-size: 1.5rem;
}
</style>