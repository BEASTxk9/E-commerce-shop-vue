<template>
  <Nav></Nav>
  <section class="showcase">
    <div class="video-container">
      <div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe
          src="https://streamable.com/e/ex64s5?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%"
          allowfullscreen allow="autoplay"
          style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;" defer></iframe></div>
    </div>

    <div id="data" class="container">
      <div class="row justify-content-center text-center">
        <div class="col-sm-10">
          <h1 id="logo">ROASTED BEANS</h1>
        </div>
      </div>


    </div>



  </section>

</template>

<script>
import Nav from '../components/LandingNavView.vue'


export default {
  name: 'HomeView',
  components: {
    Nav
  }
}
</script>

<style scoped>
Nav {
  background-color: transparent;
  background-image: none;
  border: none;
  z-index: 1;
}

/* landing */
.showcase {
  overflow-x: hidden;
  height: 85.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}

.video-container {
  margin-top: -1px;
  position: fixed;
  z-index: -1px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  padding-top: -0.5rem;
  overflow: hidden;
}

iframe {
  height: 100vh;
  width: 100vh;
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
  content: '';
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

#logo{
   color: goldenrod;
  font-size: 4rem;
  font-family: 'Libre Baskerville', serif;
  text-shadow: 1px 7px 6px rgba(0, 0, 0, 1);
  text-shadow:     0 1px 0 rgb(37, 36, 26),
	                 0 2px 0 rgb(37, 36, 26),
	                 0 3px 0 rgb(37, 36, 26),
	                 0 4px 0 rgb(37, 36, 26),
	                 0 5px 0 rgb(37, 36, 26),
	                 0 6px 0 rgb(37, 36, 26),
	                 0 7px 0 rgb(37, 36, 26),
	                 0 8px 0 rgb(37, 36, 26),
	
	                 0 0 5px rgba(0,0,0,.05),
	                0 1px 3px rgba(0,0,0,.2),
	                0 3px 5px rgba(0,0,0,.2),
	               0 5px 10px rgba(0,0,0,.2),
	              0 10px 10px rgba(0,0,0,.2),
	              0 20px 20px rgba(0,0,0,.3);
}


@media only screen and (max-width: 1250px) {
  iframe {
    width: 400%;
    height: 400%;
  }
}
</style>
