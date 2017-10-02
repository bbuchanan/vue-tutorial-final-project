export const stockHelper = {
  getInitialPrice() {
    return Math.floor(Math.random() * 100) + 1
  },

  getPrice(price) {
    let movement = Math.floor(Math.random() * 10)
    movement = Math.floor(Math.random() * 2) == 1 ? 1 : -1 // random up or down movement
    price = price + (price * (movement / 10.0))
    return Math.round(price * 100) / 100
  }
}
