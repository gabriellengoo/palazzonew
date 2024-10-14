<template>
  <div
    class="bgmobile relative min-h-screen"
    :style="{ backgroundImage: 'url(/background.jpg)' }"
    @mousemove="handleMouseMove"
  >


  <div class="headera nodesnav content flex w-full justify-between">
      <h1 class="navmb navmbbord">
 
        <HeaderComponent />
      </h1>

      <h1 class="nodesk textmbhead">PALAZZO EVENTI</h1>

      <p class="navmbno yeart text-center text-4xl  uppercase ">
        Weddings
      </p>
      <p
        class="navmbno yeart w-[5vw] text-center text-4xl  uppercase "
      ></p>
      <p class="navmbno headingspages text-center text-4xl uppercase">
        palazzo eventi
      </p>
      <h1 class="navmbno w-[2vw]">
   
      </h1>
    </div>

 

    <div class="headera nomb content flex w-full justify-between">
        <h1  class="headingspages text-center text-4xl mb-6 uppercase pt-5 md:pt-2">
          <!-- <a href="../weddings"
            ><SvgClose class="headbar hover:cursor-pointer"
          /></a> -->
          <HeaderComponent @menu-toggled="isMenuOpen = $event" class="headbar w-[2vw] hover:cursor-pointer" />

        </h1>
        <!-- <p
          class="yeart text-center text-4xl mb-6 uppercase pt-5 md:pt-2"
          v-if="project"
        >
          {{ project.title }}
        </p>
        <p
          class="yeart text-center text-4xl mb-6 uppercase pt-5 md:pt-2"
          v-if="project"
        >
          {{ project.year }}
        </p> -->
        <p
          class="headingspages opacity-0 text-center text-4xl mb-6 uppercase pt-5 md:pt-2"
        >
          Weddings 
        </p>
        <h1 class="w-[2vw]">
          <!-- weddings -->
          <!-- <a href="../weddings"
                ><SvgClose class="headbar hover:cursor-pointer"
              /></a> -->
        </h1>
      </div>


    <!-- transform translate-y-[50vh] -->
    <div class="nomb":class="{ 'hidden-content': isMenuOpen }" id="main-content2">
      <transition name="fade">
        <img
          :src="currentImage"
          :key="currentImageIndex"
          class="absolute absolute-center inset-0 w-[100%] mx-auto top-[0vh]"
          alt="Cherubs"
        />
      </transition>
    </div>

    <div
      :class="{ 'hidden-content': isMenuOpen }"
      id="main-content"
      class="md:flex mbmain justify-center md:pt-0 lg:pt-0 xl:pt-0 items-start md:items-center lg:items-center xl:items-center h-screen"
    >
      <div class="textmainpg text-center">
        <h1
          class="maintext text-[14vw] lg:text-[6rem] xl:text-[13rem] text-black leading-tight relative z-0"
        >
          PALAZZO EVENTI
        </h1>
      </div>

      <div class="nodes h-screen w-screen">
        <img
          src="flowero.png"
          class="p-[16vw] pb-[10vw]"
          alt="Cherubs"
        />
        <img
          src="angelss.png"
          class="p-[16vw] pt-[0vw]"
          alt="Cherubs"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";

export default {
  name: "IndexPage",
  components: {
    HeaderComponent, // Register the component here
  },
  
  head() {
    return {
      link: [
        {
          rel: 'preload',
          href: '/static/background.jpg',
          as: 'image'
        }
      ]
    };
  },

  data() {
    return {
      images: [
        // '/angelss.png',
        "/flowert.png",
        // '/flowero.png'
        // Add paths to your images here
      ],
      isMenuOpen: false,
      currentImageIndex: 0,
      lastMousePosition: { x: 0, y: 0 },
      movementThreshold: 300, // Increase threshold for slower image changes
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
    imageClass() {
      // Conditionally apply width class based on the current image
      return this.currentImage === "/flower4.png" ? "w-[100vw]" : "";
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleMouseMove(event) {
      const { clientX: x, clientY: y } = event;
      const dx = x - this.lastMousePosition.x;
      const dy = y - this.lastMousePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > this.movementThreshold) {
        this.changeImage();
        this.lastMousePosition = { x, y };
      }
    },
    changeImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // Trigger reflow
      el.style.transition = "opacity 1s";
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = "opacity 1s";
      el.style.opacity = 0;
      done();
    },
  },
  mounted() {
    this.lastMousePosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
  },
};
</script>

<style scoped>

.headera {
    display: flex;
    align-items: center;
    padding-left: .7vw;
    padding-right: .7vw;
    border-bottom: .0px solid black;
    border-bottom: .0vw solid black;
    background-image: none;
    background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    z-index: 1;
    padding: 0.9vw;
}


.hidden-content {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Add this class to set the width to 100vw */
/* .w-[100vw] {
  width: 100vw;
} */

/* .w-full {
  width: 100vw !important;
} */

.absolute-center {
  position: absolute;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  object-fit: cover; /* Ensure the image covers the container */
}

/* .bgmobile {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */

@media only screen and (max-width: 768px) {
  .textmbhead{
    font-size: 4.4vw;
        top: 1.2vh !important;
        z-index: 1000;
        position: absolute;
        line-height: normal;
        left: 32.9vw;
        left: 32.2vw;
        display:none;
  }

  .mbmain{
    overflow: scroll;
    display: flex;
    flex-direction: column;
  }

  .navmbbord{
    /* width: 90vw;
    width: 100vw;
    width: 100%;
    border-bottom: .05vw solid #0000004f;
    padding: 2vw;
    display: flex; */
    /* justify-content: center; */
  }


  .textmainpg{
    position: absolute;
    top: 23vh;
  }


  .bgmobile {
    background-size: contain;
    background-position: center top;
    min-height: 50vh; /* Optional: Adjust the height */

    /* background-size: contain;
        background-position: center top;
        background-repeat: repeat-y; */
        /* min-height: 100vh; */
        height: max-content;
        overflow: hidden;
        position: absolute;

        top: 0;
        background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat;
  }

  .headera {
    align-items: center;
    align-items: flex-start;
    background-image: url("./static/background.jpg");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    /* border-bottom: .05vw solid #000; */
    display: flex;
    padding: .4vw;
    position: absolute;
    top: 0;
    z-index: 1;
    top: 0;
        z-index: 1;
        flex-direction: column;
        padding: 2.5vw;
        padding-bottom: 0vw;



        align-items: center;
        align-items: flex-start;
        background-image: url(/_nuxt/static/background.jpg);
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: cover;
        border-bottom: .05vw solid #000;
        display: flex;
        position: absolute;
        top: 0;
        z-index: 1;
        flex-direction: column;
        padding: 2.5vw;
        padding-bottom: 0vw;
        padding-top: 2.5vw;
        padding-bottom: 2.5vw;
        padding-left: 2.5vw;
        padding-right: 2.5vw;
  }
}

@media (min-width: 1440px) and (max-width: 1544px) {
  .maintext {
    font-size: 8rem; /* Adjust to the desired size for laptops */
  }
}

@media (min-width: 2195px) and (max-width: 1457px) {
  .maintext {
    font-size: 7rem; /* Adjust to the desired size for laptops */
  }
}

@media (min-width: 1024px) {
  .lg\:text-\[6rem\] {
    font-size: 9vw !important;
  }
}
</style>