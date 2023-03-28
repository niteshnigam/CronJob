const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const job = require('./controller/cronJob')
const latestPrice = require('./controller/latestPrice')
const port = normalizePort(process.env.PORT || '3000');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

job.start()

app.get('/latest-price', async (req, res) => {

    try {
        let response = await latestPrice(req);
        let data = {...response.toObject(),localDateTime: new Date(parseInt(response.timeStamp)).toLocaleString()};
        res.status(200).json({
            data: data,
            message: 'data fetched successfully',
            success: true
        })
    } catch (error) {
        res.status(400).json({
            data: `${error}`,
            message: `${error.message}`|| "something went wrong",
            success: false
        })
    }
})
app.listen(port, console.log(`Listening to port ${port}...`));

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;

}