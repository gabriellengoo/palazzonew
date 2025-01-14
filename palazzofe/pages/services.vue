<template>
  <div>
    <!-- <HeaderComponent /> -->
    <div class="headera content flex w-full justify-between">
      <h1 class="navmb">
        <HeaderComponent />
      </h1>
      <p class="navmbno yeart text-center text-4xl uppercase">services</p>
      <p class="navmbno yeart w-[5vw] text-center text-4xl uppercase"></p>
      <p class="navmbno headingspages text-center text-4xl uppercase">
        palazzo eventi
      </p>
      <h1 class="navmbno w-[2vw]"></h1>
    </div>

    <div class="bgmobile relative min-h-screen flex">
      <!-- Left Scrollable Content -->
      <div
        @click.stop
        class="left-content flex-1 flex items-center justify-center overflow-y-scroll p-8"
      >
        <!-- <button class='pt-[4vw]' @click="closeSection"> -->
        <div class="nodes contmbhead">
          <!-- <p>d</p> -->
          <p
            :class="[
              '',
              { sheadera: !isMenuOpen },
              { sheaderaopen: isMenuOpen },
            ]"
            class="headingspages text-center text-4xl uppercase"
          >
            Services
          </p>
        </div>
        <transition name="slide-out" @after-enter="fadeInAllImg">
          <div
            class="mobilemenu relative my-auto z-50 flex flex-col justify-center items-center"
          >
            <div class="  ">
              <nav class="link-container uppercase">
                <ul>
                  <li class="pointer-events-none">
                    <a class="svgleft pointer-events-none" href=""
                      ><SvgArchstar class="" @click="setActiveSection('')"
                    /></a>
                  </li>
                  <li>
                    <a
                    :class="{ active: activeSection === 'design' }"
                      @click="setActiveSection('design')"
                      href="javascript:void(0)"
                    >
                      Design
                    </a>
                  </li>
                  <li>
                    <a
                    :class="{ active: activeSection === 'location' }"
                      @click="setActiveSection('location')"
                      href="javascript:void(0)"
                    >
                      Location
                    </a>
                  </li>
                  <li>
                    <a
                    :class="{ active: activeSection === 'production' }"
                      @click="setActiveSection('production')"
                      href="javascript:void(0)"
                    >
                      Production
                    </a>
                  </li>
                  <li>
                    <a    :class="{ active: activeSection === 'concierge' }" @click="setActiveSection('concierge')" href="#Concierge">
                      Concierge
                    </a>
                  </li>
                  <li>
                    <a    :class="{ active: activeSection === 'activity' }" @click="setActiveSection('activity')" href="#activity">
                      Activity
                    </a>
                  </li>
                  <li>
                    <a
                    :class="{ active: activeSection === 'celebrities' }"
                      @click="setActiveSection('celebrities')"
                      href="#celebrities"
                    >
                      Celebrities
                    </a>
                  </li>
                  <li>
                    <a
                    :class="{ active: activeSection === 'entertainment' }"
                      @click="setActiveSection('entertainment')"
                      href="#entertainment"
                    >
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a :class="{ active: activeSection === 'products' }"
                       @click="setActiveSection('products')" href="#products">
                      Products
                    </a>
                  </li>
                  <li>
                    <a :class="{ active: activeSection === 'more' }" @click="setActiveSection('more')" href="#more"> More </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </transition>
      </div>

      <!-- Right Static Content -->
      <transition
        name="slide"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div
          :class="{ 'slide-in': activeSection, 'slide-out': !activeSection }"
          class="right-content overflow-y-scroll flex-1"
          @click="closeSection"
          v-if="activeSection"
        >
          <div class="all" >
            <button class="nodesnav w-screen btnsvgserv">
              <div
                v-if="activeSection"
                ref="lottieAnimation4"
                class="pt-[4vw] lottie-container closeservpg w-[1.4vw] hover:cursor-pointer"
              ></div>
            </button>

            <div
              v-if="activeContent"
              @click="closeSection"
              :class="{
                'slide-in': activeSection,
                'slide-out': !activeSection,
              }"
            >
              <div v-if="activeContent.layout1" class="allrcont">
                <!-- Render Layout A content -->
                <div class="sevcont">
                  <div class="titcont titmb">
                    <h1 class="loctext pt-2">{{ activeContent.title }}</h1>
                  </div>

                  <div class="sevimcon">
                    <img
                      :src="
                        'https://cdn.sanity.io/images/0i1cdi6a/production/' +
                        activeContent.dimage.asset._ref.split('-')[1] +
                        '-' +
                        activeContent.dimage.asset._ref.split('-')[2] +
                        '.png?w=2000&fit=max&auto=format&dpr=2'
                      "
                      alt="Design Image"
                      class="servimg pointer-events-none"
                    />
                  </div>

                  <div class="flex justify-center pointer-events-none">
                    <p class="subtitleA">
                      {{ activeContent.dsubLayoutA }}
                    </p>
                  </div>

                  <div class="flex pl-[5vw] pb-[3vh]">
                    <Richtext
                      class="contactinner pr-[4vw] pb-0 w-[50%]"
                      :blocks="activeContent.dcontent"
                    ></Richtext>

                    <Richtext
                      class="contactinner pr-[4vw] w-[50%] pb-0"
                      :class="[
                        'contactinner',
                        { 'pt-[7vh]': !activeContent.dcontent },
                      ]"
                      :blocks="activeContent.dcontent2"
                    ></Richtext>
                  </div>

                  <div class="flex justify-end h-[4vh] overflow-hidden locdesk locmb">
                   
                    <!-- Add class like production here -->
                  
                    <div class="flex nomb pl-[5vw] pb-[3vh]">
                   
                      <Richtext
                      class="contactinner opacity-0 pr-[4vw] pb-0 w-[50%]"
                      :blocks="activeContent.dcontent"
                    ></Richtext>

                    

                    <div class="contactinner pr-[4vw] w-[50%] pb-0">
                      <h1 class="loctext">{{ activeContent.dlocationlink }}</h1>
                      <p class="loctextlink">{{ activeContent.dlocation }}</p>
                    </div>
                
                      <!-- <h1 class="loctext">Location</h1> -->
                  
                    </div>
                  </div>
                </div>
              </div>

              <div v-else-if="activeContent.layout2">
                <!-- Render Layout B content -->
                <div v-if="activeContent" class="allrcontb">
                  <div class="sevcont">
                    <div class="titcont titmb">
                      <h1 class="loctext pt-2">{{ activeContent.title }}</h1>
                    </div>

                    <div class="subtextb pointer-events-none">
                      <p class="subtitle">
                        {{ activeContent.dsubLayoutB }}
                      </p>
                    </div>

                    <div class="textaup flex pl-[5vw] pb-[3vh]">
                      <img
                        :src="
                          'https://cdn.sanity.io/images/0i1cdi6a/production/' +
                          activeContent.dimageLayoutB.asset._ref.split('-')[1] +
                          '-' +
                          activeContent.dimageLayoutB.asset._ref.split('-')[2] +
                          '.jpg?w=2000&fit=max&auto=format&dpr=2'
                        "
                        alt="Design Image Layout B"
                        class="laybimg pointer-events-none"
                      />
                      <Richtext
                        class="contactinner pr-[4vw] w-[50%] pb-0"
                        :blocks="activeContent.dcontent2b"
                      ></Richtext>
                    </div>

                    <div class="textaup nomb flex pl-[5vw] pb-[3vh] locmb">
                      <div class="mbspace w-[50vw] p-[2vw] pt-0">
                        <p class="text-[#00000000]">space</p>
                      </div>
                      <!-- Add class like production here -->
                      <div class="locationtextb w-[50vw] p-[2vw] pr-[3vw] pt-0">
                        <!-- <h1 class="loctext">Location</h1> -->
                        <h1 class="loctext">
                          {{ activeContent.dlocationlinkb }}
                        </h1>
                        <p class="loctextlink">
                          {{ activeContent.dlocationb }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";
import { groq } from "@nuxtjs/sanity";
import { mapMutations, mapState } from "vuex";
import lottie from "lottie-web";

export default {
  name: "IndexPage",

  components: {
    HeaderComponent,
  },

  data() {
    return {
      isMobile: false,
      hoveredSection: null,
      hasHash: false,
      activeSection: null, // Default is null for mobile and will be set to 'design' for desktop in mounted()
      activeContent: null,
      lottieJSON: {
        nm: "Main Scene",
        ddd: 0,
        h: 24,
        w: 24,
        meta: { g: "@lottiefiles/creator 1.30.0" },
        layers: [
          {
            ty: 4,
            nm: "plus Outlines",
            sr: 1,
            st: 0,
            op: 20,
            ip: 0,
            hd: false,
            ddd: 0,
            bm: 0,
            hasMask: false,
            ao: 0,
            ks: {
              a: { a: 0, k: [12, 12, 0] },
              s: {
                a: 1,
                k: [
                  {
                    o: { x: 0.333, y: 0 },
                    i: { x: 0.667, y: 1 },
                    s: [90, 90, 100],
                    t: 0,
                  },
                  {
                    o: { x: 0.333, y: 0 },
                    i: { x: 0.667, y: 1 },
                    s: [100, 100, 100],
                    t: 4,
                  },
                  {
                    o: { x: 0.333, y: 0 },
                    i: { x: 0.667, y: 1 },
                    s: [100, 100, 100],
                    t: 16,
                  },
                  { s: [90, 90, 100], t: 19 },
                ],
              },
              sk: { a: 0, k: 0 },
              p: { a: 0, k: [12, 12, 0] },
              r: {
                a: 1,
                k: [
                  {
                    o: { x: 0.333, y: 0 },
                    i: { x: 0.667, y: 1 },
                    s: [0],
                    t: 0,
                  },
                  {
                    o: { x: 0.333, y: 0 },
                    i: { x: 0.667, y: 1 },
                    s: [0],
                    t: 4,
                  },
                  {
                    o: { x: 0.333, y: 0 },
                    i: { x: 0.667, y: 1 },
                    s: [90],
                    t: 16,
                  },
                  { s: [90], t: 19 },
                ],
              },
              sa: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
            shapes: [
              {
                ty: "gr",
                bm: 0,
                hd: false,
                mn: "ADBE Vector Group",
                nm: "Group 1",
                ix: 1,
                cix: 2,
                np: 2,
                it: [
                  {
                    ty: "sh",
                    bm: 0,
                    hd: false,
                    mn: "ADBE Vector Shape - Group",
                    nm: "Path 1",
                    ix: 1,
                    d: 1,
                    ks: {
                      a: 0,
                      k: {
                        c: true,
                        i: [
                          [0, -0.423],
                          [0.423, 0],
                          [0, 0],
                          [0, 0],
                          [0.425, 0],
                          [0, 0.423],
                          [0, 0],
                          [0, 0],
                          [0, 0.425],
                          [-0.425, 0],
                          [0, 0],
                          [0, 0],
                          [-0.425, 0],
                          [0, -0.425],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0.423],
                          [0, 0],
                          [0, 0],
                          [0, 0.425],
                          [-0.425, 0],
                          [0, 0],
                          [0, 0],
                          [-0.425, 0],
                          [0, -0.423],
                          [0, 0],
                          [0, 0],
                          [0, -0.425],
                          [0.425, 0],
                          [0, 0],
                          [0, 0],
                          [0.423, 0],
                        ],
                        v: [
                          [10, 0],
                          [9.231, 0.769],
                          [0.769, 0.769],
                          [0.769, 9.231],
                          [0, 10],
                          [-0.769, 9.231],
                          [-0.769, 0.769],
                          [-9.231, 0.769],
                          [-10, 0],
                          [-9.231, -0.769],
                          [-0.769, -0.769],
                          [-0.769, -9.231],
                          [0, -10],
                          [0.769, -9.231],
                          [0.769, -0.769],
                          [9.231, -0.769],
                        ],
                      },
                    },
                  },
                  {
                    ty: "fl",
                    bm: 0,
                    hd: false,
                    mn: "ADBE Vector Graphic - Fill",
                    nm: "Fill 1",
                    c: { a: 0, k: [0, 0, 0] },
                    r: 1,
                    o: { a: 0, k: 100 },
                  },
                  {
                    ty: "tr",
                    a: { a: 0, k: [0, 0] },
                    s: { a: 0, k: [100, 100] },
                    sk: { a: 0, k: 0 },
                    p: { a: 0, k: [12, 12] },
                    r: { a: 0, k: 0 },
                    sa: { a: 0, k: 0 },
                    o: { a: 0, k: 100 },
                  },
                ],
              },
            ],
            ind: 1,
          },
        ],
        v: "5.7.0",
        fr: 20,
        op: 20,
        ip: 0,
        assets: [],
      },
    };
  },

  mounted() {
    // Log the container reference to check if it's correctly set
    console.log("Lottie Container Reference:", this.$refs.lottieAnimation4);
    console.log("Lottie animation initialized:", this.lottieInstance);

    this.lottieInstance = lottie.loadAnimation({
      container: this.$refs.lottieAnimation4, // the DOM element
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: this.lottieJSON,
    });

    if (this.lottieInstance) {
      console.log("Lottie instance created:", this.lottieInstance);
    } else {
      console.error("Failed to initialize Lottie animation.");
    }

    // Listen for the 'DOMLoaded' event
    this.lottieInstance.addEventListener("DOMLoaded", () => {
      console.log("Lottie animation SVG has been loaded successfully!");
    });

    this.checkViewport(); // Set the initial value based on viewport
    window.addEventListener("resize", this.checkViewport); // Add event listener for resizing

    this.checkHash();
    window.addEventListener("hashchange", this.checkHash); // Listen for changes to the URL

    // Set hoveredSection to 'design' if not on mobile
    if (!this.isMobile) {
      this.hoveredSection = "design";
      this.activeSection = "design"; // Set default active section to 'design' on desktop
      this.setActiveSection("design"); // Fetch content for the 'design' section
    }
  },

  directives: {
    clickOutside: {
      bind(el, binding, vnode) {
        // Only bind the event if the viewport width is for mobile devices
        if (window.innerWidth <= 768) {
          // Adjust this width as needed
          el.clickOutsideEvent = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
              vnode.context[binding.expression](event);
            }
          };
          document.body.addEventListener("click", el.clickOutsideEvent);
        }
      },
      unbind(el) {
        if (el.clickOutsideEvent) {
          document.body.removeEventListener("click", el.clickOutsideEvent);
        }
      },
    },
  },

  beforeDestroy() {
    window.removeEventListener("hashchange", this.checkHash);
    window.removeEventListener("resize", this.checkViewport); // Clean up event listener
  },

  methods: {
    beforeEnter() {
      this.$nextTick(() => {
        if (this.$refs.lottieAnimation4) {
          this.lottieInstance = lottie.loadAnimation({
            container: this.$refs.lottieAnimation4,
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: "/animations/plus.json",
          });
        }
      });
    },

    checkHash() {
      // Check if the URL contains a hash
      this.hasHash = window.location.hash !== "";
    },

    toggleMenu() {
      this.$store.commit("toggleMenu");
    },

    closeSection() {
      const rightContent = document.querySelector(".headbarc");
      this.lottieInstance.playSegments([11, 20], true); // Close animation
      this.isOpen = false;

      // Set the activeSection depending on mobile state
      if (!this.isMobile) {
        this.activeSection = "design"; // Ensure default is design for desktop
      } else {
        this.activeSection = null;
      }
    },

    checkViewport() {
      this.isMobile = window.innerWidth <= 768; // Set isMobile based on viewport width
      if (this.isMobile) {
        this.activeSection = null; // Reset activeSection on mobile
      } else {
        this.activeSection = "design"; // Set default section for desktop
      }
    },

    async setActiveSection(sectionSlug) {
      if (this.isMobile) {
        this.activeSection = sectionSlug;
        this.activeContent = await this.fetchContent(sectionSlug); // Fetch the content based on the section slug
        console.log(this.activeContent); // Log the content to check if it has the expected values
      } else {
        if (this.activeSection === sectionSlug) {
          this.activeSection = "design"; // Reset to 'design' if same section clicked again
          this.activeContent = await this.fetchContent("design");
        } else {
          this.activeSection = sectionSlug;
          this.activeContent = await this.fetchContent(sectionSlug);
          console.log(this.activeContent); // Log the content to check
        }
      }
    },

    async fetchContent(slug) {
      // Fetch content using the slug from Sanity
      const query = `*[_type == "services" && slug.current == $slug][0]`;
      return await this.$sanity.fetch(query, { slug });
    },

    handleClick() {
      if (this.isMobile && this.activeSection) {
        this.closeSection(); // Close section on mobile click
      }
    },

    toggleActiveSection() {
      // Toggle between open and closed states
      this.activeSection = !this.activeSection;
    },
  },

  async asyncData({ params, $sanity, store }) {
    const query = groq`*[_type == "services"]{ ...,
      _key,
    title,
    layout1,
    layout2,
    slug,
    dcontent,
    dcontentb,
    dcontent2,
    dcontent2b,
    dlocation,
    dlocationb,
    dlocationlink,
    dlocationlinkb,
    dsubLayoutA,
    dsubLayoutB,
    "dimages" : { "imageUrl": dimage.asset->url, },
    "designImageLayoutAUrl": dimage.asset->url,
    "designImageLayoutBUrl": dimageLayoutB.asset->url,
  }| order(_updatedAt desc)[0]`;

    const services = await $sanity.fetch(query);

    return { services };
  },

  computed: {
    ...mapState(["gridpub"]),
    isMenuOpen() {
      return this.$store.getters.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.sheadera {
  /* display: unset;  */
  opacity: 1;
}

.sheader {
  /* z-index: 1000 !important; */
  /* display: none;  */
  opacity: 0;
}

.locationtext {
  /* padding-top: 3vh; */
  /* text-align: center;
  align-items: center;
  align-items: flex-start;
  flex-direction: column;
  display: flex; */
}

.locationtext {
  /* padding-top: 3vh; */
  text-align: center;
    align-items: center;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 77.1vw;
    width: max-content;
    padding-left: 0.85vw;
}

.locationtextb {
  /* padding-top: 3vh; */
  text-align: center;
    align-items: center;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 78.5vw;
    width: max-content;
    padding-left: 0.85vw;
}



.locdesk{
  height: 4vh;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 52vw;
    padding-bottom: 5vw;
}

.texta {
  padding-top: 4vh;
  font-size: 1.95vh;
  padding-left: 3vw;
}

.loctextlink a {
  color: black;
}

.loctext {
  font-size: smaller;
  font-size: 0.9vw;
  /* font-family: "GT-Bold"; */
  font-family: "MinionPro-Regular";
  font-family: "NHaasGrotesk";
  text-transform: uppercase;
}

.loctextlink {
  font-size: 1.1vw;
  text-transform: none;
  text-align: left;
  -webkit-text-decoration: underline;
  text-decoration: underline;
  font-family: "MinionPro-Regular";
  font-family: "GT-Sectra-Book-Italic";
}



.allrcont {
  display: flex;
  top: 2vh;
  top: 7vh;
  top: 9vh;
  position: relative;
  width: 100%;
  /* height: 95%; */
  justify-content: center;
  align-items: flex-end;
  padding: 2rem;
  overflow-y: hidden;
  pointer-events: none;
}

.allrcontb {
  display: flex;
  top: 2vh;
  top: 7vh;
  top: 9vh;
  position: relative;
  width: 100%;
  /* height: 95%; */
  justify-content: center;
  align-items: flex-end;
  padding: 2rem;
  overflow-y: hidden;
  pointer-events: none;
}

.sevcont {
  bottom: 0;
  left: 0;
  width: 49vw;
  z-index: 0;
}

.sevimcon {
  height: 31.6vh;
  display: flex;
  width: 100%;
  padding-bottom: 2vw;
  justify-content: center;
}

.sevimconA {
  height: 31.6vh;
  display: flex;
  width: 100%;
  padding-bottom: 2vw;
  justify-content: center;
}

.sevimconB {
  height: 17.6vh;
  display: flex;
  width: 100%;
  padding-bottom: 2vw;
  justify-content: center;
}

.servimg {
  width: 100%;
  object-fit: cover;
  width: auto;
  height: auto;
  -o-object-fit: cover;
  object-fit: contain;
  border-radius: 10px;
  position: relative;
  z-index: 1;
}

.laybimsize {
  width: 100%;
  height: 18.6vh;
}

.laybimsizein {
  /* width: 26vw; */
  display: flex;
  align-items: center;
}

.subtitle {
  font-size: 1.3vw;
  text-align: center;
  text-transform: uppercase;
  line-height: normal;
  color: #1f1f1f;
  font-family: "RomainHeadlineTrial";
  width: 25vw;
}

.subtitleA {
  font-size: 1.3vw;
  text-align: center;
  text-transform: uppercase;
  line-height: normal;
  color: #1f1f1f;
  font-family: "RomainHeadlineTrial";
  width: 25vw;
  position: relative;
  top: -3vw;
}

.subtextb {
  display: flex;
  justify-content: center;
  height: 17.6vh;
}

.subtextA {
  position: relative;
  top: -1vw;
}

.subtcont {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.laybimg {
  padding: 2vw;
  /* padding-left: 0; */
  margin-right: 0.5vw;
  /* padding-top: 0vh; */
  top: -8vh;
  position: relative;
  padding: 0 2vw 2vw 0;
  width: 22.5vw;
  -o-object-fit: cover;
  object-fit: cover;
}

.pte {
  top: -8vh;
  position: relative;
}

.contactinner div p {
  padding-bottom: 1vh;
}

.contactinner {
  font-size: 1.11vw;
  /* font-size: 1.4vw; */
  line-height: normal;
  /* top: 3vw; */
  position: relative;
}

.link-container {
  margin-top: 2rem;
  overflow: hidden;
}

.link-container ul {
  list-style: none;
  padding: 0;
}

.link-container li {
  text-align: center;
  /* padding: 1.5rem 0; */
  padding: 0.2rem 0;
  /* border-bottom: black;
    border-bottom-width: 2px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.link-container li:hover {
  /* background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: initial;
  background-repeat: no-repeat; */
  transition-duration: 0.5s;
}

.svgleft {
  height: 7vh !important;
  display: inline-flex !important;
  align-items: center !important;
}

.link-container a {
  text-decoration: none;
  font-size: 9.2vw;
  font-size: 5vh;
  /* font-size: 4vw; */
  color: black;
  font-weight: 100;
  padding-left: 2vw;
  height: -moz-max-content;
  height: max-content;
  display: inline-block;
  padding-right: 2vw;
  transition-duration: 0.5s;
}

/* Active link style */
.link-container a.active {
  color: #3333331f; /* Faded color for the active link */
  opacity: 0.6; /* Faded look */
  color: rgb(28 28 28 / 70%);
  opacity: 0.6;
  pointer-events: none; /* Prevent clicking on the already active link */
}

.link-container a:hover {
  text-decoration: none;
  color: #3333331f;
  /* Optional hover effect */
  transition-duration: 0.5s;
}

.link-container {
  border: 1px solid rgba(0, 0, 0, 0.257);
  margin: auto;
  font-family: "RomainHeadlineTrial";

  /* background-color: rgba(255, 255, 255, 0.14);
    background-color: rgb(255 255 255 / 25%); */
  border: 1px solid rgba(0, 0, 0, 0.257);
  border-radius: 590px 590px 2px 2px;
  margin: auto;
  font-family: "RomainHeadlineTrial";
  background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: initial;
  background-repeat: no-repeat;
  overflow: hidden;
  /* width: 24vw; */
}

.toplink {
  color: #33333300 !important;
}

.mobilemenu {
  /* height: 100vh; */
  transition: max-height 0.5s ease-in-out;
  padding-top: 3vh;
}

a {
  text-decoration: none;
}

/* ------------------ */
.headingspagesb {
  font-family: "GT-Bold";
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

/* Flexbox layout for the image gridpub */
.image-gridpub {
  /* display: flex;
  flex-wrap: wrap;
  gap: 20px;  */
  /* Adjust the gap between images */
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
  background-image: url("./static/background.jpg");
  background-size: initial;
  background-position: unset;
  background-repeat: no-repeat;
  height: 100vh;
  overflow-y: scroll;
}

.right-content {
  background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  /* background-size: auto auto; */
  /* background-size: initial; */
  background-repeat: no-repeat;
  height: 100vh;
  background-position: 0 0;
  background-position: initial;
  /* pointer-events: none; */
}

.titmb {
  display: none;
}

@media only screen and (max-width: 768px) {


  .subtextA {
    position: relative;
    top: -3vw;
    top: -7vw;
    padding-bottom: 2vw;
  }

  .subtitle {
    font-size: 3vw;
    text-align: center;
    text-transform: uppercase;
    line-height: normal;
    color: #1f1f1f;
    font-family: "RomainHeadlineTrial";
    width: 53vw;
    display: none;
  }

  .subtitleA {
    font-size: 3vw;
    text-align: center;
    text-transform: uppercase;
    line-height: normal;
    color: #1f1f1f;
    font-family: "RomainHeadlineTrial";
    width: 53vw;
    display: none;
  }

  .subtextb {
    display: flex;
    justify-content: center;
    display: none;
  }

  .laybimg {
    height: 32vh;
    top: 0vh;
    width: auto;

    width: 50vw;
    object-fit: cover;
  }

  .laybimsizein {
    width: 54vw;
  }

  .laybimsize {
    position: relative !important;
    top: 0vh !important;
    height: 24.6vw !important;
  }

  .link-container li:hover {
    /* background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: initial;
  background-repeat: no-repeat;
  transition-duration: 0.5s; */
    background-image: none;
  }

  .link-container a:hover {
    text-decoration: none;
    color: #333333;
    /* Optional hover effect */
    transition-duration: 0.5s;
  }

  .container {
    display: flex;
  }

  .right-content {
    position: absolute;
    bottom: -100%; /* Start hidden at the bottom */
    right: 0;
    width: 100%;
    transition: bottom 0.5s ease-in-out;

    /* display: none; */
  }

  .right-content {
    background-size: cover;
    background-image: none;
    overflow-y: scroll;
    height: 65vh;
    height: max-content;
    height: 100vh;
    z-index: 90;
    padding: 0;
  }

  .bgmobile {
    overflow: hidden;
  }

  /* Slide-in effect when the class is active */
  .right-content.slide-in {
    bottom: 0; /* Slide into view */
    display: flex;
    align-items: flex-end;
  }

  .slide-in {
    bottom: 0;
  }
  .slide-out {
    transform: translateY(-100%);
    /* bottom: -100vh; */
  }

  .right-content.slide-out {
    max-height: 0vh;
    transform: translateY(-100%);
    transition: max-height 0.5s ease-in-out;
  }

  .right-content.slide-in {
    max-height: 100vh;
    /* Expand to full height */
  }

  .right-content.slide-out {
    /* Collapse to zero height */
    /* bottom: -100vh; */
    transition: max-height 0.5s ease-in-out;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }

  .slide-enter-to,
  .slide-leave {
    transform: translateY(0);
    opacity: 1;
  }

  .bgmobile {
    flex-direction: column; /* Stacks the two sides vertically on small screens */
  }

  .titcont {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  /* .left-content,
  .right-content {
    height: auto;
  } */
  .right-content {
    max-height: 100vh;
    /* padding: 0.5rem; */
  }

  .mobilemenu {
    margin-top: 0;
  }

  .allrcont {
    align-items: flex-start;
    padding: 0rem;
    top: 0vh;

    height: max-content;
    /* height: 52.2vh; */
    /* background-image: url(/_nuxt/static/LeftBG.png); */
    background-image: url("./static/LeftBG.png");
    background-size: cover;
    background-position: center;
    /* background-size: auto auto; */
    /* background-size: initial; */
    background-repeat: no-repeat;
    /* height: 100vh; */
    background-position: 0 0;
    background-position: initial;
    /* border-top: 0.05vw solid black; */
    box-shadow: none;
  }

  .sevcont {
    width: 100%;
    top: 0;
    /* display: inline-flex; */
    position: relative;
    padding-bottom: 2vw;
  }

  .texta {
    padding-bottom: 0vh;
    padding-top: 0vh;
    /* padding-top: 2.5vh; */
  }

  .sevimcon {
    height: 13.6vh;
    /* height: max-content; */
    padding-bottom: 0vw;
    /* height: 35.6vh; */
    position: relative;
    top: -2vh;
  }

  .sevimconA {
    height: 13.6vh;
    /* height: max-content; */
    padding-bottom: 0vw;
    /* height: 35.6vh; */
    position: relative;
    top: -2vh;
  }

  .sevimconB {
    height: 7.6vh;
    /* height: max-content; */
    padding-bottom: 0vw;
    /* height: 35.6vh; */
    position: relative;
    top: -2vh;
    padding-top: 1vw;
  }

  .textaup {
    position: relative;
    top: -2vh;
    padding-top: 8vw;
  }

  .allrcontb .sevimcon {
    height: 14.6vh;
    height: max-content;
    padding-bottom: 0vw;
    /* height: 35.6vh; */
    /* position: absolute; */
    /* top: 2vh; */
  }

  .allrcont {
    min-height: max-content;
    /* height: 54.2vh; */
    padding: 0.5rem;
    /* height: max-content; */
  }
  .allrcontb {
    padding: 0rem;
    top: 0vh;

    height: max-content;
    /* height: 52.2vh; */
    /* background-image: url(/_nuxt/static/LeftBG.png); */
    background-image: url("./static/LeftBG.png");
    background-size: cover;
    background-position: center;
    /* background-size: auto auto; */
    /* background-size: initial; */
    background-repeat: no-repeat;
    /* height: 100vh; */
    background-position: 0 0;
    background-position: initial;
    /* min-height: max-content; */
    height: 54.2vh;
    padding: 0.5rem;
    height: max-content;
    /* height: 76.2vh; */
  }

  .contactinner {
    font-size: 3.1vw;
    top: 0vw;
    position: relative;
  }

  .loctext {
    font-size: 3vw;
    font-size: 5vw;
    font-family: "GT-Bold";
  }

  .loctextlink {
    font-size: 3vw;
  }

  .mbspace {
    width: 30vw;
    display: none;
  }

  .locmb {
    justify-content: start;
  }

  /* .titmb{
      display: contents;
    } */
  .locationtext {
    width: 100%;
    position: relative;
    bottom: auto;
    left: unset;
    display: none;
    padding-left: 0;
  }

  .right-content {
    /* display: none; */
    background-size: cover;
  }

  .left-content {
    flex-direction: column;
    padding: 0 !important;
    padding-top: 6vh !important;
    background-size: auto;
    background-image: url("./static/background.jpg");
  }

  .link-container a {
    text-decoration: none;
    font-size: 9.2vw;
    font-size: 3.7vh;
    color: black;
    font-weight: 100;
    padding-left: 6vw;
    padding-right: 6vw;
    transition-duration: 0.5s;
  }

  /* .allrcont {
    height: 53vh;
}

.allrcontb {
  height: 64vh;
} */
}
</style>
