<template>
  <div v-if="products">

    <div class="container">

      <div id="header" class="row">

        <div class="col-sm-1 text-start">
          <AddProduct></AddProduct>
        </div>

        <div class="col-sm-11 text-end">
          <h1>PRODUCT</h1>
        </div>

      </div>

      <div id="sidenav" class="row">

        <div class="col-sm-1 px-2">
          <nav class="text-start">
            <router-link to="/landing">Home</router-link> <br><br>

            <router-link to="/shop">Shop</router-link> <br><br>

            <router-link to="/menu">Menu</router-link> <br><br>

            <router-link to="/contact">Contact</router-link> <br><br>
            
              <div class="row">
              
              <div class="col-sm-5">
                       <!-- user admin -->
            <router-link to="/usersadmin"><i class="fa-solid fa-user-lock"></i></router-link> 
              </div>

              <div class="col-sm-5">
                <!-- products admin -->
            <router-link to="/productsadmin"><i class="fa-solid fa-bag-shopping"></i></router-link> 
              </div>

            </div>

          </nav>
        </div>

        <div class="col-sm-11 px-2">
          <table class="table-fluid table-bordered">
            <thead>
              <th class="px-2">ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
              <th>img1</th>
              <th>img2</th>
              <th>Date Added</th>
              <th id="action" class="px-2">Action</th>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.Prod_id }}</td>
                <td>{{ product.Prod_name }}</td>
                <td>{{ product.category }}</td>
                <td>R{{ product.price }}</td>
                <td id="description">"{{ product.description }}"</td>
                <td> <img class="img-fluid rounded" id="img1" :src="product.img1" defer></td>
                <td> <img class="img-fluid rounded" id="img2" :src="product.img2" defer></td>
                <td>{{ product.dateAdded }}</td>
                <td>
                  <div class="row">
                    <div class="col-sm-5">
                      <button id="delete" class="b btn-layout"
                        v-on:click="$store.dispatch('deleteProduct', product.Prod_id,)">
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

        </div>

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
import AddProduct from './AddProductView.vue';
import update from './UpdateProductView.vue';

export default {
  components: {
    AddProduct,
    update
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

<style scoped>
table {
  background-color: rgba(0, 0, 0, 0.771);
  margin-bottom: 5rem;
  overflow-x: scroll;
  padding-bottom: 1rem;
}

thead {
  border-left: 0.3px solid grey;
  border-right: 0.3px solid grey;
  padding-top: 5px;
  padding-bottom: 5px;
}

#img1,
#img2 {
  display: block;
  object-fit: cover;
  width: 8vw;
  height: 8vh;
}

#description {
  font-size: 13px;
}

#sidenav {
  border-left: 1px solid grey;
  background-image: transparent;
  background: transparent;
}

nav {
  position: fixed;
  border: none;
    background-image: transparent;
  background: transparent;
}

#header {
  overflow-x: scroll;
  border: 1px solid grey;
  width: 101.5%;
  padding-top: 10px;
}

h1{
  color: goldenrod;
    font-family: 'Libre Baskerville', serif;
}


</style>