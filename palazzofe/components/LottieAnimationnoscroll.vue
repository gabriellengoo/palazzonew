<template>
  <div ref="lottieContainer" class="lottie-animation"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  props: {
    animationPath: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.initLottie();
  },
  methods: {
    initLottie() {
      lottie.loadAnimation({
        container: this.$refs.lottieContainer, // the DOM element to render the animation
        renderer: 'svg', // rendering mode
        loop: true, // whether to loop the animation
        autoplay: true, // whether to start the animation automatically
        path: this.animationPath // path to the Lottie JSON file
      });
    }
  }
};
</script>

<style scoped>
.lottie-animation {
  width: 100%;
  height: 100%;
}
</style>
