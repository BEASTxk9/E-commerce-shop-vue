<template>

<button class="btn-layout b mt-3" data-bs-toggle="modal"
          data-bs-target="#exampleModal">ADD PRODUCT</button>


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

<label for="Prod_name">Prod_name</label><br>
    <input type="text" v-model="Prod_name" placeholder="Enter Prod_name" required><br>

<label for="category">category:</label><br>
   <select name="category" id="category">
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
    <option value="backery items">backery items</option>
   </select><br>

<label for="price">price:</label><br>
    <input type="text" v-model="price" placeholder="Enter price" required><br>

<label for="description">Description:</label><br>
    <input type="text" v-model="description" placeholder="Enter description" required><br>

<label for="img1">Image 1:</label><br>
    <input type="text" v-model="img1" placeholder="Add image url" required><br>

     <label for="img2">image 2:</label><br>
    <input type="text" v-model="img2" placeholder="img2" required><br>

    <button class="mt-4 b btn-layout" @click="submit" 
    data-bs-target="#exampleModal"  data-bs-dismiss="modal"
              aria-label="Close">Add product</button>

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
data(){
    return{
  Prod_name: '',
       category: '',
       price: '',
       description: '',
       img1: '', 
       img2: '',
       dateAdded: ''
    }
},
methods: {
addProduct(){
this.$store.dispatch('addProduct', {
       Prod_name: this.Prod_name,
       category: this.category,
       price: this.price,
       description: this.description,
       img1: this.img1, 
       img2: this.img2,
       dateAdded: this.dateAdded
            })

}
}
}
</script>

<style>

</style>