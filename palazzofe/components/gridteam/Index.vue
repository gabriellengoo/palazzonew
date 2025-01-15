<template>
  <client-only>
    <div>
      <div class="image-grid pt-[1vh]">
        <div class="nodes contmbhead">
          <p
            v-if="!isMenuOpen"
            class="headingspages text-center text-4xl uppercase"
          >
            Team
          </p>
        </div>

        <div
          v-for="(chunk, chunkIndex) in chunkedItems"
          :key="chunkIndex"
          class="chunk-container"
        >
          <div class="image-row">
            <div
              v-for="(item, index) in chunk"
              :key="item._key"
              class="item-wrapper"
              @click="clickHandler(item._key)"
            >
              <div
                class="relative image-item transition-opacity duration-300"
                :class="[
                  item.double ? 'double h-fit' : '',
                  item.spacer ? 'p-2' : '',
                  activeTalent &&
                  activeTalent != item.reference.talentId &&
                  activeTalent != item.reference
                    ? 'hidden'
                    : '',
                ]"
              >
                <figure class="flex flex-col">
                  <div class="relative">
                    <!--  :class="[
                        hoveredIndex === item._key
                          ? 'grayscale-off'
                          : 'linkateam',
                      ]" -->
                    <div
                      class="link-animation linkateam"
                      :class="[
                        hoveredIndex === item._key
                          ? 'grayscale-off'
                          : 'linkateam',
                      ]" 
                    >
                      <figure class="inner-image">
                        <MediaImage
                          :src="item.image.image"
                          v-if="item.image.image"
                        />
                      </figure>
                      <figcaption
                        class="textsum block text-center uppercase w-full pt-[1vw]"
                      >
                        <span class="textsumf">{{
                          item.title || "Employee Name"
                        }}</span>
                        <span class="fontsubpub capitalize pt-[.5vw]">{{
                          item.month || "Job Position"
                        }}</span>
                      </figcaption>
                    </div>


                    <!-- <button
          class="bttn"
        >
          Awards
        </button> -->
     

                 

                    <div
                      v-show="hoveredIndex === item._key"
                      class="sideim"
                      :class="{
                        'fade-in': hoveredIndex === item._key,
                        'fade-out': hoveredIndex !== item._key,
                      }"
                    >
                      <figure class="deskimgl">
                        
                        <MediaImage
                          :src="item.imageh.imageh"
                          v-if="item.imageh.imageh"
                        />
                        <MediaImage
                          :src="item.image.image"
                          v-else-if="item.image.image"
                        />
                      </figure>

                      <div class="footerstuff">
                        <div class="textnewardesk teambio ttdesk animate-hover">
                          <p v-if="item" class="uppercase">
                            {{ item.title || "Employee Name" }}
                          </p>
                          <p v-if="item" class="yeartdesk mb-6 capitalize">
                            {{ item.year || "Job Title" }}
                          </p>
                        </div>

                        <div v-if="item.content3" class="pt-[1vw] text-[1.3vw]">
                          <Richtext
                            class="contactinner teambios"
                            :blocks="item.content3"
                          />
                        </div>
                        <div
                          v-if="item.content4"
                          class="w-full flex items-center text-center flex-col pt-[3vh] locationtext text-[1.3vw]"
                        >
                          <p class="loctext uppercase">Email</p>
                          <div
                            class="flex flex-col normal-case italic loctextlink"
                          >
                            <Richtext
                              class="contactinner teamemail"
                              :blocks="item.content4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div v-if="gridteam.titlec" class="spanning-text nomb">
            {{ gridteam.titlec }}
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  props: ["items", "size"],
  data() {
    return {
      project: false,
      isDesktop: false,
      hoveredIndex: null,
      isDefaultActive: true,
    };
  },
  computed: {
    ...mapGetters({
      isMenuOpen: "isMenuOpen",
    }),
    ...mapState(["activeProject", "activeTalent", "gridteam"]),
    chunkedItems() {
      return this.items.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 2);
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []);
    },
    // Add a computed property for the first item's key
    firstItemKey() {
      return this.items.length > 0 ? this.items[0]._key : null;
    },
    lastItemKey() {
  return this.items.length > 0 ? this.items[this.items.length - 1]._key : null;
},
  },
  mounted() {
    this.isDesktop = window.innerWidth > 768;
    window.addEventListener("resize", this.handleResize);

    if (this.items.length > 0) {
      this.hoveredIndex = this.items[0]._key;
      this.isDefaultActive = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapMutations(["SET_ACTIVE_PROJECT", "SET_ACTIVE_TALENT"]),
    handleResize() {
      this.isDesktop = window.innerWidth > 768;
    },
  // clickHandler(key) {
  //   // Set hoveredIndex to apply the grayscale-off class on the clicked item
  //   this.hoveredIndex = this.hoveredIndex === key ? null : key;
  // },
  //   clickHandler(key) {
  //     // Check if clicked item is already active; if so, go back to the first item
  //     this.hoveredIndex = this.hoveredIndex === key ? this.firstItemKey : key;
  //   },
    clickHandler(key) {
  // Check if the clicked item is already active; if so, go to the last item
  this.hoveredIndex = this.hoveredIndex === key ? this.lastItemKey : key;
},

  // clickHandler(key) {
  //   // Toggle between clicked, default, and specific image states
  //   if (this.hoveredIndex === key) {
  //     // Show a specific image when clicked again
  //     this.hoveredIndex = 'specificImage';
  //   } else {
  //     // Show the clicked item's image
  //     this.hoveredIndex = key;
  //   }
  // },
  },
};
</script>

<style scoped>

.bttn {
position: fixed;
    background-color: white;
    font-family: "GT-Sectra-Book", sans-serif;
    transition: background-color 0.3s ease;
    position: absolute;
    border-top: 0.05vw solid black;
    border: 0.05vw solid black;
    border-radius: 0%;
    background-image: url(/_nuxt/static/LeftBG.png);
    background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat;
    padding: 1rem;
    padding: 0.5vw;
    cursor: pointer;
    transition: background-color 0.3s;
    position: fixed;
    bottom: 0;
    /* width: 100%; */
    width: 50%;
    text-transform: uppercase;
    font-family: "GT-Sectra-Book";
    font-family: "NHaas" !important;
    transition: color 0.8s ease;
    font-size: 1vw;
}

.bttn{
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
    /* width: 100%; */
    width: 98%;
    text-transform: uppercase;
    font-family: "GT-Sectra-Book";
    font-family: "NHaas" !important;
    transition: color 0.8s ease;
    font-size: 1vw;
}

.modal {
  z-index: 1000;
}

.item-wrapper {
  display: flex;
  align-items: center;
}

.item-wrapper:nth-child(2) .eventtype {
  display: none;
}

.inner-image {
  object-fit: cover;
  width: auto;
  /* height: 19vw; */
  overflow: hidden;
  position: relative;
}


.image-grid {
  padding-top: 4vw;
}

/* .image-grid::nth-last-child.chunk-container.image-row::nth-last-child.image-item figure div .linkateam {
  display: none !important;
}  */

.image-grid:last-child .chunk-container:last-child .image-row:last-child .item-wrapper:nth-child(2)  .linkateam {
  display: none !important;
}


/* .image-item figure .linkateam::nth-last-child {
  display: none !important;
} */

.linkateam {
  /* filter: grayscale(100%); */
  transition-duration: 1s;
}

.linkateam:hover {
  filter: grayscale(0%);
  opacity: .5;
  transition-duration: 1s;
}

.grayscale-off {
  opacity: .5;
  filter: grayscale(0%) !important;
  transition-duration: 1s;
}

.eventtype {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.8vw;
  line-height: normal;
  font-family: "GT-SuperBook";
  text-transform: uppercase;
  position: relative;
  left: -0.8vw;
  color: rgb(0 0 0 / 30%);
}

.sideim {
  position: fixed;
  left: 50vw;
  top: 0vh;
  width: 50vw;
  height: 100vh;
  overflow: scroll;
  opacity: 0; /* Start with opacity 0 */
  transition: opacity 0.5s ease; /* Transition for fade effect */
}

.sideim.fade-in {
  transition: opacity 0.5s ease;
  opacity: 1; /* Fully visible when hovered */
}

.sideim.fade-out {
  transition: opacity 0.5s ease;
  opacity: 0; /* Fade out when not hovered */
}

.sideim img {
  cursor: pointer !important;
}

.portraitw {
  height: 100%;
  width: 100%;
  position: relative;
  top: 5vh;
  left: 1vw;
  margin: 0 auto;
  object-fit: cover;
}

.deskimgl {
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  height: 68vh;
  /* height: 37vw ; */
  padding: 1vw;
  padding-top: 4vw;
  overflow: hidden;
}

.image-row .item-wrapper:nth-child(1) {
  margin-right: 1.5vw;
}

.image-row .item-wrapper:nth-child(2) {
  margin-left: 1.5vw;
}

.deskimgl img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.footerstuff {
  padding: 1vw;
  padding-top: 1.5vw;
  padding-top: 0;
  position: relative;
  /* top: 70vh; */
  font-size: medium;
  font-size: 1.7rem;
  font-size: 1.5vw;
  width: 100%;
  /* border-top: solid;
  border-top-width: 0.7px; */
}

.loctext {
  font-family: "GT-Bold" !important;
  font-size: 1.1vw !important;
}

.yeartdesk {
  font-size: 1.3vw !important;
}

.teamemail {
  text-decoration: underline;
}

.teambio {
  padding-top: 0.5vw;
  border-top: 0.9vw solid rgba(0, 0, 0, 0.327);
  border-top-width: 0.7px;
}

.landscapew {
  height: 100%;
  width: 100%;
  position: relative;
  left: 1vw;
  margin: 0 auto;
  object-fit: cover;
}

.image-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chunk-container {
  margin-bottom: 20px; /* Space between each chunk */
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.image-row {
  display: flex;
  justify-content: space-between;
  width: 90%;
}

.spanning-text {
  text-align: center;
  font-size: 1.5vw;
  margin-top: 10px;
  text-transform: uppercase;
  font-family: "NHaas";
  width: 15vw;

  text-align: center;
    font-size: 1.8vw;
    margin-top: 10px;
    text-transform: uppercase;
    font-family: "NHaas";
    width: 18vw;
}

.chunk-container:last-child .spanning-text {
  display: none !important;
}

.image-row:last-child {
  border-bottom: 0;
}

.image-item {
  position: relative;
  margin-bottom: 20px;
  padding: 1vw;
  padding: 2vw;
  padding-bottom: 1vw;
  padding-top: 2vw;
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, right 0.3s ease;
}

.textsum {
  display: flex;
  flex-direction: column;
}

.textsumf {
  font-family: "GT-Bold";
}

@media only screen and (max-width: 768px) {
  .bttn {
    position: absolute;
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
    /* width: 100%; */
    width: 98%;
    text-transform: uppercase;
    font-family: "GT-Sectra-Book";
    font-family: "NHaas" !important;
    transition: color 0.8s ease;
    font-size: 3vw;
}

  .sideim img {
    display: none !important;
  }

  .sideim {
    display: none !important;
  }

  .eventtype {
    font-size: 1.8vw;
  }

  .image-row {
    border-bottom: 0vw solid black;
    border-bottom: 0.07vw solid rgba(0, 0, 0, 0.137) !important;
    width: 100%;
  }

  .textsum {
    padding-top: 5vw;
  }

  .image-item {
    padding: 3.5vw;
    margin-bottom: 0px;
  }

  .image-grid {
    padding: 10vw 3vw 2vw 3vw;
  }
}
</style>
