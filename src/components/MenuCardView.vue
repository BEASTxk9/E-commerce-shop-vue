<template>
  <section v-if="products">
    <div class="container">
      <div class="row">
        <div class="col-sm-10">

          <div id="card" v-for="(product, index) in products" :key="index">
            <p>{{ product.Prod_name }} <span></span> R{{ product.price }}</p>
            <p>{{ product.description }}</p>
          </div>

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
};
</script>

<style scoped>

</style>