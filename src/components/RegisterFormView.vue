<template>

<section class="showcase w-100">

<div class="video-container">
  <div
    style="
      width: 100%;
      height: 0px;
      position: relative;
      padding-bottom: 56.25%;
    "
  >
    <iframe
      src="https://streamable.com/e/8e59m0?autoplay=1&nocontrols=1"
      frameborder="0"
      width="100%"
      height="100%"
      allowfullscreen
      allow="autoplay"
      style="position: absolute; left: 0px; top: 0px; overflow: hidden"
    defer></iframe>
  </div>
</div>
<transition name="fade" appear>
  <div id="data" class="container">
  <div class="row justify-content-center text-center">
    <div class="col-sm-5">
      <form @submit.prevent="register" method="POST">
            <h1>REGISTER</h1>

            <!-- fullName -->
            <label for="fullName">Full Name:</label><br />
            <input
              class="w-50"
              type="text"
              v-model="fullName"
              placeholder="Insert your Full Name"
              required
            /><br />

            <!-- gender -->
            <label for="gender">Gender:</label><br />
            <select class="w-50" v-model="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
</select
            ><br />

            <!-- dateOfBirth -->
            <label for="dateOfBirth">Date Of Birth:</label><br />
            <input
              class="w-50"
              type="date"
              v-model="dateOfBirth"
              maxlength="10"
              placeholder="Insert your Date Of Birth"
              required
            /><br />

            <!-- phoneNo -->
            <label for="phoneNO">Phone Number:</label><br />
            <input
              class="w-50"
              type="tel"
              v-model="phoneNO"
              placeholder="Insert your Phone Number"
              maxlength="10"
              required
            /><br />

            <!-- email -->
            <label for="email">Email:</label><br />
            <input
              class="w-50"
              type="email"
              v-model="email"
              placeholder="Insert your Email"
              required
            /><br />

            <!-- password -->
            <label for="password">Password:</label><br />
            <input
              class="w-50"
              type="password"
              v-model="password"
              minlength="8"
              maxlength="15"
              placeholder="Insert your Password"
              required
            /><br />

            <button
              class="mt-3 b btn-layout w-50"
              type="submit"
              onclick="this.classList.toggle('button--loading')"
            >
              <span class="button__text">Register</span>
            </button>

            <p v-if="message">{{ message }}</p>
          </form>
    </div>
  </div>
</div>
      </transition>

</section>
</template>

<script>
export default {
  data() {
    // insert data into empty array
    return {
      fullName: "",
      email: "",
      gender: "",
      dateOfBirth: "",
      phoneNO: "",
      password: "",
      message: "",
    };
  },

  methods: {
    register() {
      this.$store.dispatch("register", {
        fullName: this.fullName,
        email: this.email,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        phoneNO: this.phoneNO,
        password: this.password,
      });
      if (this.$store.state.users) {
        this.message = this.$store.state.message;
      } else {
        this.message = this.$store.state.message;
      }
    },
  },
};
</script>

<style scoped>

h1 {
  color: goldenrod;
  font-family: "Libre Baskerville", serif;
}

/* landing */
.showcase {
  overflow-x: hidden;
  height: 87vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0;
  margin: 0;
}

.video-container {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-container {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-container:after {
  content: "";
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
}

#data {
  z-index: 1;
  margin-top: -10rem;
}

@media only screen and (max-width: 1250px) {
  .showcase {
  height: 70vh;

}

  iframe {
    width: 400%;
    height: 400%;
  }
}
</style>