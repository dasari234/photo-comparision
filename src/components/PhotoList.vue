<template>
  <div class="photolist-container">
    <div><h3>Photo List</h3></div>
    <p class="loader" v-if="isDataLoading">Loading...</p>
    <div v-if="!isDataLoading" class="photo-list">
      <PhotoListItem
        v-for="(photo, index) in photos"
        :key="index"
        :item="photo"
      />
    </div>
  </div>
</template>

<script>
import { getPhotos } from "@/services/photo-compare";

export default {
  name: "PhotoList",
  components: {
    PhotoListItem: () =>
      import(/* webpackPrefetch: true */ "@/components/PhotoListItem"),
  },
  data: () => ({
    photos: null,
    isDataLoading: true,
  }),
  created() {
    this.getPhotos();
  },
  methods: {
    async getPhotos() {
      this.isRefresh = true;
      try {
        const { data } = await getPhotos();
        if (data !== undefined) {
          setTimeout(() => {
            this.isDataLoading = false;
          }, 500);
          this.photos = data.slice(0, 500).map((item) => {
            item.isCompare = false;
            return item;
          });
        }
      } catch (err) {
        console.log("Something went wrong");
      }
    },
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
