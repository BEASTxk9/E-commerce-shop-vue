<template>
<Nav></Nav>
<section>
  <h1>Menu</h1>
<Card></Card>
</section>




</template>

<script>
import Nav from '../components/NavView.vue';
import Card from '../components/MenuCardView.vue';


export default {
  name: 'HomeView',
  components: {
  Nav,
  Card
  }
}
</script>