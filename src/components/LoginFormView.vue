<template>
<section id="login">

    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-sm-5">

         
          <!-- @submit.prevent="login" method="POST"  -->
          <form autocomplete="on">
           <h1>LOGIN</h1>

            <!-- email -->
            <label for="email">Email:</label><br>
            <input class="w-50" type="email" v-model="email" placeholder="Insert your email" required><br>

            <!-- password -->
            <label for="password">Password:</label><br>
            <input class="w-50" type="password" v-model="password" minlength="8" maxlength="15"
              placeholder="Insert your Password" required><br>

            <button class="mt-3 b btn-layout w-50" type="button" @click="login" onclick="this.classList.toggle('button--loading')"><span class="button__text">Login</span></button>
         

<p class="pt-3">Not Registered? <router-link id="link" to="/register">Create an account.</router-link> </p>

          </form>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {

data(){
// insert empty object into form
    return{
       email: '',
       password: '',
    }
},
methods: {
login(){
  const payload = {
    email: this.email,
    password: this.password
  }
this.$store.dispatch('login', payload)
}
}

}
</script>

<style scoped>
#login{
  height: 89vh;
}

form{
  position: relative;
  top: 12vh;
}

h1{
  color: goldenrod;
    font-family: 'Libre Baskerville', serif;
}

#link{
  text-decoration: none;
  color: goldenrod;
}
</style>