<template>
<Nav></Nav>

  <h1>Admin Users</h1>
<Admin></Admin>

</template>

<script>
import Nav from '../components/NavView.vue';
import Admin from '../components/UsersTableView.vue';

export default {
  name: 'HomeView',
  components: {
  Nav,
  Admin
  }
}
</script>