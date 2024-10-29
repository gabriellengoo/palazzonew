<template>
  <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <HeaderComponent />
      <div class="modal-header">
        <h1>{{ project.title }}</h1>
        <p>{{ project.year }}</p>
      </div>
      <div class="modal-body">
        <section v-if="project.slider">
          <div v-for="(slide, index) in project.slider" :key="slide._key">
            <MediaImage :src="slide.image.asset._ref" />
          </div>
        </section>
        <div v-if="project.content">
          <Richtext :blocks="project.content" />
        </div>
      </div>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalOpen: {
      type: Boolean,
      required: true,
    },
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close'); // Emit an event to notify the parent component
    },
  },
};
</script>

<style>
/* Add your modal styles here */
</style>
