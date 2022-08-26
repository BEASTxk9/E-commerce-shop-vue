<template>
<div class="container" v-if="product">
<h1>single product card</h1>
</div>
  
  <div v-else class="container">
  <div class="row justify-content-center text-center h-100">
<div class="loader">
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
</div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>