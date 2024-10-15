<template>
  <div>
    <header
      class="header top-[1rem] md:top-4 lg:top-[2rem] flex items-center p-6"
    >
      <div
        class="flex md:justify-between lg:justify-between xl:justify-between"
        ref="headerDiv"
      >
        <div class="headbar hover:cursor-pointer">
          <!-- <SvgMenu v-if="!isMenuOpen" class="headbar w-[1.4vw] hover:cursor-pointer" />
      <SvgClose v-else class="headbar w-[1.4vw] hover:cursor-pointer" /> -->
          <button @click="toggleMenu" class="hamburger-button">
            <div ref="lottieAnimation" class="lottie-container w-[1.5vw] hover:cursor-pointer"></div>
          </button>
        </div>
      </div>

      <!-- desktop -->
      <transition name="slide-down" @after-enter="fadeInAllImg">
        <nav
          v-if="isMenuOpen"
          class="nav-menu fixed left-0 w-full h-screen z-[500] flex justify-center items-center"
        >
          <div
            class="image-container absolute inset-0 w-full h-full object-cover"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
          >
            <img
              :src="defaultImage"
              alt="Default Image"
              class="default-image-display"
              :class="{ 'faded-out': isHovered }"
            />
            <img
              :src="hoverImage"
              alt="Hover Image"
              class="hover-image-display"
            />

            <!-- Invisible 3x3 Grid -->
            <div class="grid-container">
              <div v-for="i in 9" :key="i" class="grid-item">
                <a :href="getLink(i)" class="hover-areal"></a>
              </div>
            </div>
            <!-- <a href="./weddings" target="_self" rel="noopener noreferrer" class="hover-area hover-image-display"></a> -->
          </div>

          <!-- <div class="allimg relative w-[100vw] h-[100vh] z-50">
        </div> -->
        </nav>
      </transition>
    </header>

    <!-- mobile -->
    <!-- name="slide-down" -->
    <transition
      class="mobilemenu"
      name="slide-down"
      @after-enter="fadeInAllImg"
    >
      <div
        v-if="isMenuOpen"
        class="mobilemenu top-[0vh] fixed left-0 h-screen w-full z-50 flex flex-col justify-center items-center"
      >
        <!-- h-[90vh] pt-[8.25vh]  pt-[2.25vh] pt-[5.25rem]  -->
        <div class="  ">
          <div class="headerr pt-[2.9vh] flex justify-center">
            <!-- <h1 class="border-t-[1px] border-[#0003] pt-[0.5vh] w-[100vw]">PALAZZO EVENTI</h1> -->
            <h1 class="border-t-[1px] border-[#0003] pt-[0.5vh] w-[100vw]"></h1>
          </div>
          <nav class="link-container">
            <ul>
              <!-- <h1 class="border-t-[1px] border-[#0003] pt-[0.5vh] w-[100vw]">PALAZZO EVENTI</h1> -->
              <!-- <li class="toplink pointer-events-none "><a class="toplink" href="#">space</a></li> -->
              <li>
                <a class="svgleft pointer-events-none" href=""
                  ><SvgArchstar class=""
                /></a>
              </li>
              <li><a href="./weddings">WEDDINGS</a></li>
              <li><a href="./events">EVENTS</a></li>
              <li><a href="./services">SERVICES</a></li>
              <li><a href="./about">ABOUT</a></li>
              <li><a href="./press">PRESS</a></li>
              <li><a href="./team">TEAM</a></li>
              <li><a href="./contact">CONTACT</a></li>
              <li><a href="./awards">AWARDS</a></li>
            </ul>
          </nav>
        </div>

        <!-- <div class="allimg relative w-[100vw] h-[100vh] z-50">
        </div> -->
      </div>
    </transition>
  </div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  data() {
    return {
      isMenuOpen: false,
      isHovered: false,
      defaultImage: "/newnav.png",
      hoverImage: "/newnavt.png",
      menuTopPosition: "0",
      lottieInstance: null,
    };
  },
  mounted() {
    // this.updateNavMenuPosition();
    window.addEventListener("resize", this.updateNavMenuPosition);

    this.lottieInstance = lottie.loadAnimation({
      container: this.$refs.lottieAnimation, // the DOM element
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/hamburger.json', // your Lottie animation JSON file path
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateNavMenuPosition);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        this.lottieInstance.playSegments([0, 97], true); // Play forward (hamburger to close)
      } else {
        this.lottieInstance.playSegments([97, 0], true); // Play reverse (close to hamburger)
      }
    },
    fadeInAllImg() {
      this.fadeInAllImgClass = true;
    },
    getLink(index) {
      // Return different URLs based on the grid item index
      const links = [
        "./weddings",
        "./events",
        "./services",
        "/about",
        "./",
        "./press",
        "./contact",
        "./team",
        "./awards",
      ];
      return links[index - 1]; // Adjust index for 1-based loop
    },
    // updateNavMenuPosition() {
    //   const headerDiv = this.$refs.headerDiv;
    //   if (headerDiv) {
    //     const headerBottom = headerDiv.getBoundingClientRect().bottom;
    //     this.menuTopPosition = `calc(${headerBottom}px + 3.5vh)`;
    //   }
    // },
    computed: {
      currentTitle() {
        return this.$store.state.title;
      },
      isMenuOpen() {
        return this.$store.getters.isMenuOpen;
      },
    },
  },
};
</script>

<style scoped>




.nav-menu {
  z-index: 10000;
}

/* Styling for the invisible 3x3 grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  position: absolute;
  inset: 0;
  z-index: 10;
  pointer-events: none; /* Prevent grid from blocking other interactions */
}

.grid-item {
  pointer-events: auto; /* Make each grid area clickable */
}

.hover-areal {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

/* mobile nav end--------- */

.headerr {
  text-align: center;
  font-size: 1rem;
  /* font-weight: bold; */
  /* letter-spacing: 2px; */
  font-family: "RomainHeadlineTrial";
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.link-container {
  margin-top: 2rem;
  overflow: hidden;
}

.link-container ul {
  list-style: none;
  padding: 0;
}

.link-container li {
  text-align: center;
  /* padding: 1.5rem 0; */
  padding: 0.2rem 0;
  /* border-bottom: black;
    border-bottom-width: 2px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.link-container a {
  text-decoration: none;
  font-size: 9.2vw;
  font-size: 4.2vh;
  /* Adjust based on how large you want the text */
  /* color: black; */
  font-weight: 100;
  padding-left: 7vw;
  padding-right: 7vw;
  padding-left: 15vw;
  padding-right: 15vw;
  /* letter-spacing: 2px; */
}

.link-container a:hover {
  color: #333; /* Optional hover effect */
}

.link-container {
  border: 1px solid rgba(0, 0, 0, 0.257);
  border-radius: 150px 150px 2px 2px;
  /* width: 90vw;
  width: 84vw; */
  margin: auto;
  font-family: "RomainHeadlineTrial";

  /* background-color: rgba(255, 255, 255, 0.14);
    background-color: rgb(255 255 255 / 25%); */
  background-color: rgb(255 255 255 / 13%);

  border: 1px solid rgba(0, 0, 0, 0.257);
  border-radius: 190px 190px 2px 2px;
  width: max-content;
  margin: auto;
  font-family: "RomainHeadlineTrial";
}

.toplink {
  color: #33333300 !important;
}

/* mobile nav end--------- */

.mobilemenu {
  display: none;
}

@media (max-width: 768px) {
  .nav-menu {
    display: none !important;
  }

  .mobilemenu {
    display: unset;
  }

  .link-container a {
    text-decoration: none;
    font-size: 9.2vw;
    /* font-size: 5.2vh; */
    /* color: black; */
    font-weight: 100;
    padding-left: 16vw;
    padding-right: 16vw;
  }
}

/* .hover-area {
  position: absolute;
  position: absolute;
    top: 0px;
    left: 0px;
    width: 34vw;
    height: 35.8vh;
     background-color: red; 
     Red hover color
  z-index: 10; 
  Make sure it's above the SVG
  opacity: 0; 
  Initially hidden
  transition: opacity 0.3s ease;
  z-index: 100000000000 !important;
  mix-blend-mode: hue;
} */

.hover-area {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 34vw;
  height: 35.8vh;
  /* background-image: url('/bluen.png');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;  */
  z-index: 100000000000 !important;

  opacity: 0;

  mix-blend-mode: lighten;
}

.hover-area:hover {
  opacity: 1; /* Show on hover */
}

/* Ensure SVG is hidden by default and only shown on hover */
.svg-link {
  /* display: relative; */
  /* position: absolute; */
  /* display: block; */
  z-index: 100000000000 !important;
}

.svglink {
  object-fit: cover;
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.image-container {
  width: 100%;
  height: 100%;
  background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: initial;
  background-repeat: no-repeat;
}

.default-image-display,
.hover-image-display {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.default-image-display {
  transition: opacity 2s ease-in-out;
  opacity: 1;
}

.default-image-display.faded-out {
  opacity: 0.4;
}

.hover-image-display {
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

.image-container:hover .hover-image-display {
  opacity: 1;
}

.image-container {
  z-index: 1000000000 !important;
}

.header {
  font-family: "YourCustomFont", serif;
  z-index: 1000000000 !important;
}

.headbar {
  z-index: 1000000000 !important;
}

.animated-border {
  position: relative;
  border-bottom: 0.5px solid #00000000;
  overflow: hidden;
}

.b1 {
  opacity: 0;
}

.b1:hover {
  opacity: 1;
}

.animated-border::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.5px;
  background: black;
  transform: translateX(-100%);
  animation: slide-in 1.5s ease-in-out forwards;
  animation-delay: 7s;
}

@keyframes slide-in {
  to {
    transform: translateX(0);
  }
}

.nav-menu {
  top: v-bind(menuTopPosition);
  transition: top 0.5s ease;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slide-down-enter,
.slide-down-leave-to {
  max-height: 0;
}

.slide-down-enter-to,
.slide-down-leave {
  max-height: 100vh;
}

.bgnav {
  object-fit: cover !important;
  z-index: 9 !important;
}

.allimg {
  z-index: 90 !important;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.allimg.fade-in {
  opacity: 1;
}

.fade-transition {
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
}

.fade-transition.is-hovered {
  opacity: 0;
}

#one-wrapper {
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 1;
}

#one-wrapper img {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.icons {
  z-index: 10000 !important;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.icons:hover {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.icons2 {
  z-index: 1000 !important;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.icons2:hover {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.image-display {
  width: 100vw;
  height: 100%;
  object-fit: cover;
}

.borders {
  top: 6.7vh;
}

@media only screen and (min-width: 1440px) and (min-height: 1560px) {
  .header {
    top: 1.5vh;
  }

  .borders {
    top: 2.2vh;
  }
}

@media only screen and (min-width: 2560px) and (min-height: 1560px) {
  .header {
    top: 2vh;
  }

  .borders {
    top: 3.7vh;
  }
}

@media only screen and (max-width: 768px) {

  .lottie-container{
    width: 4.5vw;
  }

  .mobilemenu {
    height: 100vh;
    transition: max-height 0.5s ease-in-out;
    background-image: url("./static/background.jpg");
    background-size: cover;
    background-position: initial;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .headerr {
    font-size: 2vh;
    margin-top: 2rem;
  }

  .svgleft {
    height: 7vh !important;
    display: inline-flex !important;
    align-items: center !important;
  }
}
</style>
