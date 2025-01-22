<template>
  <client-only>
    <div>
      <!-- Images Section -->
      <div class="image-grid pt-[1vh]">
        <div class="nodes contmbhead">
          <!-- <p>d</p> -->
          <p
            v-if="!isMenuOpen"
            class="headingspages text-center text-4xl uppercase"
          >
            Awards
          </p>
        </div>

        <!-- Loop through the items array in chunks of two -->
        <div
          v-for="(chunk, chunkIndex) in chunkedItems"
          :key="chunkIndex"
          class="image-rowaw"
        >
          <div
            v-for="(item, index) in chunk"
            :key="item._key"
            class="item-wrapper"
            @mouseenter="
              hoveredIndex = item._key;
              isDefaultActive = false;
            "
            @mouseleave="
              hoveredIndex = null;
              isDefaultActive = true;
            "
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
              <figure class="flex flex-col ">
                <div class="relative">
                  <!-- <NuxtLink
                    v-if="item.reference.slug"
                    :to="`/work/${item.reference.slug}`"
                    class="flex flex-col items-end h-full"
                  > -->
                  <div class="hovaw">
                  <figure class="inner-image">
                    <MediaImage
                      :src="item.image.image"
                      v-if="item.image.image"
                    />
                  </figure>
                  <figcaption
                    class="textsum block text-center uppercase w-full pt-2"
                  >
                    <span class="textsumf">{{
                      item.title || item.reference.title
                    }}</span>
                    <span class="pt-[.1vh]">{{
                      item.month || item.reference.month
                    }}</span>
                  </figcaption>
                  </div>
                  <!-- </NuxtLink> -->

                  <!-- Conditionally show sideim div on hover with fade effect -->
                  <div
                    v-show="
                      hoveredIndex === item._key ||
                      (isDefaultActive && chunkIndex === 0 && index === 0)
                    "
                    class="sideim"
                    :class="{
                      'fade-in':
                        hoveredIndex === item._key ||
                        (isDefaultActive && chunkIndex === 0 && index === 0),
                      'fade-out':
                        hoveredIndex !== item._key &&
                        !(isDefaultActive && chunkIndex === 0 && index === 0),
                    }"
                  >
                    <figure class="deskimgl">
                      <MediaImage
                        :src="item.imageh.imageh"
                        v-if="item.imageh.imageh"
                        :class="{
                            portraitw: item.portrait,
                            landscapew: !item.portrait,
                          }"
                      />
                      <div
                        class="content flex-1 p-8 flex justify-center items-center h-full"
                      >
                        <!-- <div class="pointer-events-none">
                          <img class="rightimg" src="/awcol.png" />
                        </div> -->
                        <div class="pinkcircle rightimg"></div>
                      </div>
                      <figcaption
                        class="titlea textsum block text-center  w-full pt-2"
                      >
                    <div class="textsumf2">
                      <span class="yearbig" v-if="item.year">{{
                          item.year
                        }}</span>
                        <span class="yearsmall" v-if="item.years">{{
                          item.years 
                        }}</span>
                          <span class="yeartiny" v-if="item.yeart">{{
                          item.yeart 
                        }}</span>
                    </div>
                      </figcaption>
                      <!-- <figcaption
                        class="disa textsum block text-center w-full pt-2"
                      >
                        <span class="pt-[.1vh]">{{
                          item.year || item.reference.year
                        }}</span>
                      </figcaption> -->
                    </figure>
                  </div>
                </div>
              </figure>
            </div>
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
      chunkSize: 3,
      project: false,
      isDesktop: false,
      hoveredIndex: null, // Track the hovered image item
      isDefaultActive: true, // Controls the visibility of the default image
    };
  },
  computed: {
    ...mapGetters({
      isMenuOpen: "isMenuOpen", // This will map to the Vuex getter
    }),
    ...mapState(["activeProject", "activeTalent"]),
    chunkedItems() {
      return this.items.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / this.chunkSize); // Use dynamic chunk size
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []);
    },
  },
  mounted() {
    this.updateChunkSize(); // Set chunk size on initial mount
    window.addEventListener("resize", this.updateChunkSize);

    this.isDesktop = window.innerWidth > 768;
    window.addEventListener("resize", this.handleResize);

    // Set the first item's _key to hoveredIndex by default
    if (this.items.length > 0) {
      this.hoveredIndex = this.items[0]._key;
      this.isDefaultActive = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateChunkSize);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapMutations(["SET_ACTIVE_PROJECT", "SET_ACTIVE_TALENT"]),
    handleResize() {
      this.isDesktop = window.innerWidth > 768;
    },
    updateChunkSize() {
      if (window.innerWidth <= 768) {
        // If screen width is mobile size (768px or less)
        this.chunkSize = 2; // Set chunk size to 2 for mobile
      } else {
        this.chunkSize = 3; // Default to 3 for larger screens
      }
    },
  },
};
</script>

<style scoped>
.rightimg {
  width: 34vw;
  z-index: 9000 !important;
  position: relative;

}

.titlea {
  height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.3vw;
    margin: 0 auto;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 9000 !important;
}

.textsumf2 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1vw;
  z-index: 10;
  height: 20vw;
  display: flex;
  width: 20vw;
  background-image: url("./static/CirclePink.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

/* .pinkcircle {
  width: 20vw;
  height: 20vw;       
  background-color: pink; 
  background-image: url("./static/PINKBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;    
  display: inline-block; 
} */

.disa {
  height: 100%;
  /* width: 100%; */
  position: absolute;
  top: 85vh;
  left: 20vw;
  width: 13vw;
  font-size: 1.5vw;
  margin: 0 auto;
  -o-object-fit: cover;
  object-fit: cover;
  font-family: "RomainHeadlineTrial" !important;
}

.sideim {
  position: fixed;
  left: 50vw;
  top: 0vh;
  width: 50vw;
  height: 100vh;
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
  /* height: auto;
  width: 44vw;
  position: relative;
  top: 20vh;
  margin: 0 auto; */
}

.portraitw {
  /* height: auto;
    width: 34vw;
    width: 37vw;
    right: 0;
    bottom: 0;
    margin-bottom: 1vw;
    margin-right: 1vw;
    position: absolute;
    height: 90vh;
    width: auto; */

  /* height: 44vh;
  width:  auto;
  position: relative;
  top: 20vh;
  margin: 0 auto; */
  height: 100%;
  width: 100%;
  position: relative;
  top: 5vh;
  /* left: 1vw; */
  margin: 0 auto;
  object-fit: cover;
}

.deskimgl {
  object-fit: cover;
  height: 100vh;
}
/* 
.deskimgl img{
  position: absolute;
} */




.landscapew {
  /* height: auto;
  width: 44vw;
  width: 47vw;
  position: relative;
  top: 20vh; 
  margin: 0 auto; */

  height: 100%;
  width: 100%;
  position: relative;
  position: absolute;
  /* top: 20vh; */
  /* left: 1vw; */
  margin: 0 auto;
  object-fit: cover;
}

.image-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-rowaw {
  display: flex;
  justify-content: space-between;
  width: 90%;
  width:82%;
  /* border-bottom: 0.07vw solid black; */
}

.image-rowaw:last-child {
  border-bottom: 0;
}

.image-item {
  position: relative;
  flex: 0 0 calc(50% - 20px);
  margin-bottom: 20px;
  padding: 1vw;
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
    align-items: center;
    justify-content: center;
}

.textsumf {
  font-family: "GT-Bold";
}

@media only screen and (max-width: 768px) {
  .image-rowaw:last-child {
    display: flex;
    justify-content: space-between;
    width: 82%;
    border-bottom: 0.07vw solid rgba(0, 0, 0, 0) !important;
  }
}

@media only screen and (max-width: 768px) {
  .sideim img {
    display: none !important;
  }

  .sideim {
    display: none !important;
  }

  .image-item {
    padding: 4vw;
  }

  .image-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25vw;
  margin-bottom: 20vw;
}
  /* .left-content{
    padding: 0 !important;
  } */
}
</style>
