<template>
 
	<!-- cart stuff -->
  <button class="bg-transparent mx-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" data-bs-placement="bottom" title="Cart."><i class="bi bi-cart4"></i></button>

<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h2 class="offcanvas-title text-cener" id="offcanvasScrollingLabel">Roasted Beans<i class="fa-solid fa-basket-shopping"></i></h2>
    <button type="button" class="b1" data-bs-dismiss="offcanvas" aria-label="Close">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
    </button>
  </div>
  <div class="offcanvas-body">

  <div v-for="(product, index) in cart" :key="index">

    <div class="container">

<div class="row justify-content-center py-3">
    <img :src="product.productData[0].img2" class="rounded-pill">
</div>

        <div class="row justify-content-center text-start">
     <div class="col-sm-12">
               

    <p>Name: {{product.productData[0].Prod_name}}</p>
    <p>Price: R{{product.productData[0].price}}</p>
    <p>Category: {{product.productData[0].category}}</p>

    <button id="delete" class="b btn-layout"
                        v-on:click="deletecartitem(product.cart_id)">
                        <i class="fa-solid fa-trash" @click="reloadPage"></i>
</button>

            </div>
        </div>
    </div>

  </div>

  <button id="delete" class="b btn-layout"
                        v-on:click="$store.dispatch('deletecart')">
                        Clear Cart
</button>

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
    color: black;
    transition: all 0.3s ease-in-out;
}

.b1:hover{
    color: goldenrod;
}

</style>