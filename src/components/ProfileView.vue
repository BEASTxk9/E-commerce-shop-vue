<template>
  <!-- profile stuff -->
  <button class="bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling1"
    aria-controls="offcanvasScrolling1" data-bs-placement="bottom" title="Profile.">
    <i class="fa-solid fa-user"></i>
  </button>

  <div v-if="user" class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasScrolling1" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header text-center">
      <h1 class="offcanvas-title text-center" id="offcanvasScrollingLabel1">User Profile.</h1>
      <!-- close profile -->
      <button type="button" class="b1" data-bs-dismiss="offcanvas" aria-label="Close"><i
          class="fa-solid fa-arrow-right-from-bracket"></i></button>
    </div>
    <hr>
    <div class="offcanvas-body">

      <div class="container">

        <div class="row justify-content-center text-start">
          <div class="col-sm-12 py-2 text-end">
          <!-- settings -->
            <p
      class="mx-1 btn" type="button"
      data-bs-toggle="modal"
      :data-bs-target="'#exampleModal1' + user.id"
    >
    <i id="settings" class="fa-solid fa-gear"></i>
          </p>

             <!-- Modal1 -->
    <div
      class="modal fade"
      :id="'exampleModal1' + user.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="'exampleModal1' + user.id">
              EDIT USER PROFILE
            </h5>
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
                  <form>
                    <!-- fullName -->
                    <label for="fullName">Fullname:</label><br />
                    <input
                      class="w-50"
                      type="text"
                      v-model="user.fullName"
                      placeholder="Insert your Fullname"
                      required
                    /><br />
                    <!-- email -->
                    <label for="email">Email:</label><br />
                    <input
                      class="w-50"
                      type="email"
                      v-model="user.email"
                      placeholder="Insert your email"
                      required
                    /><br />
  
                    <!-- gender -->
                    <label for="gender">Gender:</label><br />
                    <select class="w-50" v-model="user.gender" required>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-Binary</option></select
                    ><br />
  
                    <!-- dateOfBirth -->
                    <label for="dateOfBirth">Date Of Birth:</label><br />
                    <input
                      class="w-50"
                      type="date"
                      v-model="user.dateOfBirth"
                      maxlength="10"
                      placeholder="Insert your Date Of Birth"
                      required
                    /><br />
  
                    <!-- phoneNo -->
                    <label for="phoneNO">Phone Number:</label><br />
                    <input
                      class="w-50"
                      type="tel"
                      v-model="user.phoneNO"
                      placeholder="Insert your Phone Number"
                      maxlength="10"
                      required
                    /><br />
  
                       <!-- gender -->
                       <label for="userRole">User Role:</label><br />
                    <select class="w-50" v-model="user.userRole" required>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select
                    ><br />
  
                    <!-- password -->
                    <label for="password">Password:</label><br />
                    <input
                      class="w-50"
                      type="password"
                      v-model="user.password"
                      minlength="8"
                      maxlength="15"
                      placeholder="Insert your Password"
                      required
                    /><br />
  
                    <button
                      class="mt-3 w-50 b btn-layout"
                      type="submit"
                      @click="edituser"
                    >
                      SAVE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

          </div>

          <div class="col-sm-4">
            <img src="https://i.postimg.cc/XJbk7hX2/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo.png"
              class="rounded-pill">
          </div>

          <div class="col-sm-7">
            <label for="name">Name:</label>
            <p class="data">"{{user.fullName}}"</p>
            <hr>
            <label for="email">Email:</label>
            <p class="data">"{{user.email}}"</p>

          </div>
          <hr>

          <div class="col-sm-12">
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

  <div v-else class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasScrolling1" aria-labelledby="offcanvasScrollingLabel">

    <!-- headder -->
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="offcanvasScrollingLabel1">User Profile.</h2>
      <button type="button" class="b1" data-bs-dismiss="offcanvas" aria-label="Close"><i
          class="fa-solid fa-arrow-right-from-bracket"></i></button>
    </div>
    <hr>
    <div class="offcanvas-body text-center">

      <p>Your Not Logged in?<br>Please Login To View Your Profile.</p>

    </div>
  </div>



</template>

<script>

export default {
  props: ['user'],
  mounted() {
    this.$store.dispatch('getuser');
  },
computed: {
    users(){
        return this.$store.state.users;
    }
},
  methods: {
    edituser(){
      return this.$store.dispatch("edituser", this.user);
    },
  }
}
</script>

<style scoped>
button {
  color: white;
  font-size: 1.3rem;
  padding: 0;
  transition: all 0.3s ease-in-out;
  border: 1px solid grey;
  border-radius: 360px;
  width: 33px;
}

button:hover {
  color: goldenrod;
  border: 1px solid goldenrod;
}

#settings{
font-size: 1.5rem;
transition: all 0.3s ease-in-out;
}

#settings:hover{
  transform: rotate(150deg);
}

.offcanvas {
  background-color: rgb(29, 26, 26);
  color: grey;
  z-index: 1;
  flex: wrap;
  display: flex;
}

img {
  height: 15vh;
  width: 15vh;
  position: relative;
  left: -1.5vw;
}

p {
  color: goldenrod;
  font-weight: bold;
  font-size: 0.8rem;
}

p:hover{
  color: goldenrod;
}

.offcanvas-title {
  color: goldenrod;
  font-family: 'Libre Baskerville', serif;
  font-weight: 500;
}

.b1 {
  background-color: transparent;
  color: grey;
  transition: all 0.3s ease-in-out;
}

.b1:hover {
  color: goldenrod;
}

label {
  color: grey;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: start;
}

.data {
  color: goldenrod;
}
</style>