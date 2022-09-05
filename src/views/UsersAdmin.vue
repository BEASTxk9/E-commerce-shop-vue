<template>
<Nav></Nav>

<Admin></Admin>

</template>

<script>
import Nav from '../components/FakeNavView.vue';
import Admin from '../components/UsersTableView.vue';

export default {
  name: 'HomeView',
  components: {
  Nav,
  Admin
  }
}
</script>