<template>
 
	<!-- cart stuff -->
  <button class="bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-cart4"></i></button>

<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasScrollingLabel">Your Cart</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

  <div v-for="(product, index) in cart" :key="index">

{{product.productData[0].Prod_name}}
{{product.productData[0].description}}
{{product.productData[0].price}}
{{product.productData[0].category}}
{{product.productData[0].img1}}
{{product.productData[0].img2}}

<button id="delete" class="b btn-layout"
                        v-on:click="deletecartitem(product.cart_id)">
                        <i class="fa-solid fa-trash" @click="reloadPage"></i>
</button>

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
  border: none;
}

button:hover{
  color: goldenrod;
}

.offcanvas{
  z-index: 0;
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
</style>