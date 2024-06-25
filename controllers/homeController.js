const Player = require('../models/player');

module.exports.home = async (req, res) => {
    try {
        console.log("home");
        console.log(req.body);
        console.log(req.query);
        console.log(req.params);
        console.log(JSON.stringify(req.headers));
        console.log(req.header("postman-token"));
        return res.status(204).json({});

    } catch(err) {
        let message = `Error in executing home of homeController ${err}`;
        console.log(message);
        return res.status(500).json({
            message
        });
    }
}