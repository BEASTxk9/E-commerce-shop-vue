<template>
  <button
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    class="icon-btn add-btn"
  >
    <div class="add-icon"></div>
    <div class="btn-txt">Add Product</div>
  </button>

  <!-- Modal1 -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">ADD PRODUCT FORM</h5>
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
              <div class="col-sm-8">
                <form @submit.prevent="addProduct" method="POST">
                  <label for="Prod_name">Product Name:</label><br />
                  <input
                    class="w-100"
                    type="text"
                    v-model="Prod_name"
                    placeholder="Insert Product Name."
                    required
                  /><br />

                  <label for="category">Category:</label><br />
                  <select class="w-100" name="category" id="category">
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
                    v-model="price"
                    placeholder="Insert price."
                    required
                  /><br />

                  <label for="description">Description:</label><br />
                  <input
                    class="w-100"
                    type="text"
                    v-model="description"
                    placeholder="Insert description."
                    required
                  /><br />

                  <label for="img1">Image 1:</label><br />
                  <input
                    class="w-100"
                    type="text"
                    v-model="img1"
                    placeholder="Inser image url."
                    required
                  /><br />

                  <label for="img2">Image 2:</label><br />
                  <input
                    class="w-100"
                    type="text"
                    v-model="img2"
                    placeholder="Inser image url."
                    required
                  /><br />

                  <button
                    class="mt-4 w-100 b btn-layout"
                    @click="submit"
                    data-bs-target="#exampleModal"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Add product
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
    addProduct() {
      this.$store.dispatch("addProduct", {
        Prod_name: this.Prod_name,
        category: this.category,
        price: this.price,
        description: this.description,
        img1: this.img1,
        img2: this.img2,
        dateAdded: this.dateAdded,
      });
    },
  },
};
</script>

<style scoped>
.modal-content {
  text-align: center;
  justify-content: center;
  background-color: black;
}

.btn-close {
  background-color: white;
}

/* From uiverse.io by @mrhyddenn */
.icon-btn {
  width: 50px;
  height: 50px;
  border: 1px solid grey;
  background: rgb(33, 31, 31);
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  transition: width 0.2s ease-in-out;
  font-weight: 500;
  font-family: inherit;
}

.add-btn:hover {
  width: 120px;
}

.add-btn::before,
.add-btn::after {
  transition: width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  content: "";
  position: absolute;
  height: 4px;
  width: 10px;
  top: calc(50% - 2px);
  background: goldenrod;
}

.add-btn::after {
  right: 14px;
  overflow: hidden;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

.add-btn::before {
  left: 14px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

.icon-btn:focus {
  outline: none;
}

.btn-txt {
  opacity: 0;
  transition: opacity 0.2s;
  padding-left: 5px;
  padding-right: 5px;
  color: grey;
}

.add-btn:hover::before,
.add-btn:hover::after {
  width: 4px;
  border-radius: 2px;
}

.add-btn:hover .btn-txt {
  opacity: 1;
}

.add-icon::after,
.add-icon::before {
  transition: all 0.2s ease-in-out;
  content: "";
  position: absolute;
  height: 20px;
  width: 2px;
  top: calc(50% - 10px);
  background: goldenrod;
  overflow: hidden;
}

.add-icon::before {
  left: 22px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

.add-icon::after {
  right: 22px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

.add-btn:hover .add-icon::before {
  left: 15px;
  height: 4px;
  top: calc(50% - 2px);
}

.add-btn:hover .add-icon::after {
  right: 15px;
  height: 4px;
  top: calc(50% - 2px);
}
</style>