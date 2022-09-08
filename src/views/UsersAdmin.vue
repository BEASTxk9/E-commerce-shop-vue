<template>
  <Nav></Nav>

  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <Admin></Admin>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/FakeNavView.vue";
import Admin from "../components/UsersTableView.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Admin,
  },
};
</script>