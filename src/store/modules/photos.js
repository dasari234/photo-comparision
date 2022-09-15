import { getPhotos } from "@/services/photo-compare";

export default {
  namespaced: true,
  state: {
    comparePhotos: [],
    photos: null,
    isDataLoading: true,
  },
  actions: {
    ADD_PHOTO: ({ commit }, photo) => {
      commit("ADD_COMPARE_PHOTO", photo);
    },
    REMOVE_PHOTO: ({ commit }, photo) => {
      commit("REMOVE_COMPARE_PHOTO", photo);
    },
    async GET_PHOTOS({ commit }) {
      commit("TOGGLE_IS_DATA_LOADING", true);
      try {
        const { data } = await getPhotos();
        if (data !== undefined) {
          setTimeout(() => {
            commit("TOGGLE_IS_DATA_LOADING", false);
          }, 300);

          const photos = data.slice(0, 500).map((item) => {
            item.isCompare = false;
            return item;
          });

          commit("SET_PHOTOS_DATA", photos);
        }
      } catch (err) {
        console.log("Something went wrong");
      }
    },
  },
  mutations: {
    ADD_COMPARE_PHOTO: (state, photo) => {
      state.comparePhotos.push(photo);
    },
    REMOVE_COMPARE_PHOTO: (state, photo) => {
      const index = state.comparePhotos.findIndex((x) => x.id === photo.id);
      if (index !== -1) {
        state.comparePhotos.splice(index, 1);
      }
    },
    SET_PHOTOS_DATA: (state, data) => {
      state.photos = data;
    },
    TOGGLE_IS_DATA_LOADING: (state, data) => {
      state.isDataLoading = data;
    },
  },
  getters: {
    getComparisionPhotos: (state) => state.comparePhotos,
    getIsDataLoading: (state) => state.isDataLoading,
    getPhotos: (state) => state.photos,
  },
};
