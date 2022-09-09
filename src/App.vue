<template>
  <div id="app">
    <PhotoList />
    <ComparisionList />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    PhotoList: () =>
      import(/* webpackPrefetch: true */ "@/components/PhotoList"),
    ComparisionList: () =>
      import(/* webpackPrefetch: true */ "@/components/ComparisionList"),
  },
};
</script>
