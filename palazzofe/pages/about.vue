<template>
  <div>
    <!-- <HeaderComponent /> -->
    <div class="headera content flex w-full justify-between overflow-y-hidden">
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
            :class="[
              '',
              { sheadera: !isMenuOpen },
              { sheaderaopen: isMenuOpen },
            ]"
            class="headingspages pointer-events-none text-center text-4xl uppercase"
          >
            About
          </p>
        </div>


    <div class="bgmobile relative min-h-screen flex">
      <!-- Left Scrollable Content -->
      <div
        class="left-content flex-1 flex justify-center items-center overflow-y-scroll p-8"
      >
        <div class="content">
          <div class="nomb">
            <div class="imgsa" @mousemove="handleMouseHover" @mouseleave="stopScrolling">
              <img class="ania2" src="/1.png" />
              <img class="ania2" src="/2.png" />
              <img class="ania2" src="/3.png" />
              <img class="ania2" src="/4.png" />
              <img class="ania2" src="/5.png" />
            </div>
            <!-- <LottieAnimation class="ania" :animationData="animationData" :loop="true" :autoplay="true" /> -->
            <img class="w-[26.5vw]" src="/leftaboutt.png" />
          </div>
        </div>

        

        <div class="content">
          <div class="nomb covercont pointer-events-none">
            <!-- <LottieAnimation class="ania" :animationData="animationData" :loop="true" :autoplay="true" /> -->
            <img class="coverabout nomb" src="/abneww.png" />
          </div> 
        </div>

        <div class="content nodes">
          <div class=" pointer-events-none">
            <img class="rightimg" src="/aboutrighta.png" />
          </div>
          <div class=" anicol pointer-events-none">
            <img class="rightimg fade-img" src="/j.png" />
            <img class="rightimg fade-img" src="/I.png" />
            <!-- <img class="rightimg fade-img" src="/j.png" /> -->
          </div>
        </div>
       
        <!-- @mousemove="handleMouseHover" @mouseleave="stopScrolling" -->
        <div class="email ml-[5vw] richcont text-left" >
          <Richtext class="richcont3 aboutbot" :blocks="about.about"></Richtext>
          <div class="richcont2" ><SvgBack/></div>
        </div>
      </div>

      <!-- Right Static Content -->
      <div
        class="right-content overflow-y-scroll flex-1 p-8 flex justify-center items-center"
      >
        <div class="content">
          <div class="nomb pointer-events-none">
            <img class="rightimg" src="/aboutrighta.png" />
          </div>
          <div class="nomb anicol pointer-events-none">
            <img class="rightimg fade-img" src="/j.png" />
            <img class="rightimg fade-img" src="/I.png" />
            <!-- <img class="rightimg fade-img" src="/j.png" /> -->
          </div>
        </div>
        <div class="email ml-[5vw] richcont text-left">
          <Richtext class="richcont3" :blocks="about.about"></Richtext>
          <div class="richcont2" ><SvgBack/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";
import { mapState } from "vuex";
import { groq } from "@nuxtjs/sanity";
import animationData from '~/static/animations/aboutani.json';
import LottieAnimation from '~/components/LottieAnimation.vue';
import SvgBack from '~/components/svg/Back.vue';
import { mapMutations } from "vuex";

export default {
  name: "IndexPage",

  
  async asyncData({ params, $sanity, store }) {
    const query = groq`*[_type == "about"]{
    title,
    about,
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
   
  },

  methods: {
    ...mapMutations(["toggleMenu", "setMenuState"]),

    handleMouseHover(event) {
      const container = event.currentTarget;
      const rect = container.getBoundingClientRect();
      const containerHeight = rect.height;
      const mouseY = event.clientY - rect.top; // Mouse Y position relative to the container
      const scrollSpeed = 95; // Adjust this to control the scrolling speed
      
      // Scroll up if the mouse is near the top
      if (mouseY < containerHeight * 0.3) {
        this.scrollContainer(container, -scrollSpeed);
      }
      // Scroll down if the mouse is near the bottom
      else if (mouseY > containerHeight * 0.7) {
        this.scrollContainer(container, scrollSpeed);
      }
    },
    scrollContainer(container, speed) {
      // Clear any existing interval to avoid multiple overlaps
      if (this.scrollInterval) clearInterval(this.scrollInterval);

      // Start a new interval to scroll
      this.scrollInterval = setInterval(() => {
        container.scrollTop += speed;
      }, 100); // Adjust interval time for smoother scrolling
    },
    stopScrolling() {
      // Stop the scrolling when the mouse leaves the container
      if (this.scrollInterval) {
        clearInterval(this.scrollInterval);
        this.scrollInterval = null;
      }
    },
  },

  computed: {
    isMenuOpen() {
      return this.$store.getters.isMenuOpen;
    },
    ...mapState(["gridd"]),
  },

  data() {
    return {
      animationData,
      scrollInterval: null
    };
  },
};
</script>

<style scoped>
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

.ania{
  position: absolute;
    width: 54vw;
    left: -1.9vw;
    top: 0.9vw;
    height: 100vh;
    display: flex;
    justify-items: center;
    justify-content: center;
}

.imgsa{
  position: fixed;
    width: auto;
    left: 13.5vw;
    top: 16vh;
    overflow-y: scroll;
    height: 67.4vh;
    display: flex;
    justify-items: center;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
    /* cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><text y="18" font-size="25" fill="black">●</text></svg>') 12 12, auto; */
    /* cursor: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMS44ODMgMTJsLTcuNTI3IDYuMjM1LjY0NC43NjUgOS03LjUyMS05LTcuNDc5LS42NDUuNzY0IDcuNTI5IDYuMjM2aC0yMS44ODR2MWgyMS44ODN6Ii8+PC9zdmc+"),
    auto !important; */
    /* cursor: move; */
}

.ania2{
  padding-top: 5vw;
  padding-bottom: 5vw;
  width: 23vw;
}

.ania2:first-child{
  padding-top: 10vw;
}

.ania2:last-child{
  padding-top: 10vw;
    padding-bottom: 2vw;
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

.bgmobile {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex; /* Flex layout for two columns */
}

.left-content {
  background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

.anicol{
  position: relative;
    z-index: 99;
    left: 10vw;
    top: -38vw;
    width: 43%;
}

.coverabout{
  width: 45vw;
    height: 51vw;
    position: absolute;
}

.covercont{
  position: absolute;
    left: 2.5vw;
    top: -2vh;
    height: 100vh;
    width: 50vw;
    display: flex !important;
    align-items: center;
}

.rightimg {
  width: 27vw;
  /* top: -2vh; */
  left: 2vw;
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
    z-index: 100;
    padding-left: .3vw;
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
  /* display: unset;  */
        /* left: 43vw; */
        pointer-events: none;
  opacity: 1;
}

.sheaderaopen {
        left: 39vw;
        pointer-events: none;
  /* z-index: 1000 !important; */
  /* display: none;  */
  opacity: 0;
}
/* .nomb {
  position: relative;
} */


/* @media only screen and (max-width: 1024px) {

.anicol {
  position: absolute;
  z-index: 99;
  left: 10vw;
  top: 33vw;
  width: 60%;
}


.bgmobile {
  flex-direction: column; 
}

.rightimg {
  width: 89vw;
  top: -9vh;
  left: 0vw;
}

.richcont {
  position: absolute;
  top: 35vh;
  left: 14vw;
  width: 69vw;
  font-size: 3.5vw;
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
} */

@media only screen and (max-width: 768px) {


  /* .richcont {
  position: absolute;
    top: 42vh;
    left: 64vw;
    width: 20vw;
    font-size: 1.4vw;
    height: 76vw;
    overflow: scroll;
} */

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
    z-index: 100;
    padding-left: .3vw;
    height: -moz-max-content;
    height: max-content;
}

.anicol{
        position: absolute;
        z-index: 99;
        left: 30vw;
        top: 53vw;
        width: 39%;
    }


  .bgmobile {
    flex-direction: column; /* Stacks the two sides vertically on small screens */
  }

  .rightimg {
    width: 89vw;
    top: -9vh;
    left: 0vw;
  }

  /* .richcont {
    position: absolute;
    top: 35vh;
    left: 14vw;
    width: 69vw;
    font-size: 3.5vw;
  } */
  /* .left-content,
  .right-content {
    height: auto;
  } */

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
</style>
