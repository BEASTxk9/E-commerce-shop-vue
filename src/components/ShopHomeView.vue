<template>
  <section class="showcase fixed-top">
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
          src="https://streamable.com/e/kywtr1?autoplay=1&nocontrols=1"
          frameborder="0"
          width="100%"
          height="100%"
          allowfullscreen
          allow="autoplay"
          style="position: absolute; left: 0px; top: 0px; overflow: hidden"
        defer></iframe>
      </div>
    </div>

    <div id="data">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-12">
            <h1>ROASTED BEANS</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  min-height: 100vh;
}

/* landing */
.showcase {
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  z-index: -10;
}

.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  margin-top: 0rem;
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
  margin-top: -5rem;
}

/* logo */
div {
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: goldenrod;
  font-family: "Playfair Display", serif;
  position: relative;
  text-transform: uppercase;
  font-size: 7rem;
  margin: 0;
  font-weight: 400;
}

h1:after {
  background: none;
  content: attr(data-heading);
  left: 0;
  top: 0;
  z-index: -1;
  position: absolute;
  text-shadow: -1px 0 1px #c6bb9f, 0 1px 1px #c6bb9f,
    5px 5px 10px rgba(0, 0, 0, 0.4), -5px -5px 10px rgba(0, 0, 0, 0.4);
}

/* subheading */
#subheading {
  color: grey;
}

@media only screen and (max-width: 1250px) {
.showcase{
  height: 70vh;
}

  iframe {
    margin-top: -40vh;
    width: 400%;
    height: 400%;
  }

  h1 {
    font-size: 6rem;
    top: 6rem;
  }
}

@media only screen and (max-width: 994px) {
  h1 {
    font-size: 5rem;
    top: 6.5rem;
  }
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 4.5rem;
  }
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 3.5rem;
  }
}
</style>