let mongoose = require("../mongoose");

let transactionSchema = mongoose.Schema(
  {
    transactions: [],
  },
  {
    autoCreate: true,
  }
);
let Transaction = mongoose.model(
  "Transaction",
  transactionSchema,
  "Transaction"
);

module.exports = Transaction;
