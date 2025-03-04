<template>
  <div ref="lottieContainer"></div>
</template>

<script>
// import lottie from 'lottie-web';

// definePageMeta({
//   ssr: false,
// });

export default {
  props: {
    animationData: {
      type: Object,
      required: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottieContainer, // the container
      animationData: this.animationData,     // animation data
      renderer: 'svg',                       // svg renderer
      loop: this.loop,                       // loop
      autoplay: this.autoplay                // autoplay
    });
  }
};
</script>

<style scoped>
/* Add any styling needed */
</style>
