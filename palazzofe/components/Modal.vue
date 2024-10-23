<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <img :src="imageSrc" alt="Popup Image" class="popup-image" />
      <button class="close-button" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.popup-image {
  max-width: 100%;
  max-height: 100%;
  max-width: 100%;
    max-height: 100%;
    width: auto;
    height: 90vh;

}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}


</style>
