<template>
<Nav></Nav>
<section>

<Card></Card> 

</section>

</template>

<script>
import { computed } from '@vue/runtime-core';
import Nav from '../components/NavView.vue';
import Card from '../components/ProductsView.vue';


export default {
  name: 'HomeView',
  components: {
  Nav,
  Card
  },
 
}

</script>