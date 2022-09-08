<template>
  <nav class="fixed-top">
    <div class="row">
      <div class="col-sm-1">
        <img
          id="logo"
          src="https://i.postimg.cc/wT80tLGN/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo-removebg-preview.png"
          defer
        />
      </div>

      <div id="links" class="col-sm-11">
        <router-link class="b1 btn-layout1" to="/">Landing</router-link>
        <router-link class="b1 btn-layout1 px-1" to="/register">Register</router-link>
        <router-link class="b1 btn-layout1" to="/Login">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>


<style scoped>
#logo {
  height: 90px;
  width: 90px;
  justify-content: start;
  text-align: start;
  align-content: start;
  align-items: start;
}

#links {
  padding-top: 2rem;
}

/* main */
@media only screen and (max-width: 1024px) {
  #logo {
    display: none;
  }
  
}
</style>