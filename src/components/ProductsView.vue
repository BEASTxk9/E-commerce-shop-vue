<template>
<section v-if="products">
<div class="container">
  <div class="row justify-content-center text-center">

<!-- search -->
<div class="row">
  <div class="col-sm-2 text-end">
    <input type="text" placeholder="What are you looking for?" v-model="search" class="mb-5">
  </div>
  <div class="col-sm-2 text-start">
<select v-model="search">
<option></option>
<option value="coffee">coffee</option>
<option value="tea">Tea</option>
<option value="burger">Burger</option>
<option value="sandwich">Sandwich</option>
<option value="breakfast">Breakfast</option>

</select>
  </div>
</div>

  <!-- card -->
    <div v-for="(product, index) in products" :key="index" class="col-sm-3" id="card">

 <router-link class="text-decoration-none" :to="{ name:'single', params: { id: product.Prod_id } }">
      
  <div class="card mt-2">

  <div class="card-img">
     <img class="img-fluid rounded-pill" :src="product.img1">
  </div>
  <div class="card-info">
    <p class="text-title">{{product.Prod_name}}</p>
  </div>
  <div class="card-footer">
  <span class="text-title">R{{product.price}}</span>
</div>

</div>

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
        category() {
      return this.$store.state.products?.filter(products => { let isMatch = true; if (!products.category.toLowerCase().includes(this.search.toLowerCase())) { isMatch = false; } return isMatch })
    },
  },
  
}
</script>

<style scoped>
section{
  color: grey;
  min-height: 87vh;
  padding-bottom: 2rem;
}

input{
  padding: 4px;
  outline: none;
}

h4{
  color: goldenrod;
    font-family: 'Libre Baskerville', serif;
    padding-bottom: 1rem;
}

.card {
  height: 43vh;
padding: 10px;
background-color: rgb(29, 26, 26);
color: grey;
 position: relative;
 overflow: visible;
 box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

img{
  height: 25vh;
  width: 12vw;
  border: 1px solid goldenrod;
}

.card-img {
  background-color: transparent;
 height: 40%;
 width: 100%;
 border-radius: .5rem;
 transition: .3s ease;
}

.card-info {
 padding-top: 10vh;
}

.card-footer {
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-top: 10px;
 border-top: 1px solid goldenrod;
}

/*Text*/
.text-title {
 font-weight: 900;
 font-size: 0.9em;
 line-height: 1.5;
 color: goldenrod;
 font-family: 'Libre Baskerville', serif;
}

.text-body {
 font-size: .9em;
 padding-bottom: 10px;
 color: grey;
}

#description{
  font-size: 0.8rem;
  font-weight: bold;
}

</style>