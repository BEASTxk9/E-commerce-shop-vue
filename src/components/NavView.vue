<template>
  <nav class="container-fluid fixed-top navbar-expand-lg">
    <div class="row">
      <div class="col-sm-12 col-md-1">
        <img
          id="logo"
          src="https://i.postimg.cc/wT80tLGN/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo-removebg-preview.png"
          defer
        />
      </div>

      <div id="links" class="col-sm-12 col-md-11">
        <router-link class="b1 btn-layout1" to="/landing">Home</router-link>
        <router-link class="px-1 b1 btn-layout1" to="/shop">Shop</router-link>
        <router-link class="b1 btn-layout1" to="/contact">Contact</router-link>

        <!-- cart -->
        <Cart :user="user"></Cart>

        <!-- user profile -->
        <Profile :user="user"></Profile>

        <!-- ADMIN -->
        <span v-if="user" class="dropdown px-1">
          <button
            v-if="user.userRole == 'admin'"
            class="dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ADMIN
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <!-- user admin -->
              <router-link
                class="mx-1"
                id="admin"
                v-if="user.userRole == 'admin'"
                to="/usersadmin"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Users Admin Table."
              >
                Users Admin<i class="fa-solid fa-user-lock"></i>
              </router-link>
            </li>
            <li>
              <!-- products admin -->
              <router-link
                id="admin"
                v-if="user.userRole == 'admin'"
                to="/productsadmin"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Products Admin Table."
                class="text-center p"
              >
                Products Admin<i class="fa-solid fa-bag-shopping px-1"></i>
              </router-link>
            </li>
          </ul>
        </span>

        <span id="v-else" v-else>
Not logged in?
        </span>

        <!-- logout -->
        <router-link
          id="logout"
          to="/"
          data-bs-placement="bottom"
          title="Logout."
        >
          <i class="fa-solid fa-person-running px-1 floating"></i>
          <i class="fa-solid fa-right-from-bracket"></i
        ></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Cart from "./CartView.vue";
import Profile from "./ProfileView.vue";

export default {
  components: {
    Cart,
    Profile,
  },
  mounted() {
    this.$store.dispatch("getuser");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
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

#admin {
  color: white;
  font-size: 1rem;
  text-decoration: none;
  padding: 0;
  transition: all 0.2s ease-in-out;
}

#v-else{
  color: goldenrod;
  font-size: 0.7rem;
}

.dropdown-menu {
  background-color: rgb(29, 26, 26);
  transition: all 0.2s ease-in-out;
  padding-left: 5px;
}

li:hover {
  background-color: grey;
}

.dropdown-toggle {
  color: white;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 5px;
  padding-top: 4px;
  padding-bottom: 1px;
  transition: all 0.3s ease-in-out;
}

.dropdown-toggle:hover {
  color: goldenrod;
  border: 1px solid goldenrod;
}

#logout {
  margin-left: 15px;
  color: red;
}

.p {
  margin-right: 5px;
}

.floating {
  animation-name: floating;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  color: red;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  25% {
    transform: translate(0, 5px);
  }
  75% {
    transform: translate(0, -5px);
  }
  100% {
    transform: translate(0, 0px);
  }
}

/* main */
@media only screen and (max-width: 775px) {
  #logo {
    display: none;
  }

  nav{
    justify-content: center;
    text-align: center;
  }
}

@media only screen and (max-width: 600px) {
  #logo {
    display: none;
  }

  a{
    font-size: 0.9rem;
    padding: 0;
  }

  .dropdown-toggle{
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 420px) {
#logout{
  margin: 0;
}

  a{
    font-size: 0.7rem;
  }

  .dropdown-toggle{
    font-size: 0.7rem;
  }
}

@media only screen and (max-width: 389px) {
  #logout {
    padding: 0;
  }

  a{
    font-size: 0.6rem;
  }

  .dropdown-toggle{
    font-size: 0.6rem;
  }
}


</style>