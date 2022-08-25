<template>
  <nav class="fixed-top">

      <router-link to="/landing">Home</router-link> |
       <router-link to="/shop">Shop</router-link> |
        <router-link to="/single">Single</router-link> |
          <router-link to="/menu">Menu</router-link> |
         <router-link to="/contact">Contact</router-link> |
         <!-- user admin -->
          <router-link to="/usersadmin"><i class="fa-solid fa-user-lock"></i></router-link> |
          <!-- products admin -->
           <router-link to="/productsadmin"><i class="fa-solid fa-bag-shopping"></i></router-link> |
           <!-- logout -->
               <router-link to="/"><i class="fa-solid fa-right-from-bracket"></i></router-link> 
  
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