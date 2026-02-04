<template>
  <div class="container-fluid pt-1" id="navbar">
    <div class="d-flex flex-row justify-content-left align-items-center">
      <div class="ms-5">
        <img
          class="img-headphone"
          src="/assets/vecteezy_music-headphone_36651254.svg"
          alt="Ocean style"
        />
      </div>
      <div class="">
        <RouterLink class="fs-4 fw-bold nav-link" aria-current="page" to="/"
          >Home</RouterLink
        >
      </div>
      <div class="ms-5">
        <img
          class="img-metal"
          src="/assets/vecteezy_heavy-metal-guitarist_36652366.svg"
          alt="Ocean style"
        />
      </div>
      <div class="">
        <RouterLink class="fs-4 fw-bold nav-link" aria-current="page" to="/blog"
          >Blog</RouterLink
        >
      </div>
      <div class=""></div>
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

<style scoped>
.img-headphone {
  height: 48px;
  width: auto;
}
.img-metal {
  height: 59px;
  width: auto;
}
</style>
