<template>
  <main>
    <h1>404 - Oh no! <br />This page does not exist&#128542;.</h1>
    <div class="back">
      <router-link to="/">
        <button>Go Back</button>
      </router-link>
    </div>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
  color: rgb(41, 2, 61);
}
button {
  /* margin-top: 2rem; */
  padding: 0.5em;
  /* font-size: 1.5rem; */
  width: 180px;
  font-weight: 700;
  color: #fff;
  background-color: #4c3575;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
}
a {
  color: #fff;
  text-decoration: none;
}
button:hover,
a:hover {
  transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;

  background-color: rgb(255, 255, 255);
  color: #333;
  border-radius: 1px;
}
button:active {
  background-color: #333;
}
button:hover {
  border: #4c3575 3px solid;
}
.back {
  font-size: 1em;
  margin: 1.5em;
}
</style>
<script setup lang="ts"></script>
