<template>
  <main class="min-h-full">
      <!-- <LenisComponent /> -->
      <TransitionComponent />
      
    <transition name="fade">
      <Nuxt />
    </transition> 

    <!-- <transition name="fade"> -->
      <!-- <LayoutHeader 
        :class="shouldShowHeader ? 'md:flex' : 'hidden'" 
      /> -->
      <!-- <LayoutHeader :class="$route.name !== 'index' || 'work/' || 'eventprojects/' ? 'md:flex' : 'hidden'" /> -->
            <!-- <LayoutHeadertest :class="$route.name !== 'index' ? 'md:flex' : ''" /> -->
    <!-- </transition>  -->
  </main>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
// import LenisComponent from "~/components/LenisComponent.vue";
import TransitionComponent from "~/components/TransitionComponent.vue";


export default {
  components: {
    TransitionComponent,
  },
  methods: {
    ...mapActions(["setTitle"]),
    ...mapMutations(["SET_FOOTER", "CLOSE_MENU"]),
  },
  computed: {
    shouldShowHeader() {
      // Check if the current route is the home page or slug pages
      const routeName = this.$route.name;
      return routeName !== 'index' && 
             routeName !== 'work' && 
             routeName !== 'ourevents';
    }
  },

  data() {
    return {
      lenis: null,
      // loading: true,
      // ... other data properties
    };
  },
  mounted() {
    console.log('%c ██╗ ██████╗ ', 'color: #ff6600; font-weight: bold; font-size: 12px;');
console.log('%c ██║ ██╔══██╗', 'color: #ff6600; font-weight: bold; font-size: 12px;');
console.log('%c ██║ ██████╔╝', 'color: #ff6600; font-weight: bold; font-size: 12px;');
console.log('%c ██║ ██╔═══╝ ', 'color: #ff6600; font-weight: bold; font-size: 12px;');
console.log('%c ██║ ██║     ', 'color: #ff6600; font-weight: bold; font-size: 12px;');
console.log('%c ╚═╝ ╚═╝     ', 'color: #ff6600; font-weight: bold; font-size: 12px;');

console.log('%c ██╗   ██╗  █████╗ ', 'color: #ff6600; font-weight: bold; font-size: 12px;');
console.log('%c ██║   ██║ ██╔══██╗', 'color: #ff6600; font-weight: bold; font-size: 12px;');
console.log('%c ██║   ██║ ███████║', 'color: #ff6600; font-weight: bold; font-size: 12px;');
console.log('%c ██║   ██║ ██╔══██║', 'color: #ff6600; font-weight: bold; font-size: 12px;');
console.log('%c ╚██████╔╝ ██║  ██║', 'color: #ff6600; font-weight: bold; font-size: 12px;');
console.log('%c  ╚═════╝  ╚═╝  ╚═╝', 'color: #ff6600; font-weight: bold; font-size: 12px;');

console.log('%c Site created by @is_this_gabrielle | The Internet Architect | 2025', 'color: #ff6600; font-size: 14px; font-weight: bold; text-shadow: 1px 1px #000;');
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
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: .7;
  transition: opacity 1s;
}
</style>