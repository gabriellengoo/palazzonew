<template>
  <div>

    <!-- <HeaderComponent /> -->
    <div class="headera content flex w-full justify-between">
      <h1 class="navmb">
        <HeaderComponent />
      </h1> 
      <p class="navmbno  yeart text-center text-4xl  uppercase ">
        {{ grid.title }}
      </p>
      <p
        class="navmbno yeart w-[5vw] text-center text-4xl  uppercase "
      ></p>
      <p class="navmbno  headingspages text-center text-4xl uppercase">
        Palazzo Eventi
      </p>
      <h1 class="navmbno w-[2vw]">
   
      </h1>
    </div>

    <div class="bgmobile relative min-h-screen flex">
      <!-- Left Scrollable Content -->
      <div class="left-content flex-1 overflow-y-scroll p-8">
        <div class="content">
      

          <div v-if="grid.grid" class="">
            <Grid class="" :items="grid.grid" size="small"></Grid>
          </div>
        </div>
      </div>

      <!-- Right Static Content -->
      <div class="right-content overflow-hidden flex-1 p-8">
      
        <div class="static-box w-full h-full">
          <!-- Static Content (e.g., Image, Text, etc.) -->
        </div>
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

  computed: {
    ...mapState(["grid"]),
  },

  async asyncData({ params, $sanity }) {
  const query = groq`*[_type == "works"] { 
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
};
</script>

<style scoped>



@keyframes scale-up {
  to {
    transform: scale(1); /* End at original size */
  }
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
  /* background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  background-color: #e6e5e4;
  height: 100vh;
  overflow-y: scroll;
}

.right-content {
  /* background-image: url("./static/PINKBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  background-color: #e6e5e4;
  background-color: #fff;
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


  .left-content{
    padding: 0 !important;
    padding-top: 4vh !important;
    padding-top: 6vh !important;
  }
}
</style>
