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
<td>{{user.password}}</td>
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

</section>
</template>

<script>
import update from './UpdateUserView.vue';

export default {
    components: {
update
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
</style>