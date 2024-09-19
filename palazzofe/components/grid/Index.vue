<template>
  <client-only>
    <div>
      <!-- Images Section -->
      <div class="image-grid pt-[7vh]">
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
            @mouseenter="hoveredIndex = item._key"
            @mouseleave="hoveredIndex = null"
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
                  <NuxtLink
                    v-if="item.reference.slug"
                    :to="`/work/${item.reference.slug}`"
                    class="flex flex-col items-end h-full"
                  >
                    <figure class="inner-image">
                      <MediaImage
                        :src="item.image.image"
                        v-if="item.image.image"
                      />
                    </figure>
                    <figcaption class="textsum block text-center uppercase w-full pt-2">
                      <span class="textsumf">{{ item.title || item.reference.title }}</span>
                      <span class="pt-[.7vh]">{{ item.year || item.reference.year }}</span>
                    </figcaption>
                  </NuxtLink>

                  <!-- Conditionally show sideim div on hover with fade effect -->
                  <div 
                    v-show="hoveredIndex === item._key" 
                    class="sideim"
                    :class="{ 'fade-in': hoveredIndex === item._key, 'fade-out': hoveredIndex !== item._key }"
                  >
                    <figure>
                      <MediaImage
                        :src="item.imageh.imageh"
                        v-if="item.imageh.imageh"
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

export default {
  props: ["items", "size"],
  data() {
    return {
      project: false,
      isDesktop: false,
      hoveredIndex: null, // Track the hovered image item
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
  height: auto;
  width: 44vw;
  position: relative;
  top: 20vh;
  margin: 0 auto;
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
  border-bottom: 0.05vw solid black;
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

</style>

