<template>
  <client-only>

      <!-- Image flex box -->
      <!-- <div class="image-grid">
            <div class="image-item relative">
              <div>

                <img src="/archframe.png" alt="Arch Frame" class="arch-frame" />

                <img
                  src="/innerimage1.png"
                  alt="Inner Image"
                  class="inner-image"
                />
              </div>

            </div>
          </div> -->


    <div
      v-masonry
      column-width=".item"
      item-selector=".item"
      class="w-full image-grid masonry"
      :class="size"
      horizontal-order="true"

    > 
    <!-- item.double ? 'double h-fit' : '', vid height?  --> 
      <div
        v-masonry-tile
        class="relative image-item  transition-opacity duration-300 item"
        v-for="item in items"
        :key="item._key"
        :class="[
          item.double ? 'double h-fit' : '',
          item.spacer != 0 ? 'p-2' : '',
          item.image.image || item.video.id ? '' : 'hidden md:block',
          // mobile test?
          item.double && size == 'small' ? '' : '',
          activeTalent &&
          activeTalent != item.reference.talentId &&
          activeTalent != item.reference
            ? ''
            : '', 
        ]"
      > 
      <!--  :style="{ backgroundColor: item.double ? 'red' : 'blue', }" 
                  :style="{ minHeight: item.video.id ? (isDesktop ? (item.double ? '75vh' : '45vh') : '15vh') : 'auto' }"
       ? 'h-space-fit md:h-space-fit 2xl:h-space-fit' vid space height--> 
        <figure
          class="flex flex-col" 
          :style="{ minHeight: item.video.id ? (isDesktop ? '45vh' : '15vh') : 'auto' }"
          :class="[
            item.spacer
              ? `h-space-${item.spacer + 1}  md:h-space-${item.spacer}`
              : item.image.aspect >= 1
              ? item.double
                 ? 'h-space-10 md:h-space-10 2xl:h-space-10'
                : 'h-space-5 md:h-space-3 2xl:h-space-2'
              : item.double
              ? 'h-space-fit md:h-space-fit 2xl:h-space-fit'
              : 'h-space-12 md:h-space-6 2xl:h-space-4',
              // mb-6 redundent
            size == 'small' ? '' : '',
          ]"
        >
       <!-- <div> -->
            <div class="relative">
              <div>

<img src="/archframe.png" alt="Arch Frame" class="arch-frame" />

<!--   class="inner-image" -->
          <NuxtLink
        
            :class="[
              containerClass,
              item.image.position == 'right'
                ? 'items-end'
                : item.image.position == 'center'
                ? 'items-center'
                : 'items-start',
            ]"
            v-if="item.reference.slug"
            :to="`/project/${item.reference.slug}`"
            @mouseenter.native="hover(item)"
            @mouseleave.native="leave()"
          >
            <span
              class="flex flex-col items-start h-full max-w-full"
              :class="size == 'small' ? 'w-full' : 'w-auto'"
            >
         
              <figure
              class="inner-image "
                :class="size == 'small' ? 'block w-full' : 'h-full w-auto'"
                :style="
                  item.video && item.video.aspect && size == 'small'
                    ? `aspect-ratio: ${item.video.aspect.replace(':', '/')}`
                    : ''
                "
              >
              <div class="svg-container">
    <svg
      class="svgsize"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 314 478"
      width="314"
      height="478"
    >
      <defs>
        <!-- Define the mask -->
        <mask id="image-mask">
          <path
            d="M154.5 0.0117052C40.9 1.21171 4.16667 91.1784 0 136.012V477.512H313.5V136.012C307.833 90.1784 268.1 -1.18829 154.5 0.0117052Z"
            fill="white"
          />
        </mask>
      </defs>
      <!-- Use the mask for an image -->
      <rect
        width="314"
        height="478"
        fill="url(#image-pattern)"
        mask="url(#image-mask)"
      />
    </svg>

    <!-- Place the MediaImage component inside the container -->
    <MediaImage
      v-if="item.image.image"
      :src="item.image.image"
      @load="onImageLoad"
      ref="imageLoader"
      class="overlay-image hidden"
    />
  </div>

                <!-- <MediaImage
                  :size="item.image.size"
                  :aspect="item.image.aspect"
                  :src="item.image.image"
                  v-if="item.image.image"
                  class="contain-image"
                  :sizes="
                    size == 'sm' ? 'sm:60vw md:150vw' : 'sm:150vw md:150vw'
                  "
                ></MediaImage> -->
                <!-- :style="{ backgroundColor: item.double ? 'red' : 'blue', }"  -->
                <!-- <MediaVideo 
                  :id="item.video.id"
                  :thumbTime="item.video.thumbTime"                 
     v-if="item.video.id"
                  class="dubvid object-contain object-top w-auto h-full"
                  
                ></MediaVideo> -->
              </figure>
              <figcaption
                class="block text-center uppercase w-full pt-2 pb-1 mr-auto text-xs"
                v-if="size == 'small'"
              >
                <span v-if="item.title">{{ item.title }}</span>
                <span v-else>{{ item.reference.title }}</span>
              </figcaption>
              <figcaption
                class="block text-center uppercase w-full pt-0 mr-auto text-xs"
                v-if="size == 'small'"
              >
                <span v-if="item.year">{{ item.year }}</span>
                <span v-else>{{ item.reference.year }}</span>
              </figcaption>
            </span>
          </NuxtLink>
          <a
            v-else-if="item.link"
            :href="item.link"
            target="_blank"
            :class="[
              containerClass,
              item.image.position == 'right'
                ? 'items-end'
                : item.image.position == 'center'
                ? 'items-center'
                : 'items-start',
            ]"
            @mouseenter="
              item.reference.title
                ? SET_ACTIVE_PROJECT(item.reference)
                : SET_ACTIVE_PROJECT(item._key)
            "
            @mouseleave="SET_ACTIVE_PROJECT(false)"
          >
            <span class="flex flex-col items-start w-auto h-full max-w-full">
              <MediaImage
                :size="item.image.size"
                :aspect="item.image.aspect"
                :src="item.image.image"
                v-if="item.image.image"
                class="contain-image"
               
              ></MediaImage>
              <!-- <MediaVideo
                :id="item.video.id"
                :style="`aspect-ratio: ${item.video.aspect.replace(':', '/')}`"
                v-if="item.video.id"
                :thumbTime="item.video.thumbTime"
                class="object-contain object-top w-auto h-full"
              ></MediaVideo> -->
              <figcaption
                class="block py-2 mr-auto text-xs"
                v-if="size == 'small'"
              >
                <span v-if="item.title">{{ item.title }}</span>
                <span v-else>{{ item.reference.title }}</span>
              </figcaption>
            </span>
          </a>
          <figure
            v-else
            :class="[
              containerClass,
              item.image.position == 'right'
                ? 'items-end'
                : item.image.position == 'center'
                ? 'items-center'
                : 'items-start',
            ]"
          >
            <span class="flex flex-col items-start w-auto h-full max-w-full">
              <MediaImage
                :size="item.image.size"
                :aspect="item.image.aspect"
                :src="item.image.image"
                v-if="item.image.image"
                :class="imageClass"
               
              ></MediaImage>
              <!-- <MediaVideo
                :id="item.video.id"
                :style="`aspect-ratio: ${item.video.aspect.replace(':', '/')}`"
                v-if="item.video.id"
                :thumbTime="item.video.thumbTime"
                class="object-contain object-top w-auto h-full"
              ></MediaVideo> -->
              <figcaption
                class="block py-2 mr-auto text-xs"
                v-if="size == 'small'"
              >
                <span v-if="item.title">{{ item.title }}</span>
                <span v-else>{{ item.reference.title }}</span>
              </figcaption>
            </span>
          </figure>

        </div>
        </div>
      <!-- </div> -->
        </figure>
      </div>
    </div>
  </client-only>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  props: ['items', 'size'],
  data() {
    return {
      project: false,
      containerClass: 'flex flex-col w-full h-full',
      imageClass: 'contain-image',
      isDesktop: false,
      imageLoaded: false,
    }
  },
  computed: {
    ...mapState(['activeProject', 'activeTalent']),
  },
  mounted() {
    this.redraw()
      // Check if the window width is greater than a certain threshold for desktop
      this.isDesktop = window.innerWidth > 768; // Adjust the threshold as needed
    // Listen to window resize events to update the isDesktop flag
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // Remove the resize event listener when the component is destroyed
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    ...mapMutations(['SET_ACTIVE_PROJECT', 'SET_ACTIVE_TALENT']),
    
    redraw() {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
      }
    },

 
    onImageLoad() {
      // Wait until the image is loaded
      this.$nextTick(() => {
        const imageUrl = this.$refs.imageLoader.$el.src;

        // Create SVG pattern for the image
        const svg = this.$el.querySelector('svg');
        const defs = svg.querySelector('defs');

        // Create the pattern element
        const imagePattern = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'pattern'
        );
        imagePattern.setAttribute('id', 'image-pattern');
        imagePattern.setAttribute('patternUnits', 'userSpaceOnUse');
        imagePattern.setAttribute('width', 314);
        imagePattern.setAttribute('height', 478);

        // Create image element for the pattern
        const image = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'image'
        );
        image.setAttributeNS(null, 'href', imageUrl); // Use the image URL
        image.setAttribute('width', 314);
        image.setAttribute('height', 478);

        imagePattern.appendChild(image);
        defs.appendChild(imagePattern);
      });
    },


  
    beforeDestroy() {
    // Remove the resize event listener when the component is destroyed
    window.removeEventListener('resize', this.handleResize);
  },
    hover(item) {
      if (item.reference.title) {
        this.SET_ACTIVE_PROJECT(item.reference)
        if (this.size == 'small') {
          this.SET_ACTIVE_TALENT(item.reference)
        } else {
          this.SET_ACTIVE_TALENT(item.reference.talentId)
        }
      } else {
        this.SET_ACTIVE_PROJECT(false)
      }
    },
    leave() {
      this.SET_ACTIVE_PROJECT(false)
      this.SET_ACTIVE_TALENT(false)
    },
  },
}
</script>
<style scoped>
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

/* .inner-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%; 
  height: auto;
  object-fit: contain;
  transform: translate(-50%, -50%); 
  z-index: 2; 
} */

/* .inner-image img {
    position: relative;
    top: -2.5vh;
    display: flex;
    width: 100vw;
    align-items: center;
} */


.svg-container {
  position: relative;
  width: 314px;
  height: 478px;
  max-width: 100%;
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 314px;
  height: 478px;
  object-fit: cover;
  display: none; /* Hide the MediaImage itself */
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

.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Ensures the images have equal spacing */
  gap: 20px; /* Adjust the gap between images */
}

.image-item {
  flex: 0 0 calc(50% - 20px); /* 50% width, minus the gap */
  margin-bottom: 20px;
  padding: 2vw;
  box-sizing: border-box; /* Ensures padding is included in the width calculation */
}

.image-grid div{ 
/* width: 40%; */
}

/* Add a bottom border after every two images */
.image-item:nth-child(1n) {
  border-bottom: .5px solid #000000; /* Adjust color and thickness */
  margin-bottom: 40px; /* Add space after the border */
}

.square-rounded {
  width: 200px;
    height: 350px;
    border-radius: 100px 100px 0 0;
    overflow: hidden; /* Ensures children elements don't overflow the rounded corners */
  position: relative; /* Required for absolute positioning of children */
}

.square-rounded img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container while maintaining aspect ratio */
  position: absolute;
  top: 0;
  left: 0;
}

/* @media (min-width: 768px){
  .masonry.large .item.double {
    height: 55vh;

}
} */

/* .masonry .item {
  width: calc(20vw - 10px);
  width: 25vw;
} */

</style>