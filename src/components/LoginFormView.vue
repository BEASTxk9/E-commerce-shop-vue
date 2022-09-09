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
      <form autocomplete="on">
            <h1>LOGIN</h1>

            <!-- email -->
            <label for="email">Email:</label><br />
            <input
              class="w-50"
              type="email"
              v-model="email"
              placeholder="Insert your email"
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
              type="button"
              @click="login"
              onclick="this.classList.toggle('button--loading')"
            >
              <span class="button__text">Login</span>
            </button>

            <p class="pt-3">
              Not Registered?
              <router-link id="link" to="/register"
                >Create an account.</router-link
              >
            </p>
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
    // insert empty object into form
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", payload);
    },
  },
};
</script>

<style scoped>

h1 {
  color: goldenrod;
  font-family: "Libre Baskerville", serif;
}

#link {
  text-decoration: none;
  color: goldenrod;
}

/* landing */
.showcase {
  overflow-x: hidden;
  height: 86vh;
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