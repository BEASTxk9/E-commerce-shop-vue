<template>
 
	<!-- cart stuff -->
  <button class="bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-cart4"></i></button>

<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasScrollingLabel">Your Cart</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
button{
  color: white;
  font-size: 1.3rem;
  padding: 0;
  transition: all 0.3s ease-in-out;
}

button:hover{
  color: goldenrod;
}
</style>