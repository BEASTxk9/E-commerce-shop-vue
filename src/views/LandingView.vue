<template>
<Home></Home>
<Nav></Nav>

<About></About>


</template>

<script>
import Nav from '../components/NavView.vue';
import Home from '../components/HomeSecView.vue';
import About from '../components/AboutSecView.vue';

export default {
  name: 'HomeView',
  components: {
  Nav,
  Home,
  About
  }
}
</script>

<style scoped>

</style>