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
        <div class="col-md-6 col-sm-12 text-center">
          <router-link class="b btn-layout a-tag" to="/landing">Home</router-link>
          <!-- ADMIN -->
          <span class="dropdown px-1">
            <button class="button b btn-layout dropdown-toggle" type="button" id="dropdownMenuButton1"
              data-bs-toggle="dropdown" aria-expanded="false">
              ADMIN
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <!-- user admin -->
                <router-link class="mx-1" id="admin" to="/usersadmin" type="button" data-bs-toggle="tooltip"
                  data-bs-placement="bottom" title="Users Admin Table.">
                  Users Admin<i class="fa-solid fa-user-lock"></i>

                </router-link>
              </li>
              <li>
                <!-- products admin -->
                <router-link id="admin" to="/productsadmin" type="button" data-bs-toggle="tooltip"
                  data-bs-placement="bottom" title="Products Admin Table." class="text-center p">
                  Products Admin<i class="fa-solid fa-bag-shopping px-1"></i>
                </router-link>
              </li>
            </ul>
          </span>
        </div>
      </div>

      <!-- table -->
      <div class="row">


        <!-- table -->
        <div class="col-sm-12">
          <table class="table-fluid table-bordered">
            <thead>
              <th class="px-2">ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th id="description-head">Description</th>
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
                  <img class="img-fluid rounded" id="img1" :src="product.img1" defer />
                </td>
                <td>
                  <img class="img-fluid rounded" id="img2" :src="product.img2" defer />
                </td>
                <td>{{ product.dateAdded }}</td>
                <td>
                  <div class="row">
                    <div class="col-sm-12">
                      <button id="delete" class="b btn-layout" v-on:click="
                        $store.dispatch('deleteProduct', product.Prod_id)
                      ">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                    <div class="col-sm-12">
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
  overflow-x: scroll;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.771);
  margin-bottom: 5rem;
  padding-top: 10px;
}

.a-tag{
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid grey;
  text-decoration: none;
}

thead {
  border-left: 1px solid grey;
  border-right: 1px solid grey;
}
.button {
  margin-top: 10px;
}

#admin {
  color: grey;
  font-size: 1.05rem;
  text-decoration: none;
  padding: 0;
  transition: all 0.2s ease-in-out;
}

#admin:hover {
  color: goldenrod;
}

.dropdown-menu {
  background-color: rgb(29, 26, 26);
  transition: all 0.2s ease-in-out;
}

tr {
  transition: all 0.2s ease-in-out;
}

tr:hover {
  background-color: rgb(43, 43, 43);
}

h1 {
  color: goldenrod;
  font-family: "Libre Baskerville", serif;
}

#img1,
#img2 {
  display: block;
  object-fit: cover;
  width: 8vw;
  height: 11vh;
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
  padding-right: 10px;
  margin-bottom: 5px;

}

#admin {
  color: grey;
  font-size: 1.05rem;
  text-decoration: none;
  padding: 0;
  transition: all 0.2s ease-in-out;
}

#admin:hover {
  color: goldenrod;
}

.dropdown-menu {
  background-color: rgb(29, 26, 26);
  transition: all 0.2s ease-in-out;
}

tr {
  transition: all 0.2s ease-in-out;
}

tr:hover {
  background-color: rgb(43, 43, 43);
}

@media only screen and (max-width: 940px) {
#description{
font-size: 0.5rem;
}
}

@media only screen and (max-width: 758px) {
#description, #description-head{
display: none;
}
}
</style>