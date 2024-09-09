<template>
  <div>
    <transition name="screen-transition" mode="out-in">
      <div v-if="isTransitionActive" class="black-screen"></div>
    </transition>

    <!-- Text content outside the black-screen div -->
    <div v-if="isTransitionActive" class="white-screen"></div>
    <div class="text-content" :class="{ 'active': isTextVisible }">
      <div class="flex uppercase w-screen content-center flex-wrap text-[#2a2a2a] h-screen justify-center p-10">
        <div>
          <!-- <h1 :class="{ 'active': isTextVisible }" class="titleText text-[4rem] leading-[4rem] md:text-[4rem] md:leading-[4.5rem] text-center uppercase">
            Coralie rose
            
          </h1> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isTransitionActive: true,
      // isTextVisible: true,
      isTransitionActive: false,
      isTextVisible: false
    };
  },
  methods: {
    toggleTransition() {
      this.isTransitionActive = true;

      // Set a timeout to show the text after 1.5 seconds
      setTimeout(() => {
        this.isTextVisible = true;
      }, 1500); // Delay text visibility by 1.5 seconds

      // Set a timeout to hide the text and end the transition after 3.5 seconds
      setTimeout(() => {
        this.isTextVisible = false;
        this.isTransitionActive = false;
      }, 5000); // Adjust the duration of text visibility as needed
    }
  },

  created() {
    // Call toggleTransition when the component is created to start the transition
    this.toggleTransition();
  }
};
</script>

<style scoped>
.titleText {
  opacity: 0;
  transition: opacity 1s ease;
}

.titleText.active {
  opacity: 1;
}

.text-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  color: #1d1d1b;
  z-index: 100003;
  transition: opacity 1s ease; /* Add transition for opacity */
}

.text-content.active {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, -50%);
}

/* Styles for the black screen transition */
.black-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 3.5s ease; /* Adjust the duration to match the transition */
  background-color: #fff; 
  /* background: rgba(255, 255, 255, 0.752); */
  z-index: 1000000002;
}

.white-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0;
  transition: opacity 3.5s ease; /* Adjust the duration to match the transition */
  z-index: 1000000001;
}

.white-screen.active {
  opacity: 1;
}

/* Transition animation */
.screen-transition-enter-active,
.screen-transition-leave-active {
  transition: opacity 3.5s ease; /* Adjust the duration to match the transition */
}

.screen-transition-enter {
  /* transition-delay: 2s; */
  opacity: 0;
}

.screen-transition-leave-to {
  opacity: 0;
}

.screen-transition-leave-to {
  /* transition-delay: 2s; */
}

/* Keyframe animation for the word "Casting" */
@keyframes slideInFromRight {
  0% {
    /* margin-right: 0px;  */
    transform: translateX(-20px);
    opacity: 0;
    /* opacity: 1; */
  }
  /* 25% {
    transform: translateX(-15px);
    opacity: 0;
  } */
  50% {
    transform: translateX(-10px);
    opacity: .2;
  }
  100% {
    /* margin-right: 200px;  */
    transform: translateX(0px);
    opacity: 1;
  }
}

.transition-word {
  transition-delay: .5s;
  animation: slideInFromRight 4s ease;
  display: inline-block;
  transform: translateX(0px);
  /* margin-right: 200px;  */
}

.transition-wordr {
  /* transition-delay: .2s; */
  animation: slideInFromRightr .5s ease;
  display: inline-block;
  /* transform: translateX(5px); */
  /* margin-right: 200px;  */
  transform: translateX(0px);
}

/* Keyframe animation for the word "rose" */
@keyframes slideInFromRightr {
  0% {
    /* margin-right: 0px;  */
    transform: translateX(-12px);
    opacity: 1;
  }
  100% {
    /* margin-right: 20px;  */
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
