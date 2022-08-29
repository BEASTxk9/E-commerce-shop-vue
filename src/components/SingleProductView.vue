<template>
<div class="container" v-if="product">

<div class="row">

<div class="col-sm-6 text-start">

  <h1>{{product[0].Prod_name}}.</h1>
  <h4 class="pb-3 pt-3">R{{product[0].price}}</h4>
  <h3 class="pt-5">"{{product[0].description}}"</h3>

<button type="submit" class="b btn-layout">Add To Cart</button>

</div>

<div class="col-sm-6">
<div class="row">
  <div class="col-sm-12 text-end">
    <p> <span>({{product[0].category}})</span> {{product[0].Prod_id}}/40</p>
  </div>
</div>
<img class="img-fluid rounded-pill" :src="product[0].img1">
</div>

</div>




</div>
  
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

    computed: {
        product() {
            return this.$store.state.product;
        }
    },
      mounted() {
        this.$store.dispatch("getproduct", this.$route.params.id)
    },
}
</script>

<style scoped>
.container{
  color: grey;
  min-height: 100vh;
}


span{
 font-family: 'Libre Baskerville', serif;
     color: goldenrod;
}

h1{
  font-size: 6rem;
   font-family: 'Libre Baskerville', serif;
     color: goldenrod;
}

img{
  border: 1px solid goldenrod;
  height: 80vh;
  width: 37vw;
}

</style>