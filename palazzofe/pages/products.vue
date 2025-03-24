<template>
  <div>

    <!-- <HeaderComponent /> -->
    <div class="headera content flex w-full justify-between">
      <h1 class="navmb">
        <HeaderComponent />
      </h1>
      <p class="navmbno yeartn text-center text-4xl  uppercase ">
        exclusivity
      </p>
      <p
        class="navmbno yeart w-[5vw] text-center text-4xl  uppercase "
      ></p>
      <p class="navmbno headingspages text-center text-4xl uppercase">
        palazzo eventi
      </p>
      <h1 class="navmbno w-[2vw]">
    
      </h1>
    </div>
 
    <div class="bgmobile relative min-h-screen flex">
      <!-- Left Scrollable Content -->
      <div class="left-content flex-1 overflow-y-scroll p-8">
        <div class="content gridcontent ">
      

          <div v-if="gridprod.grid8" class="">
            <Gridprod class="" :items="gridprod.grid8" size="small"></Gridprod>
          </div>
  
        </div>
      </div>


      <!-- Right Static Content -->
      <div class="right-content nomb overflow-hidden flex-1 p-8 flex justify-center items-center">
      
      
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";
import { mapState } from "vuex";
import { groq } from '@nuxtjs/sanity'

export default {
  name: "IndexPage",

  components: {
    HeaderComponent,
  },

  data() {
    return {
      isIframeOpen: false,
      dragData: {
        isDragging: false,
        offsetX: 0,
        offsetY: 0,
      },
    };
  },

  async asyncData({ params, $sanity }) {
  const query = groq`*[_type == "products"] { 
    ...,
    seo {
      title,
      description,
      image { asset->{url} },
      keywords
    },
  }  | order(_updatedAt desc)[0]`;

  const project = await $sanity.fetch(query);
  return {
    project,
   
  };
},

head() {
    return {
      title: this.project?.seo?.title || "Palazzo",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.project?.seo?.description || "Default description",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.project?.seo?.keywords?.join(", ") || "default, keywords",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.project?.seo?.image?.asset?.url || "",
        },
      ],
    };
  },

  computed: {
    ...mapState(["gridprod"]),
  },

  methods: {
    toggleIframe() {
      this.isIframeOpen = !this.isIframeOpen;
    },
    closeIframe() {
      this.isIframeOpen = false;
    },
    startDrag(event) {
      const container = this.$refs.iframeContainer;
      const rect = container.getBoundingClientRect();

      // Record the offset between the mouse and the container's top-left corner
      this.dragData.isDragging = true;
      this.dragData.offsetX = event.clientX - rect.left;
      this.dragData.offsetY = event.clientY - rect.top;

      // Add event listeners for dragging and stopping
      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("mouseup", this.stopDrag);
    },
    onDrag(event) {
      if (!this.dragData.isDragging) return;

      const container = this.$refs.iframeContainer;

      // Calculate new positions while keeping the container within the viewport
      const newLeft = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, event.clientX - this.dragData.offsetX));
      const newTop = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, event.clientY - this.dragData.offsetY));

      // Apply new positions
      container.style.left = `${newLeft}px`;
      container.style.top = `${newTop}px`;
    },
    stopDrag() {
      this.dragData.isDragging = false;

      // Remove event listeners to prevent memory leaks
      document.removeEventListener("mousemove", this.onDrag);
      document.removeEventListener("mouseup", this.stopDrag);
    },
  },
};
</script>


<style scoped>

.iframe-container {
  position: absolute;
  top: 10%; /* Default position */
  left: 55vw; /* Default position */
  height: 25vw;
    /* display: flex; */
    width: 40vw;
    border: 0.5px solid black;
  background: white;
  background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1000;
  cursor: grab;
  display: flex;
    justify-content: flex-end;
    flex-direction: column;
}

.textsumf{
    font-family: "GT-Bold";
}




.iframe-header {

  /* padding: 0.5rem; */
  /* background: #f0f0f0; */
  /* background-image: url("./static/background.jpg"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-bottom: 0.5px solid black;
}

/* .close-btn {
  background: red;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
} */

.close-btn{
  width: 1.4vw;
}

.iframe-content {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: calc(100% - 2rem); /* Adjust height to account for header */
}

.gridcontent{
  height: 100vh;
  height: 90vh;
    display: flex;
    align-items: center;
}

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
  background-image: url("./static/background.jpg");
  background-size: 102vw;
  /* background-size: 192vh; */
  background-position: unset;
  background-repeat: no-repeat;
  height: 100vh;
  overflow-y: scroll;
}

.right-content {
  /* background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  background-color: #e6e5e4;
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
    left: 50vw;
    font-size: 0.8vw;
}

@media only screen and (max-width: 768px) {
   
.iframe-container {
    position: absolute;
    top: 22%;
    left: 6%;
    height: 51vw;
    width: 88vw;
    border: 0.5px solid black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1000;
    cursor: grab;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}

.clocon{
    top: 1.5vw;
    right: 1.5vw;
}

  .close-btn{
  width: 4.4vw;
}

    .image-rowaw:last-child {
        border-bottom: 0.07vw solid rgba(0, 0, 0, 0) !important;
    }

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
    left: auto;
    font-size: 2.1vw;
    bottom: 0;
}
}

@media only screen and (max-width: 768px) {
  .bgmobile {
    flex-direction: column; /* Stacks the two sides vertically on small screens */
  }

  /* .left-content,
  .right-content {
    height: auto;
  } */

  .left-content {
  background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: unset;
  background-repeat: no-repeat;
  height: 100vh;
  overflow-y: scroll;
}

  .right-content {
    display: none;
  }


  .left-content{
    padding: 0 !important;
    padding-top: 4vh !important;
    padding-top: 6vh !important;
  }

.gridcontent {
    height: auto;
}
}
</style>
