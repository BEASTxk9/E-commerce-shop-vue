<template>
  <nav class="fixed-top">

      <router-link to="/landing">Home</router-link> |
       <router-link to="/shop">Shop</router-link> |
        <router-link to="/single">Single</router-link> |
          <router-link to="/menu">Menu</router-link> |
         <router-link to="/contact">Contact</router-link> |
          <router-link to="/usersadmin">Users Admin</router-link> |
           <router-link to="/productsadmin">Products Admin</router-link> |
               <router-link to="/">Logout</router-link> 
           <Cart></Cart>
  </nav>
</template>

<script>
import Cart from './CartView.vue';

export default {
components: {
    Cart
}
}
</script>

<style scoped>

</style>