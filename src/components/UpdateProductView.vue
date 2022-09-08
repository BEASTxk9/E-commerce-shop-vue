<template>
  <button
    class="button b btn-layout"
    data-bs-toggle="modal"
    :data-bs-target="'#exampleModal' + product.Prod_id"
  >
    <i class="fa-solid fa-pen-to-square"></i>
  </button>

  <!-- Modal1 -->
  <div
    class="modal fade"
    :id="'exampleModal' + product.Prod_id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">EDIT PRODUCT FORM</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-12">
                <form>
                  <label for="Prod_name">Product Name:</label><br />
                  <input
                    class="w-100"
                    type="text"
                    v-model="product.Prod_name"
                    placeholder="Enter Prod_name"
                    required
                  /><br />

                  <label for="category">Category:</label><br />
                  <select
                    class="w-100"
                    v-model="product.category"
                    id="category"
                  >
                    <option value="coffee">coffee</option>
                    <option value="tea">tea</option>
                    <option value="hot drink">hot drink</option>
                    <option value="cold drink">cold drink</option>
                    <option value="sandwhich">SANDWICHES</option>
                    <option value="burgers">burgers</option>
                    <option value="breakfast">breakfast</option>
                    <option value="lunch">lunch</option>
                    <option value="salads">salads</option>
                    <option value="cakes">cakes</option>
                    <option value="backery items">backery items</option></select
                  ><br />

                  <label for="price">Price:</label><br />
                  <input
                    class="w-100"
                    type="text"
                    v-model="product.price"
                    placeholder="Enter price"
                    required
                  /><br />

                  <label for="description">Description:</label><br />
                  <input
                    class="w-100"
                    type="text"
                    v-model="product.description"
                    placeholder="Enter description"
                    required
                  /><br />

                  <label for="img1">Image 1:</label><br />
                  <input
                    class="w-100"
                    type="text"
                    v-model="product.img1"
                    placeholder="Add image url"
                    required
                  /><br />

                  <label for="img2">image 2:</label><br />
                  <input
                    class="w-100"
                    type="text"
                    v-model="product.img2"
                    placeholder="img2"
                    required
                  /><br />

                  <button
                    type="submit"
                    class="mt-4 w-100 b btn-layout"
                    @click.prevent="editproduct"
                  >
                    SAVE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      Prod_name: "",
      category: "",
      price: "",
      description: "",
      img1: "",
      img2: "",
      dateAdded: "",
    };
  },

  methods: {
    editproduct() {
      console.log(this.product);
      this.$store.dispatch("editproduct", this.product);
    },
  },
};
</script>

<style scoped>
  input{
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>