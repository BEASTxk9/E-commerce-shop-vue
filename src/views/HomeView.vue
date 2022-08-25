<template>
<Nav></Nav>
<section class="showcase">
<div class="video-container">
<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/ex64s5?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;" defer></iframe></div>
</div>

<div id="data">
<h1>landing</h1>
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

Nav{
  background-color: transparent;
  background-image: none;
  border: none;
  z-index: 1;
}

/* landing */
.showcase {
    overflow-x: hidden;
    height: 85vh;
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

iframe{
height: 100vh;
width: 100vh;
}

.video-container{
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

#data{
  z-index: 1;
}


@media only screen and (max-width: 1250px) {
  iframe{
    width: 400%;
    height: 400%;
  }
}
</style>
