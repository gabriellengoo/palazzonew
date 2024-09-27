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
        class="left-content flex-1 flex items-center justify-center overflow-y-scroll p-8"
      >
      <div class="nodes">
          <!-- <p>d</p> -->
          <p
          class="headingspages text-center text-4xl  uppercase "
        >
        Services
        </p>
        </div>
        <transition name="slide-down" @after-enter="fadeInAllImg">
          <div
            class="mobilemenu relative my-auto z-50 flex flex-col justify-center items-center"
          >
            <div class="  ">
              <nav class="link-container uppercase">
                <ul>
                  <li class="toplink pointer-events-none">
                    <a class="toplink" href="#">space</a>
                  </li>
                  <!-- <li><a href=""><SvgClose class="headbar w-[1.4vw] hover:cursor-pointer" @click="setActiveSection('')"  /></a> -->
                  <!-- </li> -->
                  <li><a @click="setActiveSection('design')" href="#">Design</a></li>
              <li><a @click="setActiveSection('location')" href="#">Location</a></li>
              <li><a @click="setActiveSection('production')" href="#">Production</a></li>
                  <li><a href="#concirerge">concirerge</a></li>
                  <li><a href="#activity">activity</a></li>
                  <li><a href="#celebrities">Celebrities</a></li>
                  <li><a href="#music">music</a></li>
                  <li><a href="#products">products</a></li>
                  <li><a href="#more">more</a></li>
                </ul>
              </nav>
            </div>

            <!-- <div class="allimg relative w-[100vw] h-[100vh] z-50">
        </div> -->
          </div>
        </transition>
      </div>

      <!-- Right Static Content -->
      <div :class="{ 'slide-in': activeSection }" class="right-content overflow-y-scroll flex-1">
        <!-- design -->
        <div class="allrcont" v-if="services && activeSection === 'design'">
          <div class="sevcont">

            <div class="titcont titmb">
              <a href=""><SvgClose class="headbar w-[1.4vw] hover:cursor-pointer" @click="setActiveSection('')"  /></a> 
              <h1 class="loctext pt-2">Design</h1>
            </div>
            <div class="sevimcon">
              <img
                :src="services.designContent.designImageUrl"
                alt="Design Image"
                class="servimg"
              />
            </div>
            <div class="flex texta pb-[3vh]">
              <Richtext
                      class="contactinner pr-[1vw] pb-0  w-[50%]"
                      :blocks="services.designContent.dcontent"
                    ></Richtext>
                    <Richtext
                      class="contactinner pr-[3vw] w-[50%] pb-0"
                      :blocks="services.designContent.dcontent2"
                    ></Richtext>
            </div>

            <div class="flex justify-end locmb">
              <div class="mbspace w-[50vw] p-[2vw]  pt-0"><p class=" text-[#00000000]">space</p></div>
              <div class="locationtext w-[50vw] p-[2vw] pr-[3vw] pt-0">
              <h1 class="loctext">Location</h1>
            <a class="loctextlink" :href="services.designContent.dlocationlink">{{ services.designContent.dlocation }}</a>
            </div>

            </div>
         
          </div>
        </div>


        <!-- loc -->
        <div class="allrcont" v-if="services && activeSection === 'location'">
          <div class="sevcont">
            <div class="titcont titmb">
              <a href=""><SvgClose class="headbar w-[1.4vw] hover:cursor-pointer" @click="setActiveSection('')"  /></a>               <h1 class="loctext pt-2">Location</h1>
            </div>
            <div class="sevimcon">
              <img
                :src="services.locationContent.locationImageUrl"
                alt="Design Image"
                class="servimg"
              />
            </div>
            <div class="flex texta pb-[3vh]">
              <Richtext
                      class="contactinner pr-[1vw] pb-0  w-[50%]"
                      :blocks="services.locationContent.lcontent"
                    ></Richtext>
                    <Richtext
                      class="contactinner pr-[2vw] w-[50%] pb-0"
                      :blocks="services.locationContent.lcontent2"
                    ></Richtext>
            </div>

            <div class="locmb flex justify-end ">
              <div class="mbspace w-[50vw] p-[2vw]  pt-0"><p class=" text-[#00000000]">space</p></div>
              <div class="locationtext w-[50vw] p-[2vw] pr-[3vw] pt-0">
              <h1 class="loctext">Location</h1>
            <a class="loctextlink" :href="services.locationContent.llocationlink">{{ services.designContent.dlocation }}</a>
            </div>

            </div>
         
          </div>
        </div>

        <!-- prod -->
        <div class="allrcont" v-if="services && activeSection === 'production'">
          <div class="sevcont">
            <div class="titcont titmb">
              <a href=""><SvgClose class="headbar w-[1.4vw] hover:cursor-pointer" @click="setActiveSection('')"  /></a>               <h1 class="loctext pt-2">Production</h1>
            </div>
            <div class="sevimcon">
              <img
                :src="services.productionContent.productionImageUrl"
                alt="Design Image"
                class="servimg"
              />
            </div>
            <div class="flex texta pb-[3vh]">
              <Richtext
                      class="contactinner pr-[1vw] pb-0  w-[50%]"
                      :blocks="services.productionContent.prcontent"
                    ></Richtext>
                    <Richtext
                      class="contactinner pr-[2vw] w-[50%] pb-0"
                      :blocks="services.productionContent.prcontent2"
                    ></Richtext>
            </div>

            <div class="flex justify-end locmb">
              <div class="mbspace w-[50vw] p-[2vw]  pt-0"><p class=" text-[#00000000]">space</p></div>
              <div class="locationtext w-[50vw] p-[2vw] pr-[3vw] pt-0">
              <h1 class="loctext">Location</h1>
            <a class="loctextlink" :href="services.productionContent.prlocationlink">{{ services.productionContent.prlocation }}</a>
            </div>

            </div>
         
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";
import { groq } from "@nuxtjs/sanity";
import { mapMutations, mapState } from "vuex";

export default {
  name: "IndexPage",

  components: {
    HeaderComponent,
  },

  data() {
    return {
      activeSection: "design", 
      // Set the default section, e.g., 'design'
      // activeSection: false, 
      // Track the active section state
    };
  },

  methods: {
    setActiveSection(section) {
      this.activeSection = section;
    },

    closeSection() {
      this.activeSection = false;  // Or any logic to close/reset the section
},

toggleActiveSection() {
    this.activeSection = !this.activeSection; // Toggle the class on click
  }
  },

  async asyncData({ params, $sanity, store }) {
    const query = groq`*[_type == "services"]{
  title,
  "designContent": {
    dcontent,
    dcontent2,
    dlocation,
    dlocationlink,
    "designImageUrl": dimage.asset->url
  },
  "locationContent": {
    lcontent,
    lcontent2,
    llocation,
    llocationlink,
    "locationImageUrl": limage.asset->url
  },
  "productionContent": {
    prcontent,
    prcontent2,
    prlocation,
    prlocationlink,
    "productionImageUrl": primage.asset->url
  },
    }
     | order(_updatedAt desc)[0]`;

    const services = await $sanity.fetch(query);

    //    // Debugging: Log the fetched data
    //    console.log('Fetched meta:', project.meta);
    // console.log('Fetched metaemails:', project.metaemails);

    // // Commit meta and metaemails to the Vuex store
    // store.commit('setMeta', project.meta);
    // store.commit('setMetaEmails', project.metaemails);

    return { services };
  },

  computed: {
    ...mapState(["gridpub"]),
  },
};
</script>

<style scoped>

.locationtext{
  /* padding-top: 3vh; */
  text-align: center;
  align-items: center;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
}

.texta{
  /* padding-top: 8vh; */
  font-size: 1.95vh;
}

.loctextlink a{
  color: black;
}

.loctext{
  font-size: smaller;
  font-size: 1vw;
        /* font-family: "GT-Bold"; */
        font-family: 'MinionPro-Regular';
        text-transform: uppercase;
}

.loctextlink{
  font-size: smaller;
  font-size: 1vw;
  font-style: italic;
  text-transform: none;
  text-align: left;
  text-decoration: underline;
  font-family: 'MinionPro-Regular';
  -webkit-text-decoration: underline;
}


.allrcont{
  display: flex;
    top: 2vh;
    top: 7vh;
    position: relative;
    width: 100%;
    /* height: 95%; */
    justify-content: center;
    align-items: flex-end;
    padding: 2rem;
    overflow-y: hidden;
}

.sevcont{
    bottom: 0;
    left: 0;
    width: 49vw;
    z-index: 0;
}

 .sevimcon{
  height: 31.6vh;
    display: flex;
    width: 100%;
    justify-content: center;
 }

.servimg{
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

.contactinner div p{
padding-bottom: 1vh;
}

.contactinner{
  font-size: 1.1vw;
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

.link-container a {
  text-decoration: none;
  font-size: 9.2vw;
  font-size: 5vh;
  /* font-size: 4vw; */
  color: black;
  font-weight: 100;
  padding-left: 4vw;
  padding-right: 4vw;
  transition-duration: .5s;
}

.link-container a:hover {
  text-decoration: none;
  color: #3333333c; /* Optional hover effect */
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
  background-image: url(/_nuxt/static/background.jpg);
  background-size: initial;
  background-position: unset;
  background-repeat: no-repeat;
  height: 100vh;
  overflow-y: scroll;
}

.right-content {
  background-image: url(/_nuxt/static/LeftBG.png);
  background-size: cover;
  background-position: center;
  /* background-size: auto auto; */
  /* background-size: initial; */
  background-repeat: no-repeat;
  height: 100vh;
  background-position: 0 0;
  background-position: initial;
}


.titmb{
      display: none;
    }


@media only screen and (max-width: 768px) {

  .container {
  display: flex;
}

.right-content {
    position: absolute;
    bottom: -100%; /* Start hidden at the bottom */
    right: 0;
    width: 100%;
    transition: bottom 0.5s ease-in-out;
  }

  /* Slide-in effect when the class is active */
  .right-content.slide-in {
    bottom: 0; /* Slide into view */
  }


  .bgmobile {
    flex-direction: column; /* Stacks the two sides vertically on small screens */
  }
  
  .titcont{
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
  .right-content{
    padding: 0.5rem;

  }

  .mobilemenu{
margin-top: 0;
  }

  .allrcont {
    padding: 0rem;
    top: 0vh;
}

.sevcont{
  width: 100%;
  top: 0;
    /* display: inline-flex; */
    position: absolute;
}

.texta{
  padding-bottom: 0vh;
  padding-top: 8vh;
}

.sevimcon {
    height: 14.6vh;
    position: absolute;
    top: 2vh;
}

.contactinner {
    font-size: 3.1vw;
}

.loctext {
    font-size: 3vw;
    font-family: "GT-Bold";
}


.loctextlink{
  font-size: 3vw;
}

.mbspace{
  width: 30vw;
  display:none;
}

  .right-content {
    display: flex;
        background-size: cover;
        overflow-y: scroll;
        height: 65vh;
        z-index: 90;
    }

    .locmb{
justify-content: start;
    }

    /* .titmb{
      display: contents;
    } */
    .locationtext{
      width: 100%;
    }

  .right-content {
    /* display: none; */
    background-size: cover;
  }

  .left-content {
    flex-direction: column;
    padding: 0 !important;
    padding-top: 4vh !important;
    background-size: auto;
    background-image: url("./static/background.jpg");
  }
}
</style>
