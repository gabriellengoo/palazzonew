<template>
  <client-only>
    <div>
      <!-- Images Section -->
      <div class="image-grid pt-[1vh]">

        <div class="nodes contmbhead">
          <!-- <p>d</p> -->
          <p
           :class="{ 'opacity-0': isMenuOpen, 'opacity-100': !isMenuOpen }"
          class="headingspages text-center text-4xl  uppercase "
        >
          Weddings
        </p>
        </div>

        <!-- Loop through the items array in chunks of two -->
        <div v-for="(chunk, chunkIndex) in chunkedItems" :key="chunkIndex" class="image-row">
          <div
            v-for="(item, index) in chunk"
            :key="item._key"
            class="item-wrapper"
            @mouseenter="hoveredIndex = item._key; isDefaultActive = false"
            @mouseleave="hoveredIndex = null; isDefaultActive = true"
            @mousemove="onMouseMove"
          >
            <!-- Image Item -->
            <div class="relative image-item transition-opacity duration-300">
              <figure class="flex flex-col">
                <div class="relative inner-image" ref="innerImage">
                  <NuxtLink 
                    v-if="item.reference.slug"
                    :to="`/work/${item.reference.slug}`"
                    class="flex flex-col items-end h-full link-animation linka"   
                  >
                    <figure>
                      <div class="hover-effect" :style="hoverEffectStyle"></div>
                      <MediaImage :src="item.image.image" v-if="item.image.image" />
                    </figure>
                    <figcaption class="textsum block text-center uppercase w-full pt-2">
                      <span class="textsumf">{{ item.title || item.reference.title }}</span>
                      <span class="pt-[.1vh]">{{ item.year || item.reference.year }}</span>
                    </figcaption>
                  </NuxtLink>
                  <!-- Hover effect element -->
                  <div 
                    v-show="hoveredIndex === item._key || (isDefaultActive && chunkIndex === 0 && index === 0)" 
                    class="sideim"
                    :class="{ 'fade-in': hoveredIndex === item._key || (isDefaultActive && chunkIndex === 0 && index === 0), 'fade-out': hoveredIndex !== item._key && !(isDefaultActive && chunkIndex === 0 && index === 0) }"
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
      project: false,
      isDesktop: false,
      hoveredIndex: null,
      isDefaultActive: true,
      hoverEffectStyle: {
        left: '0px',
        top: '0px',
      }
    };
  },
  computed: {
    ...mapGetters({
      isMenuOpen: "isMenuOpen",
    }),
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
  methods: {
    ...mapMutations(["SET_ACTIVE_PROJECT", "SET_ACTIVE_TALENT"]),
    onMouseMove(event) {
      const boundingRect = event.currentTarget.getBoundingClientRect();
      const offsetX = event.clientX - boundingRect.left;
      const offsetY = event.clientY - boundingRect.top;

      this.hoverEffectStyle = {
        left: `${offsetX}px`,
        top: `${offsetY}px`,
      };
    },
    handleResize() {
      this.isDesktop = window.innerWidth > 768;
    },
  },
  mounted() {
    this.isDesktop = window.innerWidth > 768;
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>





<style scoped>

.link-animation {
  transform: scale(0); /* Start small */
  animation: scale-up 3s forwards; /* Animate scale */
}

.linka {
  /* transform: scale(2);
  transition: transform 0.3s ease; */
  /* transition: width 3s ease;
  transition-duration: 3s; */
  /* opacity: 0;  */
}

.linka:hover {
  /* transform: scale(2);
  transition: transform 0.3s ease; */
  /* width: 102%;
  transition: width 3s ease;
  transition-duration: 3s; */
  /* opacity: 0;  */
}

@keyframes scale-up {
  to {
    transform: scale(1); /* End at original size */
  }
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
  cursor:pointer !important;
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
    top: 0vh;
    /* left: 1vw; */
    margin: 0 auto;
    object-fit: cover;
}


.deskimgl{
  object-fit: cover;
    height: 100vh;
}

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
    /* top: 20vh; */
    left: 1vw;
    margin: 0 auto;
    object-fit: cover;
}

.image-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-row {
  display: flex;
  justify-content: space-between;
  width: 90%;
  border-bottom: 0.07vw solid black;
  /* align-items: center; */
}

.image-row:last-child {
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
}

.textsumf {
  font-family: "GT-Bold";
}



@media only screen and (max-width: 768px) {

  .sideim img{
    display: none !important;
  }

  .sideim{
    display: none !important;
  }

  /* .left-content{
    padding: 0 !important;
  } */
}


.linka {
  position: relative;
  overflow: hidden;
  /* opacity: 70%; */
  /* opacity: 100%; */
}



</style>

