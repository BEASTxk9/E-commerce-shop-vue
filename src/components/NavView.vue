<template>

  <nav class="container-fluid fixed-top">
    <div class="row">
      <div class="col-sm-1">
        <img id="logo"
          src="https://i.postimg.cc/wT80tLGN/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo-removebg-preview.png"
          defer>
      </div>

      <div id="links" class="col-sm-11">



        <router-link to="/landing">Home</router-link> 
        <router-link class="px-1" to="/shop">Shop</router-link> 
        <router-link to="/contact">Contact</router-link> 

                <!-- ADMIN -->
                <span v-if="user">
          <!-- user admin -->
          <router-link class="mx-1" id="admin" v-if="user.userRole == 'admin'" to="/usersadmin" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Users Admin Table."><i class="fa-solid fa-user-lock"></i>
          </router-link> 
          <!-- products admin -->
          <router-link id="admin" v-if="user.userRole == 'admin'" to="/productsadmin" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Products Admin Table." class="text-center p"><i class="fa-solid fa-bag-shopping"></i>
          </router-link>
        </span>

        <!-- cart -->
        <Cart></Cart> 

        <!-- user profile -->
        <Profile :user="user"></Profile>
        <!-- logout -->
        <router-link id="logout" to="/" data-bs-placement="bottom" title="Logout.">
          <i class="fa-solid fa-person-running px-1"></i>
          <i class="fa-solid fa-right-from-bracket"></i></router-link>

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
  mounted() {
    this.$store.dispatch('getuser');
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {

  }
}
</script>

<style scoped>
#logo {
  height: 90px;
  width: 90px;
  justify-content: start;
  text-align: start;
  align-content: start;
  align-items: start;
}

#links {
  padding-top: 2rem;
}

#admin{
  color: white;
  font-size: 1.3rem;
  padding: 0;
  transition: all 0.3s ease-in-out;
  border: 1px solid grey;
  border-radius: 360px;
  width: 33px;
}

#admin:hover{
  color: goldenrod;
  border: 1px solid goldenrod;
}

#logout{
  margin-left: 30px;
}

.p{
  margin-right: 5px;
}

/* main */
@media only screen and (max-width: 1024px) {

#logo{
  padding: o;
  height: 20px;

}
}
</style>