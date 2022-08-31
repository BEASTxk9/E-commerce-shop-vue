<template>
  <nav class="fixed-top">
<div class="row">
    <div class="col-sm-1">
 <img id="logo" src="https://i.postimg.cc/wT80tLGN/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo-removebg-preview.png" defer>
    </div>

    <div id="links" class="col-sm-11">
     <router-link to="/landing">Home</router-link> |
       <router-link to="/shop">Shop</router-link> |
         <router-link to="/contact">Contact</router-link> |
         <!-- cart -->
<Cart></Cart> |

<!-- user profile -->
<Profile :user="user"></Profile> |

         <!-- user admin -->
          <router-link to="/usersadmin"><i class="fa-solid fa-user-lock"></i></router-link> |
          <!-- products admin -->
           <router-link to="/productsadmin"><i class="fa-solid fa-bag-shopping"></i></router-link> |
           <!-- logout -->
               <router-link to="/"><i class="fa-solid fa-right-from-bracket"></i></router-link> 
    </div>
</div>


 
  
  </nav>
</template>

<script>
import Cart from './CartView.vue';
import Profile from './ProfileView.vue';

export default {
components: {
    Cart,
    Profile
},
mounted(){
    this.$store.dispatch('getuser');
},
computed: {
    user(){
        return this.$store.state.user;
    }
},
}
</script>

<style scoped>
 #logo{
height: 90px;
width: 90px;
justify-content: start;
text-align: start;
align-content: start;
align-items: start;
 }

 #links{
    padding-top: 2rem;
 }
</style>