<template>
<Nav></Nav>
<div v-if="true" class="container">
  <div class="row">
    <div class="col-sm-10">
<Admin></Admin>
    </div>
  </div>
</div>

<div v-else class="container">
<div class="loader">
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
</div>
</div>
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