<template>
<div class="container" v-if="product">
<h1>{{product[0].Prod_name}}</h1>
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
    props: ["Prod_id"],

  mounted() {
        this.$store.dispatch("getproduct", this.Prod_id)
    },
    computed: {
        product() {
            return this.$store.state.product
        }
    },
}
</script>

<style>

</style>