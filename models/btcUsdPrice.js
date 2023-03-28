const mongoose = require("../db/db");
var ObjectId = mongoose.Schema.Types.ObjectId;

const btcUsdPrice = mongoose.Schema({
    price: {
        type: String,
        required: true,
    },
    symbol:{
        type: String,
        required: true,
    },
    timeStamp: {
        type: String,
        required: false,
    },
});

const about = mongoose.model("btcUsdPrice", btcUsdPrice);

module.exports = about;
