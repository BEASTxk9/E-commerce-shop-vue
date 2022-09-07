<template>
<section class="showcase fixed-top">

  <div class="video-container">
    <div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/kywtr1?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" style="position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
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
  height: 99.8vh;
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
  z-index: 1;
  margin-top: -5rem;
  font-family: 'Libre Baskerville', serif;
  color: goldenrod;
}

h1{
  font-size: 5rem;
}

@media only screen and (max-width: 1250px) {

iframe{
  margin-top: -40vh;
  width: 400%;
  height: 400%;
}

h1{
  font-size: 6rem;
  position: relative;
}
}

@media only screen and (max-width: 994px) {
h1{
  font-size: 5rem;
}
}

@media only screen and (max-width: 600px) {
  h1{
  font-size: 4.5rem;
}
}

@media only screen and (max-width: 400px) {
  h1{
  font-size: 3.5rem;
}
}
</style>