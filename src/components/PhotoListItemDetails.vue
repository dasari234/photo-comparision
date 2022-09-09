<template>
  <div class="photos-list__info">
    <div class="photos-list__item-thumbnail">
      <img :src="info.thumbnailUrl" />
    </div>
    <div class="photos-list__item-title">{{ info.title }}</div>
    <div class="photos-list__item-id">{{ info.id }}</div>
    <div class="photos-list__item-url">{{ info.url }}</div>
  </div>
</template>

<script>
export default {
  name: "PhotoListItemDetails",
  props: { info: { type: Object, default: null } },
};
</script>
<style scoped>
.photos-list__info {
  display: flex;
  flex-direction: column;
}
.photos-list__info div {
  margin-bottom: 0.5rem;
}
.photos-list__item-title {
  font-size: 1rem;
}

.photos-list__item-url {
  word-break: break-all;
}

.comparision-list .photos-list__info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.comparision-list .photos-list__info div {
  border-left: 1px solid #ccc;
  padding: .5rem;
  width: 10%;
  margin-bottom: 0rem;
}
.comparision-list .photos-list__info div:first-child {
  border-left: 0px solid #ccc;
}
.comparision-list .photos-list__info :nth-child(2) { order: 1; }
</style>
