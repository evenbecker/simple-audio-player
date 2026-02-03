<template>
  <Navbar />

  <RouterView />
  <div id="footer">
    <p>
      &copy; 2026 | Developed by Even Becker.
      <!--<img style="display: inline; margin: 0 3px;" alt="Vue logo" width="22px" height="auto" src="./assets/logo.svg">
    --></p>
  </div>
</template>
<script setup lang="ts">
import Navbar from "./components/Navbar/Navbar.vue";
import { RouterView } from "vue-router";
</script>
<style>
#app {
  background-color: #fafaff;
  color: #213547;
  font-family: "Verdana", "Arial";
}
#footer {
  width: 100%;
  /*min-height: 2vh;*/
  display: flex;
  padding: 0.175rem 0;
  justify-content: center;
  align-items: center;
  color: hsl(0, 0%, 96%);
  background-color: #4e4eac;
}

#footer > p {
  margin-top: 0.25rem;
  margin-bottom: 0.6rem;
  font-size: 0.85rem;
}
</style>
