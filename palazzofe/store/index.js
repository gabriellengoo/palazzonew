export const state = () => ({
  menu: false,
  menudesk: false,
})



export const mutations = {


  TOGGLE_MENU(state) {
    state.menu = !state.menu
  },
  CLOSE_MENU(state) {
    state.menu = false
  },
  TOGGLE_MENUDESK(state) {
    state.menudesk = !state.menudesk
  },
  CLOSE_MENUDESK(state) {
    state.menudesk = false
  },
}


export const actions = {

}
