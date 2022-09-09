export default {
  namespaced: true,
  state: {
    comparePhotos: [],
  },
  actions: {
    addComparePhoto: ({ commit }, photo) => {
      commit("ADD_COMPARE_PHOTO", photo);
    },
    removeComparePhoto: ({ commit }, photo) => {
      commit("REMOVE_COMPARE_PHOTO", photo);
    },
  },
  mutations: {
    ADD_COMPARE_PHOTO: (state, photo) => {
      state.comparePhotos.push(photo)
    },
    REMOVE_COMPARE_PHOTO: (state, photo) => {
      const index = state.comparePhotos.findIndex((x) => x.id === photo.id);
      if (index !== -1) {
        state.comparePhotos.splice(index, 1);
      }
    },
  },
  getters: {
    getComparisionPhotos: (state) => state.comparePhotos,
  },
};
