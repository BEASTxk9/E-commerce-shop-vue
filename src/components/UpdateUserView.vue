<template>
  <button class="b btn-layout mx-1" data-bs-toggle="modal"
          data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button>


  <!-- Modal1 -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">UPDATE PRODUCT FORM</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row justify-content-center">
              
                   <div class="col-sm-8">

<form @submit.prevent="updateuser" method="PUT">
            <!-- fullName -->
            <label for="fullName">Fullname:</label><br>
            <input class="w-50" type="text" v-model="fullName" placeholder="Insert your Fullname" required><br>
            <!-- email -->
            <label for="email">Email:</label><br>
            <input class="w-50" type="email" v-model="email" placeholder="Insert your email" required><br>

            <!-- gender -->
            <label for="gender">Gender:</label><br>
            <select class="w-50" v-model="gender" required>
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
            <button class="mt-3" type="submit">Register</button>
          </form>

        </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
computed: {
     data() {
    // insert data into empty array
    return {
      fullName: fullName,
      email: email,
      gender: gender,
      dateOfBirth: dateOfBirth,
      phoneNO: phoneNO,
      password: password,
    }
  },

  methods: {
    update() {
      this.$store.dispatch('updateuser', {
        fullName: this.fullName,
        email: this.email,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        phoneNO: this.phoneNO,
        password: this.password,
      });
    }
  },
    users(){
        return this.$store.state.users;
    }
},
mounted(){
    this.$store.dispatch('getusersAD');
},
}
</script>

<style scoped>
  button{
    margin-right: 2rem;
  }

</style>