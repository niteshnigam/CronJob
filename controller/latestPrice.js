const btcUsdPrice = require('../models/btcUsdPrice');

function latestPrice(req) {
    try {
        let getData = btcUsdPrice.findOne().sort({timeStamp:-1}).exec();
        return getData;
    } catch (error) {
        throw error
    }
}

module.exports = latestPrice;