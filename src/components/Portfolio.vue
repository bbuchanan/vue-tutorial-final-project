<template>
  <div>
  Welcome to the Portfolio page
    <div class="row" v-for="i in Math.ceil(stocks.length / 3)">
      <div class="col-md-6" v-for="stock in stocks.slice((i - 1) * 2, i * 2)">
        <app-stock-sell-view :stock="stock"></app-stock-sell-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sell from './Sell.vue'
export default {
  components: {
    'app-stock-sell-view': Sell
  },
  computed: {
    stocks() {
      return this.$store.getters.portfolio
    }
  }
}

</script>

<style>

</style>
