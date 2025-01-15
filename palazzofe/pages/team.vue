<template>
  <div>
    <!-- <HeaderComponent /> -->
    <div class="headera content flex w-full justify-between">
      <h1 class="navmb">
        <HeaderComponent />
      </h1>
      <p class="navmbno yeart text-center text-4xl uppercase">Team</p>
      <p class="navmbno yeart w-[5vw] text-center text-4xl uppercase"></p>
      <p class="navmbno headingspages text-center text-4xl uppercase">
        palazzo eventi
      </p>
      <h1 class="navmbno w-[2vw]"></h1>
    </div>


    <div class="bgmobile relative min-h-screen flex">
      <!-- Left Scrollable Content -->
      <div class="left-content flex-1 overflow-y-scroll p-8">
        <div class="content">
          <div v-if="gridteam.grid7" class="">
            <Gridteam class="" :items="gridteam.grid7" size="small"></Gridteam>
          </div> 
          <button
          class="bttn"
        >
          Play Film
        </button>
        </div>
      </div>
 
 
      <!-- Right Static Content -->
      <div class="right-content overflow-y-scroll flex-1 p-8">
        <!-- <div class="static-box w-full h-full">
        </div> -->
        <!-- <div v-if="gridd.grid2" class="">
          <Gridevents class="" :items="gridd.grid2" size="small"></Gridevents>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";
import { mapState } from "vuex";
import { groq } from "@nuxtjs/sanity";

export default {
  name: "IndexPage",

  async asyncData({ params, $sanity, store }) {
    const query = groq`*[_type == "team"]{
    title,
    titlec,
  } | order(_updatedAt desc)[0]`;

    const about = await $sanity.fetch(query);

    return { about }; 
  },

  components: {
    HeaderComponent,
  },

  computed: {
    ...mapState(["gridteam"]),
  },
};
</script>

<style scoped>
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

/* Flexbox layout for the image grid */
.image-grid {
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
  background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  overflow-y: scroll;
}

.right-content {
  background-image: url("./static/BLUEbg.png");
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

.bttn {
  position: fixed;
    background-color: white;
    font-family: "GT-Sectra-Book", sans-serif;
    transition: background-color 0.3s ease;
    position: absolute;
    border-top: 0.05vw solid black;
    /* border-top: 0.05vw solid black;
    border: 0.05vw solid black; */
    border-radius: 0%;
    background-image: url("./static/LeftBG.png");
    background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat;
    padding: 1rem;
    padding: 0.5vw;
    cursor: pointer;
    transition: background-color 0.3s;
    position: fixed;
    bottom: 0;
    width: 50%;
    text-transform: uppercase;
    /* font-family: "GT-Sectra-Book"; */
    /* font-family: "NHaas" !important; */
    transition: color 0.8s ease;
    font-size: 1vw;
    left: 0;
}

@media only screen and (max-width: 768px) {
  .bttn {
    position: absolute;
    border-radius: 0%;
    background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat;
    padding: 1rem;
    padding: 2.5vw;
    cursor: pointer;
    transition: background-color 0.3s;
    position: fixed;
    bottom: 2.5vh;
    /* width: 100%; */
    width: 98%;
    text-transform: uppercase;
    /* font-family: "GT-Sectra-Book"; */
    /* font-family: "NHaas" !important; */
    transition: color 0.8s ease;
    font-size: 3vw;
}

  .bgmobile {
    flex-direction: column; /* Stacks the two sides vertically on small screens */
  }

  /* .left-content,
  .right-content {
    height: auto;
  } */

  .right-content {
    display: none;
  }

  .left-content {
    padding: 0 !important;
    padding-top: 4vh !important;
    padding-top: 6vh !important;
    background-image: url("./static/LeftBG.png");
  }
}
</style>