export const state = () => ({
  grid: [],
  title: false,
  activeProject: false,
  activeTalent: false,
  footer: false,
  contact: false,
  menu: false,
})

export const mutations = {
  SET_GRID(state, grid) {
    state.grid = grid
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
}

import { groq } from '@nuxtjs/sanity'

export const actions = {
  async nuxtServerInit({ commit }) {
    // Home Grid
    const gridQuery = groq`*[_type == "works" ] {grid[] {_key, double, spacer, "video" : {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio , "thumbTime" : video.asset->thumbTime }, "image" : {"image" : image.asset._ref, "aspect" : image.asset->metadata.dimensions.aspectRatio, "size" : {"width" : image.asset->metadata.dimensions.width, "height" : image.asset->metadata.dimensions.height}, "position" : position}, link, title, year,"reference" : {"key" : reference._ref, "title" : reference->title, "clients" : reference->client[].label, "slug" : reference->slug.current, "talent" : reference->talent->title, "talentId" : reference->talent._ref, "team" : reference->team, "meta" : reference->meta}}} | order(_updatedAt desc)[0]`
    const grid = await this.$sanity.fetch(gridQuery)
    commit('SET_GRID', grid)

    // Contact
    // const contactQuery = groq`*[_type == "about" ] {contactDetails} | order(_updatedAt desc)[0]`
    // const contact = await this.$sanity.fetch(contactQuery)
    // commit('SET_CONTACT', contact.contactDetails)
  },

  setTitle({ commit }, title) {
    commit('SET_TITLE', title)
  },
}