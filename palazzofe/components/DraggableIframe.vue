<template>
    <div
      class="draggable-iframe"
      :style="{ top: position.y + 'px', left: position.x + 'px' }"
      @mousedown="startDrag"
    >
      <div class="header">
        <button @click="$emit('close')">
          <svg class="close-btn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" width="500" height="500" preserveAspectRatio="xMidYMid meet" style=" height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_2"><rect width="500" height="500" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_2)"><g transform="matrix(15.158522605895996,0,0,22.34870147705078,249.99996948242188,250.00001525878906)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1.4112499952316284,0,0,1,0,0)"><path fill="rgb(255,0,0)" fill-opacity="1" d=" M-10,-10 C-10,-10 10,10 10,10"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="1" d=" M-10,-10 C-10,-10 10,10 10,10"></path></g><g opacity="0" transform="matrix(1.389361023902893,0,0,1,0,0)"><path fill="rgb(255,0,0)" fill-opacity="1" d=" M10,0 C10,0 10,0 10,0"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="1" d=" M10,0 C10,0 10,0 10,0"></path></g><g opacity="1" transform="matrix(1.3872150182724,0,0,1,0,0)"><path fill="rgb(255,0,0)" fill-opacity="1" d=" M-10,10 C-10,10 10,-10 10,-10"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="1" d=" M-10,10 C-10,10 10,-10 10,-10"></path></g></g></g></svg>
        </button>
      </div>
      <iframe :src="iframeSrc" frameborder="0" class="iframe-content"></iframe>
    </div>
  </template> 
  
  <script>
  export default {
    props: {
      iframeSrc: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        position: {
        x: window.innerWidth * 0.05, // 10vw
        y: window.innerHeight * -0.38, // 10vh
      },
        dragging: false,
        offset: { x: 0, y: 0 },
      }; 
    },
    methods: {
      startDrag(event) {
        this.dragging = true;
        this.offset.x = event.clientX - this.$el.offsetLeft;
        this.offset.y = event.clientY - this.$el.offsetTop;
        document.addEventListener("mousemove", this.onDrag);
        document.addEventListener("mouseup", this.stopDrag);
      },
      onDrag(event) {
        if (this.dragging) {
          this.position.x = event.clientX - this.offset.x;
          this.position.y = event.clientY - this.offset.y;
        }
      },
      stopDrag() {
        this.dragging = false;
        document.removeEventListener("mousemove", this.onDrag);
        document.removeEventListener("mouseup", this.stopDrag);
      },
    },
  };
  </script>
  
  <style scoped>
  .draggable-iframe {
    position: absolute;
    width: 400px;
    height: 300px;
    border: 1px solid #ccc;
    background: #fff;
    /* background: #fff; */
    /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); */
    z-index: 1000;
    cursor: move;
    position: absolute;
  top: 10%; /* Default position */
  left: 55vw; /* Default position */
  height: 25vw;
    width: 40vw;
    /* border: 0.5px solid black; */
  /* background: white;
  background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  z-index: 1000;
  cursor: grab;
  display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
  
  .header {
    /* background-image: url("./static/background.jpg");
    background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  border-bottom: 0.5px solid black;
    /* background: #f4f4f4; */
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    pointer-events: all;
  }
  
  .iframe-content {
    width: 100%;
    height: calc(100% - 40px);
  }

  .close-btn{
  width: 1.4vw;
}


@media only screen and (max-width: 768px) {

  .close-btn{
  width: 4.4vw;
}

.draggable-iframe {
    width: 400px;
    height: 300px;
    border: 1px solid #000000;
 
    /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); */
    cursor: move;
    position: absolute;
    top: 10%;
    left: 55vw;
    height: 75vw;
    width: 90vw;
    /* border: 0.5px solid black; */
    /* background: white; */
    /* background-image: url(/_nuxt/static/background.jpg); */
    /* background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    z-index: 1000;
    cursor: grab;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}
}
  </style>
  