<template functional>
  <!-- <div class="underline-container"> -->
    <a class="bg-yellow" :href="props.href" target="_blank" rel="noopener">
    <slot />
  </a>
<!-- </div> -->

 
</template>

<script>
export default {}
</script>

<style scoped>

/* .underline-container {
  display: inline-block;
  position: relative;
}

.underline-container::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  visibility: hidden;
  transform: scaleX(0); 
  transition: all 0.3s ease-in-out;
}

.underline-container:hover::after {
  visibility: visible;
  transform: scaleX(1);
} */

a {
  text-decoration: none;
  color: #000;
  transition: text-decoration 0.3s ease;
}


a:hover {
    text-decoration: underline;
    transition: text-decoration 0.3s ease;
}

/* a {
    position: relative;
} */

/* a::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
}

a:hover::before {
    opacity: 1;
} */


</style>
