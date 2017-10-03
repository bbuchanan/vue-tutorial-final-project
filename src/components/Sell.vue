<template>
<div class="panel panel-danger">
  <div class="panel-heading">
    <div class="row">
      <div class="col-md-6">
        <h3>{{stock.name}}</h3>
      </div>
      <div class="col-md-6">
        <b>(Price: {{stock.price | money}})</b> Qty: {{ stock.quantity }}
      </div>
    </div>
  </div>
  <div class="panel-body">
    <div class="row">
      <div class="col-sm-6 col-md-5">
        <input type="text" placeholder="Quantity" v-model="quantity" />
      </div>
      <div class="col-sm-6 col-md-7">
        <span class="pull-right"><button class="btn btn-danger" @click="sell">Sell</button></span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      quantity: ''
    }
  },
  methods: {
    sell() {
      let quantity = parseInt(this.quantity)
      this.$store.dispatch('sell', { 'stock': this.stock, quantity: quantity })
    }
  },
  props: ['stock']
}
</script>

<style>

</style>
