<template>
  <div>
    <span class="rank" v-bind:style="rankstyle()" >{{rank.name}}</span>
    <span class="rank won" v-bind:style="wonstyle()" >{{rank.won}}</span>
    <span class="rank loss" v-bind:style="lossstyle()">{{rank.loss}}</span>
  </div>
</template>

<script>
export default {
  props: ['rank'],
  methods: {
    wonstyle () {
      var wonwidth = this.rank.won / (this.rank.max) * 90
      return {
        width: wonwidth + '%'
      }
    },
    lossstyle () {
      var losswidth = this.rank.loss / (this.rank.max) * 90
      return {
        width: losswidth + '%'
      }
    },
    rankstyle () {
      return {
        width: '5%',
        textAlign: 'center'
      }
    }
  }
}
</script>

<style scoped>
  .rank {
    display:inline-block;
    margin-top: 0.3em;
    border-radius: 0.3em;
    height: 1.8em;
    padding-left: 0.2em;
    padding-right: 0.2em;
    padding-top: 0.28em;
  }
  .won {
    background-color: #3385ff;
    text-align: left;
  }
  .loss {
    background-color: #cc2900;
    text-align: right;
  }
</style>
