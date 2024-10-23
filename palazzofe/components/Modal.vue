<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <iframe :src="pdfUrl" width="100%" height="500px"></iframe>
        <button class="close-btn" @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pdfUrl: {
        type: String,
        required: true,
      },
      isVisible: {
        type: Boolean,
        default: false,
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
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
  }
  
  .close-btn {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #f44336;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  