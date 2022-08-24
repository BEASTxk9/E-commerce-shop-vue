<template>
  <section>
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

<style>
</style>