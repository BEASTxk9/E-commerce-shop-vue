<template>
  	<!-- profile stuff -->
      <button class="bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling1" aria-controls="offcanvasScrolling1">
        <i class="fa-solid fa-user"></i>
      </button>

<div v-if="user" class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling1" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasScrollingLabel1">User Profile.</h1>
    <button type="button"  class="b1" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
  </div>
  <div class="offcanvas-body">
  
    <div class="container">

<div class="row justify-content-center py-3">
    <img src="https://i.postimg.cc/XJbk7hX2/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo.png" class="rounded-pill">
</div>

        <div class="row justify-content-center text-start">
     <div class="col-sm-12">
               

    <p> <span>Name:</span> {{user.fullName}}</p>
    <p><span>Email:</span> {{user.email}}</p>
    <p><span>DOB:</span> {{user.dateOfBirth}}</p>
    <p><span>Phone Number:</span> 0{{user.phoneNO}}</p>
    <p><span>Join Date:</span> {{user.joinDate}}</p>
            </div>
        </div>
    </div>
  

  </div>
</div>



      <div v-else class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling1" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasScrollingLabel1">User Profile.</h1>
    <button type="button"  class="b1" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
  </div>
  <div class="offcanvas-body">
    <div class="container">
        <div class="row justify-content-center py-3 text-center">
    <img src="https://i.postimg.cc/XJbk7hX2/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo.png" class="rounded-pill">
    
    <p class="py-2">NOT LOGGED IN?</p>
</div>
    </div>
  
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

img{
    height: 33vh;
    width: 15vw;
}

.offcanvas-title{
    color: goldenrod;
    font-family: 'Libre Baskerville', serif;
    font-weight: 500;
}

.b1{
    background-color: transparent;
    color: black;
    transition: all 0.3s ease-in-out;
}

.b1:hover{
    color: goldenrod;
}

span{
    color: grey;
    font-weight: bold;
}

p{
    color: goldenrod;
}
</style>