<template>
  <div class="bgmobile relative min-h-screen" :style="{ backgroundImage: 'url(/passpg.jpg)' }">
    <div class="relative top-[20vh] flex flex-col items-center justify-center min-h-screen">
      <div class="text-center">
        <!-- <h1 class="text-2xl font-bold mb-4">Enter Password</h1> -->
        <input
          v-model="password"
          type="password"
          class="border border-gray-300 p-2 rounded w-64 mb-4"
          placeholder="Enter password"
        />
        <button
          @click="checkPassword"
          class="bg-[red] text-white px-4 py-2 rounded hover:bg-[red]"
        >
          Submit
        </button>
        <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
      </div>
    </div>
  </div>
</template>





<script>
import HeaderComponent from "@/components/layout/Header.vue";
import { mapState } from "vuex";
import { groq } from "@nuxtjs/sanity";
import gsap from "gsap";

export default {
  name: "IndexPage",
  components: {
    HeaderComponent,
  },

  async asyncData({ $sanity }) {
    const query = groq`*[_type == "home"] {
      ...,
      slider[] {
        images[] {
          ...,
        }
      }
    } | order(_updatedAt desc)[0]`;

    const home = await $sanity.fetch(query);
    return { home };
  },

  data() {
    return {
      currentSlideIndex: 0, // Track the current slide index
      isMenuOpen: false,
      intervalId: null, // Store the interval reference


      password: "", // Bind input value to this data property
      error: null, // Store error message
    };
  },

  computed: {
    ...mapState(["gridd"]),
  },

  methods: {
    startGallery() {
      // Automatically change slides every 5 seconds
      this.intervalId = setInterval(() => {
        this.currentSlideIndex =
          (this.currentSlideIndex + 1) % this.home.slider.length;
      }, 5000);
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    checkPassword() {
      const correctPassword = "mypassword"; // Replace with your desired password
      if (this.password === correctPassword) {
        this.$router.push("./hometemp"); // Redirect to hometemp.vue
      } else {
        this.error = "Incorrect password. Please try again.";
      }
    },
  },

  mounted() {
    // Start the fading gallery effect
    if (this.home.slider && this.home.slider.length > 0) {
      this.startGallery();
    }


    const element = this.$refs.element;

    gsap.to(element, {
      duration: 2,
      opacity: 0,
      filter: "blur(10px)",
      onComplete: () => {
        gsap.to(element, {
          duration: 3,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        });
      },
    });
    
  },

  beforeDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.intervalId);
  },
};
</script>








<style scoped>
.disintegrate {
  background: #000;
  color: white;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-animation-enter-active {
  transition: opacity 1s ease, transform 1s ease;
  transition-delay: 1s; /* Delay the animation */
}

.logo-animation-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}

.logo-animation-enter, .logo-animation-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Example: starting with a slight slide */
}

.gallery-images-container{
  width: 100vw;
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease-in-out;
}

.fade-enter, 
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}


.allgal{
  pointer-events: none;
}

.mainconhome{
  z-index: 10;
  position: absolute;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
}

.homegal{
  z-index: 10;
  position: absolute;

}

.gallery-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-image {
  transition: opacity 1s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
}

.bgmobile {
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}


.slider {
  position: relative;
  width: 100%; /* Set your slider width */
  height: 100%; /* Set your slider height */
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0; /* Start hidden */
  transition: opacity 1s ease-in-out; /* Smooth fade transition */
}

.slide.active {
  opacity: 1; /* Fully visible slide */
}




.flowset{
  padding: 4vw;
    padding-bottom: 10vw;
    width: 95vw;
    height: auto;
}

.contflower{
  height: 95vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    align-items: center;
}


.headbar{
  padding: 0.2vw;
  padding-left: 0.5vw;
  padding-top: 0.5vw;
}

.hidden-content {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
}


.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}


.maintext {
  font-family: 'RomainHeadlineTrial';
  }

  .subtx{
    letter-spacing: 0.1vw;
  }

.absolute-center {
  position: absolute;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  object-fit: cover; /* Ensure the image covers the container */
  object-fit: contain;
}


.headera {
  display: flex;
  align-items: center;
  z-index: 100;
  /* padding-left: 0.7vw; 
  padding-right: 0.7vw; */
  border-bottom: 0.5px solid black;
  border-bottom: 0.05vw solid black;
  background-image: url("./static/Navbar.jpg");
  background-size: cover;
  background-position: initial;
  background-repeat: no-repeat;
  padding: 0.4vw;
  position: absolute;
  top: 0;
  z-index: 1;
  z-index: 100;
}

@media only screen and (max-width: 768px) {
  .bgmobile {
        background-size: cover;
        /* background-position: center top; */
        min-height: 50vh;
        width: 100vw;
        height: -moz-max-content;
        height: 100vh;
        overflow: hidden;
        position: absolute;
        top: 0;
        /* background-size: cover; */
        /* background-position: 0 0; */
        /* background-position: initial; */
        /* background-repeat: no-repeat; */
    }

  .allgal {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    position: relative;
}

.mainconhome {
    z-index: 10;
    position: absolute;
    pointer-events: none;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}

.textmainpg {
        /* position: absolute; */
        top: 36vh;
        display: flex;
        height: 100vh;
        width: 100vw;
        align-content: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    .subtx{
      font-size: 2.5vw !important;
}
    .maintext{
      font-size: 9vw;
    }

  .gallery-image {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    transition: opacity 1s ease-in-out;
}

  .headera {
  
    flex-direction: column;
    position: relative;
    position: fixed;
    align-items: flex-start;
    /* position: absolute; */
  }

  /* .headbar {
        padding: 2.5vw !important;
    } */

    .navmbbord {
      padding: 2.5vw !important;
        /* justify-content: center; */
    }

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
  }



  /* .bgmobile {
    background-size: contain;
    background-position: center top;
    min-height: 50vh; 
        height: max-content;
        overflow: hidden;
        position: absolute;
        top: 0;
        background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat;
  } */

 
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