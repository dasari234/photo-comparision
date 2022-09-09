<template>
  <div class="photos-list__item">
    <PhotoListItemDetails :info="item" />
    <div class="photos-list__item-button">
      <button v-if="!item.isCompare" @click="addPhoto(item)">Compare</button>
      <button v-if="item.isCompare" @click="removePhoto(item)">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PhotoListItem",
  components: {
    PhotoListItemDetails: () =>
      import(/* webpackPrefetch: true */ "@/components/PhotoListItemDetails"),
  },
  props: { item: { type: Object, default: null } },
  data: () => ({}),
  created() {},
  methods: {
    ...mapActions("photos", ["addComparePhoto", "removeComparePhoto"]),
    addPhoto(item) {
      item.isCompare = true;
      this.addComparePhoto(item);
    },
    removePhoto(item) {
      item.isCompare = false;
      this.removeComparePhoto(item);
    },
  },
};
</script>
<style scoped>
.mb-5 {
  margin-bottom: 0.5rem;
}
.photos-list__item {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  width: 12%;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.5rem;
}

.photos-list__item-button {
  display: flex;
  justify-content: center;
}

button {
  padding: 0.5rem;
  cursor: pointer;
}
</style>
