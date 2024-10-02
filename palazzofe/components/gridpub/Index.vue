<template>
  <client-only>
    <div>
      <!-- Images Section -->
      <div class="image-grid pt-[1vh]">

        <div class="nodes">
          <!-- <p>d</p> -->
          <p
          class="headingspages text-center text-4xl  uppercase "
        >
          Publications
        </p>
        </div>
   
        <!-- Loop through the items array in chunks of two -->
        <div
          v-for="(chunk, chunkIndex) in chunkedItems"
          :key="chunkIndex"
          class="image-row"
        >
        <!-- <span v-for="(item, index) in chunk"  :key="item._key" >{{ item.title || item.reference.title }}</span> -->

          <div
            v-for="(item, index) in chunk"
            :key="item._key"
            class="item-wrapper"
            @mouseenter="hoveredIndex = item._key; isDefaultActive = false"
            @mouseleave="hoveredIndex = null; isDefaultActive = true"
          >

            <!-- Image Item -->
            <div
              class="relative image-item transition-opacity duration-300"
              :class="[
                item.double ? 'double h-fit' : '',
                item.spacer ? 'p-2' : '',
                activeTalent &&
                activeTalent != item.reference.talentId &&
                activeTalent != item.reference ? 'hidden' : ''
              ]"
            >
              <figure class="flex flex-col">
                <div class="relative">
                  <!-- <NuxtLink
                    v-if="item.reference.slug"
                    :to="`/eventprojects/${item.reference.slug}`"
                    class="flex flex-col items-end h-full"
                  > -->
                    <figure class="inner-image">
                      <MediaImage
                        :src="item.image.image"
                        v-if="item.image.image"
                      />
                    </figure>
                    <figcaption class="textsum block text-center uppercase w-full pt-2">
                      <span class="textsumf">{{ item.title || item.reference.title }}</span>
                      <span class="fontsubpub pt-[.5vh] capitalize">{{ item.month || item.reference.month }}</span>
                      <span class="fontsubpub capitalize">{{ item.year || item.reference.year }}</span>
                    </figcaption>
                  <!-- </NuxtLink> -->

                  <!-- Conditionally show sideim div on hover with fade effect -->
                  <!-- <div 
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
                  </div> -->

                </div>
              </figure>
            </div>
            <!-- <span v-if="item.private" class="eventtype">Private</span>
            <span v-if="!item.private" class="eventtype">Corporate</span> -->

          </div>
        </div>
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
      isDesktop: false,
      hoveredIndex: null, // Track the hovered image item
      isDefaultActive: true, // Controls the visibility of the default image
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
    this.isDesktop = window.innerWidth > 768;
    window.addEventListener("resize", this.handleResize);

    // Set the first item's _key to hoveredIndex by default
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
  },
};
</script>



<style scoped>

.item-wrapper{
  display: flex;
  align-items: center;
}

.item-wrapper:nth-child(2) .eventtype{
  display: none;
}

/* .image-item:nth-child(1){
  padding: .5vw;
  padding-right: 2vw;
} */


/* .item-wrapper.image-item:nth-child(1){
  padding: .5vw;
  padding-right: 2vw;
}

.item-wrapper.image-item:nth-child(2){
  padding: .5vw;
  padding-left: 2vw;
} */

.eventtype{
  writing-mode: vertical-rl;
text-orientation: mixed;
font-size: .8vw;
    line-height: normal;
    font-family: 'GT-SuperBook';
   text-transform: uppercase;
   /* position: absolute; */
   position: relative;
   left: -.8vw;
   color: rgb(0 0 0 / 30%);
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
    top: 5vh;
    left: 1vw;
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
}

.image-row:last-child {
  border-bottom: 0;
}

.image-item {
  position: relative;
  /* flex: 0 0 calc(50% - 20px); */
  margin-bottom: 20px;
    /* margin-bottom: 5vh; */
  padding: 1vw;
  padding-top: 2vw;
  
  padding: 2.5vw;
    padding-top: 4vw;
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

  .eventtype{
    font-size: 1.8vw;
  }

  .image-row {
  border-bottom: 0.000vw solid black;
  border-bottom: 0.07vw solid black;
}

.image-item{
  padding: 3.5vw;
}
  /* .left-content{
    padding: 0 !important;
  } */
}

</style>

