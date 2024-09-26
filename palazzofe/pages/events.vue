<template>
  <div>
    <!-- <HeaderComponent /> -->
    <div class="headera content flex w-full justify-between">
      <h1 class="navmb">
        <HeaderComponent />
      </h1>
      <p class="navmbno yeart text-center text-4xl uppercase">Events</p>
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
          <div v-if="grid.grid2" class="">
            <Gridevents class="" :items="grid.grid2" size="small"></Gridevents>
          </div>
        </div>
      </div>

      <div
        class="mbhead absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10] pointer-events-none"
      >
        <img class="w-[30vw]" src="/M.png" />
      </div>

      <!-- Right Static Content -->
      <div class="right-content overflow-y-scroll flex-1 p-8">
        <!-- <div class="static-box w-full h-full">
        </div> -->
        <div v-if="grid.grid3" class="">
          <Gridevents2 class="" :items="grid.grid3" size="small"></Gridevents2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";
import { mapState } from "vuex";

export default {
  name: "IndexPage",

  components: {
    HeaderComponent,
  },

  computed: {
    ...mapState(["grid"]),
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

@media only screen and (max-width: 768px) {
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
    background-image: url("./static/BLUEbg.png");
  }
}
</style>
