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

.underimglay1 p a{
  font-size: 1vw !important;
  font-family: 'RomainHeadlineTrial';
  font-family: 'GT-Sectra-Book-Italic';
}

.bgmobile a{
  font-size: 1vw !important;
  font-family: 'RomainHeadlineTrial';
  font-family: 'GT-Sectra-Book-Italic';
}

.underimglay2 div p:nth-child(1) a{
  font-size: 1.2vw !important;
  font-family: 'GT-Sectra-Book-Italic';
}

a {
  text-decoration: none;
  text-decoration: underline;
  font-style: italic;
  color: #000;
  transition: text-decoration 0.3s ease;
}


a:hover {
    /* text-decoration: underline; */
    transition: text-decoration 0.3s ease;
}

/* a {
    position: relative;
} */
@media only screen and (max-width: 768px) {
  .underimglay1 p a{
  font-size: 2.5vw !important;
  /* font-family: 'RomainHeadlineTrial'; */
  font-family: 'GT-Sectra-Book-Italic';
}

.underimglay2 div p:nth-child(1){
  font-size: 2.5vw !important;
  font-family: 'NHaas' !important;
}

.lay3text div p a{
  font-size: 2.5vw !important;
  font-family: 'GT-Sectra-Book-Italic';
}

.underimglay2 div p:nth-child(1) a {
    font-size: 2.5vw !important;
    font-family: 'GT-Sectra-Book-Italic';
}
}
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
