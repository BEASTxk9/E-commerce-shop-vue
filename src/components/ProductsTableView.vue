<template>
  <section v-if="products">
    
    <div class="container-fluid">
      <!-- table header -->
      <div id="header" class="row py-1">
        <!-- header -->
        <div class="col-md-5 col-sm-5 text-start">
          <h1>PRODUCTS</h1>
        </div>

        <!-- add product -->
        <div class="col-md-1 col-sm-12 text-center">
          <AddProduct></AddProduct>
        </div>

        <!-- admin nav switch -->
        <div class="col-md-6 col-sm-12 text-end">
          <!-- user admin -->
          <router-link id="admin" to="/usersadmin"
            ><i class="fa-solid fa-user-lock"></i> User Admin</router-link
          >
          |
          <!-- products admin -->
          <router-link id="admin" to="/productsadmin"
            ><i class="fa-solid fa-bag-shopping"></i> Products
            Admin</router-link
          >
        </div>
      </div>

      <!-- table -->
      <div class="row">
        <!-- side nav -->
        <div id="sidenav" class="col-sm-12 col-md-1 px-2">
          <nav class="text-start">
            <router-link to="/landing">Home</router-link> <br /><br />

            <router-link to="/shop">Shop</router-link> <br /><br />

            <router-link to="/contact">Contact</router-link> <br /><br />
          </nav>
        </div>

        <!-- table -->
        <div class="col-sm-11">
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
              <th id="action">Action</th>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.Prod_id }}</td>
                <td id="name">{{ product.Prod_name }}</td>
                <td>{{ product.category }}</td>
                <td>R{{ product.price }}</td>
                <td id="description">"{{ product.description }}"</td>
                <td>
                  <img
                    class="img-fluid rounded"
                    id="img1"
                    :src="product.img1"
                    defer
                  />
                </td>
                <td>
                  <img
                    class="img-fluid rounded"
                    id="img2"
                    :src="product.img2"
                    defer
                  />
                </td>
                <td>{{ product.dateAdded }}</td>
                <td>
                  <div class="row">
                    <div class="col-sm-5">
                      <button
                        id="delete"
                        class="b btn-layout"
                        v-on:click="
                          $store.dispatch('deleteProduct', product.Prod_id)
                        "
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                    <div class="col-sm-5">
                      <update :product="product"></update>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>

  </section>

  <div v-else class="container">
    <Load></Load>
  </div>
</template>

<script>
import AddProduct from "./AddProductView.vue";
import update from "./UpdateProductView.vue";
import Load from "./LoaderComponenetView.vue";

export default {
  components: {
    AddProduct,
    update,
    Load,
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
    editproduct() {
      return this.$store.dispatch("editproduct", this.product);
    },
  },
};
</script>

<style scoped>
section {
  min-height: fit-content;
  margin-bottom: 4.3vh;
  border: 1px solid grey;
  overflow: scroll;
}

#header {
  border-bottom: 1px solid grey;
}

table {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.771);
  margin-bottom: 5rem;
  padding-top: 10px;
}

thead {
  border-left: 1px solid grey;
  border-right: 1px solid grey;
}

#admin {
  text-decoration: none;
  font-size: 2rem;
  color: white;
  font-family: "Libre Baskerville", serif;
  transition: all 0.3s ease-in-out;
}

#admin:hover {
  color: goldenrod;
}

h1 {
  color: goldenrod;
  font-family: "Libre Baskerville", serif;
}

#sidenav {
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
}

nav {
  border: none;
  background-image: transparent;
  background: transparent;
  font-family: "Libre Baskerville", serif;
}

#img1,
#img2 {
  display: block;
  object-fit: cover;
  width: 8vw;
  height: 8vh;
}

#name {
  width: 10vw;
}

#description {
  font-size: 13px;
  width: 28vw;
}

#action {
  padding: 0;
  width: 5vw;
}

#delete {
  margin-left: 5px;
}
</style>