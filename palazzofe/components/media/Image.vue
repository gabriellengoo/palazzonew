<template>
  <div class="image-wrapper">
    <!-- Main Image -->
    <nuxt-img
      provider="sanity"
      :src="src"
            :modifiers="{ auto: 'format', fm: 'webp', w: 1000, fit: 'crop' }"
      fit="cover"
      :style="`aspect-ratio: ${aspect}`"
      :width="size ? size.width : ''"
      :height="size ? size.height : ''"
      :sizes="sizes ? sizes : 'sm:100vw md:100vw lg:3000px'"
      :preload="true"
      loading="lazy"
      fetchpriority="high"
      @load="handleLoad"
     
      :class="{ loaded: isLoaded }"
    />

    <!-- Placeholder Image -->
    <nuxt-img
      :src="src.replace('https://cdn.sanity.io/images/0i1cdi6a/production/', '')"
      class="blur-placeholder"
      :class="{ hidden: isLoaded }"
    />
  </div>
</template>


<script>
export default {
  props: ['src', 'crop', 'hotspot', 'aspect', 'sizes', 'size'],
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    handleLoad() {
      this.isLoaded = true;
    },
  },
};
</script>


<style scoped>
.image-wrapper {
  position: relative;
  overflow: hidden;
}

.blur-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
  filter: blur(2px);
  transition: opacity 0.5s ease-in-out;
}

.blur-placeholder.hidden {
  opacity: 0;
}

.main-image {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.main-image.loaded {
  opacity: 1;
}

</style>
