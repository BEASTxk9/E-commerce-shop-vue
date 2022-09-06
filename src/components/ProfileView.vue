<template>
  	<!-- profile stuff -->
      <button class="bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling1" aria-controls="offcanvasScrolling1" data-bs-placement="bottom" title="Profile.">
        <i class="fa-solid fa-user"></i>
      </button>

<div v-if="user" class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling1" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header text-center">
    <h1 class="offcanvas-title text-center" id="offcanvasScrollingLabel1">User Profile.</h1>
    <!-- close profile -->
    <button type="button"  class="b1" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
  </div>
  <div class="offcanvas-body">
  

    <div class="container">

<div class="row justify-content-center py-3">
    <img src="https://i.postimg.cc/XJbk7hX2/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo.png" class="rounded-pill">
</div>

<hr>

        <div class="row justify-content-center text-start">
     <div class="col-sm-12">
               

   <label for="name">Name:</label>
      <p class="data">"{{user.fullName}}"</p>
<hr>
      <label for="email">Email:</label>
      <p class="data">"{{user.email}}"</p>
  <hr>
      <label for="dateOfBirth">DOB:</label>
      <p class="data">"{{user.dateOfBirth}}"</p>
<hr>
      <label for="phoneNO">Phone Number:</label>
      <p class="data">+27 {{user.phoneNO}}</p>
<hr>
      <label for="joinDate">Join Date:</label>
  <p class="data">"{{user.joinDate}}"</p>
    <hr>
            </div>
        </div>

    </div>
  

  </div>
</div>



      <div v-else class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling1" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h2 class="offcanvas-title" id="offcanvasScrollingLabel1">User Profile.</h2>
    <button type="button"  class="b1" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
  </div>
  <div class="offcanvas-body text-center">

    <p>Your Not Logged in?<br>Please Login To View Your Profile.</p>
  
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
  border: 1px solid grey;
  border-radius: 360px;
  width: 33px;
}

button:hover{
  color: goldenrod;
  border: 1px solid goldenrod;
}

.offcanvas{
  background-color: rgb(29, 26, 26);
    color: grey;
    z-index: 1;
}

img{
    height: 25vh;
    width: 25vh;
}

.offcanvas-title{
    color: goldenrod;
    font-family: 'Libre Baskerville', serif;
    font-weight: 500;
}

.b1{
    background-color: transparent;
    color: grey;
    transition: all 0.3s ease-in-out;
}

.b1:hover{
    color: goldenrod;
}

label{
    color: grey;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: start;
}

.data{
    color: goldenrod;
}

</style>