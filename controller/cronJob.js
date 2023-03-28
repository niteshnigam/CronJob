const btcUsdPrice = require('../models/btcUsdPrice');
const axios = require("axios");
var CronJob = require('cron').CronJob;
var job = new CronJob(
    '0 */5 * * * *',
   async function () {
       let response = await axios({
            method: 'get',
            url: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
        })
        const price = new btcUsdPrice({price:response.data.price,symbol:response.data.symbol,timeStamp:new Date().getTime()})
        await price.save();
    },

);

module.exports = job;

// https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT