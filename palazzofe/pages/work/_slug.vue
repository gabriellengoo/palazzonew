



<template>


  <!-- md:h-screen -->
  <div class="relative md:min-h-fit md:overflow-hidden">
    <!-- <Headerproject /> -->
    <!-- <LenisComponent />  -->

    <div>
    <!-- Header (optional) -->
    <HeaderComponent />

    <div class="bgmobile relative min-h-screen flex">
      
      
      <!-- Left Scrollable Content -->
      <div class="left-content flex-1 overflow-y-scroll p-8">
        <div class="content">
          <!-- <h1 class="headingspages text-center text-4xl mb-6 uppercase">
            weddings
          </h1> -->
          <p class="headingspages text-center text-4xl mb-6 uppercase"
                 v-if="project"
                    >{{ project.title }}</p
                  >


       
    <!-- <img src="/archframe.png" alt="Arch Frame" class="arch-frame" />
       
    
        <svg width="314" height="478" viewBox="0 0 314 478" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="imagePattern" patternUnits="userSpaceOnUse" width="314" height="478">
      <image href="/india.jpg" x="0" y="0" width="314" height="478"/>
    </pattern>
  </defs>
  <path d="M154.5 0.0117052C40.9 1.21171 4.16667 91.1784 0 136.012V477.512H313.5V136.012C307.833 90.1784 268.1 -1.18829 154.5 0.0117052Z" fill="url(#imagePattern)"/>
</svg> -->

        
        </div>
      

        <div>
           <!-- footer -->
           <div class="footerstuff">
          <div class="footerp inner w-full flex justify-center">
            <div
              class="copyrtex items-baseline w-[96.5vw] justify-between flex  uppercase md:pt-0 pb-5 text-[1rem] md:text-[2rem]"
            >
              <div
                class="titleTextt flex items-baseline justify-between md:text-6xl text-2xl align-baseline text-center uppercase"
              >
                <!-- <span class="animate-hover text-[1.2rem] pr-5">crosecasting.co </span
                > -->
            
              </div>

              <!-- <p class="titleTextt text-end text-[1.2rem]">
                ©2024 Coralie Rose Casting
              </p> -->

              <div v-if="project.location" class=" fot pt-3">
                <div class=" flex flex-col normal-case">
                  {{ project.location }}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      
      </div>

      <!-- Right Static Content -->
      <div class="right-content overflow-hidden flex-1 p-8">
        <!-- <h1 class="headingspagesb text-center text-4xl mb-6 uppercase">
          palazzo eventi
        </h1> -->
        <div class="static-box w-full h-full">
          <!-- Static Content (e.g., Image, Text, etc.) -->
        
          <div class="gallery-images">
              <section
                class="top-0 left-0 hidden w-full md:block cursor-grab slider"
                v-swiper:mySwiper="swiperOptions"
                @slideChange="onSlideChange"
                ref="slider"
              >
                <div class="relative z-40 w-full h-full swiper-wrapper">
                  <div
                    v-for="(slide, index) in project.slider"
                    :key="slide._key"
                    class="flex justify-center w-full h-full transition-opacity duration-300 swiper-slide"
                    :class="realIndex == 0 ? '' : ''"
                  >
                    <div class="overlaycont flex h-full p-2 pb-0 w-13/16">
                      <figure
                        v-for="image in slide.images"
                        :key="image._key"
                        class="overlaydiv flex flex-col flex-1  h-full"
                        :class="
                          image.padding
                            ? image.padding == 'medium'
                              ? 'p-12 pr-10'
                              : image.padding == 'large'
                              ? 'p-20 pr-18'
                              : 'p-8 pr-6'
                            : ''
                        "
                      >
                        <MediaImage
                          :src="image.image.asset._ref"
                          v-if="image.image"
                          class="gallery-image w-auto h-full"
                          :class="
                            image.padding
                              ? 'object-contain'
                              : 'object-contain max-w-full'
                          "
                          :style="{
                            pointerEvents: 'auto',
                          }"
                          :sizes="'sm:200vw md:150vw lg:200vw'"
                        ></MediaImage>
                        <MediaVideoPlay
                          :id="image.video.id"
                          :active="realIndex == index ? true : false"
                          v-else-if="image.video.id"
                          :poster="`https://image.mux.com/${
                            image.video.id
                          }/thumbnail.jpg?time=${image.thumbnailTime || 0}`"
                          :style="{
                            pointerEvents: 'auto',
                          }"
                          @click="handleVideoClick(image.video.id)"
                          class="gallery-imagevid relative  object-center z-[10000000] h-auto p-4 my-auto"
                        ></MediaVideoPlay>
                        <!-- Display YouTube Video -->
                        <iframe
                          v-else-if="image.youtubeUrl"
                          :src="getYouTubeEmbedUrl(image.youtubeUrl)"
                          frameborder="0"
                          :style="{}"
                          allowfullscreen
                          class="gallery-imagevid relative object-center z-[10000000]  h-auto p-4 my-auto"
                        ></iframe>
                        <!-- Display Vimeo Video -->
                        <iframe
                          v-else-if="image.vimeoUrl"
                          :src="getVimeoEmbedUrl(image.vimeoUrl)"
                          frameborder="0"
                          allowfullscreen
                          :style="{}"
                          class="gallery-imagevid relative  object-center z-[10000000]  h-auto p-4 my-auto"
                        ></iframe>
                      </figure>
                    </div>

  
                  </div>
                </div>


     
              </section>

              <div class="footcon" v-if="isGalleryExpanded">
          <div class=" w-full flex justify-center">
            <div
              class="copyrtex items-baseline  w-[96.5vw]  justify-between flex pt-10 uppercase md:pt-0 pb-5 text-[1rem] md:text-[2rem]"
            >
              <div
                class="titleTextt flex  items-baseline justify-between md:text-6xl text-2xl align-baseline text-center uppercase"
              >
              <!-- md:text-[1.2rem] text-[1rem] -->
              <div class="animate-hover text-[1.2rem] pr-5">   
                 <p
                 v-if="project"
                    >{{ project.title }}</p
                  >
                  </div
                >
                <!-- <span class="hover-move">Rose.co</span> -->
                <!-- <p class="crtext text-[1.2rem]">
                  COPYRIGHT ©2024
                </p> -->
              </div>
           
              <p class=" text-[1.2rem] text-end titleTextt">©2024 Coralie Rose Casting</p>
            </div>
          </div>
        </div>

            </div>
          </div>

        
      </div>


    </div>
  </div>

    <section>


      <!-- <div
      class="mobileslugtitle hidden left-[90vw]  md:flex justify-end text-[1.525rem]"
    >
      <button  class="backc z-50 px-8 py-8" @click="goBack">Back</button>
    </div> -->



      <!-- pt-28 -->
      <div v-if="!isGalleryExpanded" class="bottom-div p-2 xl:pt-[18rem] 2xl:pt-[14rem]">
    <div class="flex">
      <div
          v-if="project"
          class="ml-auto text-lg uppercase lg:text-xl md:text-xl font-heading w-full flex justify-center"
        >
          <!-- fixed z-[10] -->
          <div class="titles mobiletitle justify-between w-full flex items-end">
            <!-- text-[14.21px] -->
            <!-- <About/> md:w-4/6-->
            <div
              class="projectetxt inner-div pl-[1.5rem] textppad pb-5 top-[0vh] w-screen projecttextmb"
              id="titleInnerDiv"
            >
            <div class="mobileslugtitle  mbback md:hidden flex">
                  <NuxtLink to="/allprojects" class="z-50 pb-8 pt-0">Back</NuxtLink>
                </div>
                <div class="w-[90vw] md:w-[96vw] justify-between headtoplinks flex relative z-0">
                  <div class="pb-5 mobileslugtitle ptitle">{{ project.title }}</div>
                  <NuxtLink to="/allprojects" class="md:contents hiddenmb uppercase mobileslugtitle ptitle">Back</NuxtLink>
                </div>



   


              <div
                v-if="project.filmtype === 'feature'"
                class="pb-5 pt-10 mobileslugtitle2 text-5xl"
              >
                Feature film
              </div>
              <div
                v-else-if="project.filmtype === 'short'"
                class="pb-5 pt-10 mobileslugtitle2 text-5xl"
              >
                Short film
              </div>

              <!-- Display "In production" if the toggle is on -->
              <div
                v-if="project.inproduction"
                class="pb-5 mobileslugtitle3 text-2xl"
              >
                In production
              </div>

              <!-- flex justify-between -->
              <div class="">
                <div
                  v-if="project.related"
                  :class="{ projecttextarea: true, 'pt-5': meta.title }"
                  class="projecttextarea justify-between md:justify-normal flex normal-case"
                  v-for="meta in project.meta"
                >



                <!-- md:w-1/6 -->
                  <div v-if="meta.link" class="projecttextareati md:w-[220px] w-[40vw]">
  <!-- Check if meta.link exists -->

    <a
      :href="meta.link"
      target="_blank"
      rel="noopener noreferrer"
      class="custom-link"
    >{{ meta.title }}</a>
    <!-- Render meta.content inside the link if meta.link exists -->
    
                  </div>

  <div v-if="meta.link" class="pb-1 mobileprotext">
                    <a 
                      :href="meta.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="custom-link"
                      >{{ meta.content }}</a
                    >
     
                  </div>
  <!-- If meta.link doesn't exist, render meta.title and meta.content without links -->
  <template v-else>
    <div class="projecttextareati  md:w-[220px]">
                    <p
                    
                      >{{ meta.title }}</p
                    >
                  </div>
               
                  <div class="pb-1 mobileprotext">
                    <p
                     class="ptextbigsc "
                      >{{ meta.content }}</p
                    >
                  </div>
  </template>


                  
                </div>

     
              </div>
              <div v-if="project.location" class="pt-3">
                <div class="flex flex-col normal-case">
                  {{ project.location }}
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- <div
      class="mobileslugtitle hidden left-[90vw]  md:flex justify-end text-[1.525rem]"
    >
      <button  class="backc z-50 px-8 py-8" @click="goBack">Back</button>
    </div> -->
    </div>
        <!-- non scroll copy -->
        <!-- pt-48 -->
        <div
        class="outscrollcont"
        >

        <div class="md:pr-6 md:w-7/16 scroll-container resize-animation"
          ref="scrollContainer">
          <div
            v-for="(slide, index) in project.slider"
            :key="slide._key"
            class="gallmobile insidescrollcont"
          >
            <figure
              v-for="image in slide.images"
              :key="image._key"
              @click="openImageModal(index)"
              style="cursor: pointer"
              class="picssizeworks"
            >
              <MediaImage
                ref="scrollContainer resize-animation"
                :src="image.image.asset._ref"
                v-if="image.image"
                class="scrollcost"
               
              >
              </MediaImage>
              <MediaVideo
                :id="image.video.id"
                class="mbvidworksp"
                :active="realIndex == index ? true : false"
                v-else-if="image.video.id"
                
                :poster="`https://image.mux.com/${
                  image.video.id
                }/thumbnail.jpg?time=${image.thumbnailTime || 0}`"
              ></MediaVideo> 
              <!-- Display YouTube Video -->
              <iframe
                v-else-if="image.youtubeUrl"
                :src="getYouTubeEmbedUrl(image.youtubeUrl)"
                frameborder="0"
                allowfullscreen
                
                class="scrollcost youtube resize-animation object-contain object-top w-auto h-full"
              ></iframe>
              <!-- Display Vimeo Video -->
              <iframe
                v-else-if="image.vimeoUrl"
                :src="getVimeoEmbedUrl(image.vimeoUrl)"
                frameborder="0"
                allowfullscreen
                
                class="scrollcost youtube resize-animation object-contain object-top w-auto h-full"
              ></iframe>
            </figure>
          </div>
        </div>

        </div>
      </div>

      <!-- Image Overlay Gallery -->

      <div class="block">
        <div
          v-if="isGalleryExpanded"
          class="overlay-gallery"
          ref="overlayGallery"
          @mouseenter="showGalleryOnHover"
          @mouseleave="hideGalleryOnLeave"
        >
          <div class="gallery-content">
            <div class="close-button">
              <button
                v-if="isGalleryExpanded"
                @click="closeImageModal"
                class="close-buttons"
              >
                Exit
              </button>
              <button
                v-if="isGalleryExpanded"
                class="previous close-buttons"
                :class="back ? '' : 'disabled'"
                @click="prev"
                ref="prev"
                aria-label="Previous"
              >
                previous
              </button>
              <button
                v-if="isGalleryExpanded"
                class="next close-buttons"
                @click="next"
                aria-label="Next"
              >
                next
              </button>
            </div>
            <!-- Next Arrow -->
            <!-- <div  v-if="isGalleryExpanded" class="next-arrow" @click="nextImage">
         next
        </div> -->

            <!-- <div  v-if="isGalleryExpanded" class="close-button" @click="next">
          next
        </div> -->

            <div class="gallery-images">
              <section
                class="top-0 left-0 hidden w-full md:block cursor-grab slider"
                v-swiper:mySwiper="swiperOptions"
                @slideChange="onSlideChange"
                ref="slider"
              >
                <div class="relative z-40 w-full h-full swiper-wrapper">
                  <div
                    v-for="(slide, index) in project.slider"
                    :key="slide._key"
                    class="flex justify-center w-full h-full transition-opacity duration-300 swiper-slide"
                    :class="realIndex == 0 ? '' : ''"
                  >
                    <div class="overlaycont flex h-full p-2 pb-0 w-13/16">
                      <figure
                        v-for="image in slide.images"
                        :key="image._key"
                        class="overlaydiv flex flex-col flex-1  h-full"
                        :class="
                          image.padding
                            ? image.padding == 'medium'
                              ? 'p-12 pr-10'
                              : image.padding == 'large'
                              ? 'p-20 pr-18'
                              : 'p-8 pr-6'
                            : ''
                        "
                      >
                        <MediaImage
                          :src="image.image.asset._ref"
                          v-if="image.image"
                          class="gallery-image w-auto h-full"
                          :class="
                            image.padding
                              ? 'object-contain'
                              : 'object-contain max-w-full'
                          "
                          :style="{
                            pointerEvents: 'auto',
                          }"
                          :sizes="'sm:200vw md:150vw lg:200vw'"
                        ></MediaImage>
                        <MediaVideoPlay
                          :id="image.video.id"
                          :active="realIndex == index ? true : false"
                          v-else-if="image.video.id"
                          :poster="`https://image.mux.com/${
                            image.video.id
                          }/thumbnail.jpg?time=${image.thumbnailTime || 0}`"
                          :style="{
                            pointerEvents: 'auto',
                          }"
                          @click="handleVideoClick(image.video.id)"
                          class="gallery-imagevid relative  object-center z-[10000000] h-auto p-4 my-auto"
                        ></MediaVideoPlay>
                        <!-- Display YouTube Video -->
                        <iframe
                          v-else-if="image.youtubeUrl"
                          :src="getYouTubeEmbedUrl(image.youtubeUrl)"
                          frameborder="0"
                          :style="{}"
                          allowfullscreen
                          class="gallery-imagevid relative object-center z-[10000000]  h-auto p-4 my-auto"
                        ></iframe>
                        <!-- Display Vimeo Video -->
                        <iframe
                          v-else-if="image.vimeoUrl"
                          :src="getVimeoEmbedUrl(image.vimeoUrl)"
                          frameborder="0"
                          allowfullscreen
                          :style="{}"
                          class="gallery-imagevid relative  object-center z-[10000000]  h-auto p-4 my-auto"
                        ></iframe>
                      </figure>
                    </div>

  
                  </div>
                </div>


     
              </section>

              <div class="footcon" v-if="isGalleryExpanded">
          <div class=" w-full flex justify-center">
            <div
              class="copyrtex items-baseline  w-[96.5vw]  justify-between flex pt-10 uppercase md:pt-0 pb-5 text-[1rem] md:text-[2rem]"
            >
              <div
                class="titleTextt flex  items-baseline justify-between md:text-6xl text-2xl align-baseline text-center uppercase"
              >
              <!-- md:text-[1.2rem] text-[1rem] -->
              <div class="animate-hover text-[1.2rem] pr-5">   
                 <p
                 v-if="project"
                    >{{ project.title }}</p
                  >
                  </div
                >
                <!-- <span class="hover-move">Rose.co</span> -->
                <!-- <p class="crtext text-[1.2rem]">
                  COPYRIGHT ©2024
                </p> -->
              </div>
           
              <p class=" text-[1.2rem] text-end titleTextt">©2024 Coralie Rose Casting</p>
            </div>
          </div>
        </div>

            </div>
          </div>
        </div>
      </div>
    </section>


 
  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity";
import { mapMutations, mapState } from "vuex";
// import Header from "~/components/layout/Header.vue";
// import About from "~/components/Aboutpage.vue";
// import Lenis from '@studio-freight/lenis';
// import LenisComponent from "~/components/LenisComponent.vue";
// import Headerproject from "~/components/layout/Headerproject.vue";

export default {
  components: {
    // Headerproject,
    // LenisComponent,
  },
  async asyncData({ params, $sanity, store }) {
    const query = groq`*[_type == "project" && slug.current == "${params.slug}" ] {
      ..., "archiveSlug": archive->slug.current,
      slider[] {
        fullWidth, imageWidth, overlayimageWidth,thumbnailTime, youtubeUrl,vimeoUrl, images[] {
          ..., "video" : {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio, "thumbTime" : video.asset->thumbTime}
        }
      }, 
      
      "talent" : talent->title, "talentSlug" : talent->slug.current,
      "footer" : footer,
      "talentBio" : talent->shortBio,
      "nextProject" : nextProject->slug.current,
      
      "related": *[_type=='project' && references(^.talent._ref) && _id != ^._id]{
        _id, title, location, production, meta, metadis, "slug" : slug.current
      }{_id, title, production, meta, metadis, metaemails, "slug" : slug.current},
      "homeMeta": *[_type == "home"] { meta[], metaemails[], sections[], year},
    }
     | order(_updatedAt desc)[0]`;

    const project = await $sanity.fetch(query);

    //    // Debugging: Log the fetched data
    //    console.log('Fetched meta:', project.meta);
    // console.log('Fetched metaemails:', project.metaemails);

    // // Commit meta and metaemails to the Vuex store
    // store.commit('setMeta', project.meta);
    // store.commit('setMetaEmails', project.metaemails);

    return { project };
  },
  data() {
    return {
      index: 1,
      realIndex: 0,
      step: 0,
      isBackNavigation: false,
      imageNumberPosition: { top: 0, left: 0 }, // Initialize position
      isImageModalOpen: false,
      isGalleryExpanded: false,
      isBlueBoxActive: false,
      clickedImageIndex: null, // Initially set to null
      swiperOptions: {
        slidesPerView: "auto",
        keyboard: {
          enabled: true,
        },
      },
      imageOpacity: 1, // Add this property
      scrolled: false,
      back: false,
      searchQuery: "", // Initialize search query
    };
  },
  computed: {
    ...mapState(["meta", "metaemails", "projects"]), // Map Vuex state to local computed properties
  },
  created() {
    if (
      this.$nuxt.context.from &&
      this.$nuxt.context.from.name == "project-slug"
    ) {
      this.back = true;
    }
  },

  mounted() {
    const previousScrollPosition = sessionStorage.getItem('previousScrollPosition');
    if (previousScrollPosition && this.$router.isBackNavigation) {
      window.scrollTo(0, 0);
    }
  },
  watch: {
    '$route'() {
      if (this.isBackNavigation) {
        window.scrollTo(0, 0);
        this.isBackNavigation = false;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    sessionStorage.setItem('previousUrl', from.fullPath);
    next();
  },
  methods: {
    nextImage() {
      // Implement your logic to go to the next image
    },
    handleBackClick(event) {
      const previousUrl = sessionStorage.getItem('previousUrl');
      if (previousUrl) {
        this.$router.push(previousUrl);
        sessionStorage.removeItem('previousUrl');
      } else {
        this.$router.push('/');
      }
      event.preventDefault();
    },
    goBack() {
      // Scroll the current page to the top
      window.scrollTo(0, 0);
      // Use router to navigate back
      this.$router.go(-1);
    },
    openGallery() {
      this.$store.commit("setGalleryState", true); // Set gallery state as open
    },
    closeGallery() {
      this.$store.commit("setGalleryState", false); // Set gallery state as closed
    },
    getYouTubeEmbedUrl(youtubeUrl) {
      // Extract YouTube video ID from the URL
      const videoId = youtubeUrl.split("v=")[1];
      // Generate the YouTube embed URL with autoplay, mute, loop, and hide controls on hover parameters
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&showinfo=0`;
    },
    getVimeoEmbedUrl(vimeoUrl) {
      // Extract Vimeo video ID from the URL
      const videoId = vimeoUrl.split("/").pop();
      // Generate the Vimeo embed URL
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&autopause=0`;
    },
    onSlideChange(swiper) {
      this.index = swiper.activeIndex + 1;
      this.realIndex = swiper.activeIndex;
      const gsap = this.$gsap;
      if (swiper.activeIndex == 0 && !this.back) {
        this.$refs["prev"].classList.add("disabled");
      } else {
        this.$refs["prev"].classList.remove("disabled");
      }
      if (this.index > 1) {
        gsap.to(this.$refs["skew"], { x: "-150%" });
      } else {
        gsap.to(this.$refs["skew"], { x: "0%" });
      }
    },
    handleVideoClick(videoId) {
      // Call the playVideo() method of your MediaVideoPlayPlay component
      this.$refs.mediaVideoPlayPlay.playVideo(videoId);
    },

    showGalleryOnHover() {
      this.$refs.overlayGallery.classList.add("active");
    },

    hideGalleryOnLeave() {
      this.$refs.overlayGallery.classList.add("active");
    },

    openImageModal(index) {
      this.clickedImageIndex = index;
      this.swiperOptions = { ...this.swiperOptions, initialSlide: index };
      this.isGalleryExpanded = true;
    },

    closeImageModal() {
      this.isGalleryExpanded = false;
      this.clickedImageIndex = null;
    },

    updateImageNumberPosition(event) {
      this.imageNumberPosition = {
        top: event.clientY + "px",
        left: event.clientX + "px",
      };
    },
    generateThumbnailURL(imageURL) {
      return imageURL; // Just return the original imageURL for simplicity.
    },
    toggleGallery() {
      this.isGalleryExpanded = !this.isGalleryExpanded;
    },
    onSlideChange(swiper) {},
    scroll() {},
    toggleBlueBox() {
      // Toggle the blue box visibility
      this.isBlueBoxActive = !this.isBlueBoxActive;

      // Update the content container position
      this.updateContentContainerPosition();

      if (this.isBlueBoxActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    updateContentContainerPosition() {
      const isMobile = window.innerWidth <= 768;
      // Calculate the offset based on blue box height
      const offset = isMobile
        ? this.isBlueBoxActive
          ? "100vh"
          : "0"
        : this.isBlueBoxActive
        ? "365px"
        : "0";

      // Calculate the offset based on whether it's a mobile screen or not

      // Set the content container position
      this.contentContainerStyle = {
        transform: `translateY(${offset})`,
      };
    },
    handleKeyDown(event) {
      if (event.key === "ArrowLeft" && this.mySwiper.slidePrev()) {
        this.prev();
      } else if (event.key === "ArrowRight") {
        this.next();
      }
    },

    // pev btn

    next() {
      if (this.mySwiper.isEnd) {
        if (this.project.nextProject) {
          this.mySwiper.slideTo(0);
        }
      } else {
        this.mySwiper.slideNext();
      }
    },
    prev() {
      if (this.mySwiper.isBeginning && this.back) {
        this.$router.go(-1);
      } else {
        this.mySwiper.slidePrev();
      }
    },
    async searchProjects() {
      const searchQuery = this.searchQuery.trim(); // Remove leading and trailing spaces
      if (searchQuery.length === 0) {
        // If search query is empty, reset search results
        this.searchResults = [];
        return;
      }
      // Perform search query against project titles
      const searchResults = this.projects.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.searchResults = searchResults;
    },

    ...mapMutations(["SET_FOOTER"]),
  },
};
</script>

<style scoped>
.fot{
  position: relative;
  top: 70vh;
  font-size: small;
  width: 100%;
  border-top: solid;
  border-width: .5px;
}
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

.inner-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%; /* Adjust size of the inner image */
  height: auto;
  object-fit: contain;
  transform: translate(-50%, -50%); /* Center the image inside the arch frame */
  z-index: 2; /* Make sure it's on top of the arch frame */
  padding: 10px; /* Padding around the inner image */
  /* background-image: url("./static/PINKBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
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

/* Flexbox layout for the image grid */
.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust the gap between images */
}

.bgmobile {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex; /* Flex layout for two columns */
}

.left-content {
  background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  overflow-y: scroll;
}

.right-content {
  background-image: url("./static/PINKBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}

a {
  color: #a29585;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 768px) {
  .bgmobile {
    flex-direction: column; /* Stacks the two sides vertically on small screens */
  }

  .left-content,
  .right-content {
    height: auto;
  }
}
/* .swiper-slide{
  pointer-events: none !important;
}

.swiper-wrapper{
  pointer-events: none !important;
}

.slider{
  pointer-events: none !important;
}

.gallery-imagevid{
  pointer-events: none !important;
} */

.footcon{
  position: absolute;
    /* position: relative; */
    bottom: 0vh;
    z-index: 10000;
    width: 100vw;
    color: black;
}


.picssizeworks{
  /* width: 32vw; */
  /* width: 32.1vw; */
  width: 31.9vw;
    height: 30vh;
    height: 33vh;
    overflow: hidden;
}



.custom-link {
  cursor: pointer;
}

.youtube {
  height: 40vh;
  height: 20vh;
}

.mobileslugtitle {
  font-size: 4.25rem;
  line-height: 2.5rem;
  font-family: "GTWalsheimbb";
  z-index: 100000;
}

.mobileslugtitle2 {
  /* font-size: 2.25rem ; */
  line-height: 1.5rem;
  font-family: "GTWalsheimbb";
  z-index: 100000;
}

.mobileslugtitle3 {
  /* font-size: 1.25rem ; */
  /* line-height: .5rem ; */
  font-family: "GTWalsheimbb";
  z-index: 100000;
}

@media only screen and (min-width: 2560px) {
  .mobileslugtitle {
    font-size: 6.25rem !important;
    line-height: 3.5rem !important;
  }

  .mobileslugtitle2 {

    font-size: 4.25rem !important;
    line-height: 3.5rem !important;
  }

  .mobileslugtitle3 {
    font-size: 2.25rem !important;
    line-height: 1.5rem !important;
  }

  .projecttextareati{
    width: 620px;
  }
}
/* header {  
  animation: 1.5s ease-out 0s 1 slideInFromLeft;
} */
.item {
  width: 33.3333%;
}

.date {
  display: flex;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif !important;
}

.content-container {
  width: 100vw !important;
}

.resize-animation {
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out !important;
}

.headposition {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw !important;
  justify-content: center;
  /* padding-top: 1vh; */
  position: fixed;
  position: absolute;
}

.navele {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 98vw !important;
  /* width: 100vw !important; */
  justify-content: space-between;
}

.button {
  /* border-left: .8px solid #000; */
  padding: 0.5vw;
  font-size: 1.25rem;
  /* border-width: 3.9px;
    border-right: black;
    border-left: black; */
}

.buttonlogo {
  padding: 0.5vw;
  padding-left: 0;
  /* border-right: .8px solid #000; */
  /* border-width: 0.9px;
    border-color: rgba(28, 25, 23, var(--tw-border-opacity));
    padding: 10.899999999999999px; */
}

.content-container {
  justify-content: center;
  /* display: flex;
    justify-content: center; */
  /* background: #f7f7f7; */
}

button .circle:hover {
  transform: translate3d(0, -50%, 0) scale(1.5);
}

.circle {
  /* position: absolute; */
  top: 50%;
  right: 15px;
  -webkit-transform: translate3d(0, -50%, 0) scale(0.5);
  transform: translate3d(0, -50%, 0) scale(0.5);
  width: 16px;
  height: 16px;
  line-height: 30px;
  border-radius: 50%;
  background-color: #000;
  transition: -webkit-transform 200ms cubic-bezier(0.54, 0.57, 0, 0.96);
  transition: transform 200ms cubic-bezier(0.54, 0.57, 0, 0.96);
  transition: transform 200ms cubic-bezier(0.54, 0.57, 0, 0.96),
    -webkit-transform 200ms cubic-bezier(0.54, 0.57, 0, 0.96);

  position: relative;
  top: 50%;
  right: 0%;
  transform: translate3d(0, -50%, 0) scale(0.5);
  width: 16px;
  height: 16px;
  /* line-height: 30px; */
  border-radius: 50%;
  background-color: #000;
  transition: transform 200ms cubic-bezier(0.54, 0.57, 0, 0.96);
}

@keyframes slideInFromLeft {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 10.5s;
  transition: height 1s ease, opacity 0.5s ease; /* Add smooth transitions */
}
.fade-enter,
.fade-leave-to {
  opacity: 0 10s;
  transition: height 1s ease, opacity 0.5s ease; /* Add smooth transitions */
}

/* .icon {
    display: inline-flex;
    align-self: center;
}

.icon svg, .icon img {
  height: 7em;
    width: 7em;
    fill: currentColor;
}

.icon.baseline svg, .icon img {
    top: .125em;
    top: 0.9rem;
    top: 2.9000000000000004rem;
    position: relative;
} */

.icon {
  display: inline-flex;
  align-self: center;
  top: 1vh;
  position: relative;
}

/* @media only screen and (min-width: 768px) and (max-width: 1024px) {
  .icon {
    display: inline-flex;
    align-self: center;
    top: 1.5vh;
    position: relative;
}
} */

@media only screen and (min-width: 2560px) {
  .icon {
    display: inline-flex;
    align-self: center;
    top: 0.5vh !important;
    position: relative;
  }

  .lgscpad {
    padding-top: 2vh !important;
  }
}

.lgscpad {
  padding-top: unset;
}

.icon svg,
.icon img {
  height: 2em;
  width: 5em;
  fill: currentColor;
}

.icon.baseline svg,
.icon img {
  top: 0.125em;
  top: 0.9rem;
  top: 2.9000000000000004rem;
  top: -0.9em;
  /* top: 2.9000000000000004rem; */
  /* top: 0; */
  position: relative;
}
/* header{
  background-color: #ffffff00;
  pointer-events: none;
} */
/* Add styles for the blue box */
.blue-box {
  position: relative;
  /* top: 0;
  left: 0;
  width: 100%;
  height: 0; */
  top: -2vh;
  /* left: -2vw; */
  width: 110%;
  height: 0;
  /* background-color: #212121; */
  background-color: #d2d2d2;
  /* border: 0.5px solid #212121; */
  /* #d2d2d2; */
  /* border: 1.5px solid #11ff00; */
  /* background-color: rgb(14, 14, 53);  */
  /* opacity: 0; */
  transition: height 1s ease, opacity 0.5s ease; /* Add smooth transitions */
  pointer-events: none; /* Disable pointer events when hidden */
  /* z-index: 100; */
  z-index: 100002;
  overflow: hidden;
}

.blue-box div {
  position: relative;
  transition: height 1s ease, opacity 0.5s ease; /* Add smooth transitions */
  /* font-size: 1.125rem; */
  z-index: 100002;
  /* line-height: 1.375rem; */
  /* height: 365px; */
  will-change: auto;
  padding-bottom: 0.5vh;
  /* min-height: 365px; */
  /* height: fit-content; */
}

.text {
  /* color:  #f7f7f7; */
  color: #212121;
  font-size: 1.125rem;
  line-height: 1.375rem;
  transition: height 1s ease, opacity 0.5s ease; /* Add smooth transitions */
}
.white-box {
  position: fixed;
  /* position: relative; */
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  width: 100vw;
  height: 200vh !important;
  max-height: 200vh;
  /* height: 0; */
  opacity: 0;
  pointer-events: none;
  /* background: rgba(255, 255, 255, 0.357); */
  background: rgba(255, 255, 255, 0.82);
  /* -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px); */
  transition: opacity 1s ease; /* Add smooth transitions */
  z-index: -10;
}

/* .blue-box.active::after {
  content: 'hhhhh ';
  transition: height 1s ease, opacity 0.5s ease;
} */

.textppad {
  /* font-family: "GTWalsheimbb"; */
  /* font-size: 2rem;
  line-height: 2rem; */
  font-size: 1.5rem;
  line-height: 1.5rem;
}
/* Add styles for the active blue box */
.blue-box.active {
  height: 365px;
  /* height: fit-content; */
  min-height: fit-content;
  /* height: fit-content; */
  /* opacity: 1; */
  background-color: #d2d2d2;
  /* background-color: blue; */
  /* border-bottom: 0.5px solid #212121; */
  z-index: 100002;
  pointer-events: auto; /* Enable pointer events when visible */
  /* display: flex;
    align-items: center;
    justify-content: center; */
  font-size: 1.1vw;
  will-change: auto;
  overflow: hidden;
  /* min-height: 365px; */
  width: 100vw;
  max-width: 100vw;
}

.mobile {
  display: none;
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  /* Your tablet-specific styles here */
  svg {
    width: 16vw !important;
  }
  .icon svg,
  .icon img {
    height: 2em;
    width: 8vw !important;
    fill: currentColor;
  }
}

.mbback{
  display: none;
  }

  .ptitle{
    /* width: 95vw; */
    /* font-size: 5rem; */
    display: flex;
    /* justify-content: center; */
  }

@media (max-width: 768px) {
  .mbback{
display:contents;
width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .mbback button{
    text-transform: uppercase;
  }

  .ptitle{
    width: auto;
    font-size: 3.25rem !important;
  }

  .mobileslugtitle2 {
  font-size: 2.25rem ;
  }

  .projecttextarea {
    font-size: 1.7rem;
    line-height: 1.7rem;
  }

  .text {
    padding: 10px;
  }
  .textppad {
    padding-left: 1rem;
  }

  .textbpad {
    padding-left: 0rem;
  }

  .mobile {
    display: contents;
  }

  .content-container {
    position: fixed;
    width: 100vw !important;
    background-color: #f7f7f7;
    border-bottom: 0.8px solid #000;
    /* border-top: 1px solid #11ff00; */
  }
  .blue-box.active {
    height: fit-content;
    height: 100vh;
    height: 103vh;
  }

  .blue-box {
    position: relative;
    top: 0 !important;
    left: 0 !important;
    width: 110%;
    height: 0;
    /* background-color: #212121; */
  }

  svg {
    width: 26vw;
  }

  .white-box {
    position: fixed;
  }
  .headposition {
    padding-top: 0vh;
  }

  .blue-box {
    top: 0vh;
    /* left: -2vw; */
    width: 110%;
    height: 0;
    /* transition: none; */
    /* background-color: #212121; */
  }

  .blue-box div {
    /* height:100vh; */
    /* padding: 10px; */
    /* padding-top: 0vh; */
  }

  .navelemb {
    /* padding: 1vw; */
    padding: 1.25rem;
    width: 100vw;
  }

  .mobilemenu {
    padding: 1.25rem;
    border-bottom: 0.8px solid #000;
  }

  header {
    position: fixed;
    width: 100vw;
    background-color: #f7f7f7;
  }
}

@media screen and (max-width: 1023px) {
  /* Your CSS styles for screens smaller than 1024px go here */
  /* For example, you can change the font size or layout */
  .textppad {
    padding-left: 1rem;
  }

  /* .textbpad{
  padding-left: .05vw;
} */
  .blue-box.active {
    height: 100vh;
  }

  /* svg{
  width: 18vw;
} */
  .blue-box {
    top: 0;
  }
  .mobile {
    display: contents;
  }

  .headposition {
    display: none;
  }

  .mobilemenu {
    border-bottom-width: 0.95px;
    border-color: rgba(28, 25, 23);
    padding-left: 1.5vw;
    padding-right: 1.5vw;
  }

  .mobilemenupad {
    padding: 0.5vw;
    font-size: 1.25rem;
  }
}

.white-box.active {
  height: 100vh; /* Adjust the height as needed */
  width: 100vw;
  opacity: 1;
  pointer-events: auto; /* Enable pointer events when visible */
}

/* Add styles for the content container */
.content-container {
  transition: transform 1s ease; /* Add smooth transition for content movement */
  /* font-size: 1.125rem !important; */
}

/* Add this style to your CSS */
.underline {
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.underline:after {
  content: "";
  position: absolute;
  left: 0.55rem;
  bottom: 0px; /* Adjust the distance from the text as needed */
  width: 0;
  height: 1.5px; /* Adjust the underline thickness as needed */
  background-color: rgb(0, 0, 0); /* Adjust the underline color as needed */
  transition: width 0.3s ease-in-out; /* You can adjust the duration and timing function as needed */
}

.underline:hover:after,
.underline:focus:after {
  width: 90%;
}

/* end heeader  */
.overlaydiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* justify-content: end; */

  /* position: absolute;
    width: 100%;
    top: 0;
    left: 0; */
}

.overlaycont {
  width: 100vw;
  height: 100vh;
}
.scroll-container {
  /* width: 98vw;
  width: 100vw; */
  /* width: 98vw !important; */
  width: 100vw; 
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  /* justify-content: center; */
  /*  justify-content: space-between; */
}

.outscrollcont{
  display: flex;
    justify-content: center;
}

.insidescrollcont {
  padding-bottom: 20px !important;
  padding: 0.2rem;
}

@keyframes src-components-animation-2PZg {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.scroll-container {
  padding: 1vw;
}

.scroll-container > * {
  display: inline-block;
}

.scrollcost {
  /* height: 55vh; */
  /* height: calc(30.33vw - -4px); */
  /* height: calc(27.33vw - -4px);   */
  /* height: calc(37.33vw - -4px); */
  /* width: calc(37.33vw - -4px); */
  width: calc(32.3vw - 4px);
}

.masonry .flex-item {
  margin-right: 200px !important;
  min-width: 350px !important;
}
.masonry .flex-item img {
  max-height: 30vw;
}

.overlay-gallery {
  opacity: 0; /* Initially hidden */
  transition: opacity 0.5s ease;
}

.overlay-gallery.active {
  transition: opacity 0.5s ease;
  opacity: 1;
}

.image-number {
  background: none;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  position: absolute;
  /* position: fixed;  */
  right: 0;
  top: 0;
  padding: 20px;
  text-transform: uppercase;
  bottom: 0vh;
  /* left: 97vw; */
  color: rgb(18, 18, 18);
}

.swiper-wrapper {
  /* transition-property: none; */
}

.swiper-container {
  /* cursor: url('https://pngimg.com/uploads/dot/dot_PNG3.png'), auto  !important; */
}

.swiper-wrapper {
  align-items: center;
}

.arrow {
  top: inherit;
  left: 95vw;
}

.overlay-gallery {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255);
  /* background-color: rgb(255 255 255 / 45%); */
  /* backdrop-filter: blur(10px);  */
  transition: backdrop-filter 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  /* z-index: 9; */
  /* z-index: 100; */
  /* cursor: crosshair; */
}

.backbtn {
  left: 37vw;
}

.gallery-content {
  text-align: center;
  color: white;
}

.close-button {
  background: none;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 99999 !important;
  position: relative;
  /* padding-left: 0vw !important; */
  /* height: inherit !important; */
  /* left: 0; */
  padding: 2rem;
  /* left: .5vw; */
  top: 17vh;
  /* top: 3vh; */
  font-size: 3.25rem;
  font-size: 2rem;
  /* line-height: 2.5rem; */
  font-family: "GTWalsheimbb";
  /* font-size: 14.21px !important; */

  /* position: absolute;
    top: 10vh;
    left: 0vw;
    width: 100%;
    background: white;
    display: flex;
    justify-content: space-between; */
    font-family: 'GTWalsheimbn';
}

.close-buttons {
  background: none;
  border: none;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  cursor: pointer;
  z-index: 99999 !important;
  position: relative;
  /* padding-left: 0vw !important; */
  /* height: inherit !important; */
  /* left: 0; */
  padding: 2rem;
  padding-top: 0;
  /* padding-bottom: 0; */
  top: 0vh;
  /* top: -20vh; */
  /* top: 3vh; */
  font-size: 2rem;
  font-size: 1.7rem;
  /* font-family: "GTWalsheim"; */
  /* line-height: 2.5rem; */
  /* font-family: "GTWalsheimbb"; */
  /* font-size: 14.21px !important; */

  width: 40vw;
}

.close-button button {
  text-transform: uppercase;
}

.backc {
  z-index: 0 !important;
  position: relative;
  text-transform: uppercase;
  position: absolute;
    /* top: 5vh; */
    padding-top: 14rem;
}

iframe .gallery-image {
  height: 70vh;
}

button {
  /* cursor: url('data:image/svg+xml;utf8,<svg height="15" width="15" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>') 15 15,alias; */
  /* cursor: crosshair;
  padding-left: 55vw;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  height: 80vh;
  width: fit-content; */
}

.nextbtn {
  /* cursor: crosshair;
  padding-left: 55vw;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  height: inherit;
  width: fit-content; */

  /* cursor: crosshair; */
  padding-left: 15vw;
  /* position: relative; */
  margin-top: auto;
  margin-bottom: auto;
  height: inherit;
  width: -moz-fit-content;
  width: fit-content;

  position: absolute;
  left: 65vw;
}

.backbtn {
  /* cursor: crosshair;
  padding-left: 55vw;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  height: inherit;
  width: fit-content; */

  /* cursor: crosshair; */
  padding-right: 15vw;
  /* position: relative; */
  margin-top: auto;
  margin-bottom: auto;
  height: inherit;
  width: -moz-fit-content;
  width: fit-content;
  position: relative;
  left: 18vw;
}

.gallery-images {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.gallery-image {

  cursor: grab !important;
    /* padding-top: 20vh; */
    padding-bottom: 20vh;
    /* max-width: 100vw; */
    width: calc(55.33vw - 20px);
    width: auto;
    align-items: center;
    height: 90vh;
    pointer-events: none 


  /* cursor: grab !important;
    padding-top: 10vh;
    max-width: 100vw;
    width: auto;
    width: 40vw;
    align-items: center;
    pointer-events: none !important; */
}


.arch-frame {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Optional: Add rounded corners to images */
  position: relative;
  z-index: 1;
  opacity: .2;
}


.gallery-imagevid{
  cursor: grab !important;
padding-top: 15vh;
padding-bottom: 20vh;
/* max-width: 90vw;
width: 70vw;
width: 93vh; */
align-items: center;
height: 95vh;
pointer-events: none !important;
/* width: 80vw; */

/* cursor: grab !important;
    padding-top: 15vh;
    padding-bottom: 20vh;
    max-width: 90vw;
    width: 70vw;
    align-items: center;
    pointer-events: none !important; */


    /* cursor: grab !important;
    padding-top: 26vh;
    padding-bottom: 20vh;
    max-width: 90vw;
    width: 70vw;
    align-items: center;
    pointer-events: none !important; */
}



/* .gallery-image[data-v-3ff1f924]{
  width: calc(15.33vw - 20px);
} */
.ptextbigsc{
  width: unset;
}

@media (min-width: 2560px) {
.ptextbigsc{
  width: 920px;
}

  .bottom-div {
    padding-top: 21rem !important;
  }

  .textppad {
    padding-left: 3rem;
  }

  .textbpad {
    padding-left: 2.5rem;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1600px) {
  .textppad {
    padding-left: 2rem;
  }

  .textbpad {
    padding-left: 1.5rem;
  }
}
.scroll-container div img {
  object-fit: cover;
  /* height: 55vh; */
  /* height: auto; */
  object-position: center center;
  /* Add default styles for the image here */
  /* transition: border-radius 0s ease, filter 0s ease; */
  transition: transform 0.35s ease; /* Add the transition property for transform */
}
.scroll-container div img:hover {
  /* transition: opacity .35s ease; */
  /* transition: border-radius 0.5s ease, filter 2s ease; */
  transform: scale(1.01);
  overflow: hidden;
}

/* img{
  object-fit: cover;
} */
.list-layout {
  /* opacity: 1;  */
  margin-top: 2px;
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.list-layout img:hover {
  /* opacity: 0.3;  */
  margin-top: 20px; /* Adjust margin as needed for spacing */
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.slider {
  height: calc(80% - 0.5rem);
}

.bottom-div {
  padding-top: 14rem;
  min-height: 100vh;
  /* padding-bottom: 5rem; */
  transition: padding-top 0.3s ease-in-out, height 0.3s ease-in-out !important;
}

/* section{
  overflow-x: hidden;
  max-width: 100vw !important;
} */

.footerp {
  /* background-color: white; */
  }

@media screen and (max-width: 1023px) {
  /* Your CSS styles for screens smaller than 1024px go here */
  /* For example, you can change the font size or layout */
  .bottom-div {
    padding-top: 5rem;
    transition: padding-top 0.3s ease-in-out, height 0.3s ease-in-out !important;
  }
}

/* ipad and tablet */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  /* Add your styles here */
  .bottom-div {
    padding-top: 12rem !important;
    transition: padding-top 0.3s ease-in-out, height 0.3s ease-in-out !important;
  }

  /* Other styles for tablets */
}

@media (max-width: 768px) {
  .mbvidworksp{
    width: 92vw !important;
    height: auto !important;
}

  .scrollcost {
    width: 100vw !important;
  }

  .overlay-gallery {
    z-index: 0;
  }

  .bottom-div {
    padding-top: 10rem;
    z-index: 0;
    /* padding-bottom: 10rem; */
    transition: padding-top 0.3s ease-in-out, height 0.3s ease-in-out !important;
  }

  .footerp {
    position: relative;
    bottom: 0;
  }

  .picssizeworks{
    pointer-events: none;
  }

  .picssizeworks iframe{
    pointer-events: all;
  }


  .picssizeworks{
    height: auto;
  }
  /*   display: block;
    position: absolute; */

  .scroll-container div img:hover {
    /* transition: opacity .35s ease; */
    /* transition: border-radius 0.5s ease, filter 2s ease; */
    transform: 0;
    overflow: hidden;
  }

  .bottomtextprmb {
    width: 100vw;
    /* display: flex; */
    padding: 0rem !important;
    justify-content: center;
  }

  .bottomtextprmbinn {
    width: 92vw;
    padding-bottom: 1vh;
    padding-left: 3.5vw;
  }

  /* font-size: 1.25rem; */
  .mobileslugtitle {
    padding-bottom: 0.25rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
    line-height: 3rem;
  }

  .projecttextmb {
    width: 90vw;
    /* font-family: "GTWalsheimb"; */
    /* padding-top: 7rem; */
    padding-left: 1vw;
    font-size: 11.84px;
  }

  .scroll-container div img {
    padding: 0vw;
    width: 92vw !important;
    padding-right: 0vw;
    height: 56vh;
    height: auto;
    overflow-x: hidden;
    align-content: center;
  }

  .scroll-container div img {
    /* display: block; */
    /* position: absolute; */
    /* z-index: 2; */
  }

  figure {
    /* width: 100vw; */
    display: flex;
    padding-right: 0vw;
    /* height: 56vh; */
    overflow-x: hidden;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  .block {
    display: none;
  }

  .gallmobile {
    flex-direction: column;
  }

  .bottom-div {
    position: unset;
    position: relative;
    bottom: auto;
    left: auto;
    width: 100%;
    /* padding: 0px; */
    /* padding-top: 6rem; */
  }

  .scroll-container {
    padding-top: 3vh;
    padding: 0;
  }
  .list-layout {
    /* opacity: 1;  */
    margin-top: 0px;
    transition: margin 0.3s ease; /* Add a smooth transition effect */
  }

  .mobiletitle {
    position: relative;
    /* top: 17vw; */
    width: auto;
    background: 0;
    height: fit-content;
    z-index: 1;
    padding: 3vw;
    /* padding-top: 20vh; */
    border-bottom: 0px;
  }

  .mobiletitle {
    /* position: relative !important; */
  }
  .scroll-container {
    /* width: 100%; */
    /* width: 100vw; */
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-x: hidden;
  }

  .scroll-container div img {
    width: 100vw;
    padding-right: 0vw;
    overflow-x: hidden;
  }
}
</style>