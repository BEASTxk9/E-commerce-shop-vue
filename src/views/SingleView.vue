<template>
<Nav></Nav>

<section>
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

<style scoped>
section{
  margin: 0;
  padding: 0;
  scroll-margin-block-start: 0vh;
  padding-bottom: 5vh;
}
</style>