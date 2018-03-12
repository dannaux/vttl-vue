<template>
    <div>
        <rank-bar v-for="rank in orderedRanks" v-bind:rank="rank" :key="rank.id"></rank-bar>
    </div>
</template>

<script>
import RankBar from './RankBar'

export default {
  props: ['ranks'],
  components: {
    RankBar
  },
  computed: {
    orderedRanks: function () {
      var rankstemp = this.ranks
      return rankstemp.sort((a, b) => { return b.name.localeCompare(a.name) })
    }
  }
}
</script>

<style>

</style>
