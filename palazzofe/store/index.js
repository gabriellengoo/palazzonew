export const state = () => ({
  grid: [],
  gridd: [],
  gridpub: [],
  gridaw: [],
  gridteam: [],
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
  SET_GRIDTEAM(state, grid5) {
    state.gridteam = grid5
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
  setMenuState(state, status) {
    state.isMenuOpen = status;
  },
}



export const getters = {
  isMenuOpen: (state) => state.isMenuOpen,
};


import { groq } from '@nuxtjs/sanity'

export const actions = {
  async nuxtServerInit({ commit }) {
    // weddings Grid
    const gridQuery = groq`*[_type == "works" ] 

    {title, grid[] {
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


const gridQuery5 = groq`*[_type == "team" ]
{  titlec,
  grid7[] {
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




  const grid = await this.$sanity.fetch(gridQuery)
  // console.log('Grid Query Result:', grid) 
    commit('SET_GRID', grid)


    const gridd = await this.$sanity.fetch(gridQuery2)
    // console.log('Grid2 Query Result:', grid2)
    commit('SET_GRIDD', gridd)
    // commit('SET_GRID3', grid2.grid3);


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

  
    // Contact
    // const contactQuery = groq`*[_type == "about" ] {contactDetails} | order(_updatedAt desc)[0]`
    // const contact = await this.$sanity.fetch(contactQuery)
    // commit('SET_CONTACT', contact.contactDetails)
  },

  setTitle({ commit }, title) {
    commit('SET_TITLE', title)
  },
}