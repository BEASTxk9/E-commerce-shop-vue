<template>
 
	<!-- cart stuff -->
  <button class="bg-transparent mx-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" data-bs-placement="bottom" title="Cart."><i class="bi bi-cart4"></i></button>

<div v-if="cart" class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

  <!-- header -->
  <div class="offcanvas-header">
    <h2 class="offcanvas-title text-cener" id="offcanvasScrollingLabel">Cart.</h2>
    <button type="button" class="b1" data-bs-dismiss="offcanvas" aria-label="Close">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
    </button>
  </div>

  <hr>
<!-- data -->
  <div class="offcanvas-body">

  <div v-for="(product, index) in cart" :key="index">

    <div class="container">
<div class="row justify-content-center py-3">

<!-- img -->
<div class="col-sm-12 text-center py-2">
    <img :src="product.productData[0].img2" class="rounded-pill">
  </div>

  <!-- id -->
  <div id="index" class="col-sm-12 text-start">
   Product ID: {{product.productData[0].Prod_id}}
  </div>

  <!-- table -->
  <div class="col-sm-12 text-start">
    <table class="table-fluid table-bordered rounded">
  <thead>
    <th>Name</th>
    <th>Price</th>
    <th>Category</th>
  </thead>
  <tbody>
    <td>"{{product.productData[0].Prod_name}}"</td>
    <td>"R{{product.productData[0].price}}"</td>
    <td>"{{product.productData[0].category}}"</td>
  </tbody>
</table>
  </div>

  <div class="col-sm-12 text-end">
    <button id="delete" class="b1"
                        v-on:click="deletecartitem(product.cart_id)">
                        <i class="fa-solid fa-trash" @click="reloadPage"></i>
</button>
  </div>

<hr class="my-3">

</div>
    </div>

  </div>

  <!-- checkout & delete all -->
  <div class="container">
    <div class="row">
        <div class="col-sm-6 text-start">
<button id="checkout">
  Check out
</button>
  </div>

  <div class="col-sm-6 text-end">
    <button id="delete"
                        v-on:click="$store.dispatch('deletecart')">
                        Clear Cart
</button>
  </div>
    </div>
  </div>

  </div>
</div>

<div v-else class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

<!-- header -->
<div class="offcanvas-header">
  <h2 class="offcanvas-title text-cener" id="offcanvasScrollingLabel">Cart.</h2>
  <button type="button" class="b1" data-bs-dismiss="offcanvas" aria-label="Close">
    <i class="fa-solid fa-arrow-right-from-bracket"></i>
  </button>
</div>

<hr>
<!-- data -->
<div class="offcanvas-body text-center">

<p>Your Not Logged in?<br>Please Login to View Your Cart.</p>

</div>
</div>

</template>

<script>
export default {
computed:{
  cart(){
    return this.$store.state.cart;
  }
},
methods:{
  deletecartitem(id){
this.$store.dispatch("deletecartitem", id)
  }
}
}
</script>

<style scoped>
button{
  color: white;
  font-size: 1.3rem;
  padding: 0;
  transition: all 0.3s ease-in-out;
  border: 1px solid grey;
  border-radius: 360px;
  width: 33px;
}

button:hover{
  color: goldenrod;
  border: 1px solid goldenrod;
}

.offcanvas{
  background-color: rgb(29, 26, 26);
  z-index: 1;
}

.offcanvas-body{
  z-index: 10;
  color: grey;
}

.offcanvas-title{
    color: goldenrod;
    font-family: 'Libre Baskerville', serif;
    font-weight: 500;
}

.b1{
    background-color: transparent;
    color: grey;
    transition: all 0.3s ease-in-out;
}

.b1:hover{
    color: goldenrod;
}

th{
  border-left: 0.3px solid grey;
    border-right: 0.3px solid grey;
    padding-right: 10px;
}

td{
    color: goldenrod;
    border-left: 0.3px solid grey;
    border-right: 0.3px solid grey;
    text-align: center;
    padding: 3px;
}

img{
  width: 20vh;
  height: 20vh;
}

#index{
  color: goldenrod;
}

#delete, #checkout{
  width: fit-content;
  color: black;
  padding: 0;
}

#checkout{
  background-color: green;
}

#delete{
  background-color: red;
}
</style>