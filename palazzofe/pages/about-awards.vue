<template>
  <div>
    <div>
      <!-- <HeaderComponent /> -->
      <div
        class="headera content flex w-full justify-between overflow-y-hidden"
      >
        <h1 class="navmb">
          <HeaderComponent />
        </h1>
        <p class="navmbno yeart text-center text-4xl uppercase">About</p>
        <p class="navmbno yeart w-[5vw] text-center text-4xl uppercase"></p>
        <p class="navmbno headingspages text-center text-4xl uppercase">
          palazzo eventi
        </p>
        <h1 class="navmbno w-[2vw]"></h1>
      </div>

      <div class="nodes contmbhead pointer-events-none">
        <p
           v-if="!isMenuOpen"
          class="headingspages pointer-events-none text-center text-4xl uppercase"
        >
          About
        </p>
        <p
           v-if="isMenuOpen"
          class="headingspages pointer-events-none text-center text-4xl uppercase"
        >
        Palazzo Eventi
        </p>
      </div>

      <div class="bgmobile relative min-h-screen flex">
        <!-- Left Scrollable Content desk -->
        <div
          class="left-content nomb flex-1 flex justify-center items-center overflow-y-scroll p-8"
        >
          <div class="content">
            <div class="nomb">
              <img class="w-[27.5vw]" src="/leftaboutt.png" />
            </div>
          </div>

          <div class="content">
            <div class="nomb covercont">
              <div class="nomb anicolle">
                <img class="logo" src="/I.png" />
              </div>
              <div class="email ml-[5vw] richcontle text-left">
                <Richtext class="richcont3le" :blocks="about.moni"></Richtext>
                <div class="richcont2le"><SvgBack /></div>
              </div>
            </div>
          </div>

          <div class="content nodes">
            <div class="pointer-events-none">
              <img class="rightimg" src="/aboutrighta.png" />
            </div>
            <div class="pointer-events-none anicol">
              <img class="rightimg" src="/J.png" />
            </div>
          </div>

          <div class="email ml-[5vw] richcont text-left">
            <Richtext
              class="richcont3 aboutbot"
              :blocks="about.about"
            ></Richtext>
            <div class="richcont2"><SvgBack /></div>
          </div>
        </div>

        <!-- Right Static Content -->
        <div
          class="right-content nomb  flex-1 p-8 flex justify-center items-center"
        >
          <div class="content">
            <div class="pointer-events-none">
              <img class="rightimg" src="/aboutrighta.png" />
            </div>
            <div class="anicol pointer-events-none">
              <img class="logo" src="/J.png" />
            </div>
          </div>
          <div class="email ml-[5vw] richcont text-left">
            <Richtext class="richcont3" :blocks="about.about"></Richtext>
            <div class="richcont2"><SvgBack /></div>
          </div>
        </div>

        <!-- Right Static Content -->
        <div
          class="right-content pt-[55vh] nodesdots flex-col overflow-y-scroll flex-1 p-8 flex justify-center items-center"
        >
          <div class="pt-[35vw]"></div>

          <div class="a2">
            <div class="contentmb">
              <img class="logo" src="/I.png" />
              <div class="text-left">
                <Richtext class="textcon2" :blocks="about.moni"></Richtext>
              </div>
              <div class="arrowmb"><SvgBack /></div>
            </div>
          </div>

          <div class="pt-[10vw]"></div>

          <div class="mb-[3vh] a1">
            <div class="contentmb">
              <img class="logo" src="/J.png" />
              <div class="text-left">
                <Richtext class="textcon1" :blocks="about.about"></Richtext>
              </div>
              <div class="arrowmb"><SvgBack /></div>
            </div>
          </div>

          <div class="pb-[5vh]"></div>
        </div>
      </div>
    </div>

    <!-- Awards Button -->
    <div class="butcon">
      <button 
  :class="['bttn', { 'active': isAwardsOpen }]" 
  @click="toggleAwards">
  {{ isAwardsOpen ? "About" : "Awards" }}
</button>

    </div>

    <!-- Awards Content -->
    <div
      :class="['awards-content', { visible: isAwardsOpen }]"
      class="fixed top-0 left-full w-full h-full bg-white transition-transform duration-700 ease-in-out"
    >
      <div class="bgmobileaw relative min-h-screen flex">
        <!-- Left Scrollable Content -->
        <div class="left-contentaw flex-1 overflow-y-scroll p-8">
          <div class="content gridcontentaw">
            <div>
              <SkeletonLoader />
              <!-- loadding -->
            </div>
            <!-- <div v-if="isAwardsOpen && showGridaw" > -->
            <div>
              <Gridaw class="" :items="gridaw.grid6" size="small"></Gridaw>
            </div>
          </div>
        </div>

        <!-- Right Static Content -->
        <div
          class="right-contentaw nomb overflow-hidden flex-1 p-8 flex justify-center items-center"
        >
          <!-- <div class="static-box w-full h-full"> -->

          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";
import { mapState } from "vuex";
import { groq } from "@nuxtjs/sanity";
import animationData from "~/static/animations/aboutani.json";
import LottieAnimation from "~/components/LottieAnimation.vue";
import SvgBack from "~/components/svg/Back.vue";
import SkeletonLoader from "~/components/SkeletonLoader.vue";
import { mapMutations } from "vuex";

export default {
  name: "IndexPage",

  data() {
    return {
      animationData,
      scrollInterval: null,
      scrollOffset: 0,
      isAwardsOpen: false,
      awardsLoaded: false,
      showGridaw: false,
    };
  },

  head() {
    return {
      title: this.about?.seo?.title || "Palazzo",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.about?.seo?.description || "Default description",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.about?.seo?.keywords?.join(", ") || "default, keywords",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.about?.seo?.image?.asset?.url || "",
        },
      ],
    };
  },
  async asyncData({ params, $sanity, store }) {
    const query = groq`*[_type == "about"]{
    ...,
    title,
    about,
    moni,
  } | order(_updatedAt desc)[0]`;

    const about = await $sanity.fetch(query);

    return { about };
  },

  components: {
    HeaderComponent,
    LottieAnimation,
    SvgBack,
  },

  mounted() {
    // Start loading the content immediately on mount
    // setTimeout(() => {
    //   this.showGridaw = true; // Load Grid in the background
    // }, 1500); // Delay before it gets ready
  },

  methods: {
    ...mapMutations(["toggleMenu", "setMenuState"]),

    toggleAwards() {
      if (!this.isAwardsOpen) {
        // Only start the delay when opening the awards section
        this.showGridaw = false; // Reset visibility
        setTimeout(() => {
          this.showGridaw = true;
        }, 1500); // Delay starts when opening
      }
      this.isAwardsOpen = !this.isAwardsOpen;
    },
  },

  computed: {
    isMenuOpen() {
      return this.$store.getters.isMenuOpen;
    },
    // ...mapState(["gridd"]),
    ...mapState(["gridaw"]),
  },
};
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.fade-in[style*="opacity: 1"] {
  opacity: 1;
}

.page-wrapper {
  transform: translateX(0);
  transition: transform 0.7s ease-in-out;
  overflow-x: hidden;
}

.page-wrapper.slide-left {
  transform: translateX(-100%);
}

/* Awards content section */
.awards-content {
  transform: translateX(0);
  transition: transform 0.7s ease-in-out;
  z-index: 20;
}

.awards-content.visible {
  transform: translateX(-100%);
  transition: transform 0.7s ease-in-out;
  z-index: 20;
}

/* Button styling */
.butcon {
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  z-index: 30;
}

.bttn {
  padding: 1rem;
  padding: 0.4vw;
  cursor: pointer;
  transition: background-color 0.3s;
  position: fixed;
  bottom: 2.5vh;
  bottom: 0vh;
  /* width: 100%; */
  border-top: 0.05vw solid black;
  width: 97%;
  width: 100%;
  text-transform: uppercase;
  font-family: "GT-Sectra-Book";
  font-family: "NHaas" !important;
  transition-duration: color 0.8s ease;
  background-color: #e6e5e4;
  font-size: 1.1vw;
}

.bttn:hover {
  /* background-color: #0056b3; */
  background-color: #bcc2cb;
  transition-duration: background-color 0.8s ease;
  /* color: #ccc; */
}



.butcon {
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
}

/* .bttn {
  position: absolute;
  width: 94%;
  border-top: 0.05vw solid black;
  border: 0.05vw solid black;
  border-radius: 0%;
  background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: 0 0;
  background-position: initial;
  background-repeat: no-repeat;
  padding: 1rem;
  padding: 0.5vw;
  cursor: pointer;
  transition: background-color 0.3s;
  position: fixed;
  bottom: 2.5vh;
  width: 98%;
  text-transform: uppercase;
  font-family: "GT-Sectra-Book";
  font-family: "NHaas" !important;
  transition: color 0.8s ease;
  font-size: 1vw;
} */

.headingspagesb {
  font-family: "GT-Bold";
}

.image-item {
  position: relative;
  flex: 0 0 calc(50% - 20px);
  margin-bottom: 20px;
  padding: 2vw;
}

.arch-frame {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Optional: Add rounded corners to images */
  position: relative;
  z-index: 1;
}

.inner-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%; /* Adjust size of the inner image */
  height: auto;
  object-fit: contain;
  transform: translate(-50%, -50%); /* Center the image inside the arch frame */
  z-index: 2; /* Make sure it's on top of the arch frame */
  padding: 10px; /* Padding around the inner image */
}

.right-content {
  z-index: 20;
}

.ania {
  position: absolute;
  width: 54vw;
  left: -1.9vw;
  top: 0.9vw;
  height: 100vh;
  display: flex;
  justify-items: center;
  justify-content: center;
}

.imgsa {
  position: fixed;
  width: auto;
  left: 13.5vw;
  top: 16vh;
  top: 39vh;
  overflow-y: scroll;
  height: 67.4vh;
  display: flex;
  justify-items: center;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
}

.scroll-container {
  z-index: 1;
  display: flex;
  gap: 0; /* No gaps between images */
  transition: transform 0.5s ease-in-out;
}

.ania2 {
  width: 23vw;
  height: auto;
  padding: 0 2vw 0 2vw;
  object-fit: contain;
  /* width: auto; */
  /* flex-shrink: 0; */
}

/* Styles for text inside the frame */
.textframe {
  z-index: 3; /* Ensure text appears on top */
}

.subtext {
  font-family: "RomainHeadlineTrial";
}

/* Flexbox layout for the image grid */

.bgmobile {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex; /* Flex layout for two columns */
}

.left-content {
  /* background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  background-color: #e6e5e4;
  height: 100vh;
  overflow-y: scroll;
}

.right-content {
  background-image: url("./static/background.jpg");
  background-size: 192vh;
  background-position: unset;
  background-repeat: no-repeat;
  height: 100vh;
}

a {
  color: #a29585;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.anicol {
  position: relative;
  z-index: 9;
  left: 10vw;
  top: -38vw;
  width: 43%;
}

.coverabout {
  width: 45vw;
  width: 60vw;
  height: 51vw;
  height: auto;
  position: absolute;
}

.covercont {
  position: absolute;
  left: 2.5vw;
  top: -2vh;
  height: 100vh;
  width: 50vw;
  display: flex !important;
  align-items: center;
}

.covercont {
  position: absolute;
  left: -0.5vw;
  top: 0vh;
  height: 100vh;
  width: 60vw;
  display: flex !important;
  align-items: center;
}

.rightimg {
  width: 28vw;
  /* top: -2vh; */
  top: 6vw;
  left: 2vw;
  position: relative;
}

.logo {
  width: 11vw;
  top: 6vw;
  position: relative;
}

.richcont {
  position: absolute;
  top: 42vh;
  left: 64vw;
  width: 20vw;
  font-size: 1.2vw;
  height: 24vw;
  overflow: scroll;
}

.richcont3 {
  position: fixed;
  top: 40vh;
  left: 66.2vw;
  width: 22vw;
  /* font-size: 1.3vw; */
  height: 21vw;
  overflow: scroll;
}

.richcont2 {
  position: relative;
  top: 9vw;
  left: -5.5vw;
  transform: rotateZ(270deg);
  width: 27vw;
  /* overflow: hidden; */
  pointer-events: none;
  z-index: 10;
  padding-left: 0.3vw;
  height: max-content;
}

.anicolle {
  position: relative;
  z-index: 9;
  left: 20vw;
  top: -18vw;
  width: 18%;
}

.richcontle {
  position: absolute;
  top: 42vh;
  left: 12vw;
  width: 20vw;
  font-size: 1.2vw;
  height: 24vw;
  overflow: scroll;
}

.richcont3le {
  position: fixed;
  top: 40vh;
  left: 14.2vw;
  width: 22vw;
  /* font-size: 1.3vw; */
  height: 21vw;
  overflow: scroll;
}

.richcont2le {
  position: relative;
  top: 9vw;
  left: -5.5vw;
  transform: rotateZ(270deg);
  width: 27vw;
  /* overflow: hidden; */
  pointer-events: none;
  z-index: 10;
  padding-left: 0.3vw;
  height: max-content;
}

.fade-img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  animation: fadeLoop 6s infinite;
  transition: opacity 1s ease-in-out;
}

.fade-img:nth-child(1) {
  animation-delay: 0s;
}

.fade-img:nth-child(2) {
  animation-delay: 3s;
}

@keyframes fadeLoop {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.sheadera {
  pointer-events: none;
  opacity: 1;
}

.sheaderaopen {
  left: 39vw;
  pointer-events: none;
  opacity: 0;
}

.bttn.active {
  background-color: #96a6bf; /* Change this to your preferred blue color */
  transition: background-color 0.3s ease-in-out;
}

@media only screen and (max-width: 768px) {
  .bttn.active {
  background-color: #96a6bf; /* Change this to your preferred blue color */
  transition: background-color 0.3s ease-in-out;
}


  .bttn {
    /* position: absolute;
    border-top: 0.05vw solid black;
    border: 0.05vw solid black;
    border-radius: 0%;
    background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat;
    padding: 1rem;
    padding: 2.5vw;
    cursor: pointer;
    transition: background-color 0.3s;
    position: fixed;
    bottom: 2.5vh;
    width: 98%;
    text-transform: uppercase;
    font-family: "GT-Sectra-Book";
    font-family: "NHaas" !important;
    transition: color 0.8s ease;
    font-size: 3vw; */
    padding: 2.5vw;
    font-size: 3vw;
    width: 100%;
    border: 0.05vw solid rgba(0, 0, 0, 0);
    border-top: 0.05vw solid black;
    border-radius: 0%;
    /* background-image: url("./static/LeftBG.png");
    background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat; */
  }

  .a1 {
    background-image: url("./static/aboutrighta.png");
    background-size: 84vw;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .a2 {
    background-image: url("./static/leftaboutt.png");
    background-size: 84vw;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .contentmb {
    /* width: 85vw; */
    height: fit-content;
    padding: 8vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .textcon1 {
    position: relative;
    height: 27vh;
    /* top: 24vh; */
    width: 73vw;
    width: 99%;
    font-size: 3.4vw;
    /* left: 2vw; */
    overflow: scroll;
    padding-bottom: 3%;
    z-index: 100;
  }

  .textcon2 {
    position: relative;
    height: 27vh;
    font-size: 3.4vw;
    /* top: 24vh; */
    width: 73vw;
    width: 99%;
    padding-bottom: 3%;
    /* left: 2vw; */
    overflow: scroll;
    z-index: 100;
  }

  .logo {
    left: 20%;
    width: 54%;
    /* padding-top: 20%; */
    padding-top: 1%;
    top: 0;
    padding-bottom: 6vw;
    /* top: 29vw; */
    position: relative;
    height: max-content;
  }

  .arrowmb {
    /* position: relative;
    left: 31vw;
    padding-top: 3vh;
    z-index: 1000; */

    position: relative;
    top: -11vh;
    padding: 6%;
    z-index: 100;
    transform: rotateZ(270deg);
  }

  .rightimgmb {
    width: 89vw;
    top: 20vh;
    /* left: 5vw; */
    position: relative;
  }

  .richcont {
    position: absolute;
    top: 35vh;
    left: 9vw;
    width: 73vw;
    font-size: 1.8vw;
    height: 82vw;
    overflow: scroll;
  }

  .richcont3 {
    position: relative;
    top: 0;
    left: 0;
    width: auto;
    font-size: 3.4vw;
    height: 69vw;
    overflow: scroll;
  }

  .richcont2 {
    position: relative;
    top: -4vw;
    left: 21.5vw;
    transform: rotateZ(270deg);
    width: 27vw;
    /* overflow: hidden; */
    pointer-events: none;
    z-index: 20;
    padding-left: 0.3vw;
    height: -moz-max-content;
    height: max-content;
  }

  .richcontle {
    display: none;
  }

  .anicol {
    position: absolute;
    z-index: 20;
    left: 30vw;
    top: 53vw;
    width: 39%;
  }

  .bgmobile {
    flex-direction: column;
  }

  .rightimg {
    width: 89vw;
    top: -9vh;
    left: 0vw;
  }

  .right-content {
    display: none;
  }

  .left-content {
    padding: 0 !important;
    padding-top: 4vh !important;
    padding-top: 6vh !important;
    background-image: url("./static/background.jpg");
    background-size: initial;
    background-position: unset;
    background-repeat: no-repeat;
  }
}

/* ------- */
.gridcontentaw {
  height: 100vh;
  height: 90vh;
  /* overflow-y: hidden; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
}

.headingspagesb {
  font-family: "GT-Bold";
}

.image-item {
  position: relative;
  flex: 0 0 calc(50% - 20px);
  margin-bottom: 20px;
  padding: 2vw;
}

.arch-frame {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Optional: Add rounded corners to images */
  position: relative;
  z-index: 1;
}

.inner-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%; /* Adjust size of the inner image */
  height: auto;
  object-fit: contain;
  transform: translate(-50%, -50%); /* Center the image inside the arch frame */
  z-index: 2; /* Make sure it's on top of the arch frame */
  padding: 10px; /* Padding around the inner image */
  /* background-image: url("./static/PINKBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
}

/* Styles for text inside the frame */
.textframe {
  /* text-align: center; */
  /* position: absolute; */
  /* bottom: 10%;
  left: 0;
  width: 100%; */
  z-index: 3; /* Ensure text appears on top */
}

.subtext {
  font-family: "RomainHeadlineTrial";
}

/* Flexbox layout for the image grid */
.image-grid {
  /* display: flex;
  flex-wrap: wrap;
  gap: 20px;  */
  /* Adjust the gap between images */
}

.bgmobileaw {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex; /* Flex layout for two columns */
}

.left-contentaw {
  /* background-image: url("./static/background.jpg");
  background-size: 102vw;
  background-size: 192vh;
  background-position: unset;
  background-repeat: no-repeat; */
  background-color: #bcc2cb;
  height: 100vh;
  overflow-y: scroll;
}

.right-contentaw {
  background-image: url("./static/awbg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}

a {
  color: #a29585;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 768px) {
  .image-rowaw:last-child {
    border-bottom: 0.07vw solid rgba(0, 0, 0, 0) !important;
  }
}

@media only screen and (max-width: 768px) {
  .bgmobileaw {
    flex-direction: column; /* Stacks the two sides vertically on small screens */
  }

  /* .left-content,
  .right-content {
    height: auto;
  } */
  .gridcontentaw {
  height: 100vh;
  /* height: 90vh; */
  /* overflow-y: hidden; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
}

  .left-contentaw {
    /* background-image: url("./static/background.jpg");
    background-size: cover;
    background-position: unset;
    background-repeat: no-repeat; */
    background-color: #bcc2cb;
    height: 100vh;
    overflow-y: scroll;
  }

  .right-contentaw {
    display: none;
  }

  .left-contentaw {
    padding: 0 !important;
    padding-top: 4vh !important;
    padding-top: 6vh !important;
  }

  .gridcontentaw {
    height: auto;
  }
}
</style>
