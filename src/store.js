import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { stockHelper } from './stockHelper'
export const store = new Vuex.Store({
  state: {
    stocks: [{
      name: 'BMW', price: 0, quantity: 0 },
      { name: 'Google', price: 0, quantity: 0 },
      { name: 'Apple', price: 0, quantity: 0 },
      { name: 'Twitter', price: 0, quantity: 0 }
    ],
    totalFunds: 10000,
    portfolio: [
    ],
    savedStocks: [],
    savedTotalFunds: 0,
    savedPortfolio: []
  },
  mutations: {
    setInitialPrices(state) {
      this.state.stocks.forEach(function(element) {
        element.price = stockHelper.getInitialPrice()
      }, this);
    },
    buy(state, payload) {
      let funds = payload.price * payload.quantity
      if (funds > this.totalFunds) {
        return
      }

      this.state.totalFunds = this.state.totalFunds - funds
      let portfolioRecord = this.state.portfolio.find((element) => {
        return (payload.name === element.name)
      })

      if (portfolioRecord == undefined) {
        portfolioRecord = { name: payload.name, price: payload.price, quantity: 0 }
        this.state.portfolio.push(portfolioRecord)
      }

      portfolioRecord.quantity += payload.quantity
    },
    sell(state, payload) {
      let portfolioRecord = this.state.portfolio.find((element) => {
        return (payload.stock.name === element.name)
      })

      if (portfolioRecord == undefined) {
        return
      }

      let sellQuantity = payload.quantity
      if (sellQuantity > portfolioRecord.quantity) {
        sellQuantity = portfolioRecord.quantity
      }

      let funds = payload.stock.price * sellQuantity
      console.log(funds)
      this.state.totalFunds += funds
      portfolioRecord.quantity -= sellQuantity
      this.state.portfolio.splice(this.state.portfolio.indexOf(portfolioRecord), 1, portfolioRecord)
    },
    endDay(state) {
      this.state.stocks.forEach(function(element) {
        element.price = stockHelper.getPrice(element.price)
        let pr = this.state.portfolio.find((el) => {
          return element.name === el.name
        })
        if (pr) {
          pr.price = element.price
        }
      }, this);
    },
    saveState(state) {
      this.state.savedPortfolio = JSON.parse(JSON.stringify(this.state.portfolio))
      this.state.savedTotalFunds = this.state.totalFunds
      this.state.savedStocks = JSON.parse(JSON.stringify(this.state.stocks))
    },
    restoreState(state) {
      this.state.portfolio = JSON.parse(JSON.stringify(this.state.savedPortfolio))
      this.state.stocks = JSON.parse(JSON.stringify(this.state.savedStocks))
      this.state.totalFunds = this.state.savedTotalFunds
    }
  },
  actions: {
    'buy': ({commit}, payload) => {
      commit('buy', payload)
    },
    'setInitialPrices': ({commit}) => {
      commit('setInitialPrices')
    },
    'sell': ({commit}, payload) => {
      commit('sell', payload)
    },
    'endDay': ({commit}) => {
      commit('endDay')
    },
    'saveState': ({commit}) => {
      commit('saveState')
    },
    'restoreState': ({commit}) => {
      commit('restoreState')
    }
  },
  getters: {
    totalFunds: state => {
      return state.totalFunds
    },
    stocks: state => {
      return state.stocks
    },
    portfolio: state => {
      return state.portfolio
    }
  }
})