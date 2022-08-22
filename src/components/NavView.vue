<template>
  <nav>
    <router-link to="/">Landing</router-link> |
      <router-link to="/landing">Home</router-link> |
       <router-link to="/shop">Shop</router-link> |
        <router-link to="/single">Single</router-link> |
         <router-link to="/contact">Contact</router-link> |
          <router-link to="/usersadmin">Users Admin</router-link> |
           <router-link to="/productsadmin">Products Admin</router-link> |
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