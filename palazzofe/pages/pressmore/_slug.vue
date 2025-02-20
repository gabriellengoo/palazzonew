<template>
  <div class="reveal-container relative md:min-h-fit md:overflow-hidden">
    <HeaderComponent />
    <div class="headera mbpad content flex w-full justify-between">
      <h1 class="md:w-[1.7vw] w-auto">
        <a class="headbar" href="../press">
          <div
            ref="lottieAnimation"
            class="lottie-container headbarc w-[1.7vw] hover:cursor-pointer"
          ></div>
        </a>
      </h1>
      <p
        class="text-[#00000000] headingspages navmbno text-center text-4xl uppercase"
        v-if="project"
      >
        {{ project.title }}
      </p>
      <p class="yeart navmbno text-center text-4xl uppercase" v-if="project">
        {{ project.title }}
      </p>
      <p
        class="text-[#00000000] headingspages navmbno text-center text-4xl uppercase"
        v-if="project"
      >
        {{ project.title }}
      </p>
      <p
        class="headingspages navmbno text-center text-4xl uppercase"
        v-if="project"
      >
        {{ project.stitle }}
      </p>
      <!-- <p class="headingspages navmbno text-center text-4xl uppercase">
        {{ project.title }}
      </p> -->
      <div
        v-for="(section, index) in project.sections"
        :key="index"
        v-if="
          (section.layout1 && currentLayoutIndex === index) ||
          (section.layout2 && currentLayoutIndex === index) ||
          (section.layout3 && currentLayoutIndex === index) ||
          (section.layout4 && currentLayoutIndex === index) ||
          (section.layout5 && currentLayoutIndex === index) ||
          (section.layout6 && currentLayoutIndex === index)
        "
      >
        <!-- <Richtext
          v-if="section.layout1 === true"
          class="headingspages navmbno text-center text-4xl uppercase"
          :blocks="section.column0Text"
        ></Richtext>
        <Richtext
          v-if="section.layout2 === true"
          class="headingspages navmbno text-center text-4xl uppercase"
          :blocks="section.layout2Column1Text"
        ></Richtext>
        <Richtext
          v-if="section.layout3 === true"
          class="headingspages navmbno text-center text-4xl uppercase"
          :blocks="section.layout3Column3Text"
        ></Richtext>
        <Richtext
          v-if="section.layout4bigtext === true"
          class="headingspages navmbno text-center text-4xl uppercase"
          :blocks="section.layout4bigtext"
        ></Richtext> -->
        <!-- <p  v-if="section.layout1 === true"
          class="headingspages navmbno text-center text-4xl uppercase">
                  {{ section.location }}
                </p>
                <p  v-if="section.layout2 === true"
          class="headingspages navmbno text-center text-4xl uppercase">
                  {{ section.location }}
                </p>
                <p  v-if="section.layout3 === true"
          class="headingspages navmbno text-center text-4xl uppercase">
                  {{ section.location }}
                </p>
                <p  v-if="section.layout4 === true"
          class="headingspages navmbno text-center text-4xl uppercase">
                  {{ section.location }}
                </p>
              
                <Richtext
                v-if="section.layout5 === true"
          class="headingspages navmbno text-center text-4xl uppercase"
          :blocks="section.layout5subtitle"
        ></Richtext>
                <Richtext
                v-if="section.layout6 === true"
          class="headingspages navmbno text-center text-4xl uppercase"
          :blocks="section.layout6subtitle"
        ></Richtext> -->
      </div>

      <div class="navmbno">
        <p
          class="headingspagesslug pt-[2vw] nodes text-center text-4xl uppercase"
        >
          Publication
        </p>
      </div>
    </div>

    <div v-if="project" class="presshedindi">
      <p
        class="headingspagesslug pt-[2vw] nodes text-center text-4xl uppercase"
      >
        {{ project.title }}
      </p>
    </div>

    <!-- pl-[0.3vw] -->
    <div class="bgmobile relative min-h-screen flex flex-col p-[1vw]">
      <transition name="slide" mode="out-in">
        <div
          class="layouts"
          v-for="(section, index) in project.sections"
          :key="index"
          :class="{
            ['pop-in pop-in-' + (index + 1)]: true,
            otherlays: !section.layout1 || !section.layout2 || !section.layout3,
            lay4size: section.layout4,
          }"
          v-if="
            (section.layout1 && currentLayoutIndex === index) ||
            (section.layout2 && currentLayoutIndex === index) ||
            (section.layout3 && currentLayoutIndex === index) ||
            (section.layout4 && currentLayoutIndex === index) ||
            (section.layout5 && currentLayoutIndex === index) ||
            (section.layout6 && currentLayoutIndex === index)
          "
        >
          <!-- Layout 1 -->
          <div class="layout layout-1" v-if="section.layout1 === true">
            <div class="top-right-element" v-if="section.layout1date">
              <Richtext
                v-if="section.layout1date"
                class="contactinnerpressslug"
                :blocks="section.layout1date"
              ></Richtext>
            </div>

            <div class="column col-1">
              <p v-if="section.location" class="toplink p-[.5vw] pb-[1vw]">
                {{ section.location }}
              </p>
              <div class="imglay1cont">
                <img
                  v-if="section.mainImage"
                  class="mbimgcol1lay11 p-[.5vw] pb-[0] pt-[0] pop-in pop-in-2 lay1imsize"
                  :src="section.mainImage"
                  alt="Main Image"
                />
              </div>
              <div
                class="laytextall mblaytextall pop-in pt-[0] pb-[.5vw] pop-in-2"
              >
                <Richtext
                  v-if="section.column0Text"
                  class="p-[.5vw] mbl1subsp"
                  :blocks="section.column0Text"
                ></Richtext>
              </div>
              <div class="flex slideInD-in slideInD-in-2 w-[39vw] mbcollay1">
                <div class="flex flex-col">
                  <Richtext
                    v-if="section.column1Text"
                    class="contactinnerpressslug mbno p-[.5vw] lay1wonleu w-[43vw]"
                    :blocks="section.column1Text"
                  ></Richtext>
                  <Richtext
                    v-if="section.layout11bodymb"
                    class="contactinnerpressslug pb-2 deskno lay1wonleu"
                    :blocks="section.layout11bodymb"
                  ></Richtext>
                  <Richtext
                    v-if="section.column6Text"
                    class="contactinnerpressslug deskno lay1wonleu p-[.5vw] pb-[0]"
                    :blocks="section.column6Text"
                  ></Richtext>
                  <img
                    v-if="section.column7Image"
                    class="w-[43vw] deskno"
                    :src="section.column7Image.asset.url"
                    alt="Main Image"
                  />
                </div>

                <div class="flex flex-col">
                  <Richtext
                    v-if="section.column2Text"
                    class="contactinnerpressslug p-[.5vw] mbno mblcol2lay1"
                    :blocks="section.column2Text"
                  ></Richtext>
                  <Richtext
                    v-if="section.layout12bodymb"
                    class="contactinnerpressslug p-[.5vw] left-[4vw] relative pl-[4vw] w-[46vw] deskno "
                    :blocks="section.layout12bodymb"
                  ></Richtext>
                  <div class="mblcol2lay1 deskno">
                    <img
                      v-if="section.column4Text"
                      class="imglay1 p-[.5vw] pt-[5vw] pop-in pop-in-4"
                      :src="section.column4Image.asset.url"
                      alt="Main Image"
                    />
                  </div>
                  <p
                    v-if="section.column5Text"
                    class="imagetext mblcol2lay1 deskno p-[.5vw] pt-0 pb-0 slideInD-in slideInD-in-3"
                  >
                    IMAGE
                  </p>
                  <Richtext
                    v-if="section.column5Text"
                    class="imtitle2 underimglay1 deskno mblcol2lay1 slideInD-in slideInD-in-3 p-[.5vw]"
                    :blocks="section.column5Text"
                  ></Richtext>
                  <Richtext
                    v-if="section.layout13bodymb"
                    class="nodes contactinnerpressslug deskno mblcol2lay1 mblay1col4 p-[.5vw]"
                    :blocks="section.layout13bodymb"
                  ></Richtext>
                </div>
              </div>
            </div>

            <div class="mbno column col-2 slideInY-in slideInY-in-2">
              <Richtext
                v-if="section.column3Text"
                class="contactinnerpressslug mbno"
                :blocks="section.column3Text"
              ></Richtext>
              <Richtext
                v-if="section.column2Text"
                class="contactinnerpressslug deskno"
                :blocks="section.column2Text"
              ></Richtext>
              <Richtext
                v-if="section.column6Text"
                class="nodes contactinnerpressslug lay1subtext mbcoll1in p-[.5vw] pb-[0]"
                :blocks="section.column6Text"
              ></Richtext>
              <img
                v-if="section.column7Image"
                class="deskno"
                :src="section.column7Image.asset.url"
                alt="Main Image"
              />
            </div>

            <div class="column mbnob col-3 pt-[3vw] mblcol4lay1">
              <Richtext
                v-if="section.column4Text"
                class="contactinnerpressslug imtitle slideInY-in slideInY-in-2 underimglay1 p-[.5vw] w-[85%]"
                :blocks="section.column4Text"
              ></Richtext>
              <div class="">
                <img
                  v-if="section.column4Text"
                  class="imglay1 p-[.5vw] pop-in pop-in-4"
                  :src="section.column4Image.asset.url"
                  alt="Main Image"
                />
              </div>
              <p
                v-if="section.column5Text"
                class="imagetext p-[.5vw] pt-0 pb-0 slideInD-in slideInD-in-3"
              >
                IMAGE
              </p>
              <Richtext
                v-if="section.column5Text"
                class="imtitle2 underimglay1 slideInD-in slideInD-in-3 p-[.5vw]"
                :blocks="section.column5Text"
              ></Richtext>
              <Richtext
                v-if="section.column7Text"
                class="nodes contactinnerpressslug mblay1col4 p-[.5vw]"
                :blocks="section.column7Text"
              ></Richtext>
            </div>

            <div class="column col-4 slideInY-in slideInY-in-4">
              <div class="flex">
                <div class="flex nomb flex-col mbcoll1">
                  <img
                    v-if="section.column7Image"
                    class="lay3img p-[.5vw]"
                    :src="section.column7Image.asset.url"
                    alt="Main Image"
                  />
                  <!-- <Richtext
                  v-if="section.column6Text"
                    class="contactinnerpressslug lay1subtext mbcoll1in p-[.5vw]"
                    :blocks="section.column6Text"
                  ></Richtext> -->
                  <Richtext
                    v-if="section.column7Text"
                    class="contactinnerpressslug mblay1col4 p-[.5vw]"
                    :blocks="section.column7Text"
                  ></Richtext>
                </div>
              </div>
            </div>

            <div class="column col-5 lay1col5 slideIn-in slideIn-in-5"></div>
          </div>

          <div
            :class="{
              otherlays:
                !section.layout1 ||
                !section.layout2 ||
                !section.layout3 ||
                !section.layout5 ||
                !section.layout6,
              lay4size: section.layout4,
            }"
            v-if="section.layout1 === false"
          >
            <!-- Layout 2 -->
            <div class="layout layout-2" v-if="section.layout2 === true">
              <div class="top-right-element" v-if="section.layout2date">
                <Richtext
                  v-if="section.layout2date"
                  class="contactinnerpressslug imgntextlay22"
                  :blocks="section.layout2date"
                ></Richtext>
              </div>

              <div class="column col-1 pop-in pop-in-4">
                <p class="toplink toplink2mb p-[.5vw] pb-[2vw]">
                  {{ section.location }}
                </p>

                <Richtext
                  v-if="section.layout2Column1Text"
                  class="contactinnerpressslug lay2subtextn nodes mainmblay2 p-[.5vw] pop-in-4 lay1text imgntextlay22"
                  :blocks="section.layout2Column1Text"
                ></Richtext>

                <Richtext
                  v-if="section.layout2Column1Text"
                  class="contactinnerpressslug lay1subtext nomb mainmblay2 p-[.5vw] pop-in-4 lay1text imgntextlay22"
                  :blocks="section.layout2Column1Text"
                ></Richtext>
                <Richtext
                  v-if="section.layout2Column11Text"
                  class="contactinnerpressslug nomb p-[.5vw] imgntextlay22 aboveflower colmb"
                  :blocks="section.layout2Column11Text"
                ></Richtext>
              </div>

              <div class="nodes column pt-[1.7vw] col-2 col-3 pop-in pop-in-2">
                <div class="mbl2coltcon nodes">
                  <div class="contactinnerpressslug p-[.5vw]">
                    <div class="contactinnerpressslug nodes p-[.5vw] pt-0">
                      <Richtext
                        v-if="section.layout21bodymb"
                        class="contactinnerpressslug nodes p-[.5vw] imgntextlay22 aboveflower colmb"
                        :blocks="section.layout21bodymb"
                      ></Richtext>
                      <Richtext
                        v-if="section.layout2Column3Text"
                        class="contactinnerpressslug mbno p-[.5vw] w-[100vw] imgntextlay22 aboveflower colmb"
                        :blocks="section.layout2Column3Text"
                      ></Richtext>
                    </div>
                  </div>

                  <div class="imgntextlay22 deskl2textflex p-[.5vw]">
                    <Richtext
                        v-if="section.layout22bodymb"
                        class=" deskno p-[.5vw] w-[100vw] imgntextlay22 aboveflower "
                        :blocks="section.layout22bodymb"
                      ></Richtext>
                  
                    <div class="mbflex flowerimgcon">
                      <img
                        class="imgntextlay22 floimg p-[.5vw] mblay2imgsize"
                        :src="section.layout2Column4Image"
                        v-if="section.layout2Column4Image"
                        alt="Main Image"
                      />
                    </div>
                    <Richtext
                      v-if="section.layout2Column444Text"
                      class="toplinkl2mb text-center p-[.5vw]"
                      :blocks="section.layout2Column444Text"
                    ></Richtext>
                    <div class="mbflex nomblay">
                      <img
                        class="lay3imgmbv p-[.5vw] pt-[2vw]"
                        :src="section.layout2Column44Image"
                        v-if="section.layout2Column44Image"
                        alt="Main Image"
                      />
                    </div>
                    <Richtext
                      v-if="section.layout2Column44Text"
                      class="contactinnerpressslug mbno p-[.5vw] imgntextlay22 aboveflower"
                      :blocks="section.layout2Column44Text"
                    ></Richtext>
                    <Richtext
                      v-if="section.layout23bodymb"
                      class="contactinnerpressslug p-[.5vw] imgntextlay22 aboveflower"
                      :blocks="section.layout23bodymb"
                    ></Richtext>
                  </div>
                </div>
              </div>

              <div class="column pt-[1.7vw] col-2 col-3 pop-in pop-in-2">
                <img
                  v-if="section.layout2Image2"
                  class="pop-in pop-in-5 p-[.5vw]"
                  :src="section.layout2Image2"
                  alt="Main Image"
                />

                <div class="w-[40vw] mbbodylay22 deskl2flex">
                  <Richtext
                    v-if="section.layout2Column2Text"
                    :blocks="section.layout2Column2Text"
                    class="contactinnerpressslug nomblay lay2flsizedesk p-[.5vw]"
                  ></Richtext>
                  <Richtext
                    v-if="section.layout2Column3Text"
                    class="contactinnerpressslug nomblay lay2flsizedesk p-[.5vw]"
                    :blocks="section.layout2Column3Text"
                  ></Richtext>
                </div>
              </div>

              <div
                class="column nodes pt-[1.7vw] mbcol4lay2 col-4 pop-in pop-in-4"
              >
                <div
                  class="deskno contactinnerpressslug imgntextlay22 deskl2textflex p-[.5vw]"
                >
                  <div class="flex h-[70%] ">
                    <img
                      class=" object-cover"
                      :src="section.layout2Column5Image"
                      v-if="section.layout2Column5Image"
                      alt="Main Image"
                    />
                  </div>

                  <p
                    v-if="section.layout2Column4Text"
                    class="imagetext p-[.5vw] pb-0"
                  >
                    IMAGE
                  </p>
                  <Richtext
                    v-if="section.layout2Column4Text"
                    class="contactinnerpressslug p-[.5vw] pt-0 imtitle2"
                    :blocks="section.layout2Column4Text"
                  ></Richtext>
                </div>

                <div class="mbl2coltcon nodes">
                  <div class="contactinnerpressslug p-[.5vw]">
                    <div class="contactinnerpressslug nodes p-[.5vw] pt-0">
                      <Richtext
                        v-if="section.layout24bodymb"
                        class="contactinnerpressslug p-[.5vw] pb-[30vw]"
                        :blocks="section.layout24bodymb"
                      ></Richtext>
                    </div>
                  </div>

                  <div
                    class="mbno contactinnerpressslug imgntextlay22 deskl2textflex p-[.5vw]"
                  >
                    <p
                      v-if="section.layout2Column4Text"
                      class="imagetext p-[.5vw] pb-0"
                    >
                      IMAGE
                    </p>
                    <Richtext
                      v-if="section.layout2Column4Text"
                      class="contactinnerpressslug p-[.5vw] pt-0 imtitle2"
                      :blocks="section.layout2Column4Text"
                    ></Richtext>

                    <div class="flex">
                      <img
                        class="imgntextlay22"
                        :src="section.layout2Column5Image"
                        v-if="section.layout2Column5Image"
                        alt="Main Image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="column nomblay pt-[1.7vw] mbcol4lay2 col-4 pop-in pop-in-4"
              >
                <div class="flex flex-col">
                  <p
                    v-if="section.layout2Column4Text"
                    class="imagetext imgntextlay22 p-[.5vw] pb-0"
                  >
                    IMAGE
                  </p>
                  <Richtext
                    v-if="section.layout2Column4Text"
                    class="contactinnerpressslug p-[.5vw] pt-0 imgntextlay22 imtitle2 colmb"
                    :blocks="section.layout2Column4Text"
                  ></Richtext>
                  <Richtext
                    v-if="section.layout2Column44Text"
                    class="contactinnerpressslug p-[.5vw] imgntextlay22 aboveflower colmb"
                    :blocks="section.layout2Column44Text"
                  ></Richtext>
                </div>

                <div class="mbflex nomblay flowerimgcon">
                  <img
                    class="imgntextlay22 floimg p-[.5vw] mblay2imgsize"
                    :src="section.layout2Column4Image"
                    v-if="section.layout2Column4Image"
                    alt="Main Image"
                  />
                </div>

                <Richtext
                  v-if="section.layout2Column444Text"
                  class="toplink imgntextlay22 nomblay text-center p-[.5vw] belowflower"
                  :blocks="section.layout2Column444Text"
                ></Richtext>
                <div class="mbflex nomblay">
                  <img
                    class="imgntextlay22 p-[.5vw] mblay2imgsize2"
                    :src="section.layout2Column44Image"
                    v-if="section.layout2Column44Image"
                    alt="Main Image"
                  />
                </div>
              </div>

              <div class="column nomblay col-5 mbbotpad pop-in pop-in-3">
                <div class="flex">
                  <img
                    class="imgntextlay22 p-[.5vw]"
                    :src="section.layout2Column5Image"
                    v-if="section.layout2Column5Image"
                    alt="Main Image"
                  />
                </div>
                <Richtext
                  v-if="section.layout2Column5Text"
                  class="contactinnerpressslug nomblay imgntextlay22 p-[.5vw]"
                  :blocks="section.layout2Column5Text"
                ></Richtext>
              </div>
            </div>

            <!-- Layout 3 -->

            <div class="layout layout-3" v-if="section.layout3 === true">
              <div class="top-right-element" v-if="section.layout3date">
                <Richtext
                  v-if="section.layout3date"
                  class="contactinnerpressslug"
                  :blocks="section.layout3date"
                ></Richtext>
              </div>

              <div
                class="column nodesnav lay3co1mb flex-col col-3 col-4 col-5 pop-in pop-in-3"
              >
                <p class="toplink p-[.5vw] pt-[0vw] pb-[2vw]">
                  {{ section.location }}
                </p>
                <div class="flex">
                  <img
                    class="imglay1 p-[.5vw]"
                    :src="section.layout3Image3_5"
                    v-if="section.layout3Image3_5"
                    alt="Main Image"
                  />
                </div>
              </div>

              <div class="column col-1 pop-in pop-in-4">
                <p class="toplink nomblay p-[.5vw] pt-[0vw] pb-[2vw]">
                  {{ section.location }}
                </p>
                <Richtext
                  v-if="section.layout3Column1Text"
                  class="contactinnerpressslug p-[.5vw]"
                  :blocks="section.layout3Column1Text"
                ></Richtext>
                <Richtext
                  v-if="section.layout3Column3Text"
                  class="lay3subtext nodes mbfullwidthsubtext p-[.5vw] pt-0 colmb pop-in pop-in-4"
                  :blocks="section.layout3Column3Text"
                ></Richtext>
              </div>

              <div class="column col-2 pop-in pop-in-2">
                <p
                  v-if="section.layout3Column33Text"
                  class="imagetext nodes p-[.5vw] pb-0"
                >
                  IMAGE
                </p>
                <Richtext
                  v-if="section.layout3Column33Text"
                  class="contactinnerpressslug underimglay1 nodes mbfullwidth p-[.5vw] pt-0 imtitle2 colmb pop-in pop-in-4"
                  :blocks="section.layout3Column33Text"
                ></Richtext>
                <Richtext
                  v-if="section.layout3Column2Text"
                  class="contactinnerpressslug p-[.5vw]"
                  :blocks="section.layout3Column2Text"
                ></Richtext>
                <Richtext
                  v-if="section.layout3Column23Text"
                  class="contactinnerpressslug toplinkl3mb text-center p-[.5vw]"
                  :blocks="section.layout3Column23Text"
                ></Richtext>

                <div class="flex justify-center nodesnav">
                  <img
                    class="lay3img p-[.5vw] pt-[2vw]"
                    :src="section.layout3Column2Image"
                    alt="Main Image"
                  />
                </div>
                <img
                  class="imglay1 nomblay p-[.5vw] pt-[0]"
                  :src="section.layout3Column2Image"
                  alt="Main Image"
                />

                <Richtext
                  v-if="section.layout3Column22Text"
                  class="contactinnerpressslug p-[.5vw]"
                  :blocks="section.layout3Column22Text"
                ></Richtext>
              </div>

              <div class="column col-3 col-4 col-5 pop-in pop-in-3">
                <div class="flex nomblay">
                  <img
                    class="imglay1 p-[.5vw]"
                    :src="section.layout3Image3_5"
                    v-if="section.layout3Image3_5"
                    alt="Main Image"
                  />
                </div>

                <div class="flex mblay3col5pad">
                  <div class="flex nomblay flex-col mbfullwidth w-[87vw]">
                    <Richtext
                      v-if="section.layout3Column3Text"
                      class="lay3subtext mbfullwidthsubtext p-[.5vw] pt-0 colmb pop-in pop-in-4"
                      :blocks="section.layout3Column3Text"
                    ></Richtext>
                    <p
                      v-if="section.layout3Column33Text"
                      class="imagetext p-[.5vw] pb-0"
                    >
                      IMAGE
                    </p>
                    <Richtext
                      v-if="section.layout3Column33Text"
                      class="contactinnerpressslug mbfullwidth p-[.5vw] pt-0 imtitle2 colmb pop-in pop-in-4"
                      :blocks="section.layout3Column33Text"
                    ></Richtext>
                  </div>

                  <Richtext
                    v-if="section.layout3Column4Text"
                    class="contactinnerpressslug pop-in pop-in-1 p-[.5vw] pt-[0]"
                    :blocks="section.layout3Column4Text"
                  ></Richtext>
                  <Richtext
                    v-if="section.layout3Column5Text"
                    class="contactinnerpressslug p-[.5vw] pop-in pop-in-3 pt-[0]"
                    :blocks="section.layout3Column5Text"
                  ></Richtext>
                </div>
              </div>
            </div>

            <!-- Layout 4 -->
            <div
              class="layout-4 w-[100%] h-[100%] pop-in pop-in-1"
              v-if="section.layout4 === true"
            >
              <div class="h-[100vh]">
                <img
                  class="imglay4"
                  :src="section.layout4Image"
                  v-if="section.layout4bw === false"
                  alt="Main Image"
                />

                <img
                  class="imglay4 lay4bw"
                  :src="section.layout4Image"
                  v-if="section.layout4bw === true"
                  alt="Main Image"
                />
              </div>

              <div></div>

              <div
                class="deskno absolute pt-[15vw] top-0 left-0 flex flex-col items-center h-full w-full"
              >
                <div
                  class="logolay4 logolay4mb top-0 left-0 flex flex-col justify-start items-center pb-[5vw] w-full"
                >
                  <img
                    class="logoimglay4mb"
                    :src="section.layout4logo"
                    v-if="section.layout4logo"
                    alt="Main Image"
                  />

                  <p class="p-[.5vw] pb-[2vw]">
                    {{ section.location }}
                  </p>
                </div>

                <Richtext
                  v-if="section.layout4bigtext"
                  class="text-center biglay4 biglay4mb uppercase"
                  :blocks="section.layout4bigtext"
                ></Richtext>
              </div>

              <div
                class="mbnof absolute mbtextarea top-0 left-0 flex flex-col items-center h-full w-full"
              >
                <div
                  class="logolay4 top-0 left-0 flex flex-col justify-start items-center pb-[5vw] w-full"
                >
                  <img
                    class="logoimglay4"
                    :src="section.layout4logo"
                    v-if="section.layout4logo"
                    alt="Main Image"
                  />

                  <p class="p-[.5vw] pb-[2vw]">
                    {{ section.location }}
                  </p>
                </div>

                <Richtext
                  v-if="section.layout4bigtext"
                  class="text-center biglay4 uppercase"
                  :blocks="section.layout4bigtext"
                ></Richtext>
              </div>
            </div>

            <!-- Layout 5 -->
            <div class="layout layout-5 " v-if="section.layout5 === true">
              <div
                class="deskno column layout-5-col-1 w-[30vw] lastcollay5 pop-in pop-in-4"
              >
                <div class="flex items-center">
                  <img
                    class="pb-[.5vw] w-[40vw]"
                    :src="section.layout5logo"
                    v-if="section.layout5logo"
                    alt="Main Image"
                  />
                  <div class="flex flex-col pl-[12vw]">
                    <Richtext
                      v-if="section.layout5subtitle"
                      class="contactinnerpressslug lay1subtextmbv uppercase mainmblay2 lay1text imgntextlay22 pt-[.5vw] pop-in pop-in-3"
                      :blocks="section.layout5subtitle"
                    ></Richtext>
                  </div>
                </div>
              </div>

              <div
                class="deskno column col-3 col-5 pop-in pop-in-3 lastcollay5 w-[50vw]"
              >
                <Richtext
                  v-if="section.layout5tbodymb"
                  class="contactinnerpressslug"
                  :blocks="section.layout5tbodymb"
                ></Richtext>

                <img
                  class="pb-[4vw] pt-[4vw] w-[100%]"
                  :src="section.layout5imgsl"
                  v-if="section.layout5imgsl"
                  alt="Main Image"
                />

                <div class="flex mblay5col5padmb">
                  <div class="flex flex-col">
                    <img
                      class="pb-[4vw] h-[100%] object-cover"
                      :src="section.layout5imgsp"
                      v-if="section.layout5imgsp"
                      alt="Main Image"
                    />
                  </div>
                  <div class="flex flex-col">
                    <img
                      class="pb-[4vw]"
                      :src="section.layout5imgxsl"
                      v-if="section.layout5imgxsl"
                      alt="Main Image"
                    />
                    <img
                      class="h-[100%] pb-[4vw] object-cover"
                      :src="section.layout5imgxsp"
                      v-if="section.layout5imgxsp"
                      alt="Main Image"
                    />
                  </div>
                </div>
              </div>

              <div
                class="deskno column col-3 col-5 pop-in pop-in-3 lastcollay5 w-[50vw]"
              >
                <Richtext
                  v-if="section.layout5bbodymb"
                  class="contactinnerpressslug p-[.5vw] pop-in pop-in-3 pt-[0]"
                  :blocks="section.layout5bbodymb"
                ></Richtext>


                <div class="flex pb-[15vw] pt-[5vw]">
                  <img
                    class="pb-[.5vw] pr-[3vw] lay5lastimgmbv w-[100%]"
                    :src="section.layout5imglarge"
                    v-if="section.layout5imglarge"
                    alt="Main Image"
                  />
                  <Richtext
                    v-if="section.layout5col5sub"
                    class="contactinnerpressslug mbfullwidth p-[.5vw] pt-0 imtitle2 colmb pop-in pop-in-4"
                    :blocks="section.layout5col5sub"
                  ></Richtext>
                </div>
              </div>

              <div
                class="mbnob column layout-5-col-1 w-[30vw] lastcollay5 pop-in pop-in-4"
              >
                <img
                  class="pb-[1vw] w-[100%]"
                  :src="section.layout5imgsl"
                  v-if="section.layout5imgsl"
                  alt="Main Image"
                />

                <div class="flex mblay5col5pad">
                  <div class="flex flex-col">
                    <img
                      class="pb-[1vw]"
                      :src="section.layout5imgsp"
                      v-if="section.layout5imgsp"
                      alt="Main Image"
                    />
                    <Richtext
                      v-if="section.layout5subtitle"
                      class="contactinnerpressslug lay1subtext uppercase mainmblay2 lay1text imgntextlay22 pt-[.5vw] pop-in pop-in-3"
                      :blocks="section.layout5subtitle"
                    ></Richtext>
                  </div>
                  <div class="flex flex-col">
                    <img
                      class="pb-[1vw]"
                      :src="section.layout5imgxsl"
                      v-if="section.layout5imgxsl"
                      alt="Main Image"
                    />
                    <img
                      class="pb-[1vw]"
                      :src="section.layout5imgxsp"
                      v-if="section.layout5imgxsp"
                      alt="Main Image"
                    />
                  </div>
                </div>
              </div>

              <div class="mbnob column col-2 pop-in pop-in-2 w-[15vw]">
                <Richtext
                  v-if="section.layout5col3body"
                  class="contactinnerpressslug"
                  :blocks="section.layout5col3body"
                ></Richtext>
              </div>

              <div
                class="mbnob column col-3 col-4 col-5 pop-in pop-in-3 lastcollay5 w-[50vw]"
              >
                <div class="flex nomblay">
                  <img
                    class="pb-[.5vw] lay5lastimg w-[100%]"
                    :src="section.layout5imglarge"
                    v-if="section.layout5imglarge"
                    alt="Main Image"
                  />
                </div>

                <div class="flex mblay55col5pad">
                  <Richtext
                    v-if="section.layout5col4body"
                    class="contactinnerpressslug p-[.5vw] pop-in pop-in-3 pt-[0]"
                    :blocks="section.layout5col4body"
                  ></Richtext>

                  <Richtext
                    v-if="section.layout5col5body"
                    class="contactinnerpressslug pop-in pop-in-1 p-[.5vw] pt-[0]"
                    :blocks="section.layout5col5body"
                  ></Richtext>

                  <div class="flex lay5logocenter flex-col mbfullwidth">
                    <img
                      class="pb-[.5vw] lay5imsize"
                      :src="section.layout5logo"
                      v-if="section.layout5logo"
                      alt="Main Image"
                    />

                    <Richtext
                      v-if="section.layout5col5sub"
                      class="contactinnerpressslug mbfullwidth p-[.5vw] pt-0 imtitle2 colmb pop-in pop-in-4"
                      :blocks="section.layout5col5sub"
                    ></Richtext>
                  </div>
                </div>
              </div>
            </div>

            <!-- Layout 6 -->
            <div class="layout layout-5 layout-5mbv" v-if="section.layout6 === true">
              <div
                class="mbnob column layout-5-col-1 w-[30vw] mblay6colsize pop-in pop-in-4"
              >
                <img
                  class="w-[100%]"
                  :src="section.layout6image"
                  v-if="section.layout6image"
                  alt="Main Image"
                />
                <div class="imglay1cont">
                  <img
                    class="p-[.5vw] lay6imsize"
                    :src="section.layout6logo"
                    v-if="section.layout6logo"
                    alt="Main Image"
                  />
                </div>
              </div>

              <div
                class="desknob column layout-5-col-1 w-[34vw] pop-in pop-in-4"
              >
                <Richtext
                  v-if="section.layout6subtitle"
                  class="contactinnerpressslug w-[15vw] lay5subtext uppercase mainmblay2 lay1text imgntextlay22 pop-in pop-in-3 pt-[0]"
                  :blocks="section.layout6subtitle"
                ></Richtext>
                <div class="imglay1cont">
                  <img
                    class="p-[.5vw]  lay6imsizembv"
                    :src="section.layout6logo"
                    v-if="section.layout6logo"
                    alt="Main Image"
                  />
                </div>
                <Richtext
                  v-if="section.layout6col3sub"
                  class="contactinnerpressslug mbfullwidth pb-[.5vw] pt-[3vw] imtitle2 colmb pop-in pop-in-4"
                  :blocks="section.layout6col3sub"
                ></Richtext>
               
              </div>

             

              <div class="column deskno col-2 pop-in pop-in-2 w-[57vw]">
                <img
                  class="w-[100%]"
                  :src="section.layout6image"
                  v-if="section.layout6image"
                  alt="Main Image"
                />
              </div>

              <div
                class="mbnob column col-2 pop-in pop-in-2 w-[15vw] mblay6colsize"
              >
                <Richtext
                  v-if="section.layout6col3sub"
                  class="contactinnerpressslug mbfullwidth pb-[.5vw] pt-0 imtitle2 colmb pop-in pop-in-4"
                  :blocks="section.layout6col3sub"
                ></Richtext>
                <img
                  class="pb-[1vw] w-[100%]"
                  :src="section.layout6Imagesp"
                  v-if="section.layout6Imagesp"
                  alt="Main Image"
                />
                <img
                  class="w-[100%]"
                  :src="section.layout6Imagspe2"
                  v-if="section.layout6Imagspe2"
                  alt="Main Image"
                />
              </div>

              <div class="column deskno col-3 pop-in pop-in-3">
                <div class="flex mblay6col5padone pt-[1vw] ">
                  <Richtext
                    v-if="section.layout6col6bodymb"
                    class="contactinnerpressslug pop-in pop-in-1 pt-[0]"
                    :blocks="section.layout6col6bodymb"
                  ></Richtext>
                </div>

                <div class="flex justify-between ">
                  <img
                    class="pb-[1vw] w-[47.5%]"
                    :src="section.layout6Imagesp"
                    v-if="section.layout6Imagesp"
                    alt="Main Image"
                  />
                  <img
                    class="w-[47.5%]"
                    :src="section.layout6Imagspe2"
                    v-if="section.layout6Imagspe2"
                    alt="Main Image"
                  />
                </div>

                <div class="flex pt-[4vw] pb-[5vw]">
                  <img
                    class="pb-[.5vw] w-[100%]"
                    :src="section.layout6Imagelarlan"
                    v-if="section.layout6Imagelarlan"
                    alt="Main Image"
                  />
                </div>
              </div>

              <div class="mbnob column col-3 pop-in pop-in-3 w-[50vw]">
                <div class="flex lay6lastimg">
                  <img
                    class="pb-[.5vw] w-[100%] lay6lastimg"
                    :src="section.layout6Imagelarlan"
                    v-if="section.layout6Imagelarlan"
                    alt="Main Image"
                  />
                </div>

                <div class="flex mblay6col5pad">
                  <div class="flex flex-col lay5col-3 mblay6colsize">
                    <Richtext
                      v-if="section.layout6subtitle"
                      class="contactinnerpressslug w-[15vw] pb-[1vw] lay5subtext uppercase mainmblay2 lay1text imgntextlay22 pop-in pop-in-3 pt-[0]"
                      :blocks="section.layout6subtitle"
                    ></Richtext>
                    <Richtext
                      v-if="section.layout6col4body"
                      class="contactinnerpressslug pop-in pop-in-1 pt-[0]"
                      :blocks="section.layout6col4body"
                    ></Richtext>
                  </div>

                  <Richtext
                    v-if="section.layout6col5body"
                    class="contactinnerpressslug mblay6colsize w-[15vw] mblay6endtext col-4 pop-in pop-in-1 pt-[0]"
                    :blocks="section.layout6col5body"
                  ></Richtext>

                  <div
                    class="flex mblay6colsize flex-col col-5 mbfullwidth w-[87vw]"
                  >
                    <Richtext
                      v-if="section.layout6col6body"
                      class="contactinnerpressslug mblay6colsize w-[15vw] pop-in pop-in-1 pt-[0]"
                      :blocks="section.layout6col6body"
                    ></Richtext>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" -->
      <!-- Display the gridpress content here -->
      <div class="gridpress-container">
        <!-- Layout 1 -->
        <transition name="fade" mode="out-in">
          <div
            v-for="(section, index) in project.sections"
            :key="index"
            v-if="
              showContent1 && section.layout1 && currentLayoutIndex === index
            "
            class="slider absolute h-[100vh] overflow-hidden w-[100vw]"
            :style="getTransitionStyle(index)"
          >
            <div
              v-for="slide in section.slider1"
              :key="slide._key"
              class="slide"
            >
              <div
                v-for="image in slide.images"
                :key="image._key"
                class="slider-item"
                :class="['slide', { 'even-slide': index % 2 === 0 }]"
              >
                <img
                  @mouseenter="handleMouseEnter"
                  @mouseleave="handleMouseLeave"
                  :src="image.image"
                  :alt="`Slide Image ${image._key}`"
                  class="imglay1s p-[.5vw]"
                />
              </div>
            </div>
          </div>
        </transition>

        <!-- Layout 2 -->
        <transition name="fade" mode="out-in">
          <div
            v-for="(section, index) in project.sections"
            :key="index"
            v-if="
              showContent2 && section.layout2 && currentLayoutIndex === index
            "
            class="slider absolute h-[100vh] overflow-hidden w-[100vw]"
            :style="getTransitionStyle(index)"
          >
            <div
              v-for="slide in section.slider2"
              :key="slide._key"
              class="slide2"
            >
              <div
                v-for="image in slide.images"
                :key="image._key"
                class="slider-item"
                :class="['slide', { 'even-slide': index % 2 === 0 }]"
              >
                <img
                  @mouseenter="handleMouseEnter"
                  @mouseleave="handleMouseLeave"
                  :src="image.image"
                  :alt="`Slide Image ${image._key}`"
                  class="imglay1s p-[.5vw]"
                />
              </div>
            </div>
          </div>
        </transition>

        <!-- Layout 3 -->
        <transition name="fade" mode="out-in">
          <div
            v-for="(section, index) in project.sections"
            :key="index"
            v-if="
              showContent3 && section.layout3 && currentLayoutIndex === index
            "
            class="slider absolute h-[100vh] overflow-hidden w-[100vw]"
            :style="getTransitionStyle(index)"
          >
            <div
              v-for="slide in section.slider3"
              :key="slide._key"
              class="slide3"
            >
              <div
                v-for="image in slide.images"
                :key="image._key"
                class="slider-item"
                :class="['slide', { 'even-slide': index % 2 === 0 }]"
              >
                <img
                  @mouseenter="handleMouseEnter"
                  @mouseleave="handleMouseLeave"
                  :src="image.image"
                  :alt="`Slide Image ${image._key}`"
                  class="imglay1s p-[.5vw]"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div class="butcon">
        <button
          @click="handleButtonClick"
          @mousemove="updateCursorStyle"
          @mouseleave="resetCursorStyle"
          :class="['next-button', buttonCursorClass]"
        >
          {{ currentLayoutIndex + 1 }} / {{ totalLayouts }}
        </button>
      </div>
      <!-- <button
        @click="handleButtonClick"
        @mousemove="updateCursorStyle"
        @mouseleave="resetCursorStyle"
        :class="['next-button', buttonCursorClass]"
      >
        {{ currentLayoutIndex + 1 }} / {{ totalLayouts }}
      </button> -->
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
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "pressindi" && slug.current == "${params.slug}"] { ...,
        title,
        stitle,
     
        "archiveSlug": archive->slug.current,


        mainImage {
          asset-> {
            _id,
            url
          }
        },


       sections[] {
        locationlink,
        location,

      "slider1": slider1[]{
      images[]{
        "image": image.asset->url
      }
    },

       "slider2": slider2[]{
      images[]{
        "image": image.asset->url
      }
    },

       "slider3": slider3[]{
      images[]{
        "image": image.asset->url
      }
    },

        layout,
        layout1,
        layout2,
        layout3,
        layout4,
        layout5,
        layout6,
        "mainImage": mainImage.asset->url,
        column0Text,
        column1Text,
        column2Text,
        column3Text,
        column4Image { asset-> { _id, url } },
        column4Text,
        column5Text,
        column6Text,
        column7Image  { asset-> { _id, url } },
        column7Text,
        layout1date,
        layout2Column1Text,
        layout2Column11Text,
        "layout2Image2": layout2Image2.asset->url,
        layout2Column2Text,
        layout2Column3Text,
        layout2Column4Text,
        layout2Column44Text,
        layout2Column444Text,
        "layout2Column4Image": layout2Column4Image.asset->url,
        "layout2Column44Image": layout2Column44Image.asset->url,
        "layout2Column5Image": layout2Column5Image.asset->url,
        layout2Column5Text,
        layout2date,
        layout3Column1Text,
        layout3Column2Text,
        "layout3Column2Image": layout3Column2Image.asset->url,
        layout3Column22Text,
        layout3Column23Text,
        "layout3Image3_5": layout3Image3_5.asset->url,
        layout3Column3Text,
        layout3Column33Text,
        layout3Column4Text,
        layout3Column5Text,
        layout3date,
        "layout4Image": layout4Image.asset->url,
        "layout4logo": layout4logo.asset->url,
        layout4smalltext,
        layout4bigtext,
        layout4bw,
        "layout5imgsl": layout5imgsl.asset->url,
        "layout5imgsp": layout5imgsp.asset->url,
        layout5subtitle,
        "layout5imgxsl": layout5imgxsl.asset->url,
        "layout5imgxsp": layout5imgxsp.asset->url,
        layout5col3body,
        "layout5imglarge": layout5imglarge.asset->url,
        layout5col4body,
        layout5col5body,
        "layout5logo": layout5logo.asset->url,
        layout5col5sub,
        "layout6image": layout6image.asset->url,
        "layout6logo": layout6logo.asset->url,
        layout6col3sub,
        "layout6Imagesp": layout6Imagesp.asset->url,
        "layout6Imagspe2": layout6Imagspe2.asset->url,
        "layout6Imagelarlan": layout6Imagelarlan.asset->url,
        layout6subtitle,
        layout6col4body,
        layout6col5body,
        layout6col6body,
        layout6col6bodymb,
        layout11bodymb,
        layout12bodymb,
        layout13bodymb,
        layout21bodymb,
        layout22bodymb,
        layout23bodymb,
        layout24bodymb,
        layout5tbodymb,
        layout5bbodymb,

      }
      } | order(_updatedAt desc)[0]`;

    const project = await $sanity.fetch(query);

    return { project };
  },
  data() {
    return {
      randomPositions: [],
      index: 0,
      realIndex: 0,
      step: 0,
      isBackNavigation: false,
      imageNumberPosition: { top: 0, left: 0 },
      isModalOpen: false, // Set the initial state of the modal
      currentLayoutIndex: 0,
      lottieInstance: null,
      slides: Array(10).fill({}),
      hoveredIndex: null,
      popupVisible: false,
      popupImage: "",
      popupPosition: { top: 100, left: 100 },
      offset: { x: 0, y: 0 },
      showContent: false,
      showContent1: false,
      showContent2: false,
      showContent3: false,
      currentLayoutIndex: 0,
      buttonCursorClass: "cursor-default",
      currentLayoutIndex: 0,
      // totalLayouts: '3'
    };
  },
  computed: {
    ...mapState(["meta", "metaemails", "projects"]),
    totalLayouts() {
      return this.project?.sections?.length || 0;
    },
    ...mapState(["gridpubindi"]),
  },
  methods: {
    showLayoutsWithDelay() {
      setTimeout(() => {
        this.showContent1 = true;
      }, 3000); // Show immediately
      setTimeout(() => {
        this.showContent2 = true;
      }, 3000); // Delay by 3000ms (3 seconds)
      setTimeout(() => {
        this.showContent3 = true;
      }, 3000); // Delay by 6000ms (6 seconds)
    },

    closeModal() {
      this.isModalOpen = false; // Close the modal
    },

    nextLayout() {
      if (this.currentLayoutIndex < this.totalLayouts - 1) {
        this.currentLayoutIndex++;
      } else {
        this.currentLayoutIndex = 0;
      }
    },
    // Navigate to the previous layout
    prevLayout() {
      if (this.currentLayoutIndex > 0) {
        this.currentLayoutIndex--;
      }
    },

    handleButtonClick(event) {
      const buttonWidth = event.currentTarget.offsetWidth;
      const clickPosition = event.offsetX;

      if (clickPosition < buttonWidth / 2) {
        this.prevLayout();
      } else {
        this.nextLayout();
      }
    },
    prevLayout() {
      if (this.currentLayoutIndex > 0) {
        this.currentLayoutIndex--;
      }
    },
    nextLayout() {
      if (this.currentLayoutIndex < this.totalLayouts - 1) {
        this.currentLayoutIndex++;
      }
    },
    updateCursorStyle(event) {
      const buttonWidth = event.currentTarget.offsetWidth;
      this.buttonCursorClass =
        event.offsetX < buttonWidth / 2 ? "cursor-left" : "cursor-right";
    },
    resetCursorStyle() {
      this.buttonCursorClass = "";
    },

    playSegment() {
      // Play from frame 11 to 20
      if (this.lottieInstance) {
        this.lottieInstance.playSegments([55, 20], true);
      }
    },
    getRandomStyle() {
      const top = `${Math.random() * 10}vw`; // Adjust range as needed
      const width = `${Math.random() * 90}vw`;
      const left = `${Math.random() * 90}vw`; // Adjust range as needed
      return {
        position: "absolute",
        top,
        width,
        left,
        opacity:
          this.hoveredIndex !== null ? (this.hoveredIndex === -1 ? 0 : 1) : 1,
      };
    },
    openPopup(imageSrc) {
      this.popupImage = imageSrc;
      this.popupVisible = true;
    },
    closePopup() {
      console.log("Close button clicked");
      this.popupVisible = false;
      // this.popupVisible = true;
    },
    startDrag(event) {
      this.offset = {
        x: event.clientX - this.popupPosition.left,
        y: event.clientY - this.popupPosition.top,
      };
      document.addEventListener("mousemove", this.drag);
      document.addEventListener("mouseup", this.stopDrag);
    },
    drag(event) {
      this.popupPosition = {
        top: event.clientY - this.offset.y,
        left: event.clientX - this.offset.x,
      };
    },
    stopDrag() {
      document.removeEventListener("mousemove", this.drag);
      document.removeEventListener("mouseup", this.stopDrag);
    },
    // handleMouseEnter(index) {
    //   this.hoveredIndex = index;
    // },
    // handleMouseLeave(index) {
    //   this.hoveredIndex = null;
    // },
    handleMouseEnter(event) {
      event.target.classList.add("hovered"); // Add "hovered" class to hide the image
    },
    handleMouseLeave(event) {
      // Do nothing here to prevent reverting back to original opacity
    },

    getTransitionStyle(index) {
      return {
        transitionDelay: `${index * 4}s`, // Delay before transition starts
        // transitionDuration: '.4s',
      };
    },
    // handleMouseEnter() {
    //   // Your mouse enter logic
    // },
    // handleMouseLeave() {
    //   // Your mouse leave logic
    // },
    // ... other methods
  },
  mounted() {
    this.showLayoutsWithDelay();

    setTimeout(() => {
      this.showContent = true;
    }, 3000); // 5 seconds in milliseconds

    // this.generateRandomPositions();

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
  },
};
</script>

<style scoped>
.mblay6col5pad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  gap: 1rem;
  width: 100%;
}

.mblay5col5pad {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  gap: 1vw;
  width: 100%;
}

.mblay55col5pad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  gap: 1rem;
  width: 100%;
}

.lay1imsize {
  height: 30vh;
  height: auto;
  max-height: 30vh;
}

.lay6imsize {
  height: 30vh;
  height: auto;
  max-height: 15vh;
}

.lay5imsize {
  height: 10vh;
  height: auto;
  max-height: 10vh;
}

.lay5logocenter {
  display: flex;
  align-items: flex-start;
}

.lay6lastimg {
  height: 60vh;
  object-fit: cover;
}

.lay5lastimg {
  height: 50vh;
  object-fit: cover;
}

.imglay1cont {
  display: flex;
  justify-content: center;
}

/*lay4*/
.imglay4 {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.lay4size {
  height: 100%;
  width: 100%;

  height: 100vh;
  width: 100vw;
  top: 0vh;
  left: 0vw;
  position: absolute;
}

.logoimglay4 {
  height: auto;
  width: 11vw;
}

.lay5subtext {
  font-size: 1.4vw;
  /* font-weight: bolder; */
  font-family: "NHaas";
}

.biglay4 {
  font-size: 7.5vw;
  color: white;
  line-height: 8.5vw;
  width: 75vw;
  font-family: "RomainHeadlineTrial";
}

.logolay4 {
  align-content: center;
  flex-wrap: wrap;
  padding-top: 3vw;
  color: white;
}

.logolay4 p {
  text-decoration: underline;
  font-family: "GT-Sectra-Book-Italic";
  font-size: 1.7vw;
}

.lay4bw {
  filter: grayscale(100);
}
/*lay4end */

.next-button {
  cursor: default; /* Default cursor */
}

.next-button.cursor-left {
  cursor: w-resize; /* Left arrow cursor */
  cursor: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjExNyAxMmw3LjUyNyA2LjIzNS0uNjQ0Ljc2NS05LTcuNTIxIDktNy40NzkuNjQ1Ljc2NC03LjUyOSA2LjIzNmgyMS44ODR2MWgtMjEuODgzeiIvPjwvc3ZnPg=="),
    auto !important;
}

.next-button.cursor-right {
  cursor: e-resize; /* Right arrow cursor */
  cursor: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMS44ODMgMTJsLTcuNTI3IDYuMjM1LjY0NC43NjUgOS03LjUyMS05LTcuNDc5LS42NDUuNzY0IDcuNTI5IDYuMjM2aC0yMS44ODR2MWgyMS44ODN6Ii8+PC9zdmc+"),
    auto !important;
}

.next-button {
  border-top: 0.05vw solid black;
  border: 0.05vw solid black;
  border-radius: 0%;
  /* background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: 0 0;
  background-position: initial;
  background-repeat: no-repeat; */
  transition: background-color 0.8s ease;
  background-color: #e6e5e4;
}

.next-button:hover {
  transition: background-color 0.8s ease;
  background-color: #121212;
}

.fade-enter-active {
  transition: opacity 2s ease;
}

.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0; /* Start and end at 0 opacity */
}

.imglay1s:hover {
  /* opacity: 0; */
}

.popup-overlay {
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-image: url("./static/background.jpg");
  background-size: 102vw;
  background-size: 192vh;
  background-position: unset;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  cursor: grab;
  display: flex;
  flex-direction: column;
  border: 0.05vw solid black;
}

.popup-image {
  max-width: 100%;
  max-height: 100%;
  width: 52vw;
  cursor: pointer;
  pointer-events: none;
  font-size: 20vw;
}

.popup-imageclose {
  max-width: 100%;
  max-height: 100%;
  width: 52vw;
  cursor: pointer;
  font-size: 20vw;
  font-size: 1vw;
  height: 4vh;
  display: flex;
  align-items: center;
  border-bottom: 0.05vw solid black;
  font-family: "RomainHeadlineTrial";
  text-transform: uppercase;
  padding: 0.5vw;
  z-index: 1000;
}

.slider-image img {
  transition: opacity 0.5s ease;
}

.slider img {
  transition: opacity 0.5s ease;
}

.random-image-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* .random-image img {
  max-width: 150px; 
  height: auto;
  transition: transform 0.3s ease;
}

.random-image img:hover {
  transform: scale(1.1);
  opacity: 0;
} */

.gridpress-container {
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  gap: 1rem;
  position: absolute;
  width: 100vw;
  height: auto;
  /* pointer-events: none; */
}

/* lay 1 */
.slider .slide:nth-child(1) img {
  position: absolute;
  width: 36vw;
  /* height: 50vh; */
  left: 9vw;
  top: 22.9vw;
}

.slider .slide:nth-child(2) img {
  position: absolute;
  width: 20vw;
  left: 47vw;
  top: 2.5vw;
}

.slider .slide:nth-child(3) img {
  position: absolute;
  width: 13vw;
  /* height: 50vh; */
  left: 81vw;
  top: 4vw;
}

/* lay 2 */
.slider .slide2:nth-child(1) img {
  position: absolute;
  width: 20vw;
  /* height: 50vh; */
  left: 9vw;
  top: 25vw;
}

.slider .slide2:nth-child(2) img {
  position: absolute;
  width: 28vw;
  left: 51vw;
  top: 13.4vw;
}

.slider .slide2:nth-child(3) img {
  position: absolute;
  width: 13vw;
  /* height: 50vh; */
  left: 81vw;
  top: 4vw;
  display: none;
}

/* lay 3 */
.slider .slide3:nth-child(1) img {
  position: absolute;
  width: 24vw;
  /* height: 50vh; */
  left: 0vw;
  top: 15vw;
}

.slider .slide3:nth-child(2) img {
  position: absolute;
  width: 15vw;
  left: 61vw;
  top: 31.5vw;
}

.slider .slide3:nth-child(3) img {
  position: absolute;
  width: 15vw;
  left: 61vw;
  top: 31.5vw;
  display: none;
}

.imglay1s {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.imglay1s.hovered {
  opacity: 0;
  /* display: none; */
  pointer-events: none;
}

.imglay1s:hover {
  /*  opacity: 0; */
}

/* .slider .slide:nth-child(even){
  display: ruby-text;
  position: absolute;
    top: 2vw;
    width: 20vw;
}

.slider .slide:nth-child(even) img{
  width: 100vw;
  
} */

/* .slider:hover{
opacity: 0;

} */

.even-slide {
  display: ruby-text;
}

.grid-item {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
}

.grid-item img {
  max-width: 100%;
  height: auto;
}

.imagetext {
  font-size: 0.9vw !important;
  font-family: "NHaas" !important;
}

.pop-in {
  animation: popIn 0.5s forwards;
  opacity: 0;
  transform: scale(0.8);
}

.pop-in-1 {
  animation-delay: 0.5s;
}

.pop-in-2 {
  animation-delay: 1s;
}

.pop-in-3 {
  animation-delay: 1.6s;
}

.pop-in-4 {
  animation-delay: 1.9s;
}

.pop-in-5 {
  animation-delay: 2.2s;
}

@keyframes popIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.slideIn-in {
  animation: slideIn 0.5s forwards;
  opacity: 0;
  transform: translateX(-100vw); /* Start off-screen to the left */
}

.slideIn-in-1 {
  animation-delay: 0.5s;
}

.slideIn-in-2 {
  animation-delay: 1s;
}

.slideIn-in-3 {
  animation-delay: 1.6s;
}

.slideIn-in-4 {
  animation-delay: 1.9s;
}

.slideIn-in-5 {
  animation-delay: 2.2s;
}

@keyframes slideIn {
  from {
    transform: translateX(-100vw); /* Start off-screen to the left */
    opacity: 0;
  }
  to {
    transform: translateX(0); /* Slide into original position */
    opacity: 1;
  }
}

.slideInY-in {
  animation: slideInY 0.5s forwards;
  /* animation: slideIn 0.5s forwards; */
  /* opacity: 0; */
  transform: translateY(-100vw); /* Start off-screen to the left */
}

.slideInY-in-1 {
  animation-delay: 1.6s;
}

.slideInY-in-2 {
  animation-delay: 1.9s;
}

.slideInY-in-3 {
  animation-delay: 2.2s;
}

.slideInY-in-4 {
  animation-delay: 2.5s;
}

@keyframes slideInY {
  from {
    transform: translateY(-100vh); /* Start off-screen to the left */
    opacity: 1;
  }
  to {
    transform: translateY(0); /* Slide into original position */
    opacity: 1;
  }
}

.slideInD-in {
  animation: slideInD 0.5s forwards;
  /* animation: slideIn 0.5s forwards; */
  /* opacity: 0; */
  transform: translateY(100vw); /* Start off-screen to the left */
}

.slideInD-in-2 {
  animation-delay: 1.9s;
}

.slideInD-in-3 {
  animation-delay: 2.2s;
}

@keyframes slideInD {
  from {
    transform: translateY(100vh); /* Start off-screen to the left */
    opacity: 1;
  }
  to {
    transform: translateY(0); /* Slide into original position */
    opacity: 1;
  }
}

.butcon {
  display: flex;
  width: 100%;
  justify-content: center;
}

.next-button {
  padding: 1rem;
  padding: 0.4vw;
  cursor: pointer;
  transition: background-color 0.3s;
  position: fixed;
  bottom: 2.5vh;
  bottom: 0vh;
  /* width: 100%; */
  width: 97%;
  width: 100%;
  text-transform: uppercase;
  font-family: "GT-Sectra-Book";
  font-family: "NHaas" !important;
  transition: color 0.8s ease;
}

.next-button:hover {
  /* background-color: #0056b3; */
  transition: color 0.8s ease;
  color: #ccc;
}

.next-button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%); /* Slide in from the right */
}

.toplink {
  text-decoration: underline;
  /* font-style: italic; */

  letter-spacing: 0.5px;
  font-family: "GT-Sectra-Book-Italic";
}

.imglay1 {
  width: 100%;
}
.bgmobile {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  /* height: 100vh; */
  /* background-image: url("./static/LeftBG.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  background-color: #e6e5e4;
  /* height: 100vh; */
  overflow-y: scroll;
  font-size: 1.2vw;
  justify-content: center;
  justify-content: flex-start;
  font-family: "RomainHeadlineTrial";
  font-family: "GT-Sectra-Book-Italic";
  font-family: "NHaasGrotesk";
  font-family: "RomainTextTrial";
  font-family: "GT-Sectra-Book";
  overflow-y: hidden;
  height: 100vh;
  overflow-y: scroll;
  /* font-family: "GT-Bold"; */
}

.layouts {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between layouts */
  padding-top: 3vw;
}

.layout {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Five equal columns */
  gap: 10px; /* Space between columns */
  gap: 1.5vw;
  width: 98.4vw;
  width: 100%;
  height: 100%;
  margin-bottom: 5vw;
}

.layout-1 .col-1 {
  grid-column: span 2; /* Image spans two columns */
}

.layout-5-col-1 {
  grid-column: span 2; /* Image spans two columns */
}

.col-1 {
  grid-column: span 2; /* Span across two columns */
  grid-row: span 2; /* Span across two rows */
}

.layout-1 .col-4 {
  grid-column: span 1; /* Image takes one column */
}

/* .layout-2{
  grid-template-columns: repeat(6, 1fr); 
} */

/* .layout-2 .col-6{
  grid-column: span .1;
} */

.datelay2 {
  /* transform: rotateZ(270deg); */
  width: 100vw;
  position: absolute;
  height: 100vh;
  display: flex;
  /* left: 83vw; */
}

.presshedindi {
  z-index: 10000000;
  position: absolute;
  font-family: "GT-Bold";
  font-family: "MinionPro-Regular";
  font-family: "RomainHeadlineTrial";
  /* font-family: 'GT-SuperBook'; */
  font-size: medium;
  position: relative;
  font-size: 3.5vw;
  z-index: 100;
  position: absolute;
  position: fixed;
  line-height: normal;
  width: 100%;
  pointer-events: none;
  top: 0.7vh !important;
  display: flex;
  justify-content: center;
}

.datein1 {
  top: 0;
  font-size: 1vw;
  position: relative;
  left: 13.8vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important;

  top: -5.9vw;
  left: 14.1vw;
  font-size: 0.9vw;
  position: absolute;
  left: 13.5vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important;
}

.datein2 {
  top: 3.3vw;
  font-size: 0.9vw;
  position: absolute;
  left: 13.5vw;
  left: 14.5vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important;
}

.datein3 {
  /* top: 3.8vw;
  font-size: 1vw;
  position: absolute;
  left: 54.6vw;
  text-transform: uppercase;
  height: -moz-max-content;
  height: max-content;
  transform: rotateZ(270deg);
  font-family: "NHaas" !important; */
}

.top-right-element {
  font-size: 1vw;
  position: fixed;
  font-family: "NHaas" !important;
  top: 7vw;
  right: -4.4vw;
  right: -4.7vw;
  transform: rotateZ(90deg);
  transform: rotateZ(270deg);
  z-index: 1000;
  top: 3.9vw;
  right: -1.3vw;
  top: 4vw;
  right: -0.7vw;
  top: 3.9vw;
  right: -2.5vw;
}

.flowerimgcon {
  display: flex;
  justify-content: center;
}

.floimg {
  width: 12vw;
  padding: 0;
}

.aboveflower {
  padding-bottom: 0;
}

.belowflower {
  padding-top: 2vw;
}

.layout-2 .col-1,
.layout-2 .col-5 {
  grid-column: span 1; /* Takes one column */
}

.layout-2 .col-2,
.layout-2 .col-3 {
  grid-column: span 2; /* Image spans two columns */
}

.layout-3 .col-1 {
  grid-column: span 1; /* Image spans two columns */
}

.layout-3 .col-2 {
  grid-column: span 1; /* Text above image */
}

.layout-3 .col-3 {
  grid-column: span 3; /* Image spans three columns */
}

.layout-5 {
  grid-template-columns: repeat(6, 1fr) !important;
  /* gap: .2vw !important; */
}

.layout-5 .col-3 {
  grid-column: span 3;
}

.lay5col-3 {
  grid-column: span 1;
}

.deskl2flex {
  display: flex;
}

.lay2flsizedesk {
  width: 50vw;
}

.deskno {
  display: none;
}

.mbno {
  display: inherit;
}

.mbnof {
  display: flex;
}

.mbnob {
  display: block;
}

.logolay4 {
  padding-top: 6vw;
}

.logoimglay4 {
  width: 10vw;
}

.lay1wonleu {
  width: auto;
}

.desknob{
display: none;
}
/* Additional responsive styling */
@media (max-width: 768px) {
  .desknob{
display: block;
  }

  .lay6imsizembv{
object-fit: contain;
height: auto;
        width: auto;
        padding-top: 4vw;
        padding-bottom: 4vw;
  }

  .layout-5mbv{
    padding-top: 4vh !important;
    column-gap: 3.5vw !important;
  }

  .lay3imgmbv {
    width: 30vw;
    padding-bottom: 4vw;
  }

  .lay1wonleu {
    width: 43vw;
  }

  .lay5lastimgmbv {
    height: 15vh;
  }

  .lay6imsizemb {
    /* height: 30vh; */
    width: auto;
    /* height: auto; */
    max-height: 11vh;
  }

  .mbtextarea {
    justify-content: center;
  }

  .mbnof {
    display: none;
  }

  .mbnob {
    display: none;
  }

  /* .next-button {
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    position: fixed;
    bottom: 3.5vh;
    width: 95%;
    text-transform: uppercase;
    font-family: "GT-Sectra-Book";
    font-family: "NHaas" !important;
    transition: color 0.8s ease;
    color: black  !important;
  } */

  .biglay4 {
    font-size: 9.5vw;
    line-height: 10.5vw;
    color: white;
    width: 100vw;
    font-family: "RomainHeadlineTrial";
  }

  .mblay6col5pad {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    gap: 1rem;
    width: 100%;
  }

  .mblay6col5padone {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0rem;
    gap: 0rem;
    width: 100%;
  }

  .mblay6colsize {
    width: 44vw;
  }

  .lay5subtext {
    font-size: 4.4vw;
    /* font-weight: bolder; */
    font-family: "NHaas";
  }

  .layout-5 {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .lay6lastimg {
    width: 94vw;
  }

  .lastcollay5 {
    width: 94vw;
  }

  .mblay6endtext {
    padding-top: 1vw !important;
    padding-bottom: 0 !important;
  }

  .logolay4 p {
    font-size: 5.7vw;
  }

  .logoimglay4 {
    width: 30vw;
  }

  .mblay5col3body {
    width: 94vw;
  }

  .layout .layout-5 {
    display: flex;
  }

  .lay3img {
    width: 41vw;
    padding-bottom: 4vw;
  }

  .toplinkl3mb {
    text-decoration: underline;
    /* font-style: italic; */
    text-align: center;
    font-size: 3vw;
    letter-spacing: 0.5px;
    padding-top: 4vw;
    font-family: "GT-Sectra-Book-Italic";
  }

  .toplinkl2mb {
    text-decoration: underline;
    /* font-style: italic; */
    text-align: center;
    font-size: 3vw;
    letter-spacing: 0.5px;
    /* padding-top: 4vw; */
    font-family: "GT-Sectra-Book-Italic";
  }
  .toplink {
    text-decoration: underline;
    /* font-style: italic; */
    text-align: center;
    font-size: 3.5vw;
    letter-spacing: 0.5px;
    font-family: "GT-Sectra-Book-Italic";
  }

  .imglay1cont {
    display: flex;
    justify-content: center;
  }

  .layout {
    column-gap: 6.5vw;
    row-gap: 2vw;
  }

  .layout-2 .col-2,
  .layout-2 .col-3,
  .layout-2 .col-5 {
    grid-column: span 2;
    width: 94%;
    width: 100%;
  }

  .lay3co1mb {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .toplink2mb {
    width: 94%;
  }

  .mbimgcol1lay11 {
    width: 70%;
  }

  .mbl1subsp {
    padding-top: 5vw;
  }

  .mbno {
    display: none;
  }

  .deskno {
    display: inherit;
  }

  .logoimglay4mb {
    width: 24vw;
  }

  .logolay4mb p {
    font-size: 4.7vw;
  }

  .biglay4mb {
    padding-top: 24vh;
  }

  .imgntextlay22 {
    width: 97%;
    /* padding-right: 9vw; */
  }

  .textmbl2col2 {
    padding-right: 9vw;
  }

  .mbl2coltcon {
    padding-top: 5vw;
  }

  .mbcoll1 {
    flex-direction: row;
  }

  .mbcoll1in {
    padding-right: 2vw;
  }

  .bgmobile {
    padding: 3vw;
  }

  .next-button {
    padding: 2.5vw;
    font-size: 3vw;
    width: 100%;
    border: 0.05vw solid rgba(0, 0, 0, 0);
    border-top: 0.05vw solid black;
    border-radius: 0%;
    background-image: url("./static/LeftBG.png");
    background-size: cover;
    background-position: 0 0;
    background-position: initial;
    background-repeat: no-repeat;
  }

  .top-right-element {
    font-size: 1vw;
    position: fixed;
    font-family: "NHaas" !important;
    top: 6.5vw;
    right: -4.7vw;
    transform: rotateZ(90deg);
    transform: rotateZ(270deg);
    z-index: 1000;
    display: none;
  }

  .gridpress-container {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    gap: 1rem;
    position: fixed;
    width: 100vw;
    display: none;
  }

  .mbimgcol1lay1 {
    width: 97%;
  }

  .top-right-element {
    font-size: 2.5vw;
    position: fixed;
    font-family: "NHaas" !important;
    top: 25vw;
    right: -9.4vw;
    transform: rotateZ(90deg);
    z-index: 1000;
  }

  .mbbodylay22 {
    width: 100%;
  }

  .mblay5col5padmb {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    gap: 5vw;
    width: 100%;
  }
  /* .mblay24size{
  width: 97vw;
} */

  .mblay2imgsize {
    width: 54%;
  }

  .mbflex {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
  }

  .mblay2imgsize2 {
  }

  /* lay 1 */
  .slider .slide:nth-child(1) img {
    position: absolute;
    width: 57vw;
    left: 9vw;
    top: 60vw;
  }

  .slider .slide:nth-child(2) img {
    position: absolute;
    width: 51vw;
    left: -0.5vw;
    top: 180.5vw;
  }

  .slider .slide:nth-child(3) img {
    position: absolute;
    width: 31vw;
    left: 63vw;
    top: 19vw;
  }

  /* lay 2 */
  .slider .slide2:nth-child(1) img {
    position: absolute;
    width: 50vw;
    /* height: 50vh; */
    left: 8vw;
    top: 114vw;
  }

  .slider .slide2:nth-child(2) img {
    position: absolute;
    width: 54vw;
    left: 41vw;
    top: 37.4vw;
  }

  .slider .slide2:nth-child(3) img {
    position: absolute;
    width: 13vw;
    /* height: 50vh; */
    left: 81vw;
    top: 4vw;
    display: none;
  }

  /* lay 3 */
  .slider .slide3:nth-child(1) img {
    position: absolute;
    width: 56vw;
    left: 0vw;
    top: 79vw;
  }

  .slider .slide3:nth-child(2) img {
    position: absolute;
    width: 44vw;
    left: 73vw;
    top: 15.5vw;
  }

  .slider .slide3:nth-child(3) img {
    position: absolute;
    width: 15vw;
    left: 61vw;
    top: 31.5vw;
    display: none;
  }

  .headera {
    flex-direction: column;
    padding-bottom: 4vw !important;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    padding-top: 3.5vw;
    z-index: 100;
  }

  .presshedindi {
    font-family: "GT-Bold";
    font-family: "MinionPro-Regular";
    font-family: "RomainHeadlineTrial";
    font-size: medium;
    font-size: 3.5vw;
    line-height: normal;
    pointer-events: none;
    position: relative;
    position: absolute;
    position: fixed;
    top: 0.7vh !important;
    width: 100%;
    z-index: 100;
    padding-bottom: 3.5vw !important;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    padding-top: 2vw;
    z-index: 100;
  }

  .layout {
    padding-top: 5vh;
    grid-template-columns: repeat(2, 1fr); /* Two columns on smaller screens */
  }

  .bgmobile {
    font-size: 3vw;
    overflow: hidden;
    overflow-y: scroll;
    width: 100%;
  }

  .layout-2 .col-1,
  .layout-2 .col-5 {
    grid-column: span 2;
  }

  .colmb {
    width: 95vw;
  }

  .mbcollay1 {
    width: 100%;
  }

  /* .mblay1col4{
    width: 95vw;
  } */

  .col-4 {
    padding-top: 5vw;
    padding-bottom: 20vw;
  }

  .mblaytextall {
    padding-bottom: 5vw;
  }

  .lay1col5 {
    display: none;
  }

  .layout-1 .col-4 {
    grid-column: span 2;
  }

  .mblcol2lay1 {
    padding-left: 8vw;
  }

  .mblcol4lay1 {
    padding-left: 0vw;
    padding-top: 0;
  }

  .imagetext {
    font-size: 2.5vw !important;
    font-family: "NHaas" !important;
  }

  .mbfullwidth {
    width: 100%;
  }

  .mbcol4lay2 {
    padding-bottom: 0vw;
    width: 96%;
  }

  .mbbotpad {
    padding-bottom: 22vw !important;
  }

  .mbfullwidthsubtext {
    width: 30vw;
  }

  .imglay1 {
    padding-bottom: 4vw;
    padding-left: 0vw;
  }


}
</style>
