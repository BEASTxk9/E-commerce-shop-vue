<template>
<div class="container" v-if="product">
<img class="img-fluid rounded" :src="product[0].img1">
<h1>{{product[0].Prod_name}}</h1>
<p>{{product[0].description}}</p>
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

</style>