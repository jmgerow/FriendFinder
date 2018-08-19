
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var newFriendResults = req.body.scores;
        var scoresArray = [];
        var topMatch = 0;

        //loop through friends list first   
        for (var i = 0; i < friends.length; i++) {
            var compareScores = 0;
            // then loop through scores to compare resuts
            for (var j = 0; j < newFriendResults.length; j++) {
                compareScores += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendResults[j])));
            }

            scoresArray.push(compareScores);
    
        };
        //assign top match
        for (var i = 0; i < scoresArray.length; i++){
            if(scoresArray[i] <= scoresArray[topMatch]){
                topMatch = i;
            }
        }
        
        var newBestFriend = friends[topMatch];
        res.json(newBestFriend);
        //push new entry to friends array after match is established to avoid user matching to themself
        friends.push(req.body);    
    });

};
