<template>
<div class="container" v-if="product">

<div class="row">

<div class="col-sm-6 text-start">

  <h1>{{product[0].Prod_name}}.</h1>
  <h4 class="pb-3 pt-1">R{{product[0].price}}</h4>
  <h3 class="pt-3">"{{product[0].description}}"</h3>

<button type="submit" class="b btn-layout mt-2">Add To Cart</button>

</div>

<div class="col-sm-6">
<div class="row">
  <div class="col-sm-12 text-end">
    <p> 
      <span>({{product[0].category}})</span> <span class="b btn-layout">
      {{product[0].Prod_id}}/40
    </span>
      <span>
      
       
      </span>
    </p>
  </div>
</div>
<router-link to="/shop">
  <img class="img-fluid rounded-pill" :src="product[0].img2" defer> 
      </router-link>

</div>

</div>




</div>
  
  <div v-else class="container">
<Load></Load>
</div>
</template>

<script>
import Load from './LoaderComponenetView.vue';


export default {
  components: {
  Load
},

    computed: {
      
        product() {
            return this.$store.state.product;
        },
    },
      mounted() {
        this.$store.dispatch("getproduct", this.$route.params.id);
        this.$store.commit('setProduct', null);
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
     background-color: transparent;
}

h1{
  font-size: 6rem;
   font-family: 'Libre Baskerville', serif;
     color: goldenrod;
}

img{
  image-rendering: auto;
  border: 1px solid goldenrod;
  height: 73vh;
  width: 32vw;
  max-width: 100%;
  max-height: 100%;
}
</style>