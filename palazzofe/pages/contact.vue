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
            <a href="#" class="instagram-icona w-[31vw]">
              <!-- Instagram SVG Icon -->
              <img
                src="insta.png"
                alt="Angel Artwork"
                class="instagram-icon mr-2"
              />
            </a>
          </div>
          <!-- <div class="email ml-[5vw] text-left mt-[2vh]">
            <p class="italic underline">Email</p>
            <p>natalya@palazzoeventi.com</p>
          </div> -->
          <Richtext
            class="email adsize ml-[5vw] text-left mt-[2vh]"
            :blocks="contact.email"
          ></Richtext>
        </div>
      </div>

      <!-- Right Content: Form Section -->
      <div class="right-content w-1/2 p-[5vw] pl-[20vw] pt-[4vw]">
        <form
          action="https://formspree.io/f/xwpkkljw"
          method="POST"
          class="contact-form grid grid-cols-2 gap-4"
        >
          <input
            class="col-span-1"
            type="text"
            name="name"
            placeholder="Name *"
            required
          />
          <input
            class="col-span-1"
            type="text"
            name="date"
            placeholder="Date of Celebration *"
            required
          />
          <input
            class="col-span-1"
            type="tel"
            name="telephone"
            placeholder="Telephone *"
            required
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
            type="text"
            name="guests"
            placeholder="No. of Guests *"
          />
          <input
            class="col-span-1"
            type="text"
            name="country"
            placeholder="Country *"
          />
          <input
            class="col-span-1"
            type="text"
            name="budget"
            placeholder="Estimated Budget *"
          />

          <!-- Send Button -->
          <div class="flex justify-center col-span-2">
            <button type="submit" class="mt-[9vh] w-auto">
              <img src="send.png" alt="Send" class="w-[10vw] h-auto" />
            </button>
          </div>
        </form>

        <!-- <div class="flex justify-center">
          <button type="submit" class="mt-[9vh] w-auto">
            <img src="send.png" alt="Angel Artwork" class="w-[10vw] h-auto" />
          </button>
        </div> -->
      </div>
    </div>

    <!-- Central Artwork Image (Angel) -->
    <div
      class="nomb absolute bottom-[27vh] left-[49vw] transform -translate-x-1/2 z-10"
    >
      <img src="anglecon.png" alt="Angel Artwork" class="w-auto h-[40vh]" />
    </div>

    <!-- mobile -->

    <div class="bgcream nodes relative min-h-screen flex"></div>

    <div class="nodes contentamb flex h-max">
      <!-- <div class="nodes">
      <p
             v-if="!isMenuOpen"
          class="headingspages w-[100%] pointer-events-none text-center text-4xl  uppercase "
        >
          Contact
        </p>
    </div> -->
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
            <a href="#" class="instagram-icona w-[31vw]">
              <!-- Instagram SVG Icon -->
              <img
                src="insta.png"
                alt="Angel Artwork"
                class="instagram-icon mr-2"
              />
            </a>

            <!-- </div> -->
            <div class="email ml-[5vw] text-left">
              <!-- <p class="italic underline">Email</p>
              <div class="w-max">
                <p>natalya@palazzoeventi.com</p>
              </div> -->
              <Richtext
                class="richcontt adsizemb"
                :blocks="contact.email"
              ></Richtext>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Content: Form Section -->
      <div class="right-content">
        <div class="titcont titmb">
          <button class="pt-[4vw]" @click="closeSection">
            <SvgClose class="headbarc w-[1.4vw] hover:cursor-pointer" />
          </button>
          <h1 class="loctext uppercase pt-2">Get in touch</h1>
        </div>

        <form
           action="https://formspree.io/f/xwpkkljw"
          method="POST"
          class="contact-form w-full grid grid-cols-1 sm:grid-cols-2 gap-[5vw] px-4"
        >
          <input class="col-span-1" type="text" placeholder="Name *" name="name" required/>
          <input
            class="col-span-1"
            type="text"
            name="date"
            placeholder="Date of Celebration *"
            required
          />
          <input class="col-span-1" type="text"   name="telephone" placeholder="Telephone *" required/>
          <input
            class="col-span-1"
            type="text"
            name="days"
            placeholder="No. of Days of Celebration *"
            required
          />
          <input class="col-span-1" type="email"  name="email" placeholder="Email *" required/>
          <input class="col-span-1" type="text"   name="guests" placeholder="No. of Guests *" required/>
          <input class="col-span-1" type="text" name="country" placeholder="Country *" required/>
          <input
            class="col-span-1"
            type="text"
             name="budget"
            placeholder="Estimated Budget *"
            required
          />
          <div class="flex justify-center mt-[4vw]">
          <button type="submit" class="mt-6 w-[50vw] sm:w-[26vw]">
            <img src="send.png" alt="Send" class="w-auto h-auto" />
          </button>
        </div>
        </form>
      
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/layout/Header.vue";
import { mapMutations, mapState } from "vuex";
import { mapGetters } from "vuex";
import { groq } from "@nuxtjs/sanity";

export default {
  name: "IndexPage",

  data() {
    return {
      defaultImage: "send.png", // Default image
      hoverImage: "sendhn.png", // Image to show on hover
      currentImage: "send.png", // Track the current image
    };
  },

  async asyncData({ params, $sanity, store }) {
    const query = groq`*[_type == "contact"]{
    title,
    address,
    address2,
    contact,
    email,
  } | order(_updatedAt desc)[0]`;

    const contact = await $sanity.fetch(query);

    return { contact };
  },

  methods: {
    hoverImage() {
      this.currentImage = this.hoverImage; // Change to hover image on mouseover
    },
    resetImage() {
      this.currentImage = this.defaultImage; // Revert to default image on mouseleave
    },
  },

  components: {
    HeaderComponent,
  },

  computed: {
    ...mapGetters(["isMenuOpen"]),
    ...mapState(["gridpub"]),
  },

  methods: {
    ...mapMutations(["toggleMenu", "setMenuState"]),
  },
};
</script>

<style scoped>
.all{
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
  background-position: top;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  background-image: url("./static/conimg.jpg");
  display: flex;
  clip-path: ellipse(51% 47% at 50% 100%);
  position: absolute;
  z-index: 0;
  pointer-events: none;
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

.right-content {
  /* background-color: #f8f8f8; */
  /* padding: 2rem; */
}

.left-content,
.right-content {
  font-size: 1vw;
  flex: 1; /* Ensures both take equal width in the flex container */
  overflow: visible; /* Ensures that content is not clipped */
}

.contact-form {
  font-size: 0.9vw;
  /* font-size: 1vw; */
  font-family: "NHaas";
}

.contact-form input {
  border-bottom: 0.5px solid #a29585;
  padding: 0.1vw;
  background-color: #ffffff00;
  width: 98%;
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
  color: rgba(0, 0, 0, 0.123);
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
    height: 50vh;
    height: 30vh;
    position: absolute;
    border-bottom: black 0.1px solid;
    font-size: 3vw;
    /* height: auto; */
  }

  .address {
    padding: 8vw;
    padding-top: 11vh;
    padding-bottom: 0vh;
  }

  .contamb {
    padding: 8vw;
    padding-top: 0vh;
    padding-bottom: 1vh;
  }

  .right-content {
    position: absolute;
    top: 31vh;
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
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
    font-size: 3.5vw;
    /* padding-bottom: .5vh; */
    text-align: center;
    text-transform: uppercase;
    width: auto;
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
}
</style>
