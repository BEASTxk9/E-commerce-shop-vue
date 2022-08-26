<template>
<section v-if="products">
<div id="card" class="container">
  <div class="row justify-content-center text-center">
  
    <div v-for="(product, index) in products" :key="index" class="col-sm-5">

      <h4>{{product.Prod_name}} <span class="px-5">R{{product.price}}</span></h4>
      <p>"{{product.description}}"</p>

 <!-- <router-link :to="{ name: 'single', params: { Prod_id: product.Prod_id } }">
       view
         </router-link> -->

    </div>
  </div>
</div>
</section>
  
  <div v-else class="container">
  <div class="row justify-content-center text-center h-100">
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
</div>

</template>

<script>
export default {
 mounted() {
    this.$store.dispatch("getproducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
}
</script>

<style scoped>
section{
  color: grey;
}

h4{
  color: goldenrod;
    font-family: 'Libre Baskerville', serif;
    padding-bottom: 1rem;
}
</style>