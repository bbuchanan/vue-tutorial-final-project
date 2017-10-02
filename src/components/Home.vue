<template>
<div>
  <div class="jumbotron">
    <h2>Trade or View your portfolio</h2>
    <p>You may save &amp; load your data</p>
    <p>Click on 'End Day' to begin a new day!</p>
    <hr>
    <br>
    <h3>Your Funds: {{ totalFunds | money }}</h3>
  </div>
</div>  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      totalFunds: 'totalFunds'
    })
  }
}
</script>

<style>

</style>
