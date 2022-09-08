<template>
  <button
    class="button b btn-layout mx-1"
    data-bs-toggle="modal"
    :data-bs-target="'#exampleModal' + user.id"
  >
    <i class="fa-solid fa-pen-to-square"></i>
  </button>

  <!-- Modal1 -->
  <div
    class="modal fade"
    :id="'exampleModal' + user.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="'exampleModal' + user.id">
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
                    <option value="admin">Admin</option></select
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
</template>

<script>
export default {
  props: ["user"],
  data() {
    // insert data into empty array
    return {
      fullName: "",
      email: "",
      gender: "",
      dateOfBirth: "",
      phoneNO: "",
      userRole: "",
      password: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    edituser(e) {
      e.preventDefault();
      console.log(this.user);
      return this.$store.dispatch("edituser", this.user);
    },
  },
};
</script>

<style scoped>
.button {
  margin-right: 2rem;
}
</style>