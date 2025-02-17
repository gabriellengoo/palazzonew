<template>
  <nuxt-img
    :src="src"
    provider="sanity"
    :modifiers="{ auto: 'format' }"
    fit="cover"
    :style="`aspect-ratio: ${aspect}`"
    :width="size ? size.width : ''"
    :height="size ? size.height : ''"
    :sizes="sizes ? sizes : 'sm:100vw md:100vw lg:3000px'"
    :preload="true"
    fetchpriority="high"
    loading="eager"
  />
</template>

<script>
export default {
  props: ['src', 'crop', 'hotspot', 'aspect', 'sizes', 'size'],
}
</script>

