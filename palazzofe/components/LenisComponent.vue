<template>
<div></div>
  </template>
  <script>
//   import { mapActions, mapMutations } from 'vuex'
//   import TransitionComponent from '~/components/TransitionComponent.vue';
  import Lenis from '@studio-freight/lenis'; 
  
  
  
  export default {
    data() {
      return {
        // lenis: null,
        // loading: true,
        // ... other data properties
      };
    },
    mounted() {
      const lenis = new Lenis()
  
  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  },
  
 
 
  }
  </script>
  