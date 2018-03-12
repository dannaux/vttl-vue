<template>
  <div id="app">
    <rank-bar-list v-bind:ranks="ranks"></rank-bar-list>
  </div>
</template>

<script>

import RankBar from './components/player/RankBar'
import RankBarList from './components/player/RankBarList'

export default {
  name: 'App',
  components: {
    RankBarList,
    RankBar
  },
  data () {
    return {
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
      }]
    }
  }
}
</script>

<style>
</style>
