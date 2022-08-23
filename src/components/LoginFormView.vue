<template>
<section>

    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-sm-10">

          <h1>Login Form</h1>

          <form @submit.prevent="login" method="POST">

            <!-- email -->
            <label for="email">Email:</label><br>
            <input class="w-50" type="email" v-model="email" placeholder="Insert your email" required><br>

            <!-- password -->
            <label for="password">Password:</label><br>
            <input class="w-50" type="password" v-model="password" minlength="8" maxlength="15"
              placeholder="Insert your Password" required><br>
            <button class="mt-3" type="submit">Register</button>
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
this.$store.dispatch('login', {
                email: this.email, 
                password: this.password,
            })
}
}

}
</script>

<style>

</style>