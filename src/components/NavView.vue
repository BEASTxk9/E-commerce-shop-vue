<template>

  <nav class="container-fluid fixed-top">
    <div class="row">
      <div class="col-sm-12 col-md-1">
        <img id="logo"
          src="https://i.postimg.cc/wT80tLGN/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo-removebg-preview.png"
          defer>
      </div>

      <div id="links" class="col-sm-12 col-md-11">



        <router-link to="/landing">Home</router-link> 
        <router-link class="px-1" to="/shop">Shop</router-link> 
        <router-link to="/contact">Contact</router-link> 

        <!-- cart -->
        <Cart></Cart>

        <!-- user profile -->
        <Profile :user="user"></Profile>

                <!-- ADMIN -->              
<span v-if="user" class="dropdown px-1">
  <button class="b btn-layout dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ADMIN
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li>   
        <!-- user admin -->
          <router-link class="mx-1" id="admin" v-if="user.userRole == 'admin'" to="/usersadmin" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Users Admin Table.">
            Users Admin<i class="fa-solid fa-user-lock"></i> 
            
          </router-link> 
        </li>
    <li>        <!-- products admin -->
          <router-link id="admin" v-if="user.userRole == 'admin'" to="/productsadmin" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Products Admin Table." class="text-center p">
            Products Admin<i class="fa-solid fa-bag-shopping px-1"></i> 
          </router-link> 
        </li>
  </ul>
</span>

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
  color: grey;
  font-size: 1.05rem;
  text-decoration: none;
  padding: 0;
  transition: all 0.2s ease-in-out;
}

#admin:hover{
  color: goldenrod;
}

.dropdown-menu{
  background-color: rgb(29, 26, 26);
  transition: all 0.2s ease-in-out;
}

li:hover{
  background-color: grey;
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
 display: none;

}
}
</style>