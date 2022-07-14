<template>
  <NavBar />
  <router-view/>
  <footer-all/>
</template>
<script>
AOS.init();
import FooterAll from '@/components/FooterAll.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: "myApp", // Renaming the app so it won't conflict with the child component
  components: {
    FooterAll,
    NavBar
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
