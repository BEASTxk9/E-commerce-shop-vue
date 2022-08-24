<template>
<section>
<h1>product admin</h1>
<AddProduct></AddProduct>
<table class="table-fluid table-bordered">
<thead>
    <th>ID</th>
    <th>Name</th>
    <th>Category</th>
    <th>Price</th>
    <th>Description</th>
    <th>img1</th>
    <th>img2</th>
    <th>Date Added</th>
    <th>Action</th>
</thead>
<tbody>
    <tr v-for="(product, index) in products" :key="index">
    <td>{{product.Prod_id}}</td>
<td>{{product.Prod_name}}</td>
<td>{{product.category}}</td>
<td>R{{product.price}}</td>
<td>{{product.description}}</td>
<td>{{product.img1}}</td>
<td>{{product.img2}}</td>
<td>{{product.dateAdded}}</td>
<td>
    <div class="row">
        <div class="col-sm-5">
               <button id="delete" class="b btn-layout" 
               v-on:click="$store.dispatch('deleteProduct', product.Prod_id,)" >
                      <i class="fa-solid fa-trash" @click="reloadPage"></i>
                    </button>
        </div>
        <div class="col-sm-5">
            <update></update>
        </div>
    </div>
</td>
    </tr>
</tbody>
</table>

</section>
</template>

<script>
import AddProduct from './AddProductView.vue';

export default {
  components: {
AddProduct
  },

  mounted() {
    this.$store.dispatch("getproducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
}
</script>

<style>

</style>