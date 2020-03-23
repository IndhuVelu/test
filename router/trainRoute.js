const router1 = (app) => {
    const trainDetails = require('../controller/trainDetails')
    const auth = require("../service/auth")
    // searching the starting location
    app.post('/fromSort', async function (req, res) {
        console.log(req.body)
        var result = await trainDetails.fromSort(req, res);
        res.send(result)
    });
    // searching the ending location
    app.post('/toSort', async function (req, res) {
        console.log(req.body)
        var result = await trainDetails.toSort(req, res);
        res.send(result)
    });
    // searching the train for particular starting and ending location
    app.post('/search', async function (req, res) {
        var result = await trainDetails.search(req, res);
        try {
            res.send(result);
        } catch (e) {
            res.send(e)
        }
    });
    // sorting the train name in ascending order
    app.post('/nameSort', async function (req, res) {
        var result = await trainDetails.nameSort(req, res);
        try {
            res.send(result);
        } catch (e) {
            res.send(e)
        }
    });
    // sorting the train name in descending order
    app.post('/nameRevSort', async function (req, res) {
        var result = await trainDetails.nameRevSort(req, res);
        try {
            res.send(result);
        } catch (e) {
            res.send(e)
        }
    });
    // sorting the arrival time in ascending order
    app.post('/arrivalSort', async function (req, res) {
        var result = await trainDetails.arrivalSort(req, res);
        try {
            res.send(result);
        } catch (e) {
            res.send(e)
        }
    });
    // sorting the arrival time in descending order
    app.post('/arrivalRevSort', async function (req, res) {
        var result = await trainDetails.arrivalRevSort(req, res);
        try {
            res.send(result);
        } catch (e) {
            res.send(e)
        }
    });
    // sorting the depature time in ascending order
    app.post('/departSort', async function (req, res) {
        var result = await trainDetails.departSort(req, res);
        try {
            res.send(result);
        } catch (e) {
            res.send(e)
        }
    });
    // sorting the depature time in descending order
    app.post('/departRevSort', async function (req, res) {
        var result = await trainDetails.departRevSort(req, res);
        try {
            res.send(result);
        } catch (e) {
            res.send(e)
        }
    });
    // getting train name
    app.post('/trainName', async function (req, res) {
        var result = await trainDetails.trainName(req, res);
        try {
            res.send(result);
        } catch (e) {
            res.send(e)
        }
    });

}

module.exports = router1;