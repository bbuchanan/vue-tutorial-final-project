<template>
<div class="panel panel-success">
  <div class="panel-heading">
    <div class="row">
      <div class="col-md-9">
        <h3>{{stock.name}}</h3>
      </div>
      <div class="col-md-3">
        <b>(Price: {{stock.price | money}})</b>
      </div>
    </div>
  </div>
  <div class="panel-body">
    <div class="row">
      <div class="col-sm-6 col-md-5">
        <input type="text" placeholder="Quantity" v-model="quantity" />
      </div>
      <div class="col-sm-6 col-md-7">
        <span class="pull-right"><button class="btn btn-success" @click="buy">Buy</button></span>
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
    buy() {
      this.stock.quantity = parseInt(this.quantity)
      this.$store.commit('buy', this.stock)
    }
  },
  props: ['stock']
}
</script>

<style>

</style>
