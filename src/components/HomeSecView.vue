<template>
<section class="showcase fixed-top">

  <div class="video-container">
<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/kywtr1?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
    </div>

  <div id="data" class="container">
      <div class="row justify-content-center text-center">
        <div class="col-sm-12">
<div>
	<h1>ROASTED BEANS</h1>
</div>
        </div>
      </div>


    </div>

</section>

</template>

<script>
export default {

}
</script>

<style scoped>
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
   z-index: -10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
}

iframe {
   z-index: -10;
  height: 100vh;
  width: 100vh;
}

.video-container {
   z-index: -10;
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
   z-index: -10;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
}

#data {
  z-index: 9;
  margin-top: -10rem;
}


/* logo */
div {
	display: flex;
	align-items: center;
	justify-content: center;
}

h1 {
    background: linear-gradient(to bottom, #cfc09f 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#3a2c0f 78%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
font-family: 'Playfair Display', serif;
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
    text-shadow: 
		-1px 0 1px #c6bb9f, 
		0 1px 1px #c6bb9f, 
		5px 5px 10px rgba(0, 0, 0, 0.4),
		-5px -5px 10px rgba(0, 0, 0, 0.4);
}

</style>