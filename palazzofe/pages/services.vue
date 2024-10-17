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
        <div class="nodes">
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
                      @click="setActiveSection('design')"
                      @mouseover="onHover('design')"
                      @mouseleave="onHoverLeave"
                      href="javascript:void(0)"
                    >
                      Design
                    </a>
                  </li>
                  <li>
                    <a
                      @click="setActiveSection('location')"
                       @mouseover="onHover('location')"
                      @mouseleave="onHoverLeave"
                      href="javascript:void(0)"
                    >
                      Location
                    </a>
                  </li>
                  <li>
                    <a
                      @click="setActiveSection('production')"
                      @mouseover="onHover('production')"
                      @mouseleave="onHoverLeave"
                      href="javascript:void(0)"
                    >
                      Production
                    </a>
                  </li>
                  <li>
                    <a
                      @click="setActiveSection('concierge')"
                      @mouseover="onHover('concierge')"
                      @mouseleave="onHoverLeave"
                      href="#Concierge"
                    >
                      Concierge
                    </a>
                  </li>
                  <li>
                    <a
                      @click="setActiveSection('activity')"
                      @mouseover="onHover('activity')"
                      @mouseleave="onHoverLeave"
                      href="#activity"
                    >
                      Activity
                    </a>
                  </li>
                  <li>
                    <a
                      @click="setActiveSection('celebrities')"
                      @mouseover="onHover('celebrities')"
                      @mouseleave="onHoverLeave"
                      href="#celebrities"
                    >
                      Celebrities
                    </a>
                  </li>
                  <li>
                    <a
                      @click="setActiveSection('music')"
                      @mouseover="onHover('music')"
                      @mouseleave="onHoverLeave"
                      href="#music"
                    >
                      Music
                    </a>
                  </li>
                  <li>
                    <a
                      @click="setActiveSection('products')"
                      @mouseover="onHover('products')"
                      @mouseleave="onHoverLeave"
                      href="#products"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      @click="setActiveSection('more')"
                      @mouseover="onHover('more')"
                      @mouseleave="onHoverLeave"
                      href="#more"
                    >
                      More
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <!-- <div class="allimg relative w-[100vw] h-[100vh] z-50">
        </div> -->
          </div>
        </transition>
        <!-- </button> -->
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
          <!-- Design -->
          <div
          
            :class="{
              'slide-in':
                activeSection === 'design' || hoveredSection === 'design',
              'slide-out':
                activeSection !== 'design' && hoveredSection !== 'design',
            }"
            :style="{
              zIndex:
                activeSection === 'design' || hoveredSection === 'design'
                  ? 0
                  : 0,
            }"
            class="right-content overflow-y-scroll flex-1"
            @click="closeSection"
            v-if="
              services &&
              (activeSection === 'design' || hoveredSection === 'design')
            "
          >
            <div
              :class="[
                'allrcont ',
                { allrcontb: !services.designContent.dcontent },
              ]"
              v-if="
                services &&
                (activeSection === 'design' || hoveredSection === 'design')
              "
            >
              <div class="sevcont">
                <div class="titcont titmb">
                  <button class='pt-[4vw]'   @click="closeSection">
                    <SvgClose :class="{ 'headbarc': activeSection, 'rotatesvg': !activeSection }" class=" w-[1.4vw] hover:cursor-pointer" />
                  </button>
                  <!-- <div ref="lottieAnimation3" class="lottie-container headbarc w-[1.4vw] hover:cursor-pointer"></div> -->


                  <h1 class="loctext pt-2">Design</h1>
                </div>

                <!-- Add class like production here -->
                <div
                  :class="[
                    'sevimcon',
                    { laybimsize: !services.designContent.dcontent },
                  ]"
                >
                  <!-- Add v-if for design image like in production -->
                  <img
                    v-if="
                      services.designContent.designImageUrl &&
                      (activeSection === 'design' ||
                        hoveredSection === 'design')
                    "
                    :src="services.designContent.designImageUrl"
                    alt="Design Image"
                    :class="[
                      'servimg',
                      'pointer-events-none',
                      { laybimsizein: !services.designContent.dcontent },
                    ]"
                  />
                </div>

                <div class="flex pl-[5vw] pb-[3vh]">
                  <!-- Add div and img and v-if statement like production here -->

                  <Richtext
                    v-if="
                      services.designContent.dcontent &&
                      (activeSection === 'design' ||
                        hoveredSection === 'design')
                    "
                    class="contactinner pr-[4vw] pb-0 w-[50%]"
                    :blocks="services.designContent.dcontent"
                  ></Richtext>

                  <!-- If no dcontent, show alternative image like production -->
                  <img
                    v-else="
                      services.designContent.designImageLayoutBUrl &&
                      (activeSection === 'design' ||
                        hoveredSection === 'design')
                    "
                    alt="Design Image Layout B"
                    class="laybimg pointer-events-none"
                  />

                  <!-- Add class like production here -->
                  <Richtext
                    class="contactinner pr-[4vw] w-[50%] pb-0"
                    :class="[
                      'contactinner',
                      { 'pt-[7vh]': !services.designContent.dcontent },
                    ]"
                    :blocks="services.designContent.dcontent2"
                  ></Richtext>
                </div>

                <div class="flex justify-end locmb">
                  <div class="mbspace w-[50vw] p-[2vw] pt-0">
                    <p class="text-[#00000000]">space</p>
                  </div>
                  <!-- Add class like production here -->
                  <div
                    :class="[
                      'locationtext',
                      { locationtextb: !services.designContent.dcontent },
                    ]"
                    class="w-[50vw] p-[2vw] pr-[3vw] pt-0"
                  >
                    <h1 class="loctext">Location</h1>
                    <a
                      class="loctextlink"
                      :href="services.designContent.dlocationlink"
                      >{{ services.designContent.dlocation }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Location -->
          <div
          id="location"
            :class="{
             
              'slide-in':
                activeSection === 'location' || hoveredSection === 'location',
              'slide-out':
                activeSection !== 'location' && hoveredSection !== 'location',
            }"
            :style="{
              zIndex:
                activeSection === 'location' || hoveredSection === 'location'
                  ? 10
                  : 1,
            }"
            class="right-content overflow-y-scroll flex-1"
            @click="closeSection"
            v-if="
              services &&
              (activeSection === 'location' || hoveredSection === 'location')
            "
          >
            <div
              :class="[
                'allrcont ',
                { allrcontb: !services.locationContent.lcontent },
              ]"
              v-if="
                services &&
                (activeSection === 'location' || hoveredSection === 'location')
              "
            >
              <div class="sevcont">
                <div class="titcont titmb">
                  <button class='pt-[4vw]' @click="closeSection">
                    <SvgClose class="headbarc w-[1.4vw] hover:cursor-pointer" />
                  </button>
                  <h1 class="loctext pt-2">Location</h1>
                </div>
                <div
                  :class="[
                    'sevimcon',
                    { laybimsize: !services.locationContent.lcontent },
                  ]"
                >
                  <img
                    v-if="
                      services.locationContent.locationImageUrl &&
                      (activeSection === 'location' ||
                        hoveredSection === 'location')
                    "
                    :src="services.locationContent.locationImageUrl"
                    alt="Location Image"
                    :class="[
                      'servimg',
                      'pointer-events-none',
                      { laybimsizein: !services.locationContent.lcontent },
                    ]"
                  />
                </div>
                <div :class="[
                    'textaup',
                    { texta: !services.productionContent.prcontent },
                  ]" class="flex pb-[3vh]">
                  <Richtext
                    v-if="
                      services.locationContent.lcontent &&
                      (activeSection === 'location' ||
                        hoveredSection === 'location')
                    "
                    class="contactinner pr-[4vw] pb-0 w-[50%]"
                    :blocks="services.locationContent.lcontent"
                  ></Richtext>

                  <!-- If no lcontent, show alternative image like production -->
                  <img
                    v-else="
                      services.locationContent.locationImageLayoutBUrl &&
                      (activeSection === 'location' ||
                        hoveredSection === 'location')
                    "
                    alt="Location Image Layout B"
                    class="laybimg pointer-events-none"
                  />

                  <Richtext
                    class="contactinner pr-[4vw] w-[50%] pb-0"
                    :class="[
                      'contactinner',
                      { 'pt-[7vh]': !services.locationContent.lcontent },
                    ]"
                    :blocks="services.locationContent.lcontent2"
                  ></Richtext>
                </div>

                <div class="locmb flex justify-end">
                  <div class="mbspace w-[50vw] p-[2vw] pt-0">
                    <p class="text-[#00000000]">space</p>
                  </div>
                  <div
                    :class="[
                      'locationtext',
                      { locationtextb: !services.locationContent.lcontent },
                    ]"
                    class="w-[50vw] p-[2vw] pr-[3vw] pt-0"
                  >
                    <h1 class="loctext">Location</h1>
                    <a
                      class="loctextlink"
                      :href="services.locationContent.llocationlink"
                      >{{ services.locationContent.llocation }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Production -->
          <div
            :class="{
              'slide-in':
                activeSection === 'production' ||
                hoveredSection === 'production',
              'slide-out':
                activeSection !== 'production' &&
                hoveredSection !== 'production',
            }"
            class="right-content overflow-y-scroll flex-1"
            @click="closeSection"
            v-if="
              services &&
              (activeSection === 'production' ||
                hoveredSection === 'production')
            "
          >
            <div
              :class="[
                'allrcont',
                { allrcontb: !services.productionContent.prcontent },
              ]"
              v-if="
                services &&
                (activeSection === 'production' ||
                  hoveredSection === 'production')
              "
            >
              <div class="sevcont">
                <div class="titcont titmb">
                  <!-- <a href=""> -->
                  <button class='pt-[4vw]' @click="closeSection">
                    <SvgClose class="headbarc w-[1.4vw] hover:cursor-pointer" />
                  </button>
                  <!-- </a>               -->
                  <h1 class="loctext pt-2">Production</h1>
                </div>
                <div
                  :class="[
                    'sevimcon',
                    { laybimsize: !services.productionContent.prcontent },
                  ]"
                >
                  <img
                    :src="services.productionContent.productionImageUrl"
                    alt="Design Image"
                    :class="[
                      'servimg',
                      'pointer-events-none',
                      { laybimsizein: !services.productionContent.prcontent },
                    ]"
                  />
                </div>
                
                <div :class="[
                    'textaup',
                    { texta: !services.productionContent.prcontent },
                  ]" class="flex pb-[3vh]">
                  <Richtext
                    v-if="services.productionContent.prcontent"
                    :blocks="services.productionContent.prcontent"
                    class="contactinner pr-[4vw] pb-0 w-[50%]"
                  ></Richtext>
                  <img
                    v-else
                    :src="services.productionContent.productionImageLayoutBUrl"
                    alt="Production Image Layout B"
                    class="laybimg pointer-events-none"
                  />

                  <Richtext
                    class="contactinner pr-[4vw] w-[50%] pb-0"
                    :class="[
                      'contactinner',
                      { 'pt-[7vh]': !services.productionContent.prcontent },
                    ]"
                    :blocks="services.productionContent.prcontent2"
                  ></Richtext>
                </div>

                <div class="flex justify-end locmb">
                  <div class="mbspace w-[50vw] p-[2vw] pt-0">
                    <p class="text-[#00000000]">space</p>
                  </div>
                  <div
                    :class="[
                      'locationtext',
                      { locationtextb: !services.productionContent.prcontent },
                    ]"
                    class="w-[50vw] p-[2vw] pr-[3vw] pt-0"
                  >
                    <h1 class="loctext">Location</h1>
                    <a
                      class="loctextlink"
                      :href="services.productionContent.prlocationlink"
                      >{{ services.productionContent.prlocation }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Products -->
          <div
            :class="{
              'slide-in':
                activeSection === 'products' || hoveredSection === 'products',
              'slide-out':
                activeSection !== 'products' && hoveredSection !== 'products',
            }"
            :style="{
              zIndex:
                activeSection === 'products' || hoveredSection === 'products'
                  ? 10
                  : 1,
            }"
            class="right-content overflow-y-scroll flex-1"
            @click="closeSection"
            v-if="
              services &&
              (activeSection === 'products' || hoveredSection === 'products')
            "
          >
            <div
              :class="[
                'allrcont',
                { allrcontb: !services.productsContent.pdcontent },
              ]"
              v-if="
                services &&
                (activeSection === 'products' || hoveredSection === 'products')
              "
            >
              <div class="sevcont">
                <div class="titcont titmb">
                  <button class='pt-[4vw]' @click="closeSection">
                    <SvgClose class="headbarc w-[1.4vw] hover:cursor-pointer" />
                  </button>
                  <h1 class="loctext pt-2">Products</h1>
                </div>
                <div
                  :class="[
                    'sevimcon',
                    { laybimsize: !services.productsContent.pdcontent },
                  ]"
                >
                  <img
                    v-if="services.productsContent.productsImageUrl"
                    :src="services.productsContent.productsImageUrl"
                    alt="Products Image"
                    :class="[
                      'servimg',
                      'pointer-events-none',
                      { laybimsizein: !services.productsContent.pdcontent },
                    ]"
                  />
                </div>
                <div :class="[
                    'textaup',
                    { texta: !services.productionContent.prcontent },
                  ]" class="flex pb-[3vh]">
                  <Richtext
                    v-if="services.productsContent.pdcontent"
                    class="contactinner pr-[4vw] pb-0 w-[50%]"
                    :blocks="services.productsContent.pdcontent"
                  ></Richtext>

                  <!-- If no pdcontent, show alternative image -->
                  <img
                    v-else
                    :src="services.productsContent.productsImageLayoutBUrl"
                    alt="Products Image Layout B"
                    class="laybimg pointer-events-none"
                  />

                  <Richtext
                    class="contactinner pr-[4vw] w-[50%] pb-0"
                    :class="[
                      'contactinner',
                      { 'pt-[7vh]': !services.productsContent.pdcontent },
                    ]"
                    :blocks="services.productsContent.pdcontent2"
                  ></Richtext>
                </div>

                <div class="flex justify-end locmb">
                  <div class="mbspace w-[50vw] p-[2vw] pt-0">
                    <p class="text-[#00000000]">space</p>
                  </div>

                  <div
                    :class="[
                      'locationtext',
                      { locationtextb: !services.productsContent.pdcontent },
                    ]"
                    class="w-[50vw] p-[2vw] pr-[3vw] pt-0"
                  >
                    <h1 class="loctext">Location</h1>
                    <a
                      class="loctextlink"
                      :href="services.productsContent.pdlocationlink"
                      >{{ services.productsContent.pdlocation }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- More -->

          <div
            :class="{
              'slide-in': activeSection === 'more' || hoveredSection === 'more',
              'slide-out':
                activeSection !== 'more' && hoveredSection !== 'more',
            }"
            class="right-content overflow-y-scroll flex-1"
            @click="closeSection"
            v-if="
              services &&
              (activeSection === 'more' || hoveredSection === 'more')
            "
          >
            <div
              :class="[
                'allrcont',
                { allrcontb: !services.moreContent.mocontent },
              ]"
              v-if="
                services &&
                (activeSection === 'more' || hoveredSection === 'more')
              "
            >
              <div class="sevcont">
                <div class="titcont titmb">
                  <button class='pt-[4vw]' @click="closeSection">
                    <SvgClose class="headbarc w-[1.4vw] hover:cursor-pointer" />
                  </button>
                  <h1 class="loctext pt-2">More</h1>
                </div>
                <div
                  :class="[
                    'sevimcon',
                    { laybimsize: !services.moreContent.mocontent },
                  ]"
                >
                  <img
                    v-if="services.moreContent.moreImageUrl"
                    :src="services.moreContent.moreImageUrl"
                    alt="More Image"
                    :class="[
                      'servimg',
                      'pointer-events-none',
                      { laybimsizein: !services.moreContent.mocontent },
                    ]"
                  />
                </div>
                <div :class="[
                    'textaup',
                    { texta: !services.productionContent.prcontent },
                  ]" class="flex pb-[3vh]">
                  <Richtext
                    v-if="services.moreContent.mocontent"
                    class="contactinner pr-[4vw] pb-0 w-[50%]"
                    :blocks="services.moreContent.mocontent"
                  ></Richtext>

                  <!-- If no mocontent, show alternative image -->
                  <img
                    v-else
                    :src="services.moreContent.moreImageLayoutBUrl"
                    alt="More Image Layout B"
                    class="laybimg pointer-events-none"
                  />

                  <Richtext
                    class="contactinner pr-[4vw] w-[50%] pb-0"
                    :class="[
                      'contactinner',
                      { 'pt-[7vh]': !services.moreContent.mocontent },
                    ]"
                    :blocks="services.moreContent.mocontent2"
                  ></Richtext>
                </div>
                <div class="flex justify-end locmb">
                  <div class="mbspace w-[50vw] p-[2vw] pt-0">
                    <p class="text-[#00000000]">space</p>
                  </div>
                  <div
                    :class="[
                      'locationtext',
                      { locationtextb: !services.moreContent.mocontent },
                    ]"
                    class="w-[50vw] p-[2vw] pr-[3vw] pt-0"
                  >
                    <h1 class="loctext">Location</h1>
                    <a
                      class="loctextlink"
                      :href="services.moreContent.molocationlink"
                      >{{ services.moreContent.molocation }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Concirerge -->
          <div
            :class="{
              'slide-in':
                activeSection === 'concierge' || hoveredSection === 'concierge',
              'slide-out':
                activeSection !== 'concierge' && hoveredSection !== 'concierge',
            }"
            class="right-content overflow-y-scroll flex-1"
            @click="closeSection"
            v-if="
              services &&
              (activeSection === 'concierge' || hoveredSection === 'concierge')
            "
          >
            <div
              :class="[
                'allrcont',
                { allrcontb: !services.conciergeContent.ccontent },
              ]"
              v-if="
                services &&
                (activeSection === 'concierge' ||
                  hoveredSection === 'concierge')
              "
            >
              <div class="sevcont">
                <div class="titcont titmb">
                  <button class='pt-[4vw]' @click="closeSection">
                    <SvgClose class="headbarc w-[1.4vw] hover:cursor-pointer" />
                  </button>
                  <h1 class="loctext pt-2">Concirerge</h1>
                </div>
                <div
                  :class="[
                    'sevimcon',
                    { laybimsize: !services.conciergeContent.ccontent },
                  ]"
                >
                  <img
                    v-if="services.conciergeContent.conciergeImageUrl"
                    :src="services.conciergeContent.conciergeImageUrl"
                    alt="Concirerge Image"
                    :class="[
                      'servimg',
                      'pointer-events-none',
                      { laybimsizein: !services.conciergeContent.ccontent },
                    ]"
                  />
                </div>
                <div :class="[
                    'textaup',
                    { texta: !services.productionContent.prcontent },
                  ]" class="flex pb-[3vh]">
                  <Richtext
                    v-if="services.conciergeContent.ccontent"
                    class="contactinner pr-[4vw] pb-0 w-[50%]"
                    :blocks="services.conciergeContent.ccontent"
                  ></Richtext>

                  <!-- If no ccontent, show alternative image -->
                  <img
                    v-else
                    :src="services.conciergeContent.concirergeImageLayoutBUrl"
                    alt="Concirerge Image Layout B"
                    class="laybimg pointer-events-none"
                  />

                  <Richtext
                    class="contactinner pr-[4vw] w-[50%] pb-0"
                    :class="[
                      'contactinner',
                      { 'pt-[7vh]': !services.conciergeContent.ccontent },
                    ]"
                    :blocks="services.conciergeContent.ccontent2"
                  ></Richtext>
                </div>
                <div class="flex justify-end locmb">
                  <div class="mbspace w-[50vw] p-[2vw] pt-0">
                    <p class="text-[#00000000]">space</p>
                  </div>
                  <div
                    :class="[
                      'locationtext',
                      { locationtextb: !services.conciergeContent.ccontent },
                    ]"
                    class="w-[50vw] p-[2vw] pr-[3vw] pt-0"
                  >
                    <h1 class="loctext">Location</h1>
                    <a
                      class="loctextlink"
                      :href="services.conciergeContent.clocationlink"
                      >{{ services.conciergeContent.clocation }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Activity -->
          <div
            :class="{
              'slide-in':
                activeSection === 'activity' || hoveredSection === 'activity',
              'slide-out':
                activeSection !== 'activity' && hoveredSection !== 'activity',
            }"
            class="right-content overflow-y-scroll flex-1"
            @click="closeSection"
            v-if="
              services &&
              (activeSection === 'activity' || hoveredSection === 'activity')
            "
          >
            <div
              :class="[
                'allrcont',
                { allrcontb: !services.activityContent.acontent },
              ]"
              v-if="
                services &&
                (activeSection === 'activity' || hoveredSection === 'activity')
              "
            >
              <div class="sevcont">
                <div class="titcont titmb">
                  <button class='pt-[4vw]' @click="closeSection">
                    <SvgClose class="headbarc w-[1.4vw] hover:cursor-pointer" />
                  </button>
                  <h1 class="loctext pt-2">Activity</h1>
                </div>
                <div
                  :class="[
                    'sevimcon',
                    { laybimsize: !services.activityContent.acontent },
                  ]"
                >
                  <img
                    v-if="services.activityContent.activityImageUrl"
                    :src="services.activityContent.activityImageUrl"
                    alt="Activity Image"
                    :class="[
                      'servimg',
                      'pointer-events-none',
                      { laybimsizein: !services.activityContent.acontent },
                    ]"
                  />
                </div>
                <div :class="[
                    'textaup',
                    { texta: !services.productionContent.prcontent },
                  ]" class="flex pb-[3vh]">
                  <Richtext
                    v-if="services.activityContent.acontent"
                    class="contactinner pr-[4vw] pb-0 w-[50%]"
                    :blocks="services.activityContent.acontent"
                  ></Richtext>

                  <!-- If no acontent, show alternative image -->
                  <img
                    v-else
                    :src="services.activityContent.activityImageLayoutBUrl"
                    alt="Activity Image Layout B"
                    class="laybimg pointer-events-none"
                  />

                  <Richtext
                    class="contactinner pr-[4vw] w-[50%] pb-0"
                    :class="[
                      'contactinner',
                      { 'pt-[7vh]': !services.activityContent.acontent },
                    ]"
                    :blocks="services.activityContent.acontent2"
                  ></Richtext>
                </div>
                <div class="flex justify-end locmb">
                  <div class="mbspace w-[50vw] p-[2vw] pt-0">
                    <p class="text-[#00000000]">space</p>
                  </div>
                  <div
                    :class="[
                      'locationtext',
                      { locationtextb: !services.activityContent.acontent },
                    ]"
                    class="w-[50vw] p-[2vw] pr-[3vw] pt-0"
                  >
                    <h1 class="loctext">Location</h1>
                    <a
                      class="loctextlink"
                      :href="services.activityContent.alocationlink"
                      >{{ services.activityContent.alocation }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Celebrities -->
          <div
            :class="{
              'slide-in':
                activeSection === 'celebrities' ||
                hoveredSection === 'celebrities',
              'slide-out':
                activeSection !== 'celebrities' &&
                hoveredSection !== 'celebrities',
            }"
            class="right-content overflow-y-scroll flex-1"
            @click="closeSection"
            v-if="
              services &&
              (activeSection === 'celebrities' ||
                hoveredSection === 'celebrities')
            "
          >
            <div
              :class="[
                'allrcont',
                { allrcontb: !services.celebritiesContent.clcontent },
              ]"
              v-if="
                services &&
                (activeSection === 'celebrities' ||
                  hoveredSection === 'celebrities')
              "
            >
              <div class="sevcont">
                <div class="titcont titmb">
                  <button class='pt-[4vw]' @click="closeSection">
                    <SvgClose class="headbarc w-[1.4vw] hover:cursor-pointer" />
                  </button>
                  <h1 class="loctext pt-2">Celebrities</h1>
                </div>
                <div
                  :class="[
                    'sevimcon',
                    { laybimsize: !services.celebritiesContent.clcontent },
                  ]"
                >
                  <img
                    v-if="services.celebritiesContent.celebritiesImageUrl"
                    :src="services.celebritiesContent.celebritiesImageUrl"
                    alt="Celebrities Image"
                    :class="[
                      'servimg',
                      'pointer-events-none',
                      { laybimsizein: !services.celebritiesContent.clcontent },
                    ]"
                  />
                </div>
                <div :class="[
                    'textaup',
                    { texta: !services.productionContent.prcontent },
                  ]" class="flex pb-[3vh]">
                  <Richtext
                    v-if="services.celebritiesContent.clcontent"
                    class="contactinner pr-[4vw] pb-0 w-[50%]"
                    :blocks="services.celebritiesContent.clcontent"
                  ></Richtext>

                  <!-- If no cecontent, show alternative image -->
                  <img
                    v-else
                    :src="
                      services.celebritiesContent.celebritiesImageLayoutBUrl
                    "
                    alt="Celebrities Image Layout B"
                    class="laybimg pointer-events-none"
                  />

                  <Richtext
                    class="contactinner pr-[4vw] w-[50%] pb-0"
                    :class="[
                      'contactinner',
                      { 'pt-[7vh]': !services.celebritiesContent.clcontent },
                    ]"
                    :blocks="services.celebritiesContent.clcontent2"
                  ></Richtext>
                </div>
                <div class="flex justify-end locmb">
                  <div class="mbspace w-[50vw] p-[2vw] pt-0">
                    <p class="text-[#00000000]">space</p>
                  </div>
                  <div
                    :class="[
                      'locationtext',
                      { locationtextb: !services.celebritiesContent.clcontent },
                    ]"
                    class="w-[50vw] p-[2vw] pr-[3vw] pt-0"
                  >
                    <h1 class="loctext">Location</h1>
                    <a
                      class="loctextlink"
                      :href="services.celebritiesContent.clocationlink"
                      >{{ services.celebritiesContent.cllocation }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Music -->
          <div
            :class="{
              'slide-in':
                activeSection === 'music' || hoveredSection === 'music',
              'slide-out':
                activeSection !== 'music' && hoveredSection !== 'music',
            }"
            class="right-content overflow-y-scroll flex-1"
            @click="closeSection"
            v-if="
              services &&
              (activeSection === 'music' || hoveredSection === 'music')
            "
          >
            <div
              :class="[
                'allrcont',
                { allrcontb: !services.musicContent.mucontent },
              ]"
              v-if="
                services &&
                (activeSection === 'music' || hoveredSection === 'music')
              "
            >
              <div class="sevcont">
                <div class="titcont titmb">
                  <button class='pt-[4vw]' @click="closeSection">
                    <SvgClose class="headbarc w-[1.4vw] hover:cursor-pointer" />
                  </button>
                  <h1 class="loctext pt-2">Music</h1>
                </div>
                <div
                  :class="[
                    'sevimcon',
                    { laybimsize: !services.musicContent.mucontent },
                  ]"
                >
                  <img
                    v-if="services.musicContent.musicImageUrl"
                    :src="services.musicContent.musicImageUrl"
                    alt="Music Image"
                    :class="[
                      'servimg',
                      'pointer-events-none',
                      { laybimsizein: !services.musicContent.mucontent },
                    ]"
                  />
                </div>
                <div :class="[
                    'textaup',
                    { texta: !services.productionContent.prcontent },
                  ]" class="flex pb-[3vh]">
                  <Richtext
                    v-if="services.musicContent.mucontent"
                    class="contactinner pr-[4vw] pb-0 w-[50%]"
                    :blocks="services.musicContent.mucontent"
                  ></Richtext>

                  <!-- If no mcontent, show alternative image -->
                  <img
                    v-else
                    :src="services.musicContent.musicImageLayoutBUrl"
                    alt="Music Image Layout B"
                    class="laybimg pointer-events-none"
                  />

                  <Richtext
                    class="contactinner pr-[4vw] w-[50%] pb-0"
                    :class="[
                      'contactinner',
                      { 'pt-[7vh]': !services.musicContent.mucontent },
                    ]"
                    :blocks="services.musicContent.mucontent2"
                  ></Richtext>
                </div>
                <div class="flex justify-end locmb">
                  <div class="mbspace w-[50vw] p-[2vw] pt-0">
                    <p class="text-[#00000000]">space</p>
                  </div>
                  <div
                    c
                    :class="[
                      'locationtext',
                      { locationtextb: !services.musicContent.mucontent },
                    ]"
                    class="w-[50vw] p-[2vw] pr-[3vw] pt-0"
                  >
                    <h1 class="loctext">Location</h1>
                    <a
                      class="loctextlink"
                      :href="services.musicContent.mulocationlink"
                      >{{ services.musicContent.mulocation }}</a
                    >
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
import lottie from 'lottie-web';

export default {
  name: "IndexPage",

  components: {
    HeaderComponent,
  },

  data() {
    return {
      // activeSection: "design",
      activeSection: false,
      isMobile: false,
      // activeSection: null,
      hoveredSection: null,
      lottieInstance: null,
      hasHash: false,
    };
  },

  directives: {
    clickOutside: {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
  mounted() {
    this.checkViewport(); // Set the initial value based on viewport
    window.addEventListener("resize", this.checkViewport); // Add event listener for resizing

    this.checkHash();
    window.addEventListener("hashchange", this.checkHash); // Listen for changes to the URL


      // Set hoveredSection to 'design' if not on mobile
  if (!this.isMobile) {
    this.hoveredSection = 'design';
  }

  this.lottieInstance = lottie.loadAnimation({
      container: this.$refs.lottieAnimation3, // Lottie animation container reference
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/plus.json', // Path to your Lottie animation JSON file
    });

  },

  beforeDestroy() {
    window.removeEventListener("hashchange", this.checkHash);
    window.removeEventListener("resize", this.checkViewport); // Clean up event listener
  },

  methods: {
    checkHash() {
      // Check if the URL contains a hash
      this.hasHash = window.location.hash !== "";
    },
    onHover(section) {
      if (!this.isMobile) {
        this.hoveredSection = section; // Set hovered section for non-mobile devices
      }
    },
    onHoverLeave() {
      if (!this.isMobile) {
        this.hoveredSection = "section"; // Only reset for non-mobile devices
      }
    },

    // resetActiveSection() {
    //   if (!this.isMobile) {
    //     // this.activeSection = "design"; 
    //     // Only reset for non-mobile devices
    //     this.hoveredSection =  "design";
    //   }
    // },
   
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },

    openSection() {
      const rightContent = document.querySelector(".sevcont");
      if (rightContent && !this.isOpen) {
        rightContent.classList.add("slide-in");
        this.isOpen = true;
      }
    },
    
    closeSection() {
      const rightContentt = document.querySelector(".headbarc");
      // if (rightContent && this.isOpen) {
        // rightContent.classList.remove("slide-in");
        rightContentt.classList.add("rotatesvg");
        this.isOpen = false;
        this.activeSection = null;
      // }
    },
    
    checkViewport(section) {
      this.isMobile = window.innerWidth <= 768; // Set isMobile based on viewport width
      this.activeSection = this.isMobile ? false : " "; // Set activeSection based on isMobile

    // Update hoveredSection based on viewport
    
    if (!this.isMobile) {
      this.hoveredSection = "design";
    } else {
      this.hoveredSection = "";
    }
    },


    
    setActiveSection(section) {
      // Check if it's mobile or desktop and set the active section accordingly
      if (!this.isMobile) {
        if (this.activeSection === section) {
          this.activeSection = null; // Close the section if it's already active
        } else {
          this.activeSection = section; // Set the clicked section as active
        }

        // Set hoveredSection to null when a section is clicked
        this.hoveredSection = null;
      } else {
        // On mobile, just set the clicked section as active
        this.activeSection = section;
        this.hoveredSection = null; // Reset hover section on mobile
      }
    },
    // closeSection() {
    //   this.activeSection = null; // Close the active section
    // },

    handleClick() {
      if (this.isMobile && this.activeSection) {
        this.closeSection(); // Close the active section when clicked outside
      }
    },

    toggleActiveSection() {
      // Toggle between open and closed states
      this.activeSection = !this.activeSection;
    },
  },

  async asyncData({ params, $sanity, store }) {
    const query = groq`*[_type == "services"]{
    title,
    "designContent": {
      dcontent,
      dcontent2,
      dlocation,
      dlocationlink,
      "designImageUrl": dimage.asset->url,
      "designImageLayoutBUrl": dimageLayoutB.asset->url
    },
    "locationContent": {
      lcontent,
      lcontent2,
      llocation,
      llocationlink,
      "locationImageUrl": limage.asset->url,
      "locationImageLayoutBUrl": limageLayoutB.asset->url
    },
    "productionContent": {
      prcontent,
      prcontent2,
      prlocation,
      prlocationlink,
      "productionImageUrl": primage.asset->url,
      "productionImageLayoutBUrl": primageLayoutB.asset->url
    },
    "conciergeContent": {
      ccontent,
      ccontent2,
      clocation,
      clocationlink,
      "conciergeImageUrl": cimage.asset->url,
      "conciergeImageLayoutBUrl": cimageLayoutB.asset->url
    },
    "activityContent": {
      acontent,
      acontent2,
      alocation,
      alocationlink,
      "activityImageUrl": aimage.asset->url,
      "activityImageLayoutBUrl": aimageLayoutB.asset->url
    },
    "celebritiesContent": {
      clcontent,
      clcontent2,
      cllocation,
      cllocationlink,
      "celebritiesImageUrl": climage.asset->url,
      "celebritiesImageLayoutBUrl": climageLayoutB.asset->url
    },
    "musicContent": {
      mucontent,
      mucontent2,
      mulocation,
      mulocationlink,
      "musicImageUrl": muimage.asset->url,
      "musicImageLayoutBUrl": muimageLayoutB.asset->url
    },
    "productsContent": {
      pdcontent,
      pdcontent2,
      pdlocation,
      pdlocationlink,
      "productsImageUrl": pdimage.asset->url,
      "productsImageLayoutBUrl": pdimageLayoutB.asset->url
    },
    "moreContent": {
      mocontent,
      mocontent2,
      molocation,
      molocationlink,
      "moreImageUrl": moimage.asset->url,
      "moreImageLayoutBUrl": moimageLayoutB.asset->url
    },
  } | order(_updatedAt desc)[0]`;

    const services = await $sanity.fetch(query);

    //    // Debugging: Log the fetched data
    //    console.log('Fetched meta:', project.meta);
    // console.log('Fetched metaemails:', project.metaemails);

    // // Commit meta and metaemails to the Vuex store
    // store.commit('setMeta', project.meta);
    // store.commit('setMetaEmails', project.metaemails);

    return { services };
  },

  // computed: {
  //   ...mapState(["gridpub"]),
  // },

  computed: {
    ...mapState(["gridpub"]),
    isMenuOpen() {
      return this.$store.getters.isMenuOpen;
    },
  },
};
</script>

<style scoped>

.rotatesvg{
  transform: rotate(45deg);
  transition-property: transform;
  transition-duration: 3s;
}

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
  left: 77vw;
  padding-left: .85vw;
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
  font-size: 1vw;
  /* font-family: "GT-Bold"; */
  font-family: "MinionPro-Regular";
  text-transform: uppercase;
}

.loctextlink {
  font-size: smaller;
  font-size: 1vw;
  font-style: italic;
  text-transform: none;
  text-align: left;
  text-decoration: underline;
  font-family: "MinionPro-Regular";
  -webkit-text-decoration: underline;
}

.locationtextb {
  left: 54vw;
}

.allrcont {
  display: flex;
  top: 2vh;
  top: 7vh;
  top: 15vh;
  position: relative;
  width: 100%;
  /* height: 95%; */
  justify-content: center;
  align-items: flex-end;
  padding: 2rem;
  overflow-y: hidden;
}

.allrcontb {
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
  width: 25vw;
}

.laybimg {
  padding: 2vw;
  padding-left: 0;
  margin-right: .5vw;
  padding-top: 0vh;
  top: -8vh;
  position: relative;
  width: 20vw;
  width: 22.5vw;
}

.pte{
  top: -8vh;
  position: relative;
}

.contactinner div p {
  padding-bottom: 1vh;
}

.contactinner {
  font-size: 1.1vw;
  /* font-size: 1.4vw; */
  line-height: normal;
  top: 5vw;
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
  padding-left: 4vw;
  height: max-content;
  display: inline-block;
  padding-right: 4vw;
  transition-duration: 0.5s;
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
}

.titmb {
  display: none;
}

@media only screen and (max-width: 768px) {
  .laybimg {
    height: 32vh;
    top: 0vh;
    width: auto;
  }

  .laybimsizein {
    width: 54vw;
  }

  .laybimsize {
    position:relative !important;
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
    border-top: 0.05vw solid black;
    box-shadow: none;
  }

  .sevcont {
    width: 100%;
    top: 0;
    /* display: inline-flex; */
    position: relative;
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

  .textaup{
    position: relative;
    top: -2vh;
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
    font-size: 5vh;
    font-size: 4.2vh;
    /* font-size: 4vw; */
    color: black;
    font-weight: 100;
    padding-left: 7vw;
    padding-right: 7vw;
    padding-left: 10vw;
    padding-right: 10vw;
    transition-duration: 0.5s;
  }
}
</style>