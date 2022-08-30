<template>  
  <section class="showcase">
    <div class="video-container">
        <div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/j6ksxm?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
    </div>

    <div id="data">
        <div class="container">
            <div class="row justify-content-center">
<div class="col-sm-12">      
     <h1>ROASTED BEANS</h1>
</div>

                <div id="subheading" class="col-sm-8 text-secondary">
                    <h4>"Roasted Beans was created in 2010 in the USA. Our coffee beans are imported from Colombia which is one of the top five countries with the highest quality coffee beans."</h4>
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
section{
    margin-bottom:10vh;
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
  position: fixed;
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

/* subheading */
.subheading{
    color: grey
}
</style>