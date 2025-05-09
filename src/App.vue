<template>
  <div class="centered">
    <AudioPlayer :option="option" />    
    <div id="south">

      <div id="theSelect">
        <select name="MySelect" @change="onChange($event)" class="form-select" aria-label="Default select example" >
        <option value="option1">MagnetiC - My Time to Shine</option>
        <option value="option2">Dry Cell - PeeWee</option>
        <option value="option3">Dry Cell - The Lie</option>
        </select>          
      </div>
      <p class="reduceWidth">These mp3s were made freely available by the artists. All right reserved to Dry Cell and MagnetiC.</p>  
      <a href="https://evenbecker.netlify.app/" class="btn btn-primary">Go to home</a>

    </div>   
  </div>  
</template>
<script setup lang="ts">
import { ref } from 'vue'
import AudioPlayer from './components/AudioPlayer.vue'

const option1 = {
    src: "/assets/audio/02-My-Time-to-Shine.mp3",
    title: 'MagnetiC - My Time to Shine',
    coverImage: '/assets/audio/cover-Magnetic.jpg',
  }
  const option2 = {
    src: '/assets/audio/PeeWee.mp3',
    title: 'Dry Cell - PeeWee',
    coverImage:
      '/assets/audio/cover-DryCell.jpg',
  }
  const option3 = {
    src: '/assets/audio/DryCell-TheLie.mp3',
    title: 'Dry Cell - The Lie (unreleased sampler)',
    coverImage:
      '/assets/audio/cover-DryCell.jpg',
  }
  const option = ref(option1)
  
  option.value = option1;
  

 
  function onChange(event: Event) {
            console.log((event.target as HTMLInputElement).value);
            if((event.target as HTMLInputElement).value === 'option1'){
              option.value = option1;
            }
            else if((event.target as HTMLInputElement).value === 'option2'){
              option.value = option2;
            }
            else if((event.target as HTMLInputElement).value === 'option3'){
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
  background-color: #EFF0F1;
  font-family: 'Verdana', cursive;

}
.centered {
  margin-top: 25px;
  /*
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  */
  /*background-color: rgb(220, 241, 246);*/
  text-align: center;
}
#south{
  margin-top: 20px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#theSelect{
  width: 280px;
  margin-bottom: 30px;
}
p.reduceWidth{
  width: 80%;
  margin-bottom: 30px;
}
</style>