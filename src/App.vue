<template>
    <div class="container">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            'app-header': Header
        },

        created () {
            this.$store.commit('setInitialPrices')
        }
    }
</script>

<style>

</style>
