<template>
  <div class="photolist-container">
    <div><h3>Photo List</h3></div>
    <p class="loader" v-if="isDataLoading">Loading...</p>
    <div v-if="!isDataLoading" class="photo-list">
      <PhotoListItem
        v-for="(photo, index) in photosData"
        :key="index"
        :item="photo"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PhotoList",
  components: {
    PhotoListItem: () =>
      import(/* webpackPrefetch: true */ "@/components/PhotoListItem"),
  },
  created() {
    this.GET_PHOTOS();
  },
  computed: {
    ...mapGetters("photos", {
      isDataLoading: "getIsDataLoading",
      photosData: "getPhotos",
    }),
  },
  methods: {
    ...mapActions("photos", ["GET_PHOTOS"]),
  },
};
</script>
<style scoped>
.photo-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-height: 25rem;
  overflow-y: auto;
  overflow-x: hidden;
}
.loader {
  padding: 1rem;
}
</style>
