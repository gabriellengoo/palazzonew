<template>
  <div class="bgmobile relative min-h-screen" :style="{ backgroundImage: 'url(/background.jpg)' }">
    <div class="headera content flex w-full justify-between">
      <h1 class="navmb navmbbord">
        <HeaderComponent />
      </h1>
    </div>

    <div class="allgal nomb">
      <div v-for="(slide, index) in home.slider" :style="{
        opacity: currentSlideIndex === index ? 1 : 0,
        transition: 'opacity 3s ease-out',
      }" :key="slide._key" class="homegal  flex justify-center w-full h-full">
        <div class="overlaycont flex h-full pb-0 w-13/16">
          <div class="gallery-images-container flex flex-wrap">
            <transition-group name="fade" mode="out-in" tag="figure">
              <figure v-for="(image, i) in slide.images" v-show="currentSlideIndex === index" :key="image._key"
                class="overlaydiv flex flex-col flex-1 h-full">
                <MediaImageh :src="image.image.asset._ref" v-if="image.image" class="gallery-image w-[100vw] h-full"
                  :sizes="'sm:200vw md:150vw lg:200vw'" />
              </figure>
            </transition-group>
          </div>
        </div>
      </div>

    </div>

    <div class="allgal nodeshome">
      <!-- MOBILE -->
      <div v-for="(slide, index) in home.slider2" :style="{
        opacity: currentSlideIndex === index ? 1 : 0,
        transition: 'opacity 3s ease-out',
      }" :key="slide._key" class="homegal flex justify-center w-full h-full">
        <div class="overlaycont flex h-full pb-0 w-13/16">
          <div class="gallery-images-container flex flex-wrap">
            <transition-group name="fade" mode="out-in" tag="figure">
              <figure v-for="(image, i) in slide.images" v-show="currentSlideIndex === index" :key="image._key"
                class="overlaydiv flex flex-col flex-1 h-full">
                <MediaImageh :src="image.image.asset._ref" v-if="image.image" class="gallery-image w-[100vw] h-full"
                  :sizes="'sm:200vw md:150vw lg:200vw'" />
              </figure>
            </transition-group>
          </div>
        </div>
      </div>
    </div>

    <div :class="{ 'hidden-content': isMenuOpen }" id="main-content"
      class="md:flex mainconhome mbmain justify-center md:pt-0 lg:pt-0 xl:pt-0 items-start md:items-center lg:items-center xl:items-center h-screen">
      <div v-if="home" class="textmainpg text-center">
        <transition name="logo-animation">


          <div class="textmainpg text-center">
            <h1 class="nodesnav maintext2 text-[white] leading-tight relative z-0 uppercase">
              weddings & event planning in italy
            </h1>
            <h1 class="maintext text-[white] leading-tight relative z-0 uppercase">
              PALAZZO EVENTI
            </h1>
            <h1 class="nomb maintext2 text-[white] leading-tight relative z-0 uppercase pb-[2vw]">
              weddings & event planning in italy
            </h1>


      

            <div class="butcon">
              <button  @click="showHeader = true" class="bttn px-[2vw] py-[3vw] uppercase transition-all duration-300"
              >Enter
            </button>
            </div>


            <transition name="slide-fade">
      <Headerhome v-if="showHeader" />
    </transition>

          </div>
        
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";
import Headerhome from "@/components/Headerhome.vue";
import { mapState } from "vuex";
import { groq } from "@nuxtjs/sanity";
import gsap from "gsap";

export default {
  name: "IndexPage",
  components: {
    HeaderComponent,
    Headerhome,
  },

  async asyncData({ $sanity }) {
    const query = groq`*[_type == "home"] {
      ...,
      seo { 
        title, 
        description, 
        image { asset->{url} },
        keywords
      },
      slider[] {
        images[] {
          ...,
        }
      },
       slider2[] {
        images[] {
          ...,
        }
      }
    } | order(_updatedAt desc)[0]`;

    const home = await $sanity.fetch(query);
    return { home };
  },

  head() {
    return {
      title: this.home?.seo?.title || "Palazzo",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.home?.seo?.description || "Default description",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.home?.seo?.keywords?.join(", ") || "default, keywords",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.home?.seo?.image?.asset?.url || "",
        },
      ],
    };
  },

  data() {
    return {
      showHeader: false,
      currentSlideIndex: 0, // Track the current slide index
      isMenuOpen: false,
      intervalId: null, // Store the interval reference
    };
  },

  computed: {
    ...mapState(["gridd"]),
    ...mapState(["isMenuOpen"]),
  },
  

  methods: {

    openMenu() {
      this.$emit("open-menu"); // Emit event when button is clicked
    },

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
  },

  mounted() {
    // Start the fading gallery effect
    if (this.home.slider && this.home.slider.length > 0) {
      this.startGallery();
    }

    const element = this.$refs.element;

    gsap.to(element, {
      duration: 1,
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

/* Initial hidden state for the component */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.8s ease-in-out;
  /* transition: max-height 0.5s ease-in-out; */
  opacity: 1;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  /* transform: translateY(100%); Slide from the right */
  opacity: 0;
  /* max-height: 100vh; */
}

/* Ensure the header stays in position once it has slid in */
.Headerhome {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 10;
}


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
  transition-delay: 1s;
  /* Delay the animation */
}

.logo-animation-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}

.logo-animation-enter,
.logo-animation-leave-to {
  opacity: 0;
  transform: translateY(20px);
  /* Example: starting with a slight slide */
}

.gallery-images-container {
  width: 100vw;
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}

.allgal {
  pointer-events: none;
}

.mainconhome {
  z-index: 10;
  position: absolute;
  pointer-events: none;
  width: 100vw;
  height: 96vh;
}

.homegal {
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
  width: 100%;
  /* Set your slider width */
  height: 100%;
  /* Set your slider height */
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Start hidden */
  transition: opacity 1s ease-in-out;
  /* Smooth fade transition */
}

.slide.active {
  opacity: 1;
  /* Fully visible slide */
}

.flowset {
  padding: 4vw;
  padding-bottom: 10vw;
  width: 95vw;
  height: auto;
}

.contflower {
  height: 95vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  align-items: center;
}

.headbar {
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.maintext {
  font-family: "RomainHeadlineTrial";
  font-size: 8.5vw;
}

.maintext2 {
  font-family: "RomainHeadlineTrial";
  font-size: 2.5vw;
}

.subtx {
  letter-spacing: 0.1vw;
}

.absolute-center {
  position: absolute;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  /* Full viewport width */
  height: 100vh;
  /* Full viewport height */
  object-fit: cover;
  /* Ensure the image covers the container */
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


.butcon {
  display: flex;
  width: 100%;
  justify-content: baseline;
  position: absolute;
  z-index: 30;
  display: flex;
  width: 90vw;
  height: 40%;
  justify-content: center;
  position: absolute;
  width: 100vw;
    left: 0;
    z-index: 30;
}

.bttn {
  padding: 1rem;
  padding: 0.7vw;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  border: 0.05vw solid black;
  width: 30%;
  display: flex;
  margin: auto;
  text-transform: uppercase;
  /* font-family: "GT-Sectra-Book"; */
  font-family: "NHaas" !important;
  transition-duration: color 0.8s ease;
  background-color: #e6e5e4;
  font-size: 1.3vw;
  flex-direction: column;
  align-content: center;
  align-items: center;
  pointer-events: all;
  /* z-index: 10000000; */
}

.bttn:hover {
  /* background-color: #0056b3; */
  background-color: #bcc2cb;
  transition-duration: background-color 0.8s ease;
  /* color: #ccc; */
}



@media only screen and (max-width: 768px) {

  .butcon {
    display: flex;
    width: 100%;
    height: 40%;
    justify-content: center;
    /* align-content: flex-end; */
    align-items: center;
    position: relative;
  }

  /* .maintext {
    font-family: "RomainHeadlineTrial";
    font-size: 16vw;
  } */
  .bttn {
    padding: 1rem;
    padding: 1.4vw;
    cursor: pointer;
    transition: background-color 0.3s;
    position: relative;
    border: 0.05vw solid black;
    width: 50%;
    height: max-content;
    display: flex;
    margin: unset;
    text-transform: uppercase;
    /* font-family: "GT-Sectra-Book"; */
    /* font-family: "NHaas" !important; */
    transition-duration: color 0.8s ease;
    background-color: #e6e5e4;
    font-size: 3.3vw;
    flex-direction: column;
    align-content: center;
    align-items: center;
    pointer-events: all;
    /* z-index: 10000000; */
  }

  .maintext {
    font-family: "RomainHeadlineTrial";
    font-size: 15vw;
    width: 100vw;

  }

  .maintext2 {
    font-family: "RomainHeadlineTrial";
    font-size: 3.5vw;
    padding-top: 20vw;
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
    justify-content: flex-start;
  }

  .subtx {
    font-size: 2.5vw !important;
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

  .textmbhead {
    font-size: 4.4vw;
    top: 1.2vh !important;
    z-index: 1000;
    position: absolute;
    line-height: normal;
    left: 32.9vw;
    left: 32.2vw;
    display: none;
  }

  .mbmain {
    overflow: scroll;
    display: flex;
    flex-direction: column;
  }

  .navmbbord {}

  .bgmobile {
    background-size: contain;
    background-position: center top;
    min-height: 50vh;
    /* Optional: Adjust the height */
    height: max-content;
    overflow: hidden;
    position: absolute;
    top: 0;
    background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat;
  }
}

@media (min-width: 1440px) and (max-width: 1544px) {
  .maintext {
    font-size: 8rem;
    /* Adjust to the desired size for laptops */
  }
}

@media (min-width: 2195px) and (max-width: 1457px) {
  .maintext {
    font-size: 7rem;
    /* Adjust to the desired size for laptops */
  }
}

@media (min-width: 1024px) {
  .lg\:text-\[6rem\] {
    font-size: 9vw !important;
  }
}
</style>
