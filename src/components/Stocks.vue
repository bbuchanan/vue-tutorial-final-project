<template>
  <div>
  Welcome to the Stocks page
    <div class="row" v-for="i in Math.ceil(stocks.length / 3)">
      <div class="col-md-6" v-for="stock in stocks.slice((i - 1) * 2, i * 2)">
        <app-stock-view :stock="stock"></app-stock-view>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  components: {
    'app-stock-view': Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}

</script>

<style>

</style>
