<template>
<section>

<div class="row justify-content-center">
  <div class="col-sm-5">


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

           

            <button class="mt-3 b btn-layout w-50" type="submit" onclick="this.classList.toggle('button--loading')"><span class="button__text">Submit</span></button>


          </form>

          

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
  min-height: 89vh;
}

form{
  position: relative;
  top: 12vh;
}

textarea{
       background-color: rgb(29, 26, 26);
    color: grey;
    border: none;

}

h1{
  font-family: 'Libre Baskerville', serif;
  color: goldenrod;
}
</style>