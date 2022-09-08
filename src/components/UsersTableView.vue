<template>
  <section v-if="users">
    <div class="container-fluid">
      <!-- table header -->
      <div id="header" class="row">
        <!-- header -->
        <div class="col-md-6 col-sm-12 text-start">
          <h1>USERS</h1>
        </div>

        <!-- admin nav switch -->
        <div class="col-sm-12 col-md-6">
          <!-- ADMIN -->
          <span class="dropdown px-1">
            <button
              class="button b btn-layout dropdown-toggle"
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
        </div>
      </div>

      <!-- table -->
      <div class="row">
        <!-- side nav -->
        <div id="sidenav" class="col-sm-12 col-md-1 px-2">
          <nav class="text-start">
            <router-link to="/landing">Home</router-link> <br /><br />

            <router-link to="/shop">Shop</router-link> <br /><br />

            <router-link to="/contact">Contact</router-link> <br /><br />
          </nav>
        </div>

        <!-- table -->
        <div class="col-sm-11">
          <table class="table-fluid table-bordered">
            <thead>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Phone Number</th>
              <th>Password</th>
              <th>user Role</th>
              <th>Join Date</th>
              <th class="px-3">Action</th>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <td>{{ user.id }}</td>
                <td>{{ user.fullName }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.dateOfBirth }}</td>
                <td>+27 {{ user.phoneNO }}</td>
                <td id="password">{{ user.password }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.joinDate }}</td>

                <td>
                  <div class="row">
                    <div class="col-sm-4">
                      <button
                        id="delete"
                        class="b btn-layout"
                        v-on:click="$store.dispatch('deleteuser', user.id)"
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                    <div class="col-sm-4">
                      <update :user="user"></update>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <div v-else class="container">
    <Load></Load>
  </div>
</template>

<script>
import update from "./UpdateUserView.vue";
import Load from "./LoaderComponenetView.vue";

export default {
  components: {
    update,
    Load,
  },
  mounted() {
    this.$store.dispatch("getusers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    edituser() {
      return this.$store.dispatch("edituser", this.user);
    },
  },
};
</script>

<style scoped>
section {
  min-height: fit-content;
  margin-bottom: 4.3vh;
  border: 1px solid grey;
  overflow: scroll;
}

#header {
  border-bottom: 1px solid grey;
}

table {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.771);
  margin-bottom: 5rem;
  padding-top: 10px;
}

thead {
  border-left: 1px solid grey;
  border-right: 1px solid grey;
}
.button {
  margin-top: 10px;
}

#admin {
  color: grey;
  font-size: 1.05rem;
  text-decoration: none;
  padding: 0;
  transition: all 0.2s ease-in-out;
}

#admin:hover {
  color: goldenrod;
}

.dropdown-menu {
  background-color: rgb(29, 26, 26);
  transition: all 0.2s ease-in-out;
}

tr {
  transition: all 0.2s ease-in-out;
}

tr:hover {
  background-color: rgb(43, 43, 43);
}

h1 {
  color: goldenrod;
  font-family: "Libre Baskerville", serif;
}

#sidenav {
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
}

nav {
  border: none;
  background-image: transparent;
  background: transparent;
  font-family: "Libre Baskerville", serif;
}

#password {
  display: flex;
  font-size: 9px;
}
</style>