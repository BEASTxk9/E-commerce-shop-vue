<template>
  <section class="py-1">
    <div id="data">
    <h1 class="text-center">ABOUT US.</h1>
    <div class="container">
      <div class="row text-start justify-content-center">
        <!-- img col -->
        <div id="img" class="col-sm-12 col-md-6 col-lg-5">
<img class="rounded" src="https://i.postimg.cc/wxk7ptDY/robert-euro-djojoseputro-ot-Eky1qwe-Cg-unsplash-2.jpg" defer>
        </div>

        <!-- text col -->
        <div id="about" class="col-sm-12 col-md-6 col-lg-5 text-start">

<h2 class="text-center py-1">ROASTED BEANS</h2>

          <p>Roasted Beans is a well established restaurant that
            specialises in coffee however we also sell some of
            the best bakery items, pastries, breakfast, lunch
            and supper meals.</p>

          <p>Roasted Beans was created in 2010 in the USA. Our
            coffee beans are imported from Colombia which is
            one of the top five countries with the highest quality coffee beans.</p>

          <p>
            We have recently expanded our business to Cape
            Town, South Africa. You can visit us in Plumstead,
            49 Cocolain rd (fake address) or you can order online. We hope to hear from you soon.
           <br>Kind regards - <span>"Staff of Roasted Beans."
            </span>
          </p>
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
section {
  z-index: 10;
  margin-top: 100vh;
}

img{
  height: 80vh;
  position: relative;
  top: 1vh;
  box-shadow: 0px 0px 21px rgba(255, 255, 255, 0.5);
}

h1, h2{
  color: goldenrod;
    font-family: 'Libre Baskerville', serif;
    padding-bottom: 1rem;
}

p{
  font-size: 1.56rem;
}

span{
  color: goldenrod;
}

.container{
  margin-bottom:48.5vh;
}

#data{
  position: relative;
  top: 14vh;
}

@media only screen and (max-width: 1250px) {
  p{
  padding-left: 10px;
  font-size: 1.2rem;
}

#img{
  padding-bottom: 4vh;
  text-align: center;
justify-content: center;
}

}

@media only screen and (max-width: 1075px) {
  p{
  padding-left: 10px;
  font-size: 1.15rem;
}

#img{
  padding-bottom: 4vh;
  text-align: center;
justify-content: center;
}

}

@media only screen and (max-width: 994px) {
  p{
  padding-left: 10px;
  font-size: 1.1rem;
}

#img{
  padding-bottom: 4vh;
}
}

@media only screen and (max-width: 600px) {
#about{
text-align: start;
justify-content: center;
}

#img{
  padding-bottom:4vh;
}

img{
  height: 60vh;
}
}

@media only screen and (max-width: 400px) {

  img{
  height: 55vh;
  position: relative;
  top: 1vh;
  box-shadow: 0px 0px 21px rgba(255, 255, 255, 0.5);
}

p{
  padding-left: 10px;
  font-size: 1rem;
}
}

@media only screen and (max-width: 320px) {

img{
height: 40vh;
position: relative;
top: 1vh;
box-shadow: 0px 0px 21px rgba(255, 255, 255, 0.5);
}

}
</style>