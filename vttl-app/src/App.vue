<template>
  <div id="app" >
    <player v-bind:player="player"></player>
  </div>
</template>

<script>

import Player from './components/player/Player'

export default {
  name: 'App',
  components: {
    Player
  },
  data () {
    return {
      player: {
        firstname: 'Lander',
        lastname: 'Dannaux',
        rank: 'NG',
        ranks: [{
          name: 'NG',
          won: 37,
          loss: 3,
          max: 40
        }, {
          name: 'E2',
          won: 6,
          loss: 8,
          max: 40
        }, {
          name: 'E6',
          won: 16,
          loss: 7,
          max: 40
        }],
        img: 'https://competitie.vttl.be/photos/1718/small/' + 'Lander' + '.' + 'Dannaux' + '.' + 522436 + '.jpg'
      }
    }
  }
}
</script>

<style>
 #app {
   background-image: url('./assets/batnet.jpg');
   background-size: 100%;
 }
</style>
