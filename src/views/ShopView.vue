<template>
<Nav></Nav>

  <h1>Shop</h1> <Search></Search>
<Card></Card> 

</template>

<script>
import Nav from '../components/NavView.vue';
import Card from '../components/ProductsView.vue';
import Search from '../components/SearchView.vue';


export default {
  name: 'HomeView',
  components: {
  Nav,
  Card,
  Search
  }
}
</script>