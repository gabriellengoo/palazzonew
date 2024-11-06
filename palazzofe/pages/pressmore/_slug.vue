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

            <div class="top-right-element" v-if="section.layout1date">
                    <Richtext
                      v-if="section.layout1date"
                      class="contactinnerpressslug "
                      :blocks="section.layout1date"
                    ></Richtext>
                  </div>


            <div class="column col-1 ">
                <p class="toplink p-[.5vw] pb-[2vw] ">{{ section.location }}</p>
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
              <div class="flex pop-in pop-in-2 w-[39vw]">
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
                class="contactinnerpressslug"
                :blocks="section.column3Text"
              ></Richtext>
            </div>

            <div class="column col-3  pt-[3vw]">
              <Richtext
                class="contactinnerpressslug imtitle pop-in pop-in-3 underimglay1 p-[.5vw] w-[85%]"
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
                class="contactinnerpressslug imtitle2 underimglay1 p-[.5vw]"
                :blocks="section.column5Text"
              ></Richtext>
            </div>

            <div class="column col-4 pop-in pop-in-4 pt-[10vw]">
              <div class="flex">
                <div class="flex flex-col"><Richtext
                  class="contactinnerpressslug lay1subtext p-[.5vw]"
                  :blocks="section.column6Text"
                ></Richtext>
                <Richtext
                  class="contactinnerpressslug  p-[.5vw]"
                  :blocks="section.column7Text"
                ></Richtext></div>
         
              </div>
            </div>

            <div class="column col-5 pop-in pop-in-5"></div>
          </div>


          <div class="otherlays" v-if="section.layout1 === false">
            <!-- Layout 2 -->
            <div class="layout layout-2" v-if="section.layout2 === true">
              

              <div class="top-right-element" v-if="section.layout2date">
                    <Richtext
                      v-if="section.layout2date"
                      class="contactinnerpressslug "
                      :blocks="section.layout2date"
                    ></Richtext>
                  </div>


              <div class="column col-1 pop-in pop-in-4">
                  <p class="toplink p-[.5vw] pb-[2vw]">{{ section.location }}</p>
                <Richtext
                  v-if="section.layout2Column1Text"
                  class="contactinnerpressslug lay1subtext p-[.5vw] pop-in-4 lay1text"
                  :blocks="section.layout2Column1Text"
                ></Richtext>
                <Richtext
                  v-if="section.layout2Column11Text"
                  class="contactinnerpressslug  p-[.5vw] pop-in-4 lay1text"
                  :blocks="section.layout2Column11Text"
                ></Richtext>
              </div>
              <div class="column col-2 col-3 pop-in pop-in-2">
                <img
                  class="imglay1 pop-in pop-in-5 p-[.5vw]"
                  :src="section.layout2Image2"
                  alt="Main Image"
                />
                <div class="flex w-[40vw]">
                    <Richtext
                      v-if="section.layout2Column2Text"
                      :blocks="section.layout2Column2Text"
                      class="contactinnerpressslug p-[.5vw] w-[83vw]"
                    ></Richtext>
                  <Richtext
                    v-if="section.layout2Column3Text"
                    class="contactinnerpressslug p-[.5vw] colmb w-[86vw]"
                    :blocks="section.layout2Column3Text"
                  ></Richtext>
                </div>
              </div>
              <div class="column col-4 pop-in pop-in-4">
               <div class="flex flex-col">
                <p  v-if="section.layout2Column4Text" class="imagetext p-[.5vw] pb-0">IMAGE</p>
                <Richtext
                  v-if="section.layout2Column4Text"
                  class="contactinnerpressslug p-[.5vw] pt-0 imtitle2 colmb"
                  :blocks="section.layout2Column4Text"
                ></Richtext>
                <Richtext
                  v-if="section.layout2Column44Text"
                  class="contactinnerpressslug p-[.5vw] colmb"
                  :blocks="section.layout2Column44Text"
                ></Richtext>
               </div>
                <img
                  class="imglay1 p-[.5vw]"
                  :src="section.layout2Column4Image"
                  v-if="section.layout2Column4Image"
                  alt="Main Image"
                />
             
                <Richtext
                  v-if="section.layout2Column444Text"
                  class="toplink p-[.5vw] "
                  :blocks="section.layout2Column444Text"
                ></Richtext>
                <img
                  class="imglay1 p-[.5vw]"
                  :src="section.layout2Column44Image"
                  v-if="section.layout2Column44Image"
                  alt="Main Image"
                />
              </div>
              <div class="column col-5  pop-in pop-in-3">
                <div class="flex">
                  <img
                    class="imglay1 p-[.5vw]"
                    :src="section.layout2Column5Image"
                    v-if="section.layout2Column5Image"
                    alt="Main Image"
                  />
                
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
              <div class="top-right-element" v-if="section.layout3date">
                    <Richtext
                      v-if="section.layout3date"
                      class="contactinnerpressslug "
                      :blocks="section.layout3date"
                    ></Richtext>
                  </div>

              <div class="column col-1 pop-in pop-in-4">
                  <p class="toplink p-[.5vw] pb-[2vw]">{{ section.location }}</p>
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
                <Richtext
                  v-if="section.layout3Column23Text"
                  class="contactinnerpressslug toplink p-[.5vw]"
                  :blocks="section.layout3Column23Text"
                ></Richtext>
          
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
               
                </div>
              

                <div class="flex">
                 <div class="flex flex-col w-[87vw]">
                <Richtext
                  v-if="section.layout3Column3Text"
                  class=" lay3subtext p-[.5vw] pt-0 colmb pop-in pop-in-4"
                  :blocks="section.layout3Column3Text"
                ></Richtext>
                <p  v-if="section.layout3Column33Text" class="imagetext p-[.5vw] pb-0">IMAGE</p>
                <Richtext
                  v-if="section.layout3Column33Text"
                  class="contactinnerpressslug p-[.5vw] pt-0 imtitle2 colmb pop-in pop-in-4"
                  :blocks="section.layout3Column33Text"
                ></Richtext>
                 </div>
               

                  <Richtext
                    v-if="section.layout3Column4Text"
                    class="contactinnerpressslug pop-in pop-in-1 p-[.5vw] pt-[0] "
                    :blocks="section.layout3Column4Text"
                  ></Richtext>
                  <Richtext
                    v-if="section.layout3Column5Text"
                    class="contactinnerpressslug p-[.5vw] pop-in pop-in-3 pt-[0]"
                    :blocks="section.layout3Column5Text"
                  ></Richtext>
                </div>
              </div>
            </div>
          </div>

        </div>
      </transition>


       <!-- Display the gridpress content here -->
       <div  class="gridpress-container">
  <!-- <div v-for="(gridItem, index) in project.gridpress" :key="index" class="grid-item">
    <img class="imglay1 p-[.5vw]" :src="gridItem.imageUrl" alt="Grid Image" />
  </div> -->
  <!-- <img
                  class="imglay1 p-[.5vw]"
                  :src="section.layout3Column2Image"
                  alt="Main Image"
                /> -->
  <!-- <img :src="gridItem.imageUrl" alt="Grid Image" /> -->
  <!-- <div v-if="gridpubindi.gridpress" class="">
            <Gridpressindi class="" :items="gridpubindi.gridpress" size="small"></Gridpressindi>
          </div> -->
          <!-- v-if="project && project.slider && project.slider.length
           :key="sliderItem._key" -->

          <div>
      <div
        v-for="(slider, index) in project.slider"
        :key="index"
        class="slider-item"
      >
        <img :src="slider.images.image" alt="Slider Image" />
      </div>
    </div>
</div>




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
    const query = groq`*[_type == "pressindi" && slug.current == "${params.slug}"] { ...,
        title,
     
        "archiveSlug": archive->slug.current,


 "slider": slider[]{
    _key,
    "images": images[]{
      _key,
      "image": image.asset->url,
    }
  },

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
        column7Text,
        layout1date,
        layout2Column1Text,
        layout2Column11Text,
        "layout2Image2": layout2Image2.asset->url,
        layout2Column2Text,
        layout2Column3Text,
        layout2Column4Text,
        layout2Column44Text,
        layout2Column444Text,
        "layout2Column4Image": layout2Column4Image.asset->url,
        "layout2Column44Image": layout2Column44Image.asset->url,
        "layout2Column5Image": layout2Column5Image.asset->url,
        layout2Column5Text,
        layout2date,
        layout3Column1Text,
        layout3Column2Text,
        "layout3Column2Image": layout3Column2Image.asset->url,
        layout3Column22Text,
        layout3Column23Text,
        "layout3Image3_5": layout3Image3_5.asset->url,
        layout3Column3Text,
        layout3Column33Text,
        layout3Column4Text,
        layout3Column5Text,
        layout3date,
      }
      } | order(_updatedAt desc)[0]`;

    const project = await $sanity.fetch(query);


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
    ...mapState(["gridpubindi"]),

  },
  methods: {
    closeModal() {
      this.isModalOpen = false; // Close the modal
    },

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
.gridpress-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  position: absolute;
}

.grid-item {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
}

.grid-item img {
  max-width: 100%;
  height: auto;
}


.imagetext{
    font-size: .9vw !important;
    font-family: 'NHaas' !important;
}

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
  width: 98.4vw;
  height: 100vh;

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

  top: -5.9vw;
    left: 14.1vw;
  font-size: .9vw;
  position: absolute;
  left: 13.5vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important;
}

.datein2 {
  top: 3.3vw;
  font-size: .9vw;
  position: absolute;
  left: 13.5vw;
  left: 14.5vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important;
}

.datein3 {
  /* top: 3.8vw;
  font-size: 1vw;
  position: absolute;
  left: 54.6vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important; */
}

.top-right-element {
  font-size: 1vw;
  position: fixed;
  font-family: "NHaas" !important; 
  top: 6.1vw;
  right: -4.1vw;
    transform: rotateZ(90deg);
    z-index: 1000;
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

  .headera {
          flex-direction: column;
        padding-bottom: 4vw !important;
        padding-left: 2.5vw;
        padding-right: 2.5vw;
        padding-top: 3.5vw;
        z-index: 100;
}

.presshedindi {
        font-family: "GT-Bold";
        font-family: "MinionPro-Regular";
        font-family: "RomainHeadlineTrial";
        font-size: medium;
        font-size: 3.5vw;
        line-height: normal;
        pointer-events: none;
        position: relative;
        position: absolute;
        position: fixed;
        top: .7vh !important;
        width: 100%;
        z-index: 100;
        padding-bottom: 3.5vw !important;
        padding-left: 2.5vw;
        padding-right: 2.5vw;
        padding-top: 2vw;
        z-index: 100;
    }

  .layout {
    padding-top: 5vh;
    grid-template-columns: repeat(2, 1fr); /* Two columns on smaller screens */
  }

  .bgmobile {
    font-size: 3vw;
    overflow-y: scroll
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
