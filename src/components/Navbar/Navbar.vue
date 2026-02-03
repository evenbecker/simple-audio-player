<template>
  <div class="container-fluid py-2" id="navbar">
    <div class="row align-items-center w-100">
      <div class="col-2 justify-content-center">
        <RouterLink class="fs-4 fw-bold nav-link" aria-current="page" to="/"
          >Home</RouterLink
        >
      </div>
      <div class="col-2 h-100">
        <RouterLink class="fs-4 fw-bold nav-link" aria-current="page" to="/blog"
          >Blog</RouterLink
        >
      </div>
      <div class="col-8 h-100"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
import "./main.css";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
