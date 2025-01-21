<template>
  <div class="pagbg all">
    <!-- <HeaderComponent /> -->
    <div class="headera content flex w-full justify-between">
      <h1 class="navmb">
        <HeaderComponent />
      </h1>
      <p class="navmbno yeart text-center text-4xl uppercase">CONTACT</p>
      <p class="navmbno yeart w-[5vw] text-center text-4xl uppercase"></p>
      <p class="navmbno headingspages text-center text-4xl uppercase">
        palazzo eventi
      </p>
      <h1 class="navmbno w-[2vw]"></h1>
    </div>

    <div class="nodes contmbhead pointer-events-none">
      <p
        :class="['', { sheadera: !isMenuOpen }, { sheaderaopen: isMenuOpen }]"
        class="headingspages pointer-events-none text-center text-4xl uppercase"
      >
        Contact
      </p>
    </div>
    <!-- <div
        class="mbhead absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10] pointer-events-none"
      >
        <img class="w-[30vw]" src="/conflower.png" />
      </div> -->

    <!-- desktop -->
    <div class="bgcream nomb relative min-h-screen flex"></div>

    <div class="nomballbot flex p-[5vw] pl-[3vw] min-h-screen">
      <!-- Left Content: Address and Contact Info -->
      <div class="left-content w-1/2 p-[3vw] pl-[0vw]">
        <div class="address text-left flex">
          <Richtext class="w-[7vw] adsize" :blocks="contact.address"></Richtext>
          <div class="ml-[6vw]">
            <Richtext
              class="w-[20vw] text-[1.05vw]"
              :blocks="contact.address2"
            ></Richtext>
          </div>
        </div>
        <div class="flex">
          <div class="contact text-left mt-[2vh]">
            <Richtext
              class="w-[8vw] adsize"
              :blocks="contact.contact"
            ></Richtext>
            <!-- <a href="#" class="instagram-icona w-[31vw]">
              <img
                src="insta.png"
                alt="Angel Artwork"
                class="instagram-icon mr-2"
              />
            </a> -->
            
          </div>
        
          <!-- <div class="email ml-[5vw] text-left mt-[2vh]">
            <p class="italic underline">Email</p>
            <p>natalya@palazzoeventi.com</p>
          </div> -->
          <Richtext
            class="email adsize ml-[5vw] text-left mt-[2vh]"
            :blocks="contact.email"
          ></Richtext>
          <Richtext
            class="email adsize ml-[5vw] text-left mt-[2vh]"
            :blocks="contact.vemail"
          ></Richtext>
        </div>

        <div class="flex w-[31vw] instagram-icona">
          <div v-for="social in contact.socialMedia" class="social-icons flex mt-4">
    <a
    v-if="social.show"
      :key="social.platform"
      :href="social.url"
   
      target="_blank"
      rel="noopener noreferrer"
      class="social-link mr-4"
    >
      <img
     
        :src="social.icon"
        :alt="`${social.platform} Icon`"
        class="social-icon instagram-icon"
      />
      <!-- <span v-else>{{ social.platform }}</span> -->
    </a>
  </div>
             
            </div>
      </div>
     

      <!-- Right Content: Form Section -->
      <div class="right-content w-1/2 p-[5vw] pl-[10vw] pt-[4vw]">
        <form
          action="https://formspree.io/f/xwpkkljw"
          method="POST"
          class="contact-form grid grid-cols-2 gap-4"
        >
          <input
            class="col-span-1"
            type="text"
            name="name"
            placeholder="Full Name *"
            required
          />
          <input
            class="col-span-1"
            type="date"
            name="date"
            placeholder="Date of Celebration *"
            required
            min="2024-01-01"
            max="3030-12-31"
          />
          <input
            class="col-span-1"
            type="number"
            name="telephone"
            placeholder="Telephone *"
            required
            pattern="[0-9]{10,15}"
            inputmode="numeric"
          />
          <input
            class="col-span-1"
            type="text"
            name="days"
            placeholder="No. of Days of Celebration *"
          />
          <input
            class="col-span-1"
            type="email"
            name="email"
            placeholder="Email *"
            required
          />
          <input
            class="col-span-1"
            type="number"
            name="guests"
            placeholder="No. of Guests *"
            required
            min="0"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
          />
          <input
            class="col-span-1"
            type="text"
            name="Additional info"
            placeholder="Additional info *"
          />
          <input
            class="col-span-1"
            type="number"
            name="budget"
            placeholder="Estimated Budget *"
            required
            min="0"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
          />

          <div class="flex justify-center col-span-2">
            <button
              type="submit"
              class="mt-[3vw] w-auto send-button"
              @mouseover="changeImage"
              @mouseout="resetImage"
            >
              <img
                :src="currentImage"
                alt="Send"
                class="sendb w-[10vw] h-auto"
              />
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Central Artwork Image (Angel) -->
    <div
      class="nomb absolute bottom-[29vh] left-[49vw] transform -translate-x-1/2 z-10"
    >
      <img src="contactbird.png" alt="Angel Artwork" class="w-auto h-[33vh]" />
    </div>



    <!-- mobile -->
    <div class="bgcream nodes relative min-h-screen flex"></div>

    <div class="nodes contentamb flex h-max">
      <!-- Left Content: Address and Contact Info -->
      <div class="left-content">
        <div class="address text-left flex">
          <!-- <div>
            <p class="italic underline">Address</p>
            <p class="w-[58%]">10 Cromwell Road, Hove East</p>
          </div> -->
          <Richtext
            class="richcontt adsizemb w-[34%]"
            :blocks="contact.address"
          ></Richtext>
          <div class="">
            <div class="contact text-left">
              <!-- <p class="italic underline">Contact</p>
              <div class="w-[23vw]">
                <p>Natalya Zelentsova</p>
                <p>+39 347 6999121</p>
              </div> -->
              <Richtext
                class="richcontt adsizemb w-[23vw] ml-[7vw]"
                :blocks="contact.contact"
              ></Richtext>
            </div>
            <!-- <p>
              For more comprehensive conversation with one of our expert
              advisors, please fill in the form opposite and we will contact you
              asap. Pallazo Eventi Consultant Team.
            </p> -->
          </div>
        </div>
        <div class="flex contamb">
          <div class="contact flex text-left mt-[2vh]">
            <!-- <div class="w-[31vw]"> -->
            <!-- Instagram SVG Icon -->
         
           

            <!-- </div> -->
            <div class="email ml-[4vw] text-left">
              <!-- <p class="italic underline">Email</p>
              <div class="w-max">
                <p>natalya@palazzoeventi.com</p>
              </div> -->
              <Richtext
                   v-if="contact.email"
                class="richcontt adsizemb"
                :blocks="contact.email"
              ></Richtext>
              <!-- <Richtext
              v-if="contact.vemail"
                class="richcontt adsizemb"
                :blocks="contact.vemail"
              ></Richtext> -->
            </div>


            <div class="email ml-[4vw] text-left">
              <!-- <p class="italic underline">Email</p>
              <div class="w-max">
                <p>natalya@palazzoeventi.com</p>
              </div> -->
              <!-- <Richtext
                   v-if="contact.email"
                class="richcontt adsizemb"
                :blocks="contact.email"
              ></Richtext> -->
              <Richtext
              v-if="contact.vemail"
                class="richcontt adsizemb"
                :blocks="contact.vemail"
              ></Richtext>
            </div>
          </div>
        </div>

        
   
        <div class="flex ml-[4vw]">
          <div  v-for="social in contact.socialMedia"   class="flex ">
          <div   v-if="social.show" class="social-icons contamb contact flex text-left mt-[2vh]">
    <a
    v-if="social.show"
      :key="social.platform"
      :href="social.url"
   
      target="_blank"
      rel="noopener noreferrer"
      class="social-link mr-4"
    >
      <img
     
        :src="social.icon"
        :alt="`${social.platform} Icon`"
        class="social-icon instagram-icon"
      />
      <!-- <span v-else>{{ social.platform }}</span> -->
    </a>
  </div>
             
            </div>
        </div>
      

        <div class="ml-[8.2vw]">
          <Richtext
            class="w-[84vw] pt-[2vh] mbcontexx"
            :blocks="contact.address2"
          ></Richtext>
        </div>

        <!-- <img
          src="bird.png"
          class="p-[10vw]"
          alt="Cherubs"
        /> --> 

        <img
          src="contactbird.png"
          class="p-[10vw]"
          alt="Cherubs"
        />
      </div>

      <!-- Right Content: Form Section
       @click="animateSection"
        :class="{ 'bounce-on-load': isBouncing }" -->
      <div
        :class="{ 'bounce-on-load': isBouncing }"
        class="right-content overflow-y-scroll flex-1 slide-in"
      >
        <div class="allrcont">
          <div class="titcont titmb">
            <button class="pt-[4vw]" @click="toggleSection">
              <div
                ref="lottieAnimation"
                class="lottie-container headbarc w-[1.4vw] hover:cursor-pointer"
              ></div>
            </button>
            <h1 class="loctext uppercase pt-2" @click="toggleSection">Get in touch</h1>
          </div>

          <form
            action="https://formspree.io/f/xwpkkljw"
            method="POST"
            class="contact-form pb-[5vh] w-full grid grid-cols-1 sm:grid-cols-2 gap-[5vw] px-4"
          >
            <input
              class="col-span-1"
              type="text"
              name="name"
              placeholder="Full Name *"
              required
            />
            <input
            class="col-span-1"
            type="text"
            name="date"
            placeholder="Date of Celebration *"
            required
            min="2024-01-01"
            max="3030-12-31"
          />
            <input
              class="col-span-1"
              type="number"
              name="telephone"
              placeholder="Telephone *"
              required
              pattern="[0-9]{10,15}"
              inputmode="numeric"
            />
            <input
              class="col-span-1"
              type="text"
              name="days"
              placeholder="No. of Days of Celebration *"
            />
            <input
              class="col-span-1"
              type="email"
              name="email"
              placeholder="Email *"
              required
            />
            <input
              class="col-span-1"
              type="number"
              name="guests"
              placeholder="No. of Guests *"
              required
              min="0"
              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
            />
            <input
              class="col-span-1"
              type="text"
              name="info"
              placeholder="Additional info *"
            />
            <input
              class="col-span-1"
              type="number"
              name="budget"
              placeholder="Estimated Budget *"
              required
              min="0"
              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
            />

            <div class="flex justify-center mt-[4vw]">
              <button type="submit" class="mt-6 w-[33vw] sm:w-[26vw]">
                <img src="sendh.png" alt="Send" class="w-auto h-auto" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";
import { mapMutations, mapState } from "vuex";
import { mapGetters } from "vuex";
import { groq } from "@nuxtjs/sanity";
import lottie from "lottie-web";

export default {
  name: "IndexPage",

  data() {
    return {
      isSectionVisible: false,
      defaultImage: "send.png",
      hoverImage: "sendh.png",
      currentImage: "send.png",
      isBouncing: false,
      isOpen: false,
      lottieInstance: null,
    };
  },

  async asyncData({ params, $sanity, store }) {
    const query = groq`*[_type == "contact"]{
    title,
    address,
    address2,
    contact,
    email,
    vemail,
    socialMedia[] {
      platform,
      url,
      "icon": icon.asset->url,
      show,
    }
  } | order(_updatedAt desc)[0]`;

    const contact = await $sanity.fetch(query);

    return { contact };
  },
  mounted() {
    const contactForm = this.$el.querySelector('.contact-form');

// Function to set opacity to 1
const setOpacityToFull = () => {
  contactForm.style.opacity = 1;
};

// Change opacity to 1 when clicked
contactForm.addEventListener('click', (event) => {
  setOpacityToFull();
  event.stopPropagation(); // Prevent event bubbling
});

// Change opacity to 1 when any input is focused
const formFields = contactForm.querySelectorAll('input, textarea, select, button');
formFields.forEach(field => {
  field.addEventListener('focus', setOpacityToFull);
  field.addEventListener('touchend', (event) => {
    setOpacityToFull();
    event.preventDefault(); // Prevent default behavior
  });
});
    // Delay the start of the bounce animation by 3 seconds
    setTimeout(() => {
      this.isBouncing = true;

      // Optional: Remove the bounce class after animation completes (1s duration)
      setTimeout(() => {
        this.isBouncing = false;
      }, 8000); // Duration of the bounce animation (1s)
    }, 4000); // 3 second delay before starting the bounce

    console.log('Lottie Container:', this.$refs.lottieAnimation);
    console.log('Lottie animation initialized:', this.lottieInstance);

    this.lottieInstance = lottie.loadAnimation({
      container: this.$refs.lottieAnimation, // the DOM element
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/animations/plus.json", // your Lottie animation JSON file path
    });
  },

  beforeDestroy() {
    // Clean up the event listener when the component is destroyed
    document.removeEventListener("click", this.handleClickOutside);
  },

  methods: {
    hoverImage() {
      this.currentImage = this.hoverImage; // Change to hover image on mouseover
    },
    resetImage() {
      this.currentImage = this.defaultImage; // Revert to default image on mouseleave
    },
    toggleSection() {
      if (!this.isOpen) {
        this.openSection();
      } else {
        this.closeSection();
      }
    },

    openSection() {
      const rightContent = document.querySelector(".allrcont");
      if (rightContent && !this.isOpen) {
        rightContent.classList.add("slide-in");
        this.lottieInstance.playSegments([11, 20], true); // Open animation
        this.isOpen = true;
      }
    },

    closeSection() {
      const rightContent = document.querySelector(".allrcont");
      if (rightContent && this.isOpen) {
        rightContent.classList.remove("slide-in");
        this.lottieInstance.playSegments([0, 11], true); // Close animation
        this.isOpen = false;
      }
    },

    handleClickOutside(event) {
      const rightContent = document.querySelector(".allrcont");
      // Check if the click was outside the rightContent or the close button
      if (this.isOpen && rightContent && !rightContent.contains(event.target)) {
        this.closeSection(); // Close if the click is outside
      }
    },
    // closeSection() {
    //   this.isSectionVisible = false;
    // },
    changeImage() {
      this.currentImage = this.hoverImage;
    },
    resetImage() {
      this.currentImage = this.defaultImage;
    },
    ...mapMutations(["toggleMenu", "setMenuState"]),
  },

  components: {
    HeaderComponent,
  },

  computed: {
    // ...mapGetters(["isMenuOpen"]),
    // isMenuOpen: "isMenuOpen",
    isMenuOpen() {
      return this.$store.getters.isMenuOpen;
    },
    ...mapState(["gridpub"]),
  },
};
</script>

<style scoped>

input[type="date"] {
  display: block; /* Ensure it's set to block or inline-block */
  opacity: 1; /* Ensure it’s fully visible */
}

.contact-form {
  opacity: 0.4;
  transition: opacity 0.5s ease; /* Smooth transition */
}

/* Optional: Add a hover effect */
.contact-form:hover {
  cursor: pointer;
}

.sheadera {
  /* display: unset;  */
  /* left: 39vw; */
  pointer-events: none;
  opacity: 1;
}

.sheader {
  left: 39vw;
  pointer-events: none;
  /* z-index: 1000 !important; */
  /* display: none;  */
  opacity: 0;
}

.all {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  position: relative;
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

/* Flexbox layout for the image gridpub */
.image-gridpub {
  /* display: flex;
  flex-wrap: wrap;
  gap: 20px;  */
  /* Adjust the gap between images */
}

.bgcream {
  background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 90vh;
    top: 10vw;
    /* background-size: 100vw; */
    background-image: url("./static/conimg.jpg");
    display: flex;
    clip-path: ellipse(55% 62% at 50% 100%);
    position: fixed;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
}

.pagbg {
  background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  background-position: 0 0;
  background-position: initial;
}

.left-content,
.right-content {
  height: max-content;
  font-size: 1vw;
  flex: 1; /* Ensures both take equal width in the flex container */
  overflow: visible; /* Ensures that content is not clipped */
}

.contact-form {
  font-size: 0.9vw;
  /* font-size: 1vw; */
  font-family: "NHaas";
  column-gap: 4vw;
  width: max-content;
  letter-spacing: 0.05vw;
  z-index: 99;
  position: relative;
}

.contact-form input {
  border-bottom: 0.5px solid #a29585;
  padding: 0.1vw;
  background-color: #ffffff00;
  width: 17vw;
  min-width: max-content;
  text-transform: uppercase;
}

.contact-form input:focus {
  border: none; /* Remove the border on focus */
  border-bottom: 0.5px solid #a29585;
  outline: none; /* Ensure the focus outline is also removed */
}

.send-button button {
  background-color: transparent;
  color: black;
  cursor: pointer;
  text-transform: uppercase;
  border: rgba(0, 0, 0, 0.388) 0.2px solid;
  /* border-radius: 9vw; */
  padding: 1vw;
  height: 10vh;
  font-size: 1.5vw;
  width: 10vw;
  border-radius: 50%;
  padding-top: 2vh;
}

.send-button button:hover {
  /* background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: initial;
  background-repeat: no-repeat; */
  background-color: #ffffff97;
  transition-duration: 0.5s;
}

a {
  color: #a29585;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

input::placeholder {
  /* color: rgba(0, 0, 0, 0.525) !important; */
  color: black !important;
  opacity: 1;
  /* line-height: 0; */
}

.instagram-icon {
  width: 2vw;
  height: auto;
}

.instagram-icona {
  color: black;
  top: 9vh;
  position: relative;
}

@media only screen and (max-width: 768px) {

  .instagram-icon {
    width: 10vw;
  height: auto;
}
  .contact-form {
  opacity: 1;
  transition: opacity 0.5s ease; /* Smooth transition */
}

  .instagram-icon {
    width: 5vw;
    height: auto;
  }

  .instagram-icona {
    color: black;
    top: auto;
    position: relative;
  }

  .bgcream {
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    width: 100vw;
    height: 50vh;
    background-image: url("./static/conimg.jpg");
    display: flex;
    clip-path: ellipse(57% 17% at 50% 100%);
    position: absolute;
    z-index: 0;
    pointer-events: none;
    display: none;
  }

  .left-content {
    background-image: url("./static/background.jpg");
    background-size: 200vh;
    background-position: initial;
    background-repeat: no-repeat;
    transition-duration: 0.5s;
    width: 100vw;
    height: 100vh;
    /* height: 30vh; */
    position: absolute;
    position: relative;
    position: fixed;
    /* position: relative; */
    /* border-bottom: black 0.1px solid; */
    font-size: 3vw;
    /* height: auto; */
  }

  .address {
    padding: 8vw;
    padding-top: 11vh;
    padding-bottom: 0vh;
  }

  .contamb {
    padding: 3vw; 
    padding-top: 0vh;
    padding-left: 4vw;
    padding-bottom: 1vh;

    padding: 0;
        padding-top: 0vh;
        padding-left: 4vw;
        padding-bottom: 1vh;
  }

  .headbarc {
    width: 6.3vw;
    height: -moz-max-content;
    height: max-content;
    display: block;
    stroke-width: 0vw;
    stroke: black;
  }

  /* .right-content {

        position: absolute;
        bottom: -100%;
        right: 0;
        width: 100%;
        transition: bottom 0.5s ease-in-out;
        background-size: cover;
        background-image: none;
        overflow-y: scroll;
        height: max-content;
        height: 100vh;
        z-index: 90;
        padding: 0;
  }

  .right-content.slide-in {
        max-height: 100vh;
    }

  .right-content.slide-in {
        bottom: 0;
        display: flex;
        align-items: flex-end;
    } */

  .allrcont {
    /* position: absolute;
  bottom: -100%;
  right: 0;
  width: 100%;
  transition: bottom 0.5s ease-in-out;
  height: 100vh;
  z-index: 90; */
  }

  .allrcont.slide-in {
    /* bottom: 0;  */
    /* Animates it up */
    transition: top 0.5s ease-in-out;
    top: 0vh;
    top:100vw;
    /* top: calc(50% - 100px); */
    /* top: auto; */
    /* margin-top: 30vh; */
    /* height: 100vh; */
    height: max-content;
  }

  .allrcont {
    align-items: flex-start;
    padding: 0rem;
    height: max-content;
    background-image: url("./static/LeftBG.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-position: initial;
    border-top: 0.05vw solid black;
    box-shadow: none;
    transition: top 0.5s ease-in-out;
    height: 100vh;
    top: 57vh;
    top:122vw;
    top:110vw;
    top: 0vh;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-40px);
    }
    60% {
      transform: translateY(-40px);
    }
  }

  .right-content {
    position: absolute;
    top: 0vh;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    height: 100vh;
    width: 100vw;
    align-content: flex-end;
    flex-direction: column;
    justify-content: flex-end;
  }

  .bounce-on-load {
    animation: bounce 2s ease;
    /* animation-delay: 3s; */
  }

  .allrcont {
    min-height: max-content;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    position: relative;
    /* top: 88vh; */
    height: max-content;
    /* top: 100vh; */
    justify-content: flex-end;
  }

  .contentamb {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  .send-button button {
    background-color: #ffffff;
    color: black;
    cursor: pointer;
    text-transform: uppercase;
    border: rgba(0, 0, 0, 0.388) 0.2px solid;
    /* border-radius: 9vw; */
    /* padding: 10vw; */
    height: 7vh;
    font-size: 4.5vw;
    width: 27vw;
    border-radius: 50%;
  }

  .contact-form {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .contact-form input {
    font-size: 4vw;
    /* padding-bottom: .5vh; */
    text-align: center;
    text-transform: uppercase;
    width: 95vw;
  }

  .titcont {
    width: 90vw;
    display: flex;
    padding-bottom: 2vh;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .loctext {
    font-size: 3vw;
    font-size: 5vw;
    font-family: "GT-Bold";
  }

  .loctextlink {
    font-size: 3vw;
  }

  .pagbg {
    /* display: none; */
    background-image: none;
    /* background-image: url(/_nuxt/static/LeftBG.png); */
  }
}
</style>
