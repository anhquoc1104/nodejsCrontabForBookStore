let mongoose = require("../mongoose");

let cartSchema = mongoose.Schema(
  {
    carts: [],
  },
  {
    autoCreate: true,
  }
);
let Cart = mongoose.model("Cart", cartSchema, "Cart");

module.exports = Cart;
