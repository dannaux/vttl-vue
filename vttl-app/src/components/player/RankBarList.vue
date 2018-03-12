<template>
    <div>
        <rank-bar v-for="rank in ranks" v-bind:rank="rank" :key="rank.id"></rank-bar>
    </div>
</template>

<script>
import RankBar from './RankBar'

export default {
  props: ['ranks'],
  components: {
    RankBar
  }
}
</script>

<style>

</style>
