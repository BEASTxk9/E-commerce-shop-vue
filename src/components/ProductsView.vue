<template>
<section v-if="products">
<div id="card" class="container">
  <div class="row justify-content-center text-center">

    <input type="text" placeholder="What are you looking for?" v-model="search">
  
    <div v-for="(product, index) in products" :key="index" class="col-sm-5">

      <h4>{{product.Prod_name}} <span class="px-5">R{{product.price}}</span></h4>
      <p>"{{product.description}}"</p>


 <router-link :to="{ name:'single', params: { id: product.Prod_id } }">
       view
         </router-link>


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
  name: "shop",
      props: ["product"],
data(){
return{
  search: ''
}
},

 mounted() {
    this.$store.dispatch("getproducts");
  },
  computed: {
    products() {
      return this.$store.state.products?.filter(products => { let isMatch = true; if (!products.Prod_name.toLowerCase().includes(this.search.toLowerCase())) { isMatch = false; } return isMatch })
    },
  },
}
</script>

<style scoped>
section{
  color: grey;
  min-height: 87vh;
}

h4{
  color: goldenrod;
    font-family: 'Libre Baskerville', serif;
    padding-bottom: 1rem;
}
</style>