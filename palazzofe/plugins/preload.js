export default ({ store }) => {
    // Preload images as soon as the app is initialized
    store.dispatch('fetchGrid');
  };
  