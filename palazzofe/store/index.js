export const state = () => ({
  grid: [],
  gridd: [],
  gridpub: [],
  gridaw: [],
  gridteam: [],
  gridpubindi: [],
  gridprod: [],
  title: false,
  activeProject: false,
  activeTalent: false,
  footer: false, 
  contact: false,
  menu: false,
  isMenuOpen: false,
})

export const mutations = {
  SET_GRID(state, grid) {
    state.grid = grid
  },
  SET_GRIDD(state, grid2) {
    state.gridd = grid2
  },  
  SET_GRIDPUB(state, grid3) {
    state.gridpub = grid3
  },  
  SET_GRIDAW(state, grid4) {
    state.gridaw = grid4
  },
  SET_GRIDTEAM(state, grid7) {
    state.gridteam = grid7
  },
  SET_GRIDPRESS(state, gridpress) {
    state.gridpubindi = gridpress
  },
  SET_GRIDPROD(state, grid8) {
    state.gridprod = grid8
  },
  SET_TITLE(state, title) {
    state.title = title
  },
  SET_ACTIVE_PROJECT(state, project) {
    state.activeProject = project
  },
  SET_ACTIVE_TALENT(state, talent) {
    state.activeTalent = talent
  },
  SET_FOOTER(state, footer) {
    state.footer = footer
  },
  SET_CONTACT(state, contact) {
    state.contact = contact
  },
  TOGGLE_MENU(state) {
    state.menu = !state.menu
  },
  CLOSE_MENU(state) {
    state.menu = false
  },
  toggleMenu(state) {
    state.isMenuOpen = !state.isMenuOpen;
  },
  setMenuState(state, isOpen) {
    state.isMenuOpen = isOpen;
  },
}






import { groq } from '@nuxtjs/sanity'

export const actions = {
  async nuxtServerInit({ commit }) {
    try {

      
    const gridQuerypress = groq`*[_type == "pressindi" ] {

   "slider": slider[]{
    _key,
    "images": images[]{
      _key,
      "image": image.asset->url,
    }
  },
} `
    
    // weddings Grid
    const gridQuery = groq`*[_type == "works" ] 
 
    {title, grid[] {
    _key, double, spacer, 
    "video" : {"id" : video.asset->playbackId, 
    "aspect" : video.asset->data.aspect_ratio , 
    "thumbTime" : video.asset->thumbTime }, 
    "image" : 
      {"image" : image.asset._ref, 
        _type,
        asset -> {
      _id,
      url,
      metadata
    },
      "aspect" : imageh.asset->metadata.dimensions.aspectRatio, 
      "size" : {"width" : imageh.asset->metadata.dimensions.width, 
      "height" : imageh.asset->metadata.dimensions.height}, 
      "position" : position }, 
      "imageh" : 
      { "imageh" : imageh.asset._ref,
        _type,
        asset -> {
      _id,
      url,
      metadata
    },
      "aspect" : image.asset->metadata.dimensions.aspectRatio, 
      "size" : {"width" : image.asset->metadata.dimensions.width, 
      "height" : image.asset->metadata.dimensions.height}, 
      "position" : position }, 
      portrait, day,
      link, title, year,
    "reference": reference->{
        _id,
        title,
        "slug" : slug.current,
        "slider": slider[] {
          _key,
          day, 
          images[] {
            _key,
            portrait,
            "imageUrl": image.asset->url
          }
        }
      }
         }
  } | order(_updatedAt desc)[0]`
    

  const gridQuery2 = groq`*[_type == "events" ] 
  {
    grid3[] {
  _key, double, spacer, 
  "video" : {"id" : video.asset->playbackId, 
  "aspect" : video.asset->data.aspect_ratio , 
  "thumbTime" : video.asset->thumbTime }, 
  "image" : 
    {"image" : image.asset._ref, 
    "aspect" : image.asset->metadata.dimensions.aspectRatio, 
    "size" : {"width" : image.asset->metadata.dimensions.width, 
    "height" : image.asset->metadata.dimensions.height}, 
    "position" : position }, 
    "imageh" : 
    { "imageh" : imageh.asset._ref,
    "aspect" : image.asset->metadata.dimensions.aspectRatio, 
    "size" : {"width" : image.asset->metadata.dimensions.width, 
    "height" : image.asset->metadata.dimensions.height}, 
    "position" : position }, 
    portrait, day,
    link, title, year, private,
  "reference": reference->{
      _id,
      title,
      "slug" : slug.current,
      "slider": slider[] { 
        _key,
        images[] {
          _key,
          portrait,
          "imageUrl": image.asset->url
        }
      }
    }
       },

    grid2[] {
  _key, double, spacer, 
  "video" : {"id" : video.asset->playbackId, 
  "aspect" : video.asset->data.aspect_ratio , 
  "thumbTime" : video.asset->thumbTime }, 
  "image" : 
    {"image" : image.asset._ref, 
    "aspect" : image.asset->metadata.dimensions.aspectRatio, 
    "size" : {"width" : image.asset->metadata.dimensions.width, 
    "height" : image.asset->metadata.dimensions.height}, 
    "position" : position }, 
    "imageh" : 
    { "imageh" : imageh.asset._ref,
    "aspect" : image.asset->metadata.dimensions.aspectRatio, 
    "size" : {"width" : image.asset->metadata.dimensions.width, 
    "height" : image.asset->metadata.dimensions.height}, 
    "position" : position }, 
    portrait, day,
    link, title, year, private,
  "reference": reference->{
      _id,
      title,
      "slug" : slug.current,
      "slider": slider[] {
        _key,
        images[] {
          _key,
          portrait,
          "imageUrl": image.asset->url
        }
      }
    }
       }
} | order(_updatedAt desc)[0]`

const gridQuery4 = groq`*[_type == "awards" ] 
{
  grid6[] {
_key, double, spacer, 
"video" : {"id" : video.asset->playbackId, 
"aspect" : video.asset->data.aspect_ratio , 
"thumbTime" : video.asset->thumbTime }, 
"image" : 
  {"image" : image.asset._ref, 
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  "imageh" : 
  { "imageh" : imageh.asset._ref,
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  portrait, day,
  link, title, year, years, yeart, private, month,
"reference": reference->{
    _id,
    title,
    "slug" : slug.current,
    "slider": slider[] {
      _key,
      images[] {
        _key,
        portrait,
        "imageUrl": image.asset->url
      }
    }
  }
     }
} | order(_updatedAt desc)[0]`


const gridQuery6 = groq`*[_type == "products" ] 
{
  film,
  filmtitle,
  grid8[] {
  film,
  filmtitle, 
_key, double, spacer, 
"video" : {"id" : video.asset->playbackId, 
"aspect" : video.asset->data.aspect_ratio , 
"thumbTime" : video.asset->thumbTime }, 
"image" : 
  {"image" : image.asset._ref, 
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  "imageh" : 
  { "imageh" : imageh.asset._ref,
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  portrait, day,
  link, title, year, years, yeart, private, month,
   content3,
"reference": reference->{
    _id,
    title,
    "slug" : slug.current,
    "slider": slider[] {
      _key,
      images[] {
        _key,
        portrait,
        "imageUrl": image.asset->url
      }
    }
  }
     }
} | order(_updatedAt desc)[0]`


const gridQuery5 = groq`*[_type == "team" ]
{  titlec,
  film,
  filmtitle, 
  grid7[] {
    seo {
      title,
      keywords
    },

          "imaget" : 
  { "imaget" : imaget.asset._ref,
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  
_key, double, spacer, 
"video" : {"id" : video.asset->playbackId, 
"aspect" : video.asset->data.aspect_ratio , 
"thumbTime" : video.asset->thumbTime }, 
"image" : 
  {"image" : image.asset._ref, 
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  "imageh" : 
  { "imageh" : imageh.asset._ref,
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  portrait, day,
  link, title, year, private, month, 
     content3,
      content4,
    
 
"reference": reference->{
    _id,
    title,
    
    "slug" : slug.current,
    "slider": slider[] {
      _key,
   
      images[] {
        _key,
        portrait,
        "imageUrl": image.asset->url
      }
    }
  }
     }
} | order(_updatedAt desc)[0]`


const gridQuery3 = groq`*[_type == "publications" ] 
{
  grid4[] {
    seo {
      title,
      keywords
    },
_key, double, spacer, 
"video" : {"id" : video.asset->playbackId, 
"aspect" : video.asset->data.aspect_ratio , 
"thumbTime" : video.asset->thumbTime }, 
"image" : 
  {"image" : image.asset._ref, 
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  "imageh" : 
  { "imageh" : imageh.asset._ref,
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  portrait, day, url,
  link, title, year, private, month,
"reference": reference->{
    _id,
    title,
    "slug" : slug.current,
    "slider": slider[] {
      _key,
      images[] {
        _key,
        portrait,
        "imageUrl": image.asset->url
      }
    }
  }
     },

  grid5[] {
    seo {
      title,
      keywords
    },
_key, double, spacer, 
"video" : {"id" : video.asset->playbackId, 
"aspect" : video.asset->data.aspect_ratio , 
"thumbTime" : video.asset->thumbTime }, 
"image" : 
  {"image" : image.asset._ref, 
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  "imageh" : 
  { "imageh" : imageh.asset._ref,
  "aspect" : image.asset->metadata.dimensions.aspectRatio, 
  "size" : {"width" : image.asset->metadata.dimensions.width, 
  "height" : image.asset->metadata.dimensions.height}, 
  "position" : position }, 
  portrait, day,url,
  link, title, year, private, month,
"reference": reference->{
    _id,
    title,
    "slug" : slug.current,
    "slider": slider[] {
      _key,
      images[] {
        _key,
        portrait,
        "imageUrl": image.asset->url
      }
    }
  }
     }
} | order(_updatedAt desc)[0]`

    

   // Preload images
   function preloadImages(images) {
    images.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }


  const grid = await this.$sanity.fetch(gridQuery)
  const gridd = await this.$sanity.fetch(gridQuery2)

  if (grid) {
    commit('SET_GRID', grid)
  }
  if (gridd) {
    commit('SET_GRIDD', gridd) // Assuming "grid3" is the correct field
  }
    
  // commit('SET_GRID', grid)
  // commit('SET_GRIDD', gridd) 
  // const grid = await this.$sanity.fetch(gridQuery)
  // // console.log('Grid Query Result:', grid) 

  //   // commit('SET_GRID', Array.isArray(grid) ? grid : [])

  //     // Preload images
  //     grid.forEach(image => {
  //       const img = new Image();
  //       img.src = image.src; // Preload image
  //     });

  //     commit('SET_GRID', grid)

  //   const gridd = await this.$sanity.fetch(gridQuery2)
  //   // console.log('Grid2 Data:', gridd)    
  //   // commit('SET_GRIDD', Array.isArray(gridd) ? gridd : [])
  //   commit('SET_GRIDD', gridd);


    const gridpub = await this.$sanity.fetch(gridQuery3)
    // console.log('Grid2 Query Result:', grid2)
    commit('SET_GRIDPUB', gridpub)
    // commit('SET_GRID3', grid2.grid3);


    const gridaw = await this.$sanity.fetch(gridQuery4)
    // console.log('Grid2 Query Result:', grid2)
    commit('SET_GRIDAW', gridaw)
    // commit('SET_GRID3', grid2.grid3);

    const gridteam = await this.$sanity.fetch(gridQuery5)
    // console.log('Grid2 Query Result:', grid2)
    commit('SET_GRIDTEAM', gridteam)
    // commit('SET_GRID3', grid2.grid3);

    const gridprod = await this.$sanity.fetch(gridQuery6)
    // console.log('Grid2 Query Result:', grid2)
    commit('SET_GRIDPROD', gridprod)
    // commit('SET_GRID3', grid2.grid3);


    const gridpubindi = await this.$sanity.fetch(gridQuerypress)
    // console.log('Grid2 Query Result:', grid2)
    commit('SET_GRIDPRESS', gridpubindi)
    // commit('SET_GRID3', grid2.grid3);
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
}

export const getters = {
  isMenuOpen: (state) => state.isMenuOpen,

  grid: (state) => state.grid,
};