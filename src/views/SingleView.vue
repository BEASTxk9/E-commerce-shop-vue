<template>
<Nav></Nav>
<section>
  <h1>Single</h1>
<Card></Card>
</section>
  



</template>

<script>
import Nav from '../components/NavView.vue';
import Card from '../components/SingleProductView.vue';


export default {
  name: 'HomeView',
  components: {
  Nav,
  Card
  }
}
</script>