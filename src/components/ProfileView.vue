<template>
  	<!-- profile stuff -->
      <button class="bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling1" aria-controls="offcanvasScrolling1">
        <i class="fa-solid fa-user"></i>
      </button>

<div v-if="user" class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling1" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasScrollingLabel1">Profile</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>{{user.fullName}}</p>
    <p>{{user.email}}</p>
    <p>{{user.dateOfBirth}}</p>
    <p>{{user.phoneNO}}</p>
    <p>{{user.joinDate}}</p>

  </div>
</div>



      <div v-else class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling1" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasScrollingLabel1">Profile</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <p>NOT LOGGED IN?</p>
  </div>
</div>



</template>

<script>
export default {
    props: ['user'],
    mounted(){
    this.$store.dispatch('getuser');
}
}
</script>

<style scoped>
button{
  color: white;
  font-size: 1.3rem;
  padding: 0;
  transition: all 0.3s ease-in-out;
  border: none;
}

button:hover{
  color: goldenrod;
}

.offcanvas{
    color: grey;
}
</style>