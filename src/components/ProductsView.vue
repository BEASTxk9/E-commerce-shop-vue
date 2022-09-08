<template>
  <section v-if="products">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div id="subheading" class="col-sm-8">
          <h4>
            "Roasted Beans was created in 2010 in the USA. Our coffee beans are
            imported from Colombia which is one of the top five countries with
            the highest quality coffee beans."
          </h4>
        </div>

        <!-- search -->
        <div id="search" class="row justify-content-center">
          <h4>Search</h4>
          <!-- search -->
          <div id="sea" class="col-sm-12 col-md-3 text-end">
            <input
              type="text"
              placeholder="What are you looking for?"
              v-model="search"
              class="mb-5"
            />
          </div>

        <!-- category -->
          <div id="select" class="col-sm-12 col-md-3 text-start">
<label for="category">Category</label><br>
            <select v-model="search">
              <option></option>
              <option value="coffee">coffee</option>
              <option value="tea">Tea</option>
              <option value="burger">Burger</option>
              <option value="sandwich">Sandwich</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
            </select>

          </div>

          <!-- Price -->
          <div class="col-sm-12 col-md-3">
            <div class="row justify-content-center">
              <div class="col-sm-12">
                <label for="price">Price:</label>
              </div>

              <div class="col-sm-5 text-end">
                <button @click="priceBS">Lowest/Higest</button>
              </div>
              <div class="col-sm-5 text-start">
                <button @click="priceSB">
                Highest/Lowest</button>
              </div>
            </div>
          </div>

        </div>

        <!-- card -->
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-lg-3 col-md-5 col-sm-12"
          id="card"
        >
          <div class="card mt-2">
            <div id="no" class="col-sm-2 text-start">
              <p>
                <span>({{ product.category }})</span>
                {{ product.Prod_id }}/{{ products.length }}
              </p>
            </div>

            <div class="card-img col-sm-8">
              <router-link
                class="text-decoration-none bg-transparent"
                :to="{ name: 'single', params: { id: product.Prod_id } }"
              >
                <img class="img-fluid rounded-pill" :src="product.img1" defer />
              </router-link>
            </div>
            <div class="card-info">
              <p class="text-title">{{ product.Prod_name }}</p>
            </div>

            <div class="card-footer">
              <span class="text-title">R{{ product.price }}</span>

              <router-link
                class="text-decoration-none bg-transparent b btn-layout"
                :to="{ name: 'single', params: { id: product.Prod_id } }"
              >
                View
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-else class="container">
    <Load></Load>
  </div>
</template>

<script>
import Load from "./LoaderComponenetView.vue";

export default {
  name: "shop",
  props: ["product"],
  components: {
    Load,
  },

  data() {
    return {
      search: "",
    };
  },

  mounted() {
    this.$store.dispatch("getproducts");
  },
  computed: {
    products() {
      return this.$store.state.products?.filter((products) => {
        let isMatch = true;
        if (
          !products.category.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  methods: {
    priceBS() {
      const price = this.$store.state.products;
      price.sort((a, b) => {
        if (a.price < b.price) return -1;
        {
        }
      });
    },
    priceSB() {
      const price = this.$store.state.products;
      price.sort((b, a) => {
        if (a.price < b.price) return -1;
        {
        }
      });
    },
  },
};
</script>

<style scoped>
section {
  color: grey;
  min-height: 87vh;
  margin-top: 100vh;
  padding-bottom: 2rem;
  padding-top: 7rem;
}

#search {
  padding-top: 5px;
  border-radius: 20px;
  background-color: goldenrod;
  color: white;
  margin-bottom: 20px;
}

#search label{
  font-size: 1.5rem;
}

input {
  padding: 3.5px;
  outline: none;
}

h4 {
  font-family: "Libre Baskerville", serif;
}

.card {
  height: 46vh;
  padding: 10px;
  margin-left: 7.5px;
  margin-right: 7.5px;
  margin-bottom: 15px;
  background-color: rgb(29, 26, 26);
  color: grey;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s ease-in-out;
}

img {
  image-rendering: crisp-edges;
  height: 25vh;
  width: 25vh;
  border: 1px solid goldenrod;
  transition: all 0.3s ease-in-out;
}

img:hover {
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.547);
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.card-img {
  background-color: transparent;
  height: 40%;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease;
}

.card-info {
  padding-top: 8vh;
}

.card-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid goldenrod;
}

#no {
  padding: 0;
  margin: 0;
  width: fit-content;
  height: 23px;
}

/*Text*/
.text-title {
  font-weight: 900;
  font-size: 0.9em;
  line-height: 1.5;
  color: goldenrod;
  font-family: "Libre Baskerville", serif;
}

.text-body {
  font-size: 0.9em;
  padding-bottom: 10px;
  color: grey;
}

#description {
  font-size: 0.8rem;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  img {
    height: 20vh;
    width: 20vh;
  }
}

@media only screen and (max-width: 350px) {
  img {
    height: 10vh;
    width: 10vh;
  }
}
</style>