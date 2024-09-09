<template>
  <div>
    <!-- Header (optional) -->
    <HeaderComponent />

    <div class="bgmobile relative min-h-screen flex">
      <!-- Left Scrollable Content -->
      <div class="left-content flex-1 overflow-y-scroll p-8">
        <div class="content">
          <!-- Your scrollable content here -->
          <h1 class="headingspages text-center text-4xl mb-6 uppercase">
            weddings
          </h1>

          <!-- Image flex box -->
          <div class="image-grid">

            <div class="image-item relative">
              <img src="/archframe.png" alt="Arch Frame" class="arch-frame" />
              <img
                src="/ARCH_IMAGE.png"
                alt="Inner Image"
                class="inner-image"
              />
              <div class="textframe">
                <h2 class="font-black">LOCATION</h2>
                <h2 class="subtext">2024</h2>
              </div>
            </div>

            <div class="image-item">
              <img src="/archframe.png" alt="Image 1" />
              <div class="textframe">
                <h2 class="font-black">LOCATION</h2>
                <h2 class="subtext">2024</h2>
              </div>
            </div>

            <div class="image-item">
              <img src="/archframe.png" alt="Image 2" />
              <p>
                <a href="#" class="underline textframe"
                  >Via Vicarello, 1, 58044 Poggi del Sasso GR, Italy</a
                >
              </p>
            </div>
            <div class="image-item">
              <img src="/archframe.png" alt="Image 3" />
            </div>
            <div class="image-item">
              <img src="/archframe.png" alt="Image 4" />
            </div>
            <div class="image-item">
              <img src="/archframe.png" alt="Image 4" />
            </div>
          </div>

          <!-- <img src="/path/to/your/left-image.jpg" alt="Left Image" class="mb-6" /> -->
          <!-- <p class="mb-4 text-9xl">
        As the artist's estate, The Noguchi Museum holds the world’s largest and most extensive collection of Isamu Noguchi's sculptures, drawings, models, and designs. Available to browse here are works from the Museum's permanent collection.
      </p> -->
          <!-- <h2>LOCATION</h2>
      <p>
        <a href="#" class="underline">Via Vicarello, 1, 58044 Poggi del Sasso GR, Italy</a>
      </p> -->
        </div>
      </div>

      <!-- Right Static Content -->
      <div class="right-content overflow-hidden flex-1 p-8">
        <h1 class="headingspagesb text-center text-4xl mb-6 uppercase">
          palazzo eventi
        </h1>
        <div class="static-box w-full h-full">
          <!-- Static Content (e.g., Image, Text, etc.) -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";

export default {
  name: "IndexPage",
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped>
.textframe {
  align-items: center;
  text-align: center;
  padding-top: 1vw;
}

.subtext{
  font-family: 'RomainHeadlineTrial';
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust the gap between images */
}

.image-item {
  flex: 0 0 calc(50% - 20px); /* Two items per row */
  margin-bottom: 20px;
  padding: 2vw;
}

.image-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Optional: Add rounded corners to images */
}


.image-item {
  position: relative; /* Allows inner images to be positioned absolutely inside this container */
  flex: 0 0 calc(50% - 20px);
  margin-bottom: 20px;
  padding: 2vw;
}

.arch-frame {
  width: 100%; /* Full width arch frame */
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Optional: Add rounded corners to images */
}

.inner-image {
  position: absolute;
  top: 15%;
  left: 10%;
  width: 80%; /* Adjust the width to fit inside the arch */
  height: auto;
  object-fit: contain; /* Ensure the image maintains its aspect ratio */
  z-index: 1; /* Make sure it appears on top of the frame */
  overflow: hidden;
}

.bgmobile {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex; /* Flex layout for two columns */
}

/* Left content styles */
.left-content {
  /* background-image: '/LeftBG.png'; */
  background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: #f4f3ef;  */
  /* Approximation of the off-white color from the image */
  height: 100vh;
  overflow-y: scroll;
}

/* Right content styles */
.right-content {
  background-image: url("./static/PINKBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: #f3cecd;  */
  /* Approximation of the pinkish color from the image */
  height: 100vh;
}

/* Basic styles for text and layout */
.content {
  padding: 20px;
}

a {
  color: #a29585;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Mobile responsive adjustments */
@media only screen and (max-width: 768px) {
  .bgmobile {
    flex-direction: column; /* Stacks the two sides vertically on small screens */
  }

  .left-content,
  .right-content {
    height: auto;
  }
}
</style>
