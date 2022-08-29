<template>
<section v-if="users">

    <div class="container">

      <div id="header" class="row">

        <div class="col-sm-1 text-start">
          <AddProduct></AddProduct>
        </div>

        <div class="col-sm-11 text-end">
          <h1>USERS</h1>
        </div>

      </div>

      <div id="sidenav" class="row">

        <div class="col-sm-1 px-2">
          <nav class="text-start">
            <router-link to="/landing">Home</router-link> <br><br>

            <router-link to="/shop">Shop</router-link> <br><br>

            <router-link to="/contact">Contact</router-link> <br><br>
            
            <div class="row">

              <div class="col-sm-5">
                       <!-- user admin -->
            <router-link to="/usersadmin"><i class="fa-solid fa-user-lock"></i></router-link> 
              </div>

              <div class="col-sm-5">
                <!-- products admin -->
            <router-link to="/productsadmin"><i class="fa-solid fa-bag-shopping"></i></router-link> 
              </div>

            </div>
     

            
          </nav>
        </div>

        <div class="col-sm-10 px-2">
         <table class="table-fluid table-bordered">
<thead>
    <th>ID</th>
    <th>Full Name</th>
    <th>Email</th>
    <th>Gender</th>
    <th>DOB</th>
    <th>Phone Number</th>
    <th>Password</th>
    <th>Join Date</th>
    <th class="px-2">Action</th>
</thead>
<tbody>
    <tr v-for="(user, index) in users" :key="index">
    <td>{{user.id}}</td>
<td>{{user.fullName}}</td>
<td>{{user.email}}</td>
<td>{{user.gender}}</td>
<td>{{user.dateOfBirth}}</td>
<td>+27 {{user.phoneNO}}</td>
<td id="password">{{user.password}}</td>
<td>{{user.joinDate}}</td>
<td>
    <div class="row">
        <div class="col-sm-4">
               <button id="delete" class="b btn-layout" 
               v-on:click="$store.dispatch('deleteuser', user.id,)" >
                      <i class="fa-solid fa-trash" @click="reloadPage"></i>
                    </button>
        </div>
        <div class="col-sm-4">
            <update></update>
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
import update from './UpdateUserView.vue';
import Load from './LoaderComponenetView.vue';


export default {
    components: {
update,
Load
    },
mounted(){
    this.$store.dispatch('getusers');
},
computed: {
    users(){
        return this.$store.state.users;
    }
},
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }

}
</script>

<style scoped>
section{
  min-height: 89vh;
}

table{
  background-color: rgba(0, 0, 0, 0.771);
  margin-bottom: 5rem;
}

thead{
  border-left: 0.3px solid grey;
    border-right: 0.3px solid grey;
    padding-top: 5px;
    padding-bottom: 5px;
}

h1{
  color: goldenrod;
  font-family: 'Libre Baskerville', serif;
}

#sidenav {
  border-left: 1px solid grey;
    background-image: transparent;
  background: transparent;
}

nav {
  border: none;
    background-image: transparent;
  background: transparent;
}

#header {
  overflow-x: scroll;
  border: 1px solid grey;
  width: 118.1%;
  padding-top: 10px;
}

#password{
  font-size: 10px;
}
</style>