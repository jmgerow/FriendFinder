
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
       res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        friends.push(req.body);

    });

    // app.post("/api/clear", function () {
    //     // Empty out the arrays of data
    //     friends = [];
    
    //     console.log(friends);
    // });
};

console.log(friends);