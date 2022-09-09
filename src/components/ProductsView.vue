<template>
  <section v-if="products">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div id="subheading" class="col-sm-10">
          <h4>
            "Roasted Beans was created in 2010 in the USA. Our coffee beans are
            imported from Colombia which is one of the top five countries with
            the highest quality coffee beans."
          </h4>
        </div>


        <div class="col-sm-10">
          <label for="sortby" class="sortby">Sort By:</label><br>
          <button @click="priceBS" class="sortbtn b btn-layout">Lowest/Higest</button>
          <button @click="priceSB" class="sortbtn b btn-layout">
    Highest/Lowest</button>
    <form class="form mt-3 mb-5">
    <label for="search">
        <input required="" autocomplete="off" placeholder="Search?" id="search" type="text" v-model="search">
        <div class="icon">
            <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-on">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
            <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-off">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
        </div>
        <button type="reset" class="close-btn">
            <svg viewBox="0 0 20 20" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
            </svg>
        </button>
    </label>
</form>
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
          !products.Prod_name.toLowerCase().includes(this.search.toLowerCase())
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

#search-headings{
  font-size: 3rem;
  font-weight: bold;
  color: goldenrod;
  text-align: center;
  justify-content: center;
}

#subheading{
  color: goldenrod;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 5px;
}

#searchbar{
  background-color: rgba(21, 20, 20, 0.923);
  border-radius: 10px;
}

.sortby{
  font-size: 2rem;
  font-weight: bold;
  color: goldenrod;
}


::placeholder{
  background-color: rgba(21, 20, 20, 0.923);
  color: grey;
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
  -moz-transform: scale(1.05);
  -webkit-transform: scale(1.05);
  -o-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
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

.form {
  --input-bg: rgba(21, 20, 20, 0.923);
 /*  background of input */
  --padding: 1.5em;
  --rotate: 80deg;
 /*  rotation degree of input*/
  --gap: 2em;
  /*  gap of items in input */
  --icon-change-color: goldenrod;
 /*  when rotating changed icon color */
  --height: 10px;
 /*  height */

  padding-inline-end: 1em;
 /*  change this for padding in the end of input */
  background: var(--input-bg);
  position: relative;
  border-radius: 4px;
}

.form label {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--height);
}

.form input {
  background-color: rgba(21, 20, 20, 0.923);
  width: 100%;
  padding-inline-start: calc(var(--padding) + var(--gap));
  outline: none;
  background: none;
  border: 0;
}

.form svg {
  /* display: block; */
  color: grey;
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  position: absolute;
  height: 15px;
}

.icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.swap-off {
  transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
}

.close-btn {
  /* removing default bg of button */
  background: none;
  border: none;
  right: calc(var(--padding) - var(--gap));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  padding: 0.1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
}

.form input:focus ~ .icon {
  transform: rotate(var(--rotate)) scale(1.3);
}

.form input:focus ~ .icon .swap-off {
  opacity: 1;
  transform: rotate(-80deg);
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:focus ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .icon {
  transform: scale(1.3) rotate(var(--rotate))
}

.form input:valid ~ .icon .swap-off {
  opacity: 1;
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:valid ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .close-btn {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transition: 0s;
}

@media only screen and (max-width: 1125px) {
  img {
    height: 21vh;
    width: 21vh;
  }
}

@media only screen and (max-width: 767.9px) {
  img {
    height: 24vh;
    width: 24vh;
  }
}


@media only screen and (max-width: 350px) {
  img {
    height: 20vh;
    width: 20vh;
  }
}
</style>