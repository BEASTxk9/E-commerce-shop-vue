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
        <div class="col-sm-6">
          <form action="https://formspree.io/f/xayvpewl" method="POST" autocomplete="on">
           <h1>CONTACT US.</h1>

            <!-- fullname -->
            <label for="fullname">Full Name:</label><br>
            <input class="w-50" type="text" name="name" placeholder="Insert your Full Name" required><br>


            <!-- email -->
            <label for="email">Email:</label><br>
            <input class="w-50" type="email" name="email" placeholder="Insert your email" required><br>

<!-- message -->
<label for="message">Message:</label><br>
            <textarea name="message" id="message" cols="30" rows="1" placeholder="Got A Message?" class="w-50"></textarea><br>

           

            <button class="mt-3 mb-2 b btn-layout w-50" type="submit" onclick="this.classList.toggle('button--loading')"><span class="button__text">Submit</span></button>


          </form>

        </div>
      </div>
    </div>
          </transition>
 
  </section>


</template>

<script>
import Load from "../components/LoaderComponenetView.vue";

export default {
  name: "HomeView",
  components: {
    Load,
  },
};
</script>

<style scoped>
body {
  overflow-x: none;
}

Nav {
  background-color: transparent;
  background-image: none;
  border: none;
  z-index: 1;
}

form {
  background-color: rgba(21, 20, 20, 0.923);

}

textarea{
  border: none;
  background-color: transparent;
  padding-top: 5px;
  padding-bottom: 5px;
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
