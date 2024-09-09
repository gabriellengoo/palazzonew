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
  const animation = lottie.loadAnimation({
    container: this.$refs.lottieContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: this.animationPath
  });

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxHeight;
    const frame = scrollPercent * animation.totalFrames;
    animation.goToAndStop(frame, true);
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
