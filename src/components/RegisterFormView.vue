<template>
  <section id="register">

    <div v-if="register" class="container">
      <div class="row justify-content-center text-center">
        <div class="col-sm-5">

          

          <form @submit.prevent="register" method="POST">

        <h1>Register Form</h1>

            <!-- fullName -->
            <label for="fullName">Full Name:</label><br>
            <input class="w-50" type="text" v-model="fullName" placeholder="Insert your Full Name" required><br>
            <!-- email -->
            <label for="email">Email:</label><br>
            <input class="w-50" type="email" v-model="email" placeholder="Insert your Email" required><br>

            <!-- gender -->
            <label for="gender">Gender:</label><br>
            <select class="w-50" v-model="gender"  required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
            </select><br>

            <!-- dateOfBirth -->
            <label for="dateOfBirth">Date Of Birth:</label><br>
            <input class="w-50" type="date" v-model="dateOfBirth" maxlength="10" placeholder="Insert your Date Of Birth"
              required><br>

            <!-- phoneNo -->
            <label for="phoneNO">Phone Number:</label><br>
            <input class="w-50" type="tel" v-model="phoneNO" placeholder="Insert your Phone Number" maxlength="10"
              required><br>

            <!-- password -->
            <label for="password">Password:</label><br>
            <input class="w-50" type="password" v-model="password" minlength="8" maxlength="15"
              placeholder="Insert your Password" required><br>
            <button class="mt-3 b btn-layout w-50" type="submit">Register</button>
             <p v-if="message">{{message}}</p>
          </form>

        </div>
      </div>
    </div>

    <div v-else class="container">
      <h1>loading</h1>
    </div>

  </section>
</template>

<script>
export default {

  data() {
    // insert data into empty array
    return {
      fullName: '',
      email: '',
      gender: '',
      dateOfBirth: '',
      phoneNO: '',
      password: '',
      message: ''
    }
  },

  methods: {
    register() {
      this.$store.dispatch('register', {
        fullName: this.fullName,
        email: this.email,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        phoneNO: this.phoneNO,
        password: this.password,
      });
      if(this.$store.state.users){
        this.message = this.$store.state.message;
      } 
       else{
        this.message = this.$store.state.message;
      } 
    }
  },

}
</script>

<style scoped>
#register{
  height: 89vh;
}
</style>