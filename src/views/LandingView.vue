<template>
<Nav></Nav>

  <h1>Home</h1>
<Home></Home>

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