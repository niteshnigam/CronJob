const mongoose = require("mongoose");

class Mongoose {
  constructor() {
    try {
      mongoose.connect("mongodb://localhost:27017/Binance", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      return mongoose;
    } catch (err) {
      console.log("Mongo Error: \n", err);
    }
  }
}

module.exports = new Mongoose();
