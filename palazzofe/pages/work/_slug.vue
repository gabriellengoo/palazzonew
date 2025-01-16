<template>
  <div class="reveal-container relative md:min-h-fit md:overflow-hidden">
    <TransitionComponent />

    <div>
      <HeaderComponent />
      <div class="headera mbpad content flex w-full justify-between">
        <h1 class="md:w-[1.4vw] w-auto">
          <!-- weddings -->
          <a class="headbar" href="../weddings">
            <!-- <SvgBack class="svgmb hover:cursor-pointer"/> -->
            <div
              ref="lottieAnimation"
              class="lottie-container headbarc w-[1.4vw] hover:cursor-pointer"
            ></div>
          </a>
        </h1>
        <p class="yeart navmbno text-center text-4xl uppercase" v-if="project">
          {{ project.title }}
        </p>
        <p
          class="yeart navmbno navop opacity-0 text-center text-4xl uppercase"
          v-if="project"
        >
          {{ project.year }}
        </p>
        <p class="headingspages navmbno text-center text-4xl uppercase">
          Weddings
        </p>
        <h1 class="w-[2vw] navmbno"></h1>
      </div>

      <div class="bgmobile relative min-h-screen flex">
        <!-- Left Scrollable Content -->
        <div class="left-content flex-1 overflow-y-scroll">
          <div>
            <p
              class="headingspagesslug pt-[2vw] nodes text-center text-4xl uppercase"
            >
              Weddings
            </p>
          </div>

          <div class="nodes nodesgal">
            <section
              class="top-0 left-0 w-full md:block cursor-grab slider"
              v-swiper:mySwiperMobile="swiperOptions2"
              @slideChange="onSlideChange"
              ref="slider2"
            >
              <div class="relative z-40 w-full h-full swiper-wrapper">
                <div
                  v-for="(slide, index) in project.slider"
                  :key="slide._key"
                  class="flex justify-center w-full h-full transition-opacity duration-300 swiper-slide"
                >
                  <div
                    v-for="image in slide.images"
                    class=""
                    :class="{
                      mdnewdaycon1: image.newDay,
                      'overlaycont flex h-full p-2 w-13/16': !image.newDay,
                    }"
                  >
                    <figure
                      v-for="image in slide.images"
                      :key="image._key"
                      class="overlaydiv flex flex-col flex-1 h-full"
                      :class="{
                        ' mdnewdaycon': image.newDay,
                        '': !image.newDay,
                      }"
                    >
                      <MediaImage
                        :src="image.image.asset._ref"
                        v-if="image.image && !image.newDay"
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

                      <!-- video -->
                      <iframe
                        v-if="image.vimeoUrl"
                        :src="getVimeoEmbedUrl(image.vimeoUrl)"
                        frameborder="0"
                        allowfullscreen
                        class="landscape gallery-image w-auto h-full"
                      ></iframe>

                      <!-- New Day Display -->
                      <div v-if="image.newDay" class="new-day-info">
                        <MediaImage
                          v-if="image.newDayImage"
                          :src="image.newDayImage.asset._ref"
                          class="new-day-image"
                        ></MediaImage>

                        <p class="new-day-text">
                          {{ image.newDayText }}
                        </p>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </section>

            <header
              class="nodesdots absolute dotsmb top-0 right-0 p-2 text-xs block"
            >
              <span class="dots" v-if="project.slider">
                <span
                  v-for="n in 3"
                  :key="n"
                  class="dot"
                  :class="{ 'active-dot': index % 4 === n - 0 }"
                >
                  •
                </span>
              </span>
            </header>

            <div class="footcon">
              <div class="w-full flex justify-center">
                <div
                  class="copyrtex copyrtexd items-baseline w-[96.5vw] justify-between flex pt-10 uppercase md:pt-0 pb-5 text-[1rem] md:text-[2rem]"
                >
                  <div
                    class="titleTextt flex items-baseline justify-between md:text-6xl text-2xl align-baseline text-center uppercase"
                  >
                    <div class="animate-hover text-[1.2rem] pr-5">
                      <p v-if="project">{{ project.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="allbotindi nomballbot md:p-8">
            <div class="bottom">
              <div class="archimg">
                <MediaImage
                  :src="project.image"
                  v-if="project.image"
                  class="arch-frame"
                ></MediaImage>
              </div>

              <!-- footer -->
              <div class="nomb pt-[8vh] footout">
                <div class="footerstuff">
                  <div
                    class="textnewardesk ttdesk uppercase animate-hover text-[1.2rem]"
                  >
                    <p v-if="project">{{ project.title }}</p>
                    <p class="yeartdesk mb-6 uppercase" v-if="project">
                      {{ project.year }}
                    </p>
                  </div>
                  <div v-if="project.content" class="pt-3">
                    <Richtext
                      class="contactinner"
                      :blocks="project.content"
                    ></Richtext>
                  </div>
                  <!-- Location Link -->
                  <div
                    v-if="project.location"
                    class="w-full flex items-center text-center flex-col md:pt-5 locationtext"
                  >
                    <!-- <p class="loctext">Location,</p> -->
                    <p class="loctext">Play Film</p>
                    <div class="flex flex-col normal-case italic loctextlink">
                      <a href="javascript:void(0)" @click="openModal">{{
                        project.location
                      }}</a>
                    </div>
                  </div>

                  <!-- Draggable Iframe Modal -->
                  <div
                    v-if="isModalOpen"
                    class="modal-container fixed inset-0 z-50 flex items-center justify-center"
                  >
                    <!-- Draggable Modal -->
                    <div
                      class="modal-content bg-white overflow-hidden relative"
                      ref="modal"
                      @mousedown="startDragging"
                      @mouseup="stopDragging"
                      @mousemove="drag"
                      :style="{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                      }"
                    >
                      <!-- <button
          class="absolute uppercase top-2 right-2 text-gray-700 hover:text-red-500"
          @click="closeModal"
        > -->
                      <!-- Close -->
                      <button
                        class="absolute uppercase top-[.5vw] right-[.5vw] hover:cursor-pointer"
                        @click="closeModal"
                      >
                        <!-- <SvgClose class=""/> -->
                        <svg
                          class="w-[1.4vw]"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 500 500"
                          width="500"
                          height="500"
                          preserveAspectRatio="xMidYMid meet"
                          style="
                            height: 100%;
                            transform: translate3d(0px, 0px, 0px);
                            content-visibility: visible;
                          "
                        >
                          <defs>
                            <clipPath id="__lottie_element_2">
                              <rect width="500" height="500" x="0" y="0"></rect>
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
                      </button>
                      <!-- </button> -->

                      <iframe
                        :src="`${project.locationlink}?autoplay=1&fullscreen=1`"
                        frameborder="0"
                        class="w-full h-full"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Static Content -->
        <div class="right-content overflow-hidden flex-1">
          <div
            class="copyrtex copyrtexmb items-baseline w-[96.5vw] justify-between flex pt-10 md:pt-0 pb-5 text-[1rem] md:text-[2rem]"
          >
            <div
              class="titleTextt flex flex-col items-baseline justify-between md:text-6xl text-2xl align-baseline"
            >
              <div
                class="ttmb uppercase animate-hover text-[1.2rem] pr-[1vw] pl-[1vw]"
              >
                <p v-if="project">{{ project.title }}</p>
                <p class="yeart mb-6 uppercase" v-if="project">
                  {{ project.year }}
                </p>
              </div>

              <div class="nodes mbfootout pt-[6vh] footout">
                <div class="footerstuff">
                  <div v-if="project.content" class="pt-5">
                    <Richtext
                      class="contactinner"
                      :blocks="project.content"
                    ></Richtext>
                  </div>
                  <div
                    v-if="project.location"
                    class="w-full flex items-center text-center flex-col md:pt-5 locationtext"
                  >
                    <p class="loctext">Play Film</p>
                    <div class="flex flex-col normal-case italic loctextlink">
                      <a href="javascript:void(0)" @click="openModal">{{
                        project.location
                      }}</a>
                    </div>
                  </div>

                  <!-- Draggable Iframe Modal -->
                  <div
                    v-if="isModalOpen"
                    class="modal-container fixed inset-0 z-50 flex items-center justify-center"
                  >
                    <!-- Draggable Modal -->
                    <div
                      class="modal-content bg-white overflow-hidden relative"
                      ref="modal"
                      :style="{ top: `20vh`, left: `2vw` }"
                    >
                      <!-- <button
          class="absolute uppercase top-2 right-2 text-gray-700 hover:text-red-500"
          @click="closeModal"
        > -->
                      <!-- Close -->
                      <button
                        class="absolute uppercase top-[.5vw] right-[.5vw] hover:cursor-pointer"
                        @click="closeModal"
                      >
                        <!-- <SvgClose class=""/> -->
                        <svg
                          class="w-[4.4vw]"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 500 500"
                          width="500"
                          height="500"
                          preserveAspectRatio="xMidYMid meet"
                          style="
                            height: 100%;
                            transform: translate3d(0px, 0px, 0px);
                            content-visibility: visible;
                          "
                        >
                          <defs>
                            <clipPath id="__lottie_element_2">
                              <rect width="500" height="500" x="0" y="0"></rect>
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
                      </button>
                      <!-- </button> -->

                      <iframe
                        :src="`${project.locationlink}?autoplay=1&fullscreen=1`"
                        frameborder="0"
                        class="w-full h-full"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="nomb static-box w-full h-full">
            <!-- desktop -->

            <header
              class="absolute text-day2 top-0 right-0 hidden p-2 text-xs md:block"
            >
              <div class="numcon">
                <span class="numg" v-if="project.slider">
                  ( {{ String(index).padStart(0, "") }} of
                  {{ String(project.slider.length).padStart(0, "") }} )</span
                >
              </div>
            </header>
            <button
              v-if="!isLastSlide"
              class="nomb absolute top-0 left-[49vw] z-30 w-[25%] h-full previous"
              :class="back ? '' : ''"
              @click="prev"
              ref="prev"
              aria-label="Previous"
            ></button>
            <button
              v-if="!isLastSlide"
              class="nomb absolute top-0 right-0 z-30 w-[25%] h-full next"
              @click="next"
              aria-label="Next"
            ></button>

            <div class="nomb nombgal gallery-images">
              <section
                class="top-0 left-0 hidden w-full h-full md:block cursor-grab slider"
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
                    <div class="overlaycont flex h-full pb-0 w-13/16">
                      <figure
                        v-for="image in slide.images"
                        :key="image._key"
                        :class="{
                          portraitcon: image.portrait,
                          landscapecon: !image.portrait,
                        }"
                        class="overlaydiv flex flex-col flex-1 h-full"
                      >
                        <MediaImage
                          :src="image.image.asset._ref"
                          v-if="image.image && !image.newDay"
                          class="gallery-image w-auto h-full"
                          :class="{
                            portrait: image.portrait,
                            landscape: !image.portrait,
                          }"
                          :style="{
                            pointerEvents: 'auto',
                          }"
                          :sizes="'sm:200vw md:150vw lg:200vw'"
                        ></MediaImage>

                        <div
                          :class="{
                            textday1por: image.portrait,
                            textday1lan: !image.portrait,
                          }"
                          class="absolute top-0 left-0 text-day1 z-50"
                        >
                          <!-- <p
                            v-if="image.image && !image.newDay"
                            class="numgday capitalize"
                          >
                            {{ image.day ? image.day : "Day 1" }}
                          </p> -->
                        </div>

                        <!-- video -->
                        <iframe
                          v-if="image.vimeoUrl"
                          :src="getVimeoEmbedUrl(image.vimeoUrl)"
                          frameborder="0"
                          allowfullscreen
                          class="landscape gallery-image w-auto h-full"
                        ></iframe>

                        <!-- New Day Display -->
                        <div v-if="image.newDay" class="new-day-info">
                          <MediaImage
                            v-if="image.newDayImage"
                            :src="image.newDayImage.asset._ref"
                            class="new-day-image"
                          ></MediaImage>
                          <p class="new-day-text">
                            {{ image.newDayText }}
                          </p>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </section>

              <div class="footcon nodes">
                <div class="w-full flex justify-center">
                  <div
                    class="copyrtex copyrtexd items-baseline w-[96.5vw] justify-between flex pt-10 uppercase md:pt-0 pb-5 text-[1rem] md:text-[2rem]"
                  >
                    <div
                      class="titleTextt flex items-baseline justify-between md:text-6xl text-2xl align-baseline text-center uppercase"
                    >
                      <div class="animate-hover text-[1.2rem] pr-5">
                        <p v-if="project">{{ project.title }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import lottie from "lottie-web";

export default {
  components: {
    TransitionComponent,
  },
  async asyncData({ params, $sanity, store }) {
    const query = groq`*[_type == "project" && slug.current == "${params.slug}"] {
    ...,
    "archiveSlug": archive->slug.current,

    slider[] {
      images[] {
        ...,
        "day": coalesce(day, "Day 1") 
      }
    },
 
    "image": image.asset._ref,
  } 
  | order(_updatedAt desc)[0]`;

    const project = await $sanity.fetch(query);

    // Modify the 'day' field for images after fetching the data
    if (project && project.slider) {
      project.slider = project.slider.map((slide) => {
        if (slide.images) {
          slide.images = slide.images.map((image) => {
            const dayFormatted =
              image.day.charAt(0).toUpperCase() + image.day.slice(1); // Capitalize "day1" to "Day1"
            return {
              ...image,
              day: dayFormatted.replace(/([a-z])(\d+)/, "$1 $2"), // Adds a space between "Day" and the number
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
      index: 1,
      realIndex: 0,
      step: 0,
      isBackNavigation: false,
      imageNumberPosition: { top: 0, left: 0 }, // Initialize position
      isImageModalOpen: false,
      isGalleryExpanded: true,
      isBlueBoxActive: false,
      clickedImageIndex: null, // Initially set to null
      swiperOptions: {
        zoom: {
          maxRatio: 5, // Allow zooming up to 5x
          toggle: true,
        },
        slidesPerView: "auto",
        touchRatio: 1, // Ensure touch interactions are enabled
      },
      swiperOptions2: {
        zoom: {
          maxRatio: 5, // Allow zooming up to 5x
          toggle: true,
        },
        slidesPerView: "auto",
        touchRatio: 1, // Ensure touch interactions are enabled
      },
      // swiperOptions2: {
      //   slidesPerView: "auto",
      // },
      imageOpacity: 1, // Add this property
      scrolled: false,
      back: false,
      searchQuery: "", // Initialize search query
      lottieInstance: null,
      isModalOpen: false,
      isDragging: false,
      position: { top: 100, left: 100 }, // Initial position of the modal
      offset: { x: 0, y: 0 },
    };
  },
  computed: {
    isLastSlide() {
      return this.realIndex === this.project.slider.length - 1;
    },
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
    // Select all elements with the class "gallery-image"
    // Function to update z-index based on the active slide
    const updateZIndexForActiveSlide = () => {
      const activeSlide = document.querySelector(".gallery-image.active");
      const galleryImages = document.querySelectorAll(".gallery-image");

      // Reset all z-index values
      galleryImages.forEach((galleryImage) => {
        galleryImage.style.zIndex = "";
      });

      if (activeSlide) {
        const iframe = activeSlide.querySelector("iframe");
        if (iframe) {
          activeSlide.style.zIndex = "10000";
        }
      }
    };

    // Call the function initially
    updateZIndexForActiveSlide();

    // Example: Listening for a slide change event
    document.addEventListener("slideChange", updateZIndexForActiveSlide);

    console.log("Lottie animation initialized:", this.lottieInstance);

    this.lottieInstance = lottie.loadAnimation({
      container: this.$refs.lottieAnimation, // the DOM element
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/animations/hamburger.json", // your Lottie animation JSON file path
    });

    // Set the animation to frame 11 without playing
    this.lottieInstance.goToAndStop(55, true);

    const previousScrollPosition = sessionStorage.getItem(
      "previousScrollPosition"
    );
    if (previousScrollPosition && this.$router.isBackNavigation) {
      window.scrollTo(0, 0);
    }

    this.$nextTick(() => {
      // Wait for animation to finish
      setTimeout(() => {
        // Add a check for screen width
        if (window.innerWidth > 768) {
          // Adjust the width threshold as needed
          window.scrollTo({
            top: document.querySelector(".reveal-container").offsetHeight,
            behavior: "smooth",
          });
        }
      }, 1000); // Adjust timeout to match the duration of your animation
    });
  },

  watch: {
    $route() {
      if (this.isBackNavigation) {
        window.scrollTo(0, 0);
        this.isBackNavigation = false;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    sessionStorage.setItem("previousUrl", from.fullPath);
    next();
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    startDragging(event) {
      this.isDragging = true;
      this.offset = {
        x: event.clientX - event.target.closest(".modal-content").offsetLeft,
        y: event.clientY - event.target.closest(".modal-content").offsetTop,
      };
    },
    stopDragging() {
      this.isDragging = false;
    },
    drag(event) {
      if (this.isDragging) {
        this.position = {
          top: event.clientY - this.offset.y,
          left: event.clientX - this.offset.x,
        };
      }
    },

    getVimeoEmbedUrl(vimeoUrl) {
      // Extract Vimeo video ID from the URL
      const videoId = vimeoUrl.split("/").pop();
      // Generate the Vimeo embed URL
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&autopause=0&muted=1&background=1`;
    },
    playSegment() {
      // Play from frame 11 to 20
      if (this.lottieInstance) {
        this.lottieInstance.playSegments([55, 20], true);
      }
    },
    nextImage() {
      // Implement your logic to go to the next image
    },
    handleBackClick(event) {
      const previousUrl = sessionStorage.getItem("previousUrl");
      if (previousUrl) {
        this.$router.push(previousUrl);
        sessionStorage.removeItem("previousUrl");
      } else {
        this.$router.push("/");
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

    onSlideChange(swiper) {
      this.index = swiper.activeIndex + 1;
      this.realIndex = swiper.activeIndex;

      const gsap = this.$gsap;

      // Toggle "previous" button visibility
      if (swiper.activeIndex === 0 && !this.back) {
        this.$refs["prev"].classList.add("disabled");
      } else if (this.isLastSlide) {
        this.$refs["prev"].style.display = "none"; // Hide "previous" button
      } else {
        this.$refs["prev"].classList.remove("disabled");
        this.$refs["prev"].style.display = ""; // Reset to default
      }

      // Adjust skew animation
      if (this.index > 1) {
        gsap.to(this.$refs["skew"], { x: "-150%" });
      } else {
        gsap.to(this.$refs["skew"], { x: "0%" });
      }
    },
    onSlideChange2(swiper) {
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

    openImageModal2(index) {
      this.clickedImageIndex = index;
      this.swiperOptions2 = { ...this.swiperOptions2, initialSlide: index };
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
    onSlideChange2(swiper) {},

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

    handleKeyDown(event) {
      if (event.key === "ArrowLeft" && this.mySwiper2.slidePrev()) {
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

    next2() {
      if (this.mySwiperMobile.isEnd) {
        if (this.project.nextProject) {
          this.mySwiperMobile.slideTo(0);
        }
      } else {
        this.mySwiperMobile.slideNext();
      }
    },
    prev2() {
      if (this.mySwiperMobile.isBeginning && this.back) {
        this.$router.go(-1);
      } else {
        this.mySwiperMobile.slidePrev();
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
/* .dots span:last-child{
display: none;
} */

/* .location-container a {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
} */

.gallery-image {
  touch-action: auto; /* Allow gestures like pinch-to-zoom */
  pointer-events: auto; /* Ensure interaction */
  user-select: auto; /* Allow text or element selection if needed */
}

.iframe-modal {
  position: fixed;
  width: 50%;
  height: 50%;
  /* background: #f1f1f1; */
  background-image: url("./static/Navbar.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid #000;
  z-index: 100000000 !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  /* background: #f1f1f1; */
  background-image: url("./static/Navbar.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: grab;
}

.drag-handle {
  cursor: grab;
  font-weight: bold;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.iframe-content {
  width: 100%;
  height: calc(90vh - 40px); /* Adjust height to account for header */
}

.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  /* cursor: grab; */
  pointer-events: none;
}

.modal-content {
  position: absolute;
  cursor: grab;
  z-index: 1000;
  height: 45vh;
  display: flex;
  width: 50vw;
  /* background: #f1f1f1; */
  background-image: url("./static/popbg.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: flex-end;
  pointer-events: auto;

  height: 25vw;
  display: flex;
  width: 40vw;
  border: 0.5px solid black;
  /* position: absolute;
    cursor: grab;
    z-index: 1000;
    height: 45vh;
    display: flex;
    width: max-content;
    background-image: url("./static/background.jpg");
    align-items: flex-end;
    pointer-events: auto;
    width: 50%;
    height: 55%;
    position: relative; */
}

.modal-content iframe {
  height: 40vh;
  width: 50vw;

  object-fit: cover;
  width: 100%;
  height: 90%;
  border: none;
  /* height: 40vh;
    width: 50vw;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    top: 0;
    left: 0; */
}

.modal-content:active {
  cursor: grabbing;
  z-index: 1000;
}

.last {
  cursor: crosshair;
}

/* .previous:hover {
  cursor: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjExNyAxMmw3LjUyNyA2LjIzNS0uNjQ0Ljc2NS05LTcuNTIxIDktNy40NzkuNjQ1Ljc2NC03LjUyOSA2LjIzNmgyMS44ODR2MWgtMjEuODgzeiIvPjwvc3ZnPg=="),
    auto !important;
    z-index: 30;
  cursor: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBvbHlnb24gcG9pbnRzPSIyMCwyIDgsMTYgMjAsMzAiIHN0eWxlPSJmaWxsOmJsYWNrOyIvPjwvc3ZnPg==') 16 16, auto;
} */

/* .previous {
 z-index: 30;
  cursor: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBvbHlnb24gcG9pbnRzPSIyMCwyIDgsMTYgMjAsMzAiIHN0eWxlPSJmaWxsOmJsYWNrOyIvPjwvc3ZnPg==') 16 16, auto;
}

.next {
  cursor: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMS44ODMgMTJsLTcuNTI3IDYuMjM1LjY0NC43NjUgOS03LjUyMS05LTcuNDc5LS42NDUuNzY0IDcuNTI5IDYuMjM2aC0yMS44ODR2MWgyMS44ODN6Ii8+PC9zdmc+"),
    auto !important;
    z-index: 30;
} */

/* .previous{
  cursor: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjExNyAxMmw3LjUyNyA2LjIzNS0uNjQ0Ljc2NS05LTcuNTIxIDktNy40NzkuNjQ1Ljc2NC03LjUyOSA2LjIzNmgyMS44ODR2MWgtMjEuODgzeiIvPjwvc3ZnPg=="),
    auto !important;
    z-index: 30;
  cursor: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBvbHlnb24gcG9pbnRzPSIyMCwyIDgsMTYgMjAsMzAiIHN0eWxlPSJmaWxsOmJsYWNrOyIvPjwvc3ZnPg==') 16 16, auto;
} */

.previous {
  z-index: 30;
  cursor: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ3IDMwIiB3aWR0aD0iNDciIGhlaWdodD0iMzAiPjxkZWZzPjxpbWFnZSB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGlkPSJpbWcxIiBocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlQanh3WVhSb0lHUTlJazB5TGpFeE55QXhNbXczTGpVeU55QTJMakl6TlMwdU5qUTBMamMyTlMwNUxUY3VOVEl4SURrdE55NDBOemt1TmpRMUxqYzJOQzAzTGpVeU9TQTJMakl6Tm1neU1TNDRPRFIyTVdndE1qRXVPRGd6ZWlJdlBqd3ZjM1puUGc9PSIvPjwvZGVmcz48c3R5bGU+PC9zdHlsZT48dXNlICBocmVmPSIjaW1nMSIgdHJhbnNmb3JtPSJtYXRyaXgoLjk1MSwwLDAsLjk1MSwxLC03KSIvPjwvc3ZnPg=="),
    auto !important;
}

.next {
  z-index: 30;
  cursor: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ1IDI4IiB3aWR0aD0iNDUiIGhlaWdodD0iMjgiPjxkZWZzPjxpbWFnZSB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgaWQ9ImltZzEiIGhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaVBqeHdZWFJvSUdROUlrMHlNUzQ0T0RNZ01USnNMVGN1TlRJM0lEWXVNak0xTGpZME5DNDNOalVnT1MwM0xqVXlNUzA1TFRjdU5EYzVMUzQyTkRVdU56WTBJRGN1TlRJNUlEWXVNak0yYUMweU1TNDRPRFIyTVdneU1TNDRPRE42SWk4K1BDOXpkbWMrIi8+PC9kZWZzPjxzdHlsZT48L3N0eWxlPjx1c2UgIGhyZWY9IiNpbWcxIiB0cmFuc2Zvcm09Im1hdHJpeCguMjI3LC4wMDEsLTAuMDAxLC4yMjcsLjk1MywtNykiLz48L3N2Zz4="),
    auto !important;
}

.disabled {
  display: none;
}

.portrait {
  margin-right: 1.5vw;
  position: fixed;
  margin-top: 5.5vh;
  width: auto;
  height: 89vh;
  -o-object-fit: cover;
  object-fit: cover;
}

.landscape {
  height: 55vh;
  width: 47vw !important;
  /* display: flex; */
  position: sticky !important;
  top: 20vh;
  object-fit: cover;
  object-position: center;

  /* width: auto;
    height: auto;
    width: 45vw;
    position: absolute;
    top: 20vh;
    left: 1.5vw;
    margin-right: auto;
    margin-left: auto; */
}

.landscapecon {
  width: 50vw;
  display: flex;
  align-items: center;
}

.portraitcon {
  width: 50vw;
  height: 100%;
  bottom: 0;
  position: absolute;
  display: flex;
  align-content: flex-end;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
}

.swiper-wrapper {
  align-items: center;
}
.headera {
  display: flex;
  border-bottom: 0.5px solid black;
  background-image: url("./static/Navbar.jpg");
  background-size: cover;
  background-position: initial;
  background-repeat: no-repeat;
}

.archimg {
  display: inherit;
}

.footout {
  display: inherit;
}

.archimg {
  display: inherit;
}

.overlaydiv {
  /* padding-top: 6vh; */
  /* padding-bottom: 7vw; */
  overflow: hidden;
}

.overlay-gallery {
  opacity: 0; /* Initially hidden */
  transition: opacity 0.5s ease;
}

.overlay-gallery.active {
  transition: opacity 0.5s ease;
  opacity: 1;
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

.gallery-content {
  text-align: center;
  color: white;
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

.gallery-images {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  height: 100vh;
  width: 50vw;
  left: 50vw;
  position: sticky;
  z-index: auto;

  /* display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
    width: 49vw;
    left: 51vw;
    position: fixed;
    overflow: hidden; */
  /* align-content: center; */
}

.gallery-image {
  /* cursor: grab !important; */
  /* padding-top: 20vh; */
  /* padding-bottom: 20vh; */
  /* max-width: 100vw; */
  /* width: calc(55.33vw - 20px); */
  /* width: auto; */
  align-items: center;
  /* height: 90vh; */
  /* padding: 2vh; */
  pointer-events: none;
}

.allbotindi {
  /* display: flex;
  display: flex;
  width: 100%;
  height: 100%;
  height: 95%;
  justify-content: center;
  align-items: flex-end; */

  display: flex;
  top: 2vh;
  position: relative;
  width: 100%;
  height: 95%;
  justify-content: center;
  align-items: flex-end;
}

/* Apply the animation to the main container */
.reveal-container {
  animation: revealFromTop 1s ease-out forwards;
}

/* Ensure the container covers the full viewport initially */
.reveal-container {
  height: 100vh;
  overflow: hidden;
}

.bottom {
  /* position: fixed; */
  bottom: 0;
  left: 0;
  /* width: 100%; */
  width: 49vw;
  width: 53vw;
  width: 49vw;
  /* padding: 2vw; */
  z-index: 0;
}

a {
  color: black;
  text-decoration: underline;
}

.headingspages {
  /* font-family: "GT-Bold"; */
  /* font-size: medium;
  font-size: 3rem; */
}

.yeart {
  /* font-family: "MinionPro-Regular"; */
  /* font-size: medium;
  font-size: 3rem; */
}

.footerstuff {
  position: relative;
  /* top: 70vh; */
  font-size: medium;
  font-size: 1.7rem;
  font-size: 1.3vw;
  width: 100%;
  border-top: solid;
  border-top-width: 0.7px;
}

.loctextlink {
  font-size: small;
  font-size: 1.7rem;
  font-size: 1.3vw;
}

.loctext {
  font-size: small;
  font-size: 1.7rem;
  font-size: 1.1vw;
  font-family: "GT-Bold";
  text-transform: uppercase;
}

@media (max-width: 1440px) {
  .yeart {
    /* font-family: "MinionPro-Regular"; */
    /* font-size: medium; */
  }

  .headingspages {
    /* font-family: "GT-Bold"; */
    /* font-size: medium; */
    /* padding-top: 5.8vh; */
  }

  .footerstuff {
    font-size: medium;
    font-size: 2vh;
    font-size: 1.95vh;
  }

  .loctextlink {
    font-size: smaller;
  }

  .loctext {
    font-size: smaller;
    font-family: "GT-Bold";
    text-transform: uppercase;
  }
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

  width: auto;
  height: auto;
  -o-object-fit: cover;
  object-fit: contain;
  border-radius: 10px;
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
}

/* Styles for text inside the frame */
.textframe {
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
  /* height: max-content; */
  overflow-y: hidden;
  z-index: 1;
  position: initial;
}

.right-content {
  background-image: url("./static/PINKBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  z-index: 0;
  position: initial;
}

.copyrtexd {
  display: inherit;
}

.copyrtexmb {
  display: none;
}

.archimg {
  display: inherit;

  height: 47.6vh;
  display: flex;
  width: 100%;
  justify-content: flex-start;
}

.nomb {
  display: inherit;
}

.nombgal {
  display: flex;
}

.nodes {
  display: none;
}

.headmb {
  display: contents;
  display: none;
}

@media only screen and (max-width: 768px) {
  .landscape {
    height: 55vh;
    width: 90vw !important;
    /* display: flex; */
    position: sticky !important;
    top: 20vh;
    object-fit: cover;
    object-position: center;
  }

  .overlaydiv {
    /* padding-top: 6vh; */
    padding-bottom: 7vw;
    display: flex;
    justify-content: center;
  }

  .nomb {
    display: none;
  }

  .nodes {
    display: inherit;
  }

  .nodesgal {
    /* display: flex;
    height: 60vh;
    width: 100vw;
    left: 0;
    position: absolute; */

    display: flex;
    height: 56vh;
    width: 100vw;
  }
  .left-content {
    background-image: url("./static/LeftBG.png");
    background-image: url("./static/PINKBG.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 60vh;
    height: max-content;
    overflow-y: none;
    flex: none;
    padding-top: 6vh;
  }

  .right-content {
    background-image: url("./static/PINKBG.png");
    background-image: url("./static/LeftBG.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    /* height: auto;
    height: 40vh; */
    z-index: 1;
    position: relative;
    flex: none;
  }

  .modal-content {
    position: absolute;
    cursor: grab;
    z-index: 1000;
    height: 45vh;
    align-items: flex-end;
    pointer-events: auto;
    height: 60vw;
    display: flex;
    width: 96vw;
    border: 0.5px solid black;
  }

  .footout {
    padding-top: 0;
  }

  .contactinner {
    line-height: normal;
  }

  .mbfootout {
    /* text-transform:unset; */
  }

  .ttmb {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-family: "GT-Bold";
    font-size: large;
    font-size: 2.2vh;
  }

  .titleTextt {
    padding: 1vh;
  }

  .footerstuff {
    border: none;
    padding: 1vh;
    padding-bottom: 4vh;
  }

  .locationtext {
    padding-top: 3vh;
  }

  .copyrtex {
    padding: 1vh;
  }

  .copyrtexd {
    display: none;
  }

  .copyrtexmb {
    display: contents;
  }

  .archimg {
    padding-top: 0;
  }

  .bgmobile {
    /* padding-top: 2.8vh; */
    overflow: hidden !important;
    flex-direction: column; /* Stacks the two sides vertically on small screens */
  }

  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    /* width: 49vw;
  width: 53vw; */
    /* padding: 2vw; */
    z-index: 1000;
  }

  /* .headera {
    display: none;
  } */

  .headera {
    /* padding-top: 2.5vw;
    padding-bottom: 2.5vw;
    padding-left: 2.5vw;
    padding-right: 2.5vw; */
    flex-direction: column;
    z-index: 100;
  }

  .headera {
    padding-top: 3.5vw;
    padding-bottom: 3.5vw !important;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
  }

  .svgmb {
    top: 0vw !important;
  }

  /* .headmb{
    display: contents;
    display: flex;
  border-bottom: 0.5px solid black;
  background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: initial;
  background-repeat: no-repeat;
  } */

  .archimg {
    display: none;
  }

  .loctext {
    line-height: normal;
  }
}
</style>
