<template>
   <div
    class="bgmobile relative min-h-screen"
    :style="{ backgroundImage: 'url(/background.jpg)', backgroundAttachment: 'fixed' }"
  >
    <div class="headera nodesnav content flex w-full justify-between">
      <h1 class="navmb navmbbord">
        <HeaderComponent />
      </h1>
      <h1 class="nodesk textmbhead">PALAZZO EVENTI</h1>
      <p class="navmbno yeart text-center text-4xl uppercase">Weddings</p>
      <p class="navmbno headingspages text-center text-4xl uppercase">palazzo eventi</p>
    </div>

    <div class="headera nomb fixed content flex w-full justify-between">
        <h1  class="headingspages text-center text-4xl mb-6 uppercase pt-5 md:pt-2">
         
          <HeaderComponent @menu-toggled="isMenuOpen = $event" class="headbar w-[2vw] hover:cursor-pointer" />

        </h1>
        <p
          class="headingspages opacity-0 text-center text-4xl mb-6 uppercase pt-5 md:pt-2"
        >
          Weddings 
        </p>
        <h1 class="w-[2vw]">
       
        </h1>
      </div>

      <div class="textmainpg text-center">
        <h1
          class="maintext text-[14vw] lg:text-[6rem] xl:text-[13rem] text-black leading-tight relative z-0"
        >
          PALAZZO EVENTI
        </h1>
      </div>

      <!-- Scrollable content -->
      <div class="image-container" @scroll="handleScroll">
      <div class="image-wrapper" v-for="(image, index) in images" :key="index">
        <img
          :src="image"
          class="scroll-image"
          :class="{ 'fixed-center': isImageFixed(index) }"
          alt="Scrolling Image"
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

  data() {
    return {
      images: [
        "/flowert.png",
        "/angels2.png",
        "/bird.png"
      ],
      currentImageIndex: 0,
      scrollY: 0,
    };
  },
  methods: {
    handleScroll() {
      if (process.client) {
        this.scrollY = window.scrollY;
      }
    },
    isImageFixed(index) {
      if (!process.client) return false;
      
      const scrollPosition = this.scrollY;
      const imageHeight = window.innerHeight;
      const imageStart = index * imageHeight;
      const imageEnd = imageStart + imageHeight;

      // Return true when the image should be fixed at the center
      return scrollPosition >= imageStart && scrollPosition <= imageEnd;
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
};
</script>




<style scoped>

.textmainpg{
  position: fixed;
    margin: auto;
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
        z-index: 10;
}

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
    position: fixed;
    top: 0;
    z-index: 100;
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

.bgmobile {
  background-size: 113vw;
    /* background-position: too; */
    background-repeat: no-repeat;
    background-attachment: fixed;/* Ensure the background stays fixed */
}

.image-container {
  min-height: 300vh; /* Ensure enough height for scrolling */
}

.image-wrapper {
  position: relative;
  height: 100vh; /* Each image takes up full viewport height */
}

.scroll-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
}

.fixed-center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


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
