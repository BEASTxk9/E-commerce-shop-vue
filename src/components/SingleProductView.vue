<template>
  <div class="container" v-if="product">
    <div class="row">
      <div class="col-sm-12 col-lg-6 text-start">
        <router-link class="px-1" to="/shop">Back</router-link>
        <h1>{{ product[0].Prod_name }}.</h1>
        <h4 class="pb-3 pt-1">R{{ product[0].price }}</h4>
        <h3 class="pt-3">"{{ product[0].description }}"</h3>

        <div v-if="user">
          <button
            class="mt-3 b btn-layout w-50"
            type="button"
            @click="addcart"
          >
            <span class="button__text">Add To Cart</span>
          </button>
        </div>

        <div v-else>
          <p id="notlog">"Login to purchase online."</p>
        </div>
      </div>

      <div class="col-sm-12 col-lg-6">
        <div class="row">
          <div class="col-sm-12 text-end">
            <p id="count">
              <span>({{ product[0].category }})</span>
              <span class="b btn-layout"> {{ product[0].Prod_id }}/40 </span>
              <span> </span>
            </p>
          </div>
        </div>
        <router-link to="/shop">
          <img class="img-fluid rounded-pill" :src="product[0].img2" defer />
        </router-link>
      </div>
    </div>
  </div>

  <div v-else class="container">
    <Load></Load>
  </div>
</template>

<script>
import Load from "./LoaderComponenetView.vue";

export default {
  components: {
    Load,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    product() {
      return this.$store.state.product;
    },
  },
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mounted() {
    this.$store.dispatch("getproduct", this.$route.params.id);
    this.$store.commit("setProduct", null);
  },
  methods: {
    addcart() {
      const payload = {
        Prod_id: this.product[0].Prod_id,
      };
      this.$store.dispatch("addcart", payload);
    },
  },
};
</script>

<style scoped>
body {
  scroll-margin-block-start: 50vh;
  scroll-margin-block-start: 50px;
  scroll-margin: 50px;
}

.container {
  color: grey;
  min-height: 90vh;
  overflow-y: scroll;
}

span {
  font-family: "Libre Baskerville", serif;
  color: goldenrod;
  background-color: transparent;
}

a {
  font-size: 16px;
  color: goldenrod;
}

h1 {
  font-size: 6rem;
  font-family: "Libre Baskerville", serif;
  color: goldenrod;
}

img {
  image-rendering: auto;
  border: 1px solid goldenrod;
  padding: 0;
  margin: 0;
  height: 50vh;
  width: 50vh;
  max-width: 100%;
  max-height: 100%;
}

#notlog {
  color: goldenrod;
  font-size: 1.3rem;
  padding-top: 1.5rem;
}

@media only screen and (max-width: 991.9px) {
  img{
  height: 40vh;
  width: 40vh;
}

#count{
  display: none;
}
}
@media only screen and (max-width: 550px) {

  #count {
    display: none;
  }

  h1 {
    font-size: 4rem;
  }

  h3 {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 450px) {
  img{
  height: 30vh;
  width: 30vh;
}
}

@media only screen and (max-width: 400px) {

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1rem;
  }
}
</style>