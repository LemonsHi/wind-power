<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <BusinessIndicators />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BusinessIndicators from "./components/BusinessIndicators.vue";

export default {
  name: "app",
  components: {
    BusinessIndicators
  }
};
</script>

<style lang="scss">
#app {
  position: absolute;
  height: 100%;
  width: 100%;

  // background: rgba(0, 0, 0, 0.7);
}
</style>
