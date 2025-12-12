<template>
  <div class="centered" :class="darkMode ? 'background-dark' : ''">
    <div id="header">
      <div class="form-check form-switch mx-3 mt-2">
        <input type="checkbox" class="form-check-input me-2" id="darkSwitch" v-model="darkMode" />
        <label :class="darkMode ? 'text-light' : ''" for="darkSwitch">Dark mode</label>
      </div>
    </div>
    <AudioPlayer :option="option" />
    <div id="south">

      <div id="theSelect">
        <select name="MySelect" @change="onChange($event)" class="form-select"
          :class="darkMode ? 'bg-dark text-white' : ''" aria-label="Default select example">
          <option value="option2">Dry Cell - PeeWee</option>
          <option value="option1">MagnetiC - My Time to Shine</option>
          <option value="option3">Dry Cell - The Lie</option>
        </select>
      </div>
      <p class="reduceWidth" :class="darkMode ? 'text-light' : ''">These mp3s were made freely available by the artists.
        All right reserved to Dry Cell and
        MagnetiC.</p>
      <div class="myflex">
        <button class="btn btn-primary" @click="popup"> about {{ option.title.substring(0, 9) }}</button>
        <a href="https://evenbecker.netlify.app/" class="btn btn-secondary">Go home</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import AudioPlayer from './components/AudioPlayer.vue'
import Swal from 'sweetalert2'

const darkMode = ref(false)

const option1 = {
  src: "/assets/audio/02-My-Time-to-Shine.mp3",
  title: 'MagnetiC - My Time to Shine',
  coverImage: '/assets/audio/cover-Magnetic.jpg',
  drkmode: darkMode,
}
const option2 = {
  src: '/assets/audio/PeeWee.mp3',
  title: 'Dry Cell - PeeWee',
  coverImage:
    '/assets/audio/cover-DryCell.jpg',
  drkmode: darkMode,
}
const option3 = {
  src: '/assets/audio/DryCell-TheLie.mp3',
  title: 'Dry Cell - The Lie (unreleased sampler)',
  coverImage:
    '/assets/audio/cover-DryCell.jpg',
  drkmode: darkMode,
}
const option = ref(option2)

option.value = option2;
//option.value.drkmode = 
function popup() {
  if (option.value.title === option1.title) {
    Swal.fire({
      imageUrl: "/assets/Magnetic/magneticFinal.png",
      //imageHeight: 1500,
      imageAlt: "photos",
      html: `
    MagnetiC was formed in autumn 2009 in Moscow. The band style might be described as rough alternative with nu metal. In 2012 MagnetiC has recorded debut album 'One Step to the Sun' and shot first musical video. Sadly, the label didn't officially release the album. The reason is unknown. The band is currently on hiatus. Their album is available on 
    <a href="https://soundcloud.com/marinamagnetic" target="_blank">Soundcloud</a>.
  `
    });
  } else {
    Swal.fire({
      html: `Dry Cell was an American nu metal band formed in 1998 in California. In 2001, they recorded their first album in the same studio than Linkin Park, Trust Company and Papa Roach. Chester was there when they recorded "Body Crumbles". The band is defunct since 2010. More info on <a href="https://en.wikipedia.org/wiki/Dry_Cell_(band)" target="_blank">Wikipedia</a>. You can listen to their songs on
    <a href="https://www.last.fm/music/Dry+Cell/+wiki" target="_blank">last.fm</a>.
  `,
      imageUrl: "/assets/drycell-logo.png",
      //imageHeight: 1500,
      imageAlt: "photos"
    });
  }
}

function onChange(event: Event) {
  console.log((event.target as HTMLInputElement).value);
  if ((event.target as HTMLInputElement).value === 'option1') {
    option.value = option1;
  }
  else if ((event.target as HTMLInputElement).value === 'option2') {
    option.value = option2;
  }
  else if ((event.target as HTMLInputElement).value === 'option3') {
    option.value = option3;
  }
  //option.value = option3; 
  //option.value = (event.target as HTMLInputElement).value; 
  //(event.target as HTMLInputElement).value;

}

</script>
<style>
#app {
  margin: 0 auto;
  background-color: #FAFAFF;
  font-family: 'Verdana', 'Arial';

}

.centered {
  margin-bottom: 3rem;
  /*background-color: rgb(220, 241, 246);*/
  text-align: center;
}

#south {
  margin-top: 6px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#theSelect {
  width: 280px;
  margin-bottom: 1.75rem;
}

.myflex {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}

p.reduceWidth {
  width: 80%;
  margin-bottom: 1.75rem;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 100%;
}

.background-dark {
  background-color: rgb(32, 34, 39);
}
</style>