<template>
  <!-- Modal1 -->
  <div class="modal fade" id="editprofile" tabindex="-1" v-if="user">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editprofile">EDIT PROFILE.</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-sm-12">
                <form>
                  <!-- fullName -->
                  <label for="fullName">Fullname:</label><br />
                  <input
                    type="text"
                    v-model="user.fullName"
                    placeholder="user"
                    required
                  /><br />
                  <!-- email -->
                  <label for="email">Email:</label><br />
                  <input
                    type="email"
                    v-model="user.email"
                    placeholder="Insert your email"
                    required
                  /><br />

                  <!-- gender -->
                  <label for="gender">Gender:</label><br />
                  <select v-model="user.gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-Binary</option></select
                  ><br />

                  <!-- dateOfBirth -->
                  <label for="dateOfBirth">Date Of Birth:</label><br />
                  <input
                    type="date"
                    v-model="user.dateOfBirth"
                    maxlength="10"
                    placeholder="Insert your Date Of Birth"
                    required
                  /><br />

                  <!-- phoneNo -->
                  <label for="phoneNO">Phone Number:</label><br />
                  <input
                    type="tel"
                    v-model="user.phoneNO"
                    placeholder="Insert your Phone Number"
                    maxlength="10"
                    required
                  /><br />

                  <!-- password -->
                  <label for="password">Password:</label><br />
                  <input
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

  <span v-else>
  </span>
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
  input, select, option{
    width: 100%;
  }

  label{
    text-align: center;
  }

</style>