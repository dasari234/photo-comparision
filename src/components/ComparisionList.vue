<template>
  <div id="app">
    <div class="comparision-list">
      <div class="title"><div>COMPARISION TABLE</div></div>
      <div class="comparision-list__header" v-if="comparisionList.length > 0">
        <div></div> <div>ID</div> <div>URL</div><div>Title</div>
      </div>
      <div v-if="comparisionList.length > 0">
        <PhotoListItemDetails
          v-for="(photo, index) in comparisionList"
          :key="index"
          :info="photo"
        />
      </div>
      <div v-else class="no-data"><div>No data found</div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    PhotoListItemDetails: () =>
      import(/* webpackPrefetch: true */ "@/components/PhotoListItemDetails"),
  },
  computed: {
    ...mapGetters("photos", {
      comparisionList: "getComparisionPhotos",
    }),
  },
};
</script>
<style scoped>
.comparision-list {
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  border: 1px solid #ccc;
}
.title {
  font-size: 1.2rem;
  text-align: center;
}
.title div,
.no-data div {
  padding: 1rem;
}
.no-data {
  border-top: 1px solid #ccc;
}
.comparision-list__header {
    display: flex; flex-direction: row;
    justify-content:space-around;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;    
}
.comparision-list__header div{ padding: .5rem; width: 10%;}
</style>
