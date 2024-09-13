<template>
  <main class="min-h-full">
      <!-- <LenisComponent /> -->
      <TransitionComponent />
      
    <transition name="fade">
      <Nuxt />
    </transition> 

    <transition name="fade">
      <!-- <LayoutHeader :class="$route.name !== 'index' ? 'md:flex' : ''" /> -->
    </transition> 
  </main>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions(["setTitle"]),
    ...mapMutations(["SET_FOOTER", "CLOSE_MENU"]),
  },
  data() {
    return {
      lenis: null,
      // loading: true,
      // ... other data properties
    };
  },
  mounted() {
    // const lenis = new Lenis()
    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })
    // function raf(time) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)
  },
  watch: {
    $route: function (value) {
      this.setTitle(false);
      this.SET_FOOTER(false);
      this.CLOSE_MENU();
    },
  },
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>