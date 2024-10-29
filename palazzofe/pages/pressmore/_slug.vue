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

    <div class="bgmobile relative min-h-screen flex flex-col p-[1vw]">
      <div class="layouts">
        <!-- Layout 1 -->
        <div class="layout layout-1" v-if="project.mainImage">
          <div class="column col-1">
            <a
              target="_blank"
              v-if="project.mainImage"
              class="toplink"
              :href="project.locationlink"
            >
              <p>{{ project.location }}</p>
            </a>

            <div v-if="project.mainImage">
              <img
                class="imglay1"
                :src="project.mainImage.asset.url"
                alt="Main Image"
              />
            </div>

            <div class="flex">
              <Richtext
                v-if="project.column1Text"
                class="contactinnerpressslug p-[.5vw]"
                :blocks="project.column1Text"
              ></Richtext>
              <Richtext
                v-if="project.column2Text"
                class="contactinnerpressslug p-[.5vw]"
                :blocks="project.column2Text"
              ></Richtext>
            </div>
          </div>

          <div class="column col-2">
            <Richtext
              v-if="project.column3Text"
              class="contactinnerpressslug p-[.5vw]"
              :blocks="project.column3Text"
            ></Richtext>
          </div>

          <div class="column col-3 pt-[3vw]">
            <Richtext
              v-if="project.column4Text"
              class="contactinnerpressslug p-[.5vw] w-[85%]"
              :blocks="project.column4Text"
            ></Richtext>
            <div class="p-[.5vw]" v-if="project.column4Image">
              <img
                class="imglay1"
                :src="project.column4Image.asset.url"
                alt="Main Image"
              />
            </div>
            <Richtext
              v-if="project.column6Text"
              class="contactinnerpressslug underimglay1 p-[.5vw]"
              :blocks="project.column6Text"
            ></Richtext>
          </div>

          <div class="column col-4 pt-[13vw]">
            <Richtext
              v-if="project.column5Text"
              class="contactinnerpressslug lay1text p-[.5vw]"
              :blocks="project.column5Text"
            ></Richtext>
          </div>

          <div class="column col-5"></div>
        </div>

        <!-- Layout 2 -->
        <div class="layout layout-2" v-if="project.layout2Image2">
          <div class="column col-1">
            <a
              v-if="project.layout2Image2"
              class="toplink"
              :href="project.locationlink"
            >
              <p class="p-[.5vw]">{{ project.location }}</p>
            </a>
            <Richtext
              v-if="project.layout2Column1Text"
              class="contactinnerpressslug p-[.5vw] lay1text"
              :blocks="project.layout2Column1Text"
            ></Richtext>
          </div>
          <div class="column col-2 col-3">
            <!-- <MediaImage :src="project.layout2Column4Image" v-if="project.layout2Column4Image" /> -->
            <!-- <p v-if="project">{{ project.content }}</p> -->
            <img
              class="imglay1 p-[.5vw]"
              :src="project.layout2Image2.asset.url"
              v-if="project.layout2Image2"
              alt="Main Image"
            />
            <div class="flex">
              <div class="contactinnerpressslug p-[.5vw] w-[100vw]">
                <Richtext
                  v-if="project.layout2Column2Text"
                  :blocks="project.layout2Column2Text"
                ></Richtext>
              </div>
              <Richtext
                v-if="project.layout2Column3Text"
                class="contactinnerpressslug p-[.5vw]"
                :blocks="project.layout2Column3Text"
              ></Richtext>
            </div>
          </div>
          <div class="column col-4">
            <!-- <p v-if="project.column4Text">{{ project.column4Text }}</p> -->
            <Richtext
              v-if="project.layout2Column4Text"
              class="contactinnerpressslug p-[.5vw]"
              :blocks="project.layout2Column4Text"
            ></Richtext>
            <img
              class="imglay1"
              :src="project.layout2Column4Image.asset.url"
              v-if="project.layout2Column4Image"
              alt="Main Image"
            />
            <a
              v-if="project.layout2Image2"
              class="toplink"
              :href="project.locationlink"
            >
              <p class="p-[.5vw]">{{ project.location }}</p>
            </a>
            <img
              class="imglay1"
              :src="project.layout2Column44Image.asset.url"
              v-if="project.layout2Column44Image"
              alt="Main Image"
            />
            <!-- <MediaImage :src="project.layout2Column4Image" v-if="project.layout2Column4Image" /> -->
          </div>
          <div class="column col-5 pr-[2vw]">
            <div class="flex">
              <img
                class="imglay1"
                :src="project.layout2Column5Image.asset.url"
                v-if="project.layout2Column5Image"
                alt="Main Image"
              />
              <div class="datelay2" v-if="project.layout2date">
                <Richtext
                  v-if="project.layout2date"
                  class="contactinnerpressslug p-[.5vw] datein2"
                  :blocks="project.layout2date"
                ></Richtext>
              </div>
            </div>
            <!-- <MediaImage :src="project.layout2Column44Image" v-if="project.layout2Column44Image" /> -->
            <!-- <p v-if="project.column5Text">{{ project.column5Text }}</p> -->
            <Richtext
              v-if="project.layout2Column5Text"
              class="contactinnerpressslug p-[.5vw]"
              :blocks="project.layout2Column5Text"
            ></Richtext>
          </div>

          <!-- <div class="column col-6" v-if="project.layout2date">
              <Richtext
              v-if="project.layout2date"
              class="contactinnerpressslug p-[.5vw]"
              :blocks="project.layout2date"
            ></Richtext>
            </div> -->
        </div>

        <!-- Layout 3 -->
        <div class="layout layout-3" v-if="project.layout3Column2Image">
          <div class="column col-1">
            <a
              v-if="project.layout3Column2Image"
              class="toplink"
              :href="project.locationlink"
            >
              <p class="p-[.5vw]">{{ project.location }}</p>
            </a>
            <Richtext
              v-if="project.layout3Column1Text"
              class="contactinnerpressslug p-[.5vw]"
              :blocks="project.layout3Column1Text"
            ></Richtext>
            <!-- <p v-if="project.column1Text">{{ project.column1Text }}</p> -->
          </div>

          <div class="column col-2">
            <Richtext
              v-if="project.layout3Column2Text"
              class="contactinnerpressslug p-[.5vw]"
              :blocks="project.layout3Column2Text"
            ></Richtext>
            <a
              v-if="project.layout3Column2Image"
              class="toplink flex justify-center items-center"
              :href="project.locationlink"
            >
              <p class="p-[.5vw]">{{ project.location }}</p>
            </a>
            <!-- <p v-if="project.column2Text">{{ project.column2Text }}</p> -->
            <img
              class="imglay1"
              :src="project.layout3Column2Image.asset.url"
              v-if="project.layout3Column2Image"
              alt="Main Image"
            />
            <Richtext
              v-if="project.layout3Column22Text"
              class="contactinnerpressslug p-[.5vw]"
              :blocks="project.layout3Column22Text"
            ></Richtext>
          </div>

          <div class="column col-3 col-4 col-5">
            <img
              class="imglay1 p-[.5vw]"
              :src="project.layout3Image3_5.asset.url"
              v-if="project.layout3Image3_5"
              alt="Main Image"
            />
            <div class="flex">
              <Richtext
                v-if="project.layout3Column3Text"
                class="contactinnerpressslug p-[.5vw] w-[100%] lay2text"
                :blocks="project.layout3Column3Text"
              ></Richtext>
              <Richtext
                v-if="project.layout3Column4Text"
                class="contactinnerpressslug p-[.5vw] w-[100%]"
                :blocks="project.layout3Column4Text"
              ></Richtext>
              <Richtext
                v-if="project.layout3Column5Text"
                class="contactinnerpressslug p-[.5vw] w-[100%]"
                :blocks="project.layout3Column5Text"
              ></Richtext>
            </div>
            <!-- <p v-if="project.content">{{ project.content }}</p> -->
          </div>
        </div>
      </div>
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
  locationlink,
  location,
  "archiveSlug": archive->slug.current,
  mainImage {
    asset-> {
      _id,
      url
    }
  },
  column1Text,
  column2Text,
  column3Text,
  column6Text,
  column4Image {
    asset-> {
      _id,
      url
    }
  },
  column4Text,
  column5Text,

  layout2Image1 {
    asset-> {
      _id,
      url
    }
  },
  layout2Column1Text,
  layout2Image2 {
    asset-> {
      _id,
      url
    }
  },
  layout2Column2Text,
  layout2Column3Text,
  layout2Column4Text,
  layout2Column4Image {
    asset-> {
      _id,
      url
    }
  },
  layout2Column44Image {
    asset-> {
      _id,
      url
    }
  },
  layout2Column5Image {
    asset-> {
      _id,
      url
    }
  },
  layout2Column5Text,
  layout2date,
  layout2Column1Text,
  layout2Image2 {
    asset-> {
      _id,
      url
    }
  },
  layout2Column4Text,
  layout2Column4Image {
    asset-> {
      _id,
      url
    }
  },
  layout2Column5Image {
    asset-> {
      _id,
      url
    }
  },
  layout2Column5Text,

  layout3Column1Text,
  layout3Column2Text,
  layout3Column22Text,
  layout3Column2Image {
    asset-> {
      _id,
      url
    }
  },
  layout3Image3_5 {
    asset-> {
      _id,
      url
    }
  },
  layout3Column3Text,
  layout3Column4Text,
  layout3Column5Text
} | order(_updatedAt desc)[0]`;

    const project = await $sanity.fetch(query);

    if (project && project.slider) {
      project.slider = project.slider.map((slide) => {
        if (slide.images) {
          slide.images = slide.images.map((image) => {
            const dayFormatted =
              image.day.charAt(0).toUpperCase() + image.day.slice(1);
            return {
              ...image,
              day: dayFormatted.replace(/([a-z])(\d+)/, "$1 $2"),
            };
          });
        }
        return slide;
      });
    }

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
      // ... other data properties
    };
  },
  computed: {
    ...mapState(["meta", "metaemails", "projects"]),
  },
  methods: {
    closeModal() {
      this.isModalOpen = false; // Close the modal
    },
    // ... other methods
  },
};
</script>

<style scoped>
.toplink {
  text-decoration: underline;
  font-style: italic;
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
  font-size: 1vw;
  justify-content: center;
  font-family: "RomainHeadlineTrial";
  /* font-family: "GT-Bold"; */
}

.layouts {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between layouts */
  padding-top: 3vw;
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
  top: 4.5vw;
  position: absolute;
  left: 12.5vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
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
    grid-template-columns: repeat(2, 1fr); /* Two columns on smaller screens */
  }
}
</style>
