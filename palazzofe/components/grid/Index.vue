<template>
  <client-only>
    <div>
      <!-- images section -->
      <div class="image-grid pt-[9vh]">
        <!-- Loop through the items array in chunks of two -->
        <div
          v-for="(chunk, chunkIndex) in chunkedItems"
          :key="chunkIndex"
          class="image-row"
        >
          <div
            v-for="(item, index) in chunk"
            :key="item._key"
            class="item-wrapper"
          >
            <!-- Image Item -->
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
                  <NuxtLink
                    v-if="item.reference.slug"
                    :to="`/work/${item.reference.slug}`"
                    @mouseenter="hover(item)"
                    @mouseleave="leave()"
                    class="flex flex-col items-end h-full"
                  >
                    <figure class="inner-image">
                      <MediaImage
                        :src="item.image.image"
                        v-if="item.image.image"
                        class=""
                      />
                    </figure>

                    <figcaption
                      class="textsum block text-center uppercase w-full pt-2 "
                    >
                      <span class="textsumf">{{ item.title || item.reference.title }}</span>
                      <span class="pt-[.7vh]">{{ item.year || item.reference.year }}</span>
                    </figcaption>
                  </NuxtLink>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <!-- Horizontal rule after the row of two items -->
        <!-- <hr class="my-4 border-black full-row-hr" /> -->
      </div>
    </div>
  </client-only>
</template>






<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["items", "size"],
  data() {
    return {
      project: false,
      containerClass: "flex flex-col w-full h-full",
      imageClass: "contain-image",
      isDesktop: false,
    };
  },
  computed: {
    ...mapState(["activeProject", "activeTalent"]),

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
  },
  mounted() {
    this.redraw();
    // Check if the window width is greater than a certain threshold for desktop
    this.isDesktop = window.innerWidth > 768; // Adjust the threshold as needed
    // Listen to window resize events to update the isDesktop flag
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    // Remove the resize event listener when the component is destroyed
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    ...mapMutations(["SET_ACTIVE_PROJECT", "SET_ACTIVE_TALENT"]),

    hover() {
      const image = document.querySelector(".hover-show-right");
      if (image) {
        image.classList.add("show-on-right");
      }
    },
    leave() {
      const image = document.querySelector(".hover-show-right");
      if (image) {
        image.classList.remove("show-on-right");
      }
    },

    redraw() {
      if (typeof this.$redrawVueMasonry === "function") {
        this.$redrawVueMasonry();
      }
    },
    beforeDestroy() {
      // Remove the resize event listener when the component is destroyed
      window.removeEventListener("resize", this.handleResize);
    },
    hover(item) {
      const image = document.querySelector(".hover-show-right");
      if (image) {
        image.classList.add("show-on-right");
      }
    },
    leave() {
      const image = document.querySelector(".hover-show-right");
      if (image) {
        image.classList.remove("show-on-right");
      }
    },
  },
};
</script>
<style scoped>

.image-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-row {
  display: flex; /* Make the row horizontal */
  justify-content: space-between; /* Add space between the two items */
  width: 90%; /* Ensure the row spans the full width */
  border-bottom: .05vw solid black;
  display: flex;
  justify-content: space-around;
}

.image-row:last-child{
  border-bottom: 0;
}

.item-wrapper {
  /* flex: 1;  */
  /* Ensure the items take equal space */
  /* margin: 0 10px;  */
  /* Optional: add some margin between items */
}

.full-row-hr {
  width: 100%;
  border: 1px solid black;
}







.hover-show-right {
  position: absolute;
  width: 43vw;
  width: 47vw;
  left: 51vw;
  top: 15vh;
}

.leftimg {
  display: none;
}

.leftimg:nth-child(1) {
  display: contents;
}

.textsum {
  display: flex;
  flex-direction: column;
  /* font-family: 'GT-Bold'; */
}

.textsumf {
  font-family: "GT-Bold";
}

/* Default styling */
.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, right 0.3s ease;
}

/* Show the image on the right when hovered */
.show-on-right {
  position: fixed;
  top: 50%;
  right: 0;
  width: 50%; /* Adjust as needed */
  transform: translateY(-50%);
}

/* .allsvga{
  width: 20vw;
} */
a {
  z-index: 10000000 !important;
}
.image-item {
  position: relative;
  flex: 0 0 calc(50% - 20px);
  /* flex: 0 1 auto; */
  margin-bottom: 20px;
  padding: 1vw;
}

.arch-frame {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Optional: Add rounded corners to images */
  position: relative;
  z-index: 1;
  opacity: 0.2;
}



.svg-container {
  position: relative;
  width: 100%; /* Adjust as needed */
  height: 0;
  padding-top: 150%; /* Aspect ratio of SVG (height/width * 100%) */
}

.svg-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  /* left: .5vw; */
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image covers the SVG area without distortion */
  clip-path: path(
    "m155.5,1.01171c-113.6,1.2,-150.333,91.167,-154.5,136v341.5h313.5v-341.5c-5.667,-45.833,-45.4,-137.2,-159,-136z"
  );
  /* clip-path: path('M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z'); */
}

@media (max-width: 1440px) {
  .overlay-image {
    clip-path: path(
      "m111.885,1.00841c-81.531,0.862,-107.895,65.486,-110.885,97.69v245.302h225v-245.302c-4.067,-32.923,-32.584,-98.552,-114.115,-97.69z"
    );
  }

  .image-item {
    position: relative;
    flex: 0 0 calc(50% - 20px);
    /* flex: 0 1 auto; */
    margin-bottom: 20px;
    /* padding: 2vw; */
  }

  .image-grid {
    /* display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    gap: 20px; */
  }

  .figsvgall {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: auto;
    -o-object-fit: contain;
    object-fit: contain;
    transform: translate(-50%, -50%);
    transform: translate(-48%, -54%) !important;
  }
}

@media (max-width: 1024px) {
  .overlay-image {
    clip-path: path(
      "m78.3732,1.00586c-56.891,0.601,-75.287,45.63,-77.373,68.07v170.924h157v-170.924c-2.838,-22.941,-22.736,-68.671,-79.627,-68.07z"
    );
    /* clip-path: path("m155.5,1.01171c-113.6,1.2,-150.333,91.167,-154.5,136v341.5h313.5v-341.5c-5.667,-45.833,-45.4,-137.2,-159,-136z"); */
  }

  /* .image-item {
  position: relative;
  flex: 0 1 auto;
  margin-bottom: 20px;
  padding: 2vw;
} */
  .figsvgall {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: auto;
    -o-object-fit: contain;
    object-fit: contain;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -59%) !important;
  }
}

@media (max-width: 768px) {
  .overlay-image {
    clip-path: path(
      "m111.885,1.00841c-81.531,0.862,-107.895,65.486,-110.885,97.69v245.302h225v-245.302c-4.067,-32.923,-32.584,-98.552,-114.115,-97.69z"
    ) !important;
    /* clip-path: path(
      "m111.885,1.00841c-81.531,0.862,-107.895,65.486,-110.885,97.69v245.302h225v-245.302c-4.067,-32.923,-32.584,-98.552,-114.115,-97.69z"
    ); */
  }

  .leftimg {
    display: none;
  }

  .leftimg:nth-child(1) {
    display: none;
  }

  .image-item {
    position: relative;
    /* flex: 0 0 calc(50% - 20px); */
    flex: 0 1 auto;
    margin-bottom: 20px;
    /* padding: 2vw; */
  }
  .image-grid {
    /* flex: 0 1 auto;
    grid-gap: 20px;
    gap: 20px;
    justify-content: center; */
  }

  .svg-container {
    transform: scale(1.2);
  }

  .figsvgall {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: auto;
    -o-object-fit: contain;
    object-fit: contain;
    transform: translate(-50%, -50%);
    transform: translate(-34%, -39%) !important;
  }
}

@media (max-width: 425px) {
  .overlay-image {
    /* clip-path: path("m111.885,1.00841c-81.531,0.862,-107.895,65.486,-110.885,97.69v245.302h225v-245.302c-4.067,-32.923,-32.584,-98.552,-114.115,-97.69z") !important; */
    clip-path: path(
      "m111.885,1.00841c-81.531,0.862,-107.895,65.486,-110.885,97.69v245.302h225v-245.302c-4.067,-32.923,-32.584,-98.552,-114.115,-97.69z"
    );
  }
  .image-item {
    position: relative;
    /* flex: 0 0 calc(50% - 20px); */
    flex: 0 1 auto;
    margin-bottom: 20px;
    /* padding: 2vw; */
  }
  .image-grid {
    /* grid-gap: 20px;
    gap: 20px;
    justify-content: center; */
  }
}

@media (max-width: 1902px) {
  .overlay-image {
    /* clip-path: path("m111.885,1.00841c-81.531,0.862,-107.895,65.486,-110.885,97.69v245.302h225v-245.302c-4.067,-32.923,-32.584,-98.552,-114.115,-97.69z"); */
    /* clip-path: path("m155.5,1.01171c-113.6,1.2,-150.333,91.167,-154.5,136v341.5h313.5v-341.5c-5.667,-45.833,-45.4,-137.2,-159,-136z"); */
  }
  .image-item {
    position: relative;
    /* flex: 0 0 calc(50% - 20px); */
    flex: 0 1 auto;
    margin-bottom: 20px;
    /* padding: 2vw; */
  }
}

/* 1902 */

.figsvgall {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: auto;
  object-fit: contain;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -54%);
}



/* Styles for text inside the frame */
.textframe {
  z-index: 3; /* Ensure text appears on top */
}

.subtext {
  font-family: "RomainHeadlineTrial";
}

.image-grid {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  /* Ensures the images have equal spacing */
  /* gap: 20px;  */
  /* Adjust the gap between images */
}

.image-item {
  /* margin-bottom: 20px;
  padding: 2vw;
  box-sizing: border-box;  */
  /* Ensures padding is included in the width calculation */
}

.image-grid {
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;  */
}

.image-item {
  position: relative;
  overflow: hidden; /* Hide any overflow */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
}

/* Add a bottom border after every two images */
.image-item:nth-child(1n) {
  /* border-bottom: 0.5px solid #00000054;  */
  /* Adjust color and thickness */
  /* margin-bottom: 40px;  */
  /* Add space after the border */
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

/* Ensure full width for the hr */
.full-width-hr {
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  margin: 20px 0;
}

/* Adjust the layout for the grid */
.image-grid {
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; */
}

.image-item {
  position: relative;
  /* padding: 2vw; */
  margin-bottom: 20px;
}

@media (max-width: 1024px) {
  .image-grid {
    /* grid-template-columns: repeat(2, 1fr); */
  }
}

@media only screen and (max-width: 2560px) {
  /* .image-grid {
    grid-template-columns: repeat(1, 1fr);
  } */

  .textsum {
    font-family: "RomainHeadlineTrial";
    font-size: 1.2vw;
    line-height: normal;
    padding-top: 2vh;
  }
}

@media only screen and (max-width: 768px) {
  /* .image-grid {
    grid-template-columns: repeat(1, 1fr);
  } */

  .headingspages {
    font-family: "RomainHeadlineTrial";
    font-size: 5vw;
    padding-top: 2vh;
  }
}
</style>
