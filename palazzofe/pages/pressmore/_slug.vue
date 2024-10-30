<template>
  <div class="reveal-container relative md:min-h-fit md:overflow-hidden">
    <HeaderComponent />
    <div class="headera mbpad content flex w-full justify-between">
      <h1 class="md:w-[1.4vw] w-auto">
        <a class="headbar" href="../press">
          <SvgBack class="svgmb hover:cursor-pointer" />
        </a>
      </h1>
    </div>

    <div class="bgmobile relative min-h-screen flex flex-col p-[1vw]" >
      <transition name="slide" mode="out-in">
  <div class="layouts" v-for="(section, index) in project.sections" :key="index" 
       v-if="(section.layout1 && currentLayoutIndex === index) || 
              (section.layout2 && currentLayoutIndex === index) || 
              (section.layout3 && currentLayoutIndex === index)">
    
    <div class="layout layout-1" v-if="section.layout1 === true">
      <div class="column col-1 bounce-in bounce-in-1">
        <a target="_blank" class="toplink" :href="section.locationlink">
          <p class="pb-[2vw]">{{ section.location }}</p>
        </a>
        <div>
          <img class="imglay1" :src="section.mainImage" alt="Main Image" />
        </div>
        <div>
          <Richtext class="p-[.5vw]" :blocks="section.column0Text"></Richtext>
        </div>
        <div class="flex">
          <Richtext class="contactinnerpressslug p-[.5vw]" :blocks="section.column1Text"></Richtext>
          <Richtext class="contactinnerpressslug p-[.5vw]" :blocks="section.column2Text"></Richtext>
        </div>
      </div>

      <div class="column col-2 bounce-in bounce-in-2">
        <Richtext class="contactinnerpressslug p-[.5vw]" :blocks="section.column3Text"></Richtext>
      </div>

      <div class="column col-3 bounce-in bounce-in-3 pt-[3vw]">
        <Richtext class="contactinnerpressslug p-[.5vw] w-[85%]" :blocks="section.column4Text"></Richtext>
        <div class="p-[.5vw]">
          <img class="imglay1" :src="section.column4Image.asset.url" alt="Main Image" />
        </div>
        <Richtext class="contactinnerpressslug underimglay1 p-[.5vw]" :blocks="section.column5Text"></Richtext>
      </div>

      <div class="column col-4 bounce-in bounce-in-4 pt-[10vw]">
        <Richtext class="contactinnerpressslug lay1text p-[.5vw]" :blocks="section.column6Text"></Richtext>
      </div>

      <div class="column col-5 bounce-in bounce-in-5"></div>
    </div>

    <div class="otherlays">
      <!-- Layout 2 -->
      <div class="layout layout-2" v-if="section.layout2 === true">
        <div class="column col-1 bounce-in bounce-in-1">
          <a class="toplink" :href="section.locationlink">
            <p class="p-[.5vw] pb-[2vw]">{{ section.location }}</p>
          </a>
          <Richtext v-if="section.layout2Column1Text" class="contactinnerpressslug p-[.5vw] lay1text" :blocks="section.layout2Column1Text"></Richtext>
        </div>
        <div class="column col-2 col-3 bounce-in bounce-in-2">
          <img class="imglay1 p-[.5vw]" :src="section.layout2Image2" alt="Main Image" />
          <div class="flex">
            <div class="contactinnerpressslug p-[.5vw] w-[96vw]">
              <Richtext v-if="section.layout2Column2Text" :blocks="section.layout2Column2Text"></Richtext>
            </div>
            <Richtext v-if="section.layout2Column3Text" class="contactinnerpressslug p-[.5vw] colmb" :blocks="section.layout2Column3Text"></Richtext>
          </div>
        </div>
        <div class="column col-4 bounce-in bounce-in-3">
          <Richtext v-if="section.layout2Column4Text" class="contactinnerpressslug p-[.5vw] underimglay2 colmb" :blocks="section.layout2Column4Text"></Richtext>
          <img class="imglay1" :src="section.layout2Column4Image" v-if="section.layout2Column4Image" alt="Main Image" />
          <a class="toplink text-center" :href="section.locationlink">
            <p class="p-[.5vw] pb-[2vw]">{{ section.location }}</p>
          </a>
          <img class="imglay1" :src="section.layout2Column44Image" v-if="section.layout2Column44Image" alt="Main Image" />
        </div>
        <div class="column col-5 pr-[2vw] bounce-in bounce-in-4">
          <div class="flex">
            <img class="imglay1" :src="section.layout2Column5Image" v-if="section.layout2Column5Image" alt="Main Image" />
            <div class="datelay2 nomb" v-if="section.layout2date">
              <Richtext v-if="section.layout2date" class="contactinnerpressslug p-[.5vw] datein2" :blocks="section.layout2date"></Richtext>
            </div>
          </div>
          <Richtext v-if="section.layout2Column5Text" class="contactinnerpressslug p-[.5vw]" :blocks="section.layout2Column5Text"></Richtext>
        </div>
      </div>

      <!-- Layout 3 -->
      <div class="layout layout-3" v-if="section.layout3 === true">
        <div class="column col-1 bounce-in bounce-in-1">
          <a class="toplink" :href="section.locationlink">
            <p class="p-[.5vw] pb-[2vw]">{{ section.location }}</p>
          </a>
          <Richtext v-if="section.layout3Column1Text" class="contactinnerpressslug p-[.5vw]" :blocks="section.layout3Column1Text"></Richtext>
        </div>

        <div class="column col-2 bounce-in bounce-in-2">
          <Richtext v-if="section.layout3Column2Text" class="contactinnerpressslug p-[.5vw]" :blocks="section.layout3Column2Text"></Richtext>
          <a class="toplink flex justify-center items-center" :href="section.locationlink">
            <p class="p-[.5vw] text-center">{{ section.location }}</p>
          </a>
          <img class="imglay1" :src="section.layout3Column2Image" alt="Main Image" />
          <Richtext v-if="section.layout3Column22Text" class="contactinnerpressslug p-[.5vw]" :blocks="section.layout3Column22Text"></Richtext>
        </div>

        <div class="column col-3 col-4 col-5 bounce-in bounce-in-3">
          <img class="imglay1 p-[.5vw]" :src="section.layout3Image3_5" v-if="section.layout3Image3_5" alt="Main Image" />
          <div class="flex">
            <Richtext v-if="section.layout3Column3Text" class="contactinnerpressslug underimglay3 p-[.5vw] w-[60vw] lay3text" :blocks="section.layout3Column3Text"></Richtext>
            <Richtext v-if="section.layout3Column4Text" class="contactinnerpressslug p-[.5vw] w-[100%]" :blocks="section.layout3Column4Text"></Richtext>
            <Richtext v-if="section.layout3Column5Text" class="contactinnerpressslug p-[.5vw] w-[100%]" :blocks="section.layout3Column5Text"></Richtext>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>


               <!-- Next Button -->
               <button 
      @click="nextLayout" 
      class="next-button"
      :disabled="currentLayoutIndex >= totalLayouts - 1"
    >
      Next Article
      <!-- <SvgBack class="svgmb hover:cursor-pointer"
          /> -->
    </button>
    </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import { mapMutations, mapState } from "vuex";
import TransitionComponent from "~/components/TransitionComponent.vue";

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
        layout3Column5Text
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
      // ... other data properties
    };
  },
  computed: {
    ...mapState(["meta", "metaemails", "projects"]),
    totalLayouts() {
      // Count how many layouts there are
      return this.project.sections.filter(section => 
        section.layout1 || section.layout2 || section.layout3
      ).length;
    },
  },
  methods: {
    closeModal() {
      this.isModalOpen = false; // Close the modal
    },
    nextLayout() {
      if (this.currentLayoutIndex < this.totalLayouts - 1) {
        this.currentLayoutIndex++;
      }
    }
    // ... other methods
  },
};
</script>

<style scoped>
@keyframes bounceIn {
  0% {
    transform: translateY(100%); /* Start below the viewport */
    opacity: 0; /* Invisible */
  }
  50% {
    transform: translateY(-20%); /* Move up a little */
    opacity: 1; /* Fully visible */
  }
  100% {
    transform: translateY(0); /* Final position */
  }
}

@keyframes bounceIn2 {
  0% {
    transform: scale(0%); 
    opacity: 0; /* Invisible */
  }
  100% {
    transform:  scale(100%); 
    opacity: 1; /* Fully visible */
  }
}

/* .bounce-in {
  animation: bounce-in 0.5s ease forwards;
} */

/* Add staggered fade-in effect using different animation delays */
.bounce-in-1 {
  animation: bounce-in2 5s;
  animation-delay: 0.1s;
  animation: bounce-in 0.5s ease forwards;
}

.bounce-in-2 {
  animation: bounce-in2 5s;
  animation-delay: 0.2s;
}

.bounce-in-3 {
  animation: bounce-in2 5s;
  animation-delay: 0.3s;
}

.bounce-in-4 {
  animation: bounce-in2 5s;
  animation-delay: 0.4s;
}

.bounce-in-5 {
  animation: bounce-in2 5s;
  animation-delay: 0.5s;
}

.next-button {
  padding: 1rem;
  /* background-color: #007bff; */
  /* color: white; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: fixed;
    bottom: .5vh;
    width: 98%;
    text-transform: uppercase;
    font-family: 'GT-Sectra-Book';
    transition: color 0.8s ease;
}

.next-button:hover {
  /* background-color: #0056b3; */
  transition: color 0.8s ease;
  color: #ccc;;
}

.next-button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateY(100%); /* Slide in from the right */
}

.toplink {
  text-decoration: underline;
  /* font-style: italic; */
  font-family: 'GT-Sectra-Book-Italic';
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
  font-family: "RomainHeadlineTrial";
  font-family: 'GT-Sectra-Book-Italic';
  font-family: 'NHaasGrotesk';
  font-family: 'RomainTextTrial';
  font-family: 'GT-Sectra-Book';
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

.datein2 {
  top: 3vw;
  font-size: 1vw;
  position: absolute;
  left: 13vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: 'NHaas' !important;
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

  .bgmobile{
    font-size: 3vw;
  }

  .layout-2 .col-1, .layout-2 .col-5 {
    grid-column: span 2;
}

.colmb{
  width: 95vw;
}
}
</style>
