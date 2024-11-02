<template>
  <div class="reveal-container relative md:min-h-fit md:overflow-hidden">
    <HeaderComponent />
    <div class="headera mbpad content flex w-full justify-between">
      <h1 class="md:w-[1.4vw] w-auto">
        <a class="headbar" href="../press">
          <div
            ref="lottieAnimation"
            class="lottie-container headbarc w-[1.4vw] hover:cursor-pointer"
          ></div>
          <!-- <SvgClose class="svgmb hover:cursor-pointer" /> -->
        </a>
      </h1>
      <p class="yeart navmbno text-center text-4xl uppercase" v-if="project">
        {{ project.title }}
      </p>
      <p class="headingspages navmbno text-center text-4xl uppercase">
        Publication
      </p>
      <div class="navmbno">
        <p
          class="headingspagesslug pt-[2vw] nodes text-center text-4xl uppercase"
        >
          Publication
        </p>
      </div>
    </div>

    <div v-if="project" class="presshedindi">
      <p
        class="headingspagesslug pt-[2vw] nodes text-center text-4xl uppercase"
      >
        {{ project.title }}
      </p>
    </div>

    <div
      class="bgmobile relative min-h-screen flex flex-col p-[1vw] pl-[0.3vw]"
    >
      <transition name="slide" mode="out-in">
        <div
          class="layouts"
          v-for="(section, index) in project.sections"
          :key="index"
          :class="`pop-in pop-in-${index + 1}`"
          v-if="
            (section.layout1 && currentLayoutIndex === index) ||
            (section.layout2 && currentLayoutIndex === index) ||
            (section.layout3 && currentLayoutIndex === index)
          "
        >
          <div class="layout layout-1" v-if="section.layout1 === true">
            <div class="column col-1 ">
              <a target="_blank" class="toplink pop-in pop-in-1" :href="section.locationlink">
                <p class="pb-[2vw] ">{{ section.location }}</p>
              </a>
              <div>
                <img
                  class="imglay1 p-[.5vw] pop-in pop-in-5"
                  :src="section.mainImage"
                  alt="Main Image"
                />
              </div>
              <div class="laytextall pop-in pop-in-1">
                <Richtext
                  class="p-[.5vw]"
                  :blocks="section.column0Text"
                ></Richtext>
              </div>
              <div class="flex pop-in pop-in-2">
                <Richtext
                  class="contactinnerpressslug p-[.5vw]"
                  :blocks="section.column1Text"
                ></Richtext>
                <Richtext
                  class="contactinnerpressslug p-[.5vw]"
                  :blocks="section.column2Text"
                ></Richtext>
              </div>
            </div>

            <div class="column col-2 pop-in pop-in-2">
              <Richtext
                class="contactinnerpressslug p-[.5vw]"
                :blocks="section.column3Text"
              ></Richtext>
            </div>

            <div class="column col-3  pt-[3vw]">
              <Richtext
                class="contactinnerpressslug pop-in pop-in-3 underimglay1 p-[.5vw] w-[85%]"
                :blocks="section.column4Text"
              ></Richtext>
              <div class="">
                <img
                  class="imglay1 p-[.5vw] pop-in pop-in-5"
                  :src="section.column4Image.asset.url"
                  alt="Main Image"
                />
              </div>
              <Richtext
                class="contactinnerpressslug underimglay1 p-[.5vw]"
                :blocks="section.column5Text"
              ></Richtext>
            </div>

            <div class="column col-4 pop-in pop-in-4 pt-[10vw]">
              <div class="flex">
                <Richtext
                  class="contactinnerpressslug lay1text p-[.5vw]"
                  :blocks="section.column6Text"
                ></Richtext>
                <div class="datelay2 nomb" v-if="section.layout1date">
                  <Richtext
                    v-if="section.layout1date"
                    class="contactinnerpressslug p-[.5vw] datein1"
                    :blocks="section.layout1date"
                  ></Richtext>
                </div>
              </div>
            </div>

            <div class="column col-5 pop-in pop-in-5"></div>
          </div>

          <div class="otherlays" v-if="section.layout1 === false">
            <!-- Layout 2 -->
            <div class="layout layout-2" v-if="section.layout2 === true">
              <div class="column col-1 pop-in pop-in-4">
                <a class="toplink" :href="section.locationlink">
                  <p class="p-[.5vw] pb-[2vw]">{{ section.location }}</p>
                </a>
                <Richtext
                  v-if="section.layout2Column1Text"
                  class="contactinnerpressslug p-[.5vw] pop-in-4 lay1text"
                  :blocks="section.layout2Column1Text"
                ></Richtext>
              </div>
              <div class="column col-2 col-3 pop-in pop-in-2">
                <img
                  class="imglay1 pop-in pop-in-5 p-[.5vw]"
                  :src="section.layout2Image2"
                  alt="Main Image"
                />
                <div class="flex">
                  <div class="contactinnerpressslug p-[.5vw] w-[96vw]">
                    <Richtext
                      v-if="section.layout2Column2Text"
                      :blocks="section.layout2Column2Text"
                    ></Richtext>
                  </div>
                  <Richtext
                    v-if="section.layout2Column3Text"
                    class="contactinnerpressslug p-[.5vw] colmb"
                    :blocks="section.layout2Column3Text"
                  ></Richtext>
                </div>
              </div>
              <div class="column col-4 pop-in pop-in-4">
                <Richtext
                  v-if="section.layout2Column4Text"
                  class="contactinnerpressslug p-[.5vw] underimglay2 colmb"
                  :blocks="section.layout2Column4Text"
                ></Richtext>
                <img
                  class="imglay1 p-[.5vw]"
                  :src="section.layout2Column4Image"
                  v-if="section.layout2Column4Image"
                  alt="Main Image"
                />
                <a class="toplink text-center" :href="section.locationlink">
                  <p class="p-[.5vw] pb-[2vw]">{{ section.location }}</p>
                </a>
                <img
                  class="imglay1 p-[.5vw]"
                  :src="section.layout2Column44Image"
                  v-if="section.layout2Column44Image"
                  alt="Main Image"
                />
              </div>
              <!-- pr-[1vw] -->
              <div class="column col-5  pop-in pop-in-3">
                <div class="flex">
                  <img
                    class="imglay1 p-[.5vw]"
                    :src="section.layout2Column5Image"
                    v-if="section.layout2Column5Image"
                    alt="Main Image"
                  />
                  <div class="datelay2 nomb" v-if="section.layout2date">
                    <Richtext
                      v-if="section.layout2date"
                      class="contactinnerpressslug p-[.5vw] datein2"
                      :blocks="section.layout2date"
                    ></Richtext>
                  </div>
                </div>
                <Richtext
                  v-if="section.layout2Column5Text"
                  class="contactinnerpressslug p-[.5vw]"
                  :blocks="section.layout2Column5Text"
                ></Richtext>
              </div>
            </div>

            <!-- Layout 3 -->
            <div class="layout layout-3" v-if="section.layout3 === true">
              <div class="column col-1 pop-in pop-in-4">
                <a class="toplink" :href="section.locationlink">
                  <p class="p-[.5vw] pb-[2vw]">{{ section.location }}</p>
                </a>
                <Richtext
                  v-if="section.layout3Column1Text"
                  class="contactinnerpressslug p-[.5vw]"
                  :blocks="section.layout3Column1Text"
                ></Richtext>
              </div>

              <div class="column col-2 pop-in pop-in-2">
                <Richtext
                  v-if="section.layout3Column2Text"
                  class="contactinnerpressslug p-[.5vw]"
                  :blocks="section.layout3Column2Text"
                ></Richtext>
                <a
                  class="toplink flex justify-center items-center"
                  :href="section.locationlink"
                >
                  <p class="p-[.5vw] text-center">{{ section.location }}</p>
                </a>
                <img
                  class="imglay1 p-[.5vw]"
                  :src="section.layout3Column2Image"
                  alt="Main Image"
                />
                <Richtext
                  v-if="section.layout3Column22Text"
                  class="contactinnerpressslug p-[.5vw]"
                  :blocks="section.layout3Column22Text"
                ></Richtext>
              </div>

              <div class="column col-3 col-4 col-5 pop-in pop-in-3">
                <div class="flex">
                  <img
                    class="imglay1 p-[.5vw]"
                    :src="section.layout3Image3_5"
                    v-if="section.layout3Image3_5"
                    alt="Main Image"
                  />
                  <div class="datelay2 nomb" v-if="section.layout3date">
                    <Richtext
                      v-if="section.layout3date"
                      class="contactinnerpressslug p-[.5vw] datein3"
                      :blocks="section.layout3date"
                    ></Richtext>
                  </div>
                </div>
                <div class="flex">
                  <Richtext
                    v-if="section.layout3Column3Text"
                    class="contactinnerpressslug underimglay3 pop-in pop-in-4 p-[.5vw] w-[60vw] lay3text"
                    :blocks="section.layout3Column3Text"
                  ></Richtext>
                  <Richtext
                    v-if="section.layout3Column4Text"
                    class="contactinnerpressslug pop-in pop-in-1 p-[.5vw] w-[100%]"
                    :blocks="section.layout3Column4Text"
                  ></Richtext>
                  <Richtext
                    v-if="section.layout3Column5Text"
                    class="contactinnerpressslug p-[.5vw] pop-in pop-in-3 w-[100%]"
                    :blocks="section.layout3Column5Text"
                  ></Richtext>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Next Button -->
      <!-- <button
        @click="nextLayout"
        class="next-button"
        :disabled="currentLayoutIndex >= totalLayouts - 1"
      >
        Next Page
      </button> -->
      <!-- Next/Previous Button -->
<!-- Navigation Buttons -->
<!-- <button
  v-if="currentLayoutIndex > 0"
  @click="prevLayout"
  class="prev-button"
>
  Previous Page
</button> -->

<button
  @click="nextLayout"
  class="next-button"
>
  {{ currentLayoutIndex < totalLayouts - 1 ? 'Next Page' : 'End' }}
</button>
    </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import { mapMutations, mapState } from "vuex";
import TransitionComponent from "~/components/TransitionComponent.vue";
import lottie from "lottie-web";

export default {
  components: {
    TransitionComponent,
  },
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "pressindi" && slug.current == "${params.slug}"] {
        title,
     
        "archiveSlug": archive->slug.current,
        mainImage {
          asset-> {
            _id,
            url
          }
        },


       sections[] {
        locationlink,
        location,
        layout,
        layout1,
        layout2,
        layout3,
        "mainImage": mainImage.asset->url,
        column0Text,
        column1Text,
        column2Text,
        column3Text,
        column4Image { asset-> { _id, url } },
        column4Text,
        column5Text,
        column6Text,
        layout1date,
        layout2Column1Text,
        "layout2Image2": layout2Image2.asset->url,
        layout2Column2Text,
        layout2Column3Text,
        layout2Column4Text,
        "layout2Column4Image": layout2Column4Image.asset->url,
        "layout2Column44Image": layout2Column44Image.asset->url,
        "layout2Column5Image": layout2Column5Image.asset->url,
        layout2Column5Text,
        layout2date,
        layout3Column1Text,
        layout3Column2Text,
        "layout3Column2Image": layout3Column2Image.asset->url,
        layout3Column22Text,
        "layout3Image3_5": layout3Image3_5.asset->url,
        layout3Column3Text,
        layout3Column4Text,
        layout3Column5Text,
        layout3date,
      }
      } | order(_updatedAt desc)[0]`;

    const project = await $sanity.fetch(query);

    // if (project && project.sectionsslider) {
    //   project.sectionsslider = project.sectionsslider.map((slide) => {
    //     if (slide.images) {
    //       slide.images = slide.images.map((image) => {
    //         const dayFormatted =
    //           image.day.charAt(0).toUpperCase() + image.day.slice(1);
    //         return {
    //           ...image,
    //           day: dayFormatted.replace(/([a-z])(\d+)/, "$1 $2"),
    //         };
    //       });
    //     }
    //     return slide;
    //   });
    // }

    return { project };
  },
  data() {
    return {
      index: 0,
      realIndex: 0,
      step: 0,
      isBackNavigation: false,
      imageNumberPosition: { top: 0, left: 0 },
      isModalOpen: false, // Set the initial state of the modal
      currentLayoutIndex: 0,
      lottieInstance: null,
      // ... other data properties
    };
  },
  computed: {
    ...mapState(["meta", "metaemails", "projects"]),
    totalLayouts() {
      return this.project.sections.length;
    },
       // Change button text based on current layout position
    //    buttonText() {
    //   return this.currentLayoutIndex >= this.totalLayouts - 1 ? "Previous Page" : "Next Page";
    // },
    // // Disable button if at the beginning or end of layouts
    // isDisabled() {
    //   return this.currentLayoutIndex <= 0 && this.buttonText === "Previous Page";
    // },
  },
  methods: {
    closeModal() {
      this.isModalOpen = false; // Close the modal
    },
    // nextLayout() {
    //   if (this.currentLayoutIndex < this.totalLayouts - 1) {
    //     this.currentLayoutIndex++;
    //   }
    // },
   // Navigate to next or previous layout
   nextLayout() {
      if (this.currentLayoutIndex < this.totalLayouts - 1) {
        this.currentLayoutIndex++;
      } else {
        this.currentLayoutIndex = 0; // Reset to first layout
      }
    },
    // Navigate to the previous layout
    prevLayout() {
      if (this.currentLayoutIndex > 0) {
        this.currentLayoutIndex--;
      }
    },
    playSegment() {
      // Play from frame 11 to 20
      if (this.lottieInstance) {
        this.lottieInstance.playSegments([55, 20], true);
      }
    },
    // ... other methods
  },
  mounted() {
    console.log("Lottie animation initialized:", this.lottieInstance);

    this.lottieInstance = lottie.loadAnimation({
      container: this.$refs.lottieAnimation, // the DOM element
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/animations/hamburger.json", // your Lottie animation JSON file path
    });

     // Set the animation to frame 11 without playing
     this.lottieInstance.goToAndStop(55, true);
  },

 
};
</script>

<style scoped>
.pop-in {
  animation: popIn 0.5s forwards;
  opacity: 0;
  transform: scale(0.8);
}

.pop-in-1 {
  animation-delay: .5s;
}

.pop-in-2 {
  animation-delay: 1.0s;
}

.pop-in-3 {
  animation-delay: 1.6s;
}

.pop-in-4 {
  animation-delay: 1.9s;
}

.pop-in-5 {
  animation-delay: 2.2s;
  /* animation: popIn 0.5s forwards, blurIn 0.5s forwards; */
}

@keyframes popIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* @keyframes blurIn {
  from {
    filter: blur(0px);
  }
  to {
    filter: blur(2px);
  }
} */



.next-button {
  padding: 1rem;
  /* background-color: #007bff; */
  /* color: white; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: fixed;
  bottom: 0.5vh;
  width: 100%;
  text-transform: uppercase;
  font-family: "GT-Sectra-Book";
  font-family: "NHaas" !important;
  transition: color 0.8s ease;
}

.next-button:hover {
  /* background-color: #0056b3; */
  transition: color 0.8s ease;
  color: #ccc;
}

.next-button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%); /* Slide in from the right */
}

.toplink {
  text-decoration: underline;
  /* font-style: italic; */
  font-family: "GT-Sectra-Book-Italic";
}

.imglay1 {
  width: 100%;
}
.bgmobile {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  /* height: 100vh; */
  background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* height: 100vh; */
  overflow-y: scroll;
  font-size: 1.2vw;
  justify-content: center;
  justify-content: flex-start;
  font-family: "RomainHeadlineTrial";
  font-family: "GT-Sectra-Book-Italic";
  font-family: "NHaasGrotesk";
  font-family: "RomainTextTrial";
  font-family: "GT-Sectra-Book";
  overflow-y: hidden;
  height: 100vh;
  /* font-family: "GT-Bold"; */
}

.layouts {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between layouts */
  padding-top: 2vw;
}

.layout {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Five equal columns */
  gap: 10px; /* Space between columns */
  gap: 1.5vw;
}

.layout-1 .col-1 {
  grid-column: span 2; /* Image spans two columns */
}

.col-1 {
  grid-column: span 2; /* Span across two columns */
  grid-row: span 2; /* Span across two rows */
}

.layout-1 .col-4 {
  grid-column: span 1; /* Image takes one column */
}

/* .layout-2{
  grid-template-columns: repeat(6, 1fr); 
} */

/* .layout-2 .col-6{
  grid-column: span .1;
} */

.datelay2 {
  /* transform: rotateZ(270deg); */
  width: 100vw;
  position: absolute;
  height: 100vh;
  display: flex;
  /* left: 83vw; */
}

.presshedindi {
  z-index: 10000000;
  position: absolute;
  font-family: "GT-Bold";
  font-family: "MinionPro-Regular";
  font-family: "RomainHeadlineTrial";
  /* font-family: 'GT-SuperBook'; */
  font-size: medium;
  position: relative;
  font-size: 3.5vw;
  z-index: 100;
  position: absolute;
  position: fixed;
  line-height: normal;
  width: 100%;
  pointer-events: none;
  top: 0.7vh !important;
  display: flex;
  justify-content: center;
}

.datein1 {
  top: 0;
  font-size: 1vw;
  position: relative;
  left: 13.8vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important;

  top: -6.3vw;
    left: 14.1vw;
  font-size: 1vw;
  position: absolute;
  left: 13.5vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important;
}

.datein2 {
  top: 3.7vw;
  font-size: 1vw;
  position: absolute;
  left: 13.5vw;
  left: 14.1vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important;
}

.datein3 {
  top: 3.8vw;
  font-size: 1vw;
  position: absolute;
  left: 54.2vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important;

  top: 3.7vw;
  font-size: 1vw;
  position: absolute;
  /* left: 13.5vw; */
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important;
}

.layout-2 .col-1,
.layout-2 .col-5 {
  grid-column: span 1; /* Takes one column */
}

.layout-2 .col-2,
.layout-2 .col-3 {
  grid-column: span 2; /* Image spans two columns */
}

.layout-3 .col-1 {
  grid-column: span 1; /* Image spans two columns */
}

.layout-3 .col-2 {
  grid-column: span 1; /* Text above image */
}

.layout-3 .col-3 {
  grid-column: span 3; /* Image spans three columns */
}

/* Additional responsive styling */
@media (max-width: 768px) {
  .layout {
    padding-top: 3vh;
    grid-template-columns: repeat(2, 1fr); /* Two columns on smaller screens */
  }

  .bgmobile {
    font-size: 3vw;
  }

  .layout-2 .col-1,
  .layout-2 .col-5 {
    grid-column: span 2;
  }

  .colmb {
    width: 95vw;
  }
}
</style>
