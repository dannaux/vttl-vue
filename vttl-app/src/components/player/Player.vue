<template>
    <div class="ui fluid card">
      <div class="image">
        <img class="playerPic" v-bind:src="player.img || 'assets/unknown.jpg'"/>
      </div>
      <div class="content">
        <span>
          <div>{{player.firstname}} {{player.lastname}} - {{player.rank}}</div>
        </span>
        <rank-bar-list v-bind:ranks="player.ranks"></rank-bar-list>
      </div>
    </div>
</template>

<script>
import RankBarList from './RankBarList'

export default {
  props: ['player'],
  components: {
    RankBarList
  }
}
</script>

<style>
 .player {
   background-color: #ffffffb0;
   padding-top: 1em;
   padding-left: 1em;
 }
 .playerPic {
   width: 20em;
   height: 20em;
   border-width: 2em;
   border-color: #ffffff;
   border-radius: 1.5em;
 }
</style>
