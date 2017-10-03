<template>
<div>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to='/'>Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link to='/Portfolio' tag="li" active-class="active"><a>Portfolio</a></router-link>
          <router-link to='/Stocks' tag="li" active-class="active"><a>Stocks</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li @click="endDay"><a href="#">End Day</a></li>
          <li class="dropdown" :class="{open: isDropDownOpen }" @click="isDropDownOpen = !isDropDownOpen">
            <a href="#" class="dropdown-toggle"
            data-toggle="dropdown"
            role="button" aria-haspopup="true"
            aria-expanded="false">Save &amp; Load<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li @click="saveState"><a href="#">Save Data</a></li>
                <li @click="restoreState"><a href="#">Load Data</a></li>
              </ul>
          </li>
          &nbsp;
          <li><a href="#"><b>Funds: {{ totalFunds | money }}</b></a></li>
        </ul>
      </div>
    </div>
  </nav>
</div>  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      isDropDownOpen: false
    }
  },
  computed: {
    ...mapGetters({
      totalFunds: 'totalFunds'
    }),
  },
  methods: {
    endDay() {
      this.$store.dispatch('endDay')
    },
    saveState() {
      this.$store.dispatch('saveState')
    },
    restoreState() {
      this.$store.dispatch('restoreState')
    }
  }
}
</script>

<style>

</style>
