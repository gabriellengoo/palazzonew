<template>
  <client-only>
    <div>
      <div class="image-grid pt-[1vh]">
        <div class="nodes contmbhead">
          <p
            v-if="!isMenuOpen"
            class="headingspages text-center text-4xl uppercase"
          >
            Products
          </p>
          <p
            v-if="isMenuOpen"
            class="headingspages text-center text-4xl uppercase"
          >
            Palazzo Eventi
          </p>
        </div>
 
        <div
          v-for="(chunk, chunkIndex) in chunkedItems"
          :key="chunkIndex"
          class="chunk-container"
        >
          <div class="image-row"  >
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
                 
                    <div
                    class="link-animation"
                    :class="[
                      hoveredIndex === item._key && item._key !== items[0]._key ? 'grayscale-off' : 'linkateam',
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
                          item.title || "Name"
                        }}</span>
                        <!-- <span class="fontsubpubn capitalize pt-[.5vw]">{{
                          item.month || "Position"
                        }}</span> -->
                      </figcaption>
                    </div>

                    <div
                      v-show="hoveredIndex === item._key"
                      class="sideim nomb"
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
                            {{ item.title || "Name" }}
                          </p>
                          <p v-if="!item.filmtitle" class="yeartdesk mb-6 capitalize">
                            {{ item.year || "Title" }}
                          </p>
                          <button v-if="item.filmtitle" class="filmlink" @click="openIframe(item.film)">
                          <div
                        class="w-full flex items-center  text-center "
                      @mouseover="isHovered = true"
                      @mouseleave="isHovered = false"
                    >
                    <p
                        :class="{
                          ' opacity-40 transition-all duration-300 ease-out':
                            isHovered,
                          'opacity-100 transition-all duration-300 ease-out':
                            !isHovered,
                        }"
                        class="loctext"
                      >
                        Play Film 
                      </p>
                      <img
                        src="/playf.png"
                        alt="play Image"
                        :class="{
                          'scale-110 transition-transform duration-300 ease-out':
                            isHovered,
                          'w-[4vw] h-auto transition-all duration-300 ease-out':
                            !isHovered,
                        }"
                        class="w-[4vw] h-auto"
                      />
                   
                    </div>
                  </button>
                        </div>

                        <div v-if="item.content3" class=" text-[1.3vw]">
                          <Richtext
                            class="contactinner teambios"
                            :blocks="item.content3"
                          />
                        </div>
                        <div
                          v-if="item.filmtitle"
                          class="w-full flex items-center text-center flex-col pt-[3vh] locationtext text-[1.3vw]"
                        >
                        
                        
                  <p v-if="item" class="yeartdesk mb-6 capitalize">
                            {{ item.year || "Title" }}
                          </p>
                          <draggable-iframe
                              v-if="iframeVisible"
                              :iframeSrc="iframeUrl"
                              @close="iframeVisible = false"
                            />
        
                        </div>
                      </div>

             
                    </div>



                    <div
                      v-show="hoveredIndex === item._key"
                      class="sideim nodes"
                      :class="{
                        'fade-in': hoveredIndex === item._key,
                        'fade-out': hoveredIndex !== item._key,
                      }"
                    >
                    <div
                        v-if="item.imageh.imageh"
                        class="headeramb content flex w-full justify-between"
                      >
                        <h1 class="md:w-[1.4vw] close-btn w-auto">
                          <a href="../products" class="headbarmb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 500 500"
                              width="500"
                              height="500"
                              preserveAspectRatio="xMidYMid meet"
                              style="
                                width: 100%;
                                height: 100%;
                                transform: translate3d(0px, 0px, 0px);
                                content-visibility: visible;
                              "
                            >
                              <defs>
                                <clipPath id="__lottie_element_2">
                                  <rect
                                    width="500"
                                    height="500"
                                    x="0"
                                    y="0"
                                  ></rect>
                                </clipPath>
                              </defs>
                              <g clip-path="url(#__lottie_element_2)">
                                <g
                                  transform="matrix(15.158522605895996,0,0,22.34870147705078,249.99996948242188,250.00001525878906)"
                                  opacity="1"
                                  style="display: block"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1.4112499952316284,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,0,0)"
                                      fill-opacity="1"
                                      d=" M-10,-10 C-10,-10 10,10 10,10"
                                    ></path>
                                    <path
                                      stroke-linecap="butt"
                                      stroke-linejoin="miter"
                                      fill-opacity="0"
                                      stroke-miterlimit="4"
                                      stroke="rgb(0,0,0)"
                                      stroke-opacity="1"
                                      stroke-width="1"
                                      d=" M-10,-10 C-10,-10 10,10 10,10"
                                    ></path>
                                  </g>
                                  <g
                                    opacity="0"
                                    transform="matrix(1.389361023902893,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,0,0)"
                                      fill-opacity="1"
                                      d=" M10,0 C10,0 10,0 10,0"
                                    ></path>
                                    <path
                                      stroke-linecap="butt"
                                      stroke-linejoin="miter"
                                      fill-opacity="0"
                                      stroke-miterlimit="4"
                                      stroke="rgb(0,0,0)"
                                      stroke-opacity="1"
                                      stroke-width="1"
                                      d=" M10,0 C10,0 10,0 10,0"
                                    ></path>
                                  </g>
                                  <g
                                    opacity="1"
                                    transform="matrix(1.3872150182724,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,0,0)"
                                      fill-opacity="1"
                                      d=" M-10,10 C-10,10 10,-10 10,-10"
                                    ></path>
                                    <path
                                      stroke-linecap="butt"
                                      stroke-linejoin="miter"
                                      fill-opacity="0"
                                      stroke-miterlimit="4"
                                      stroke="rgb(0,0,0)"
                                      stroke-opacity="1"
                                      stroke-width="1"
                                      d=" M-10,10 C-10,10 10,-10 10,-10"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                        </h1>
                      </div>
                    <div  v-if="item.imageh.imageh" class="innerstyle">
                      <div class="imgarea">
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
                    </div>

                      <div class="footerstuff">
                        <div class="textnewardesk teambio ttdesk animate-hover">
                          <p v-if="item" class="uppercase biotitle">
                            {{ item.title || "Name" }}
                          </p>
                          <p v-if="!item.filmtitle" class="yeartdesk mb-6 capitalize">
                            {{ item.year || "Title" }}
                          </p>
                          <button v-if="item.filmtitle" class="filmlink" @click="openIframe(item.film)">
                          <div
                        class="w-full flex items-center  text-center md:pt-5 "
                      @mouseover="isHovered = true"
                      @mouseleave="isHovered = false"
                    >
                    <p
                        :class="{
                          ' opacity-40 transition-all duration-300 ease-out':
                            isHovered,
                          'opacity-100 transition-all duration-300 ease-out':
                            !isHovered,
                        }"
                        class="loctext"
                      >
                        Play Film 
                      </p>
                      <img
                        src="/playf.png"
                        alt="play Image"
                        :class="{
                          'scale-110 transition-transform duration-300 ease-out':
                            isHovered,
                          'w-[11vw] h-auto transition-all duration-300 ease-out':
                            !isHovered,
                        }"
                        class="w-[11vw] h-auto"
                      />
                   
                    </div>
                  </button>
                        </div>

                        <div v-if="item.content3" class="pt-[1vw] text-[1.3vw]">
                          <Richtext
                            class="contactinner teambios"
                            :blocks="item.content3"
                          />
                        </div>
                        <div
                          v-if="item.filmtitle"
                          class="w-full flex items-center text-center flex-col pt-[3vh] locationtext text-[1.3vw]"
                        >
                          <!-- <p class="loctext uppercase">Play Film</p> -->
                      
                          <!-- pop -->
                          <!-- <button class="flex flex-col normal-case italic loctextlink" @click="openIframe(item.film)">{{ item.filmtitle }}</button> -->
                       

                          <draggable-iframe
                              v-if="iframeVisible"
                              :iframeSrc="iframeUrl"
                              @close="iframeVisible = false"
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

// pop
import DraggableIframe from '~/components/DraggableIframe.vue';

export default {
  props: ["items", "size"],
  
  data() {
    return {
      project: false,
      isDesktop: false,
      hoveredIndex: null,
      isDefaultActive: true,
      isHovered: false,
// pop
      iframeVisible: false,
      iframeUrl: '',
    };
  },
  computed: {

    ...mapGetters({
      isMenuOpen: "isMenuOpen",
    }),

    ...mapState(["activeProject", "activeTalent", "gridteam"]),
    chunkedItems() {
      return this.items.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 3);
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
  },
  mounted() {
    this.isDesktop = window.innerWidth > 768;
    window.addEventListener("resize", this.handleResize);

    // Only set the default active item if it's on desktop
    if (this.isDesktop && this.items.length > 0) {
    this.hoveredIndex = this.items[0]._key;
    // this.hoveredIndex = this.items[this.items.length - 1]._key;
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


    clickHandler(key) {
    // Activate fade effect when user clicks
    this.hoveredIndex = key;
  },

  
// pop
    openIframe(url) {
      this.iframeUrl = url;
      this.iframeVisible = true;
    },

  // clickHandler(key) {
  //   if (key !== 0) {
  //   // Set hoveredIndex to apply the grayscale-off class on the clicked item
  //   this.hoveredIndex = this.hoveredIndex === key ? null : key;
  //   }
  // },
    // clickHandler(key) {
    //   // Check if clicked item is already active; if so, go back to the first item
    //   this.hoveredIndex = this.hoveredIndex === key ? this.firstItemKey : key;
    // },




  },
};
</script>

<style scoped>
#iframeContainer {
  position: absolute;
  top: 10vw;
  left: 0;
}

.loctext {
        line-height: normal;
        font-size: smaller;
        font-family: "GT-Bold";
        text-transform: uppercase;
        font-size: 3vw;
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



.linkateam {
  opacity: 1;
  transition-duration: 1s;
}

.linkateam:hover {
  opacity: .5;
  filter: grayscale(0%);
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
  pointer-events: none;
  /* width: 1.4vw; */
  z-index: 10 !important;
}

.filmlink{
  pointer-events: auto !important;
}

.sideim.fade-in {
  transition:  0.5s ease;
  opacity: 1; /* Fully visible when hovered */
  z-index: 10 !important;
}

.sideim.fade-out {
  transition: 0.5s ease;
  opacity: 0; /* Fade out when not hovered */
  z-index: 1 !important;
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
}

.loctext {
  font-family: "GT-Bold" !important;
  font-size: 1.1vw;
}

.yeartdesk {
  font-size: 1.3vw !important;
  padding: 1vw;
  padding-right: 0;
}

.teamemail {
  text-decoration: underline;
}

.teambio {
  /* padding-top: 0.5vw; */
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
  height: 90vh;
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
  padding-bottom: 0vw;
  padding-top: 0vw;
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



.iframe-container {
  position: absolute;
  top: 10%; /* Default position */
  left: 5vw; /* Default position */
  height: 25vw;
    /* display: flex; */
    width: 40vw;
    border: 0.5px solid black;
  background: white;
  background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1000;
  cursor: grab;
  display: flex;
    justify-content: flex-end;
    flex-direction: column;
    pointer-events: all;
}

.textsumf{
    font-family: "GT-Bold";
}




.iframe-header {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-bottom: 0.5px solid black;
}


.close-btn{
  width: 1.4vw;
  z-index: 10000000000 !important;
  position: relative;
}

.iframe-content {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: calc(100% - 2rem); /* Adjust height to account for header */
}


/* .header{
  pointer-events: all;
} */



@media only screen and (max-width: 768px) {

  /* .sideim img {
    display: none !important;
  }

  .sideim {
    display: none !important;
  } */

  .sideim {
    position: fixed;
        left: 0;
        z-index: 10000000000 !important;
        /* top: 36vh; */
        /* padding-top: 5vh; */
        /* bottom: -34vh; */
        width: 100vw;
        height: 50vh;
        height: max-content;
        overflow: scroll;
        opacity: unset;
        width: 1.4vw; 
        /* transition: all 0.5s ease; */
        /* background-image: url("./static/BLUEbg.png"); */
        transition: bottom 0.5s ease-in-out;
}


.deskimgl {
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    height: auto;
    /* height: 37vw; */
    width: 100%;
    padding: 3vw;
    padding-top: 9vw;
    overflow: hidden;
}

/*     .headeramb */

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


.teambio {
    padding-top: 0.5vw;
    border-top: 0;

    /* border-top: 0.9vw solid rgba(0, 0, 0, 0.327);
    border-top-width: 0.7px; */
}

.teambios {
  font-size: 1.95vh;
}

.imgarea{
  height: 56vh;
  width: 100vw;
  display: flex;
        align-items: center;
        /* z-index: 100000000000; */
        position: relative;
 background-image: url("./static/BLUEbg.png");
}

.footerstuff{
  background-image: url("./static/LeftBG.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 55vh;
}



.headeramb{
  display: flex;
    align-items: center;
    border-bottom: 0.5px solid black;
    border-bottom: 0.05vw solid black;
    background-image: url("./static/Navbar.jpg");
    background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat;
    padding: 0.4vw;
    position: absolute;
    top: 0vh;
    z-index: 1000;
    padding-top: 2.5vw;
        padding-bottom: 2.5vw;
        padding-left: 2.5vw;
        padding-right: 2.5vw;
        flex-direction: column;
        position: relative;
        position: fixed;
        align-items: flex-start;
        position: fixed;
        left: 0;
        height: 12vw;
        z-index: 10000000000 !important;
}

.headbarmb{
  width: 4.4vw;
        width: 3.4vh;
        width: 4.9vw;
        margin-top: 1vw;
        display: block;
        pointer-events: all;
        left: 89vw;
        position: relative;
}



.innerstyle{
  background-image: url("./static/BLUEbg.png");
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 100;
  top: 0;
  overflow-y: scroll;
        left: 0;
                /* z-index: 1000000000000000 !important; */
                pointer-events: all;
}

.teambios{
  line-height:normal !important;
  padding: 1vh;
  padding-bottom: 4vh;
  padding-top: 1.25rem;
}

.biotitle{
  font-size: 2.2vh;
}

.loctext {
    font-family: "GT-Bold" !important;
    font-size: 3vw !important;
}

.ttdesk{
  font-size: 4vw !important;
}

.yeartdesk{
  font-size: 3.5vw  !important;
  padding: 0vw;
}

.footerstuff{
    font-size: 3.5vw;
    padding: 3vw;
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

 
  .loctextlink {
    font-size: 4vw;
    text-decoration: underline;
    padding-top: 1.2vw;
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

    
.iframe-container {
    position: absolute;
    top: 22%;
    left: 6%;
    height: 51vw;
    width: 88vw;
    border: 0.5px solid black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1000;
    cursor: grab;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}

.clocon{
    top: 1.5vw;
    right: 1.5vw;
}

  .close-btn{
  width: 4.4vw;
}
}
</style>
