<template>
<section>
<h1>user admin</h1>

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
    <th>Action</th>
</thead>
<tbody>
    <tr v-for="(user, index) in users" :key="index">
    <td>{{user.id}}</td>
<td>{{user.fullName}}</td>
<td>{{user.email}}</td>
<td>{{user.gender}}</td>
<td>{{user.dateOfBirth}}</td>
<td>{{user.phoneNO}}</td>
<td>{{user.password}}</td>
<td>{{user.joinDate}}</td>
<td>
    <div class="row">
        <div class="col-sm-5">
               <button id="delete" class="b btn-layout" 
               v-on:click="$store.dispatch('deleteuser', user.id,)" >
                      <i class="fa-solid fa-trash" @click="reloadPage"></i>
                    </button>
        </div>
    </div>
</td>
    </tr>
</tbody>
</table>

</section>
</template>

<script>
export default {
    
computed: {
    users(){
        return this.$store.state.users;
    }
},
mounted(){
    this.$store.dispatch('getusersAD');
},

  methods: {
    reloadPage() {
      window.location.reload();
    }
  }

}
</script>

<style>

</style>