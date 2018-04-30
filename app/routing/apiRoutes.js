var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    var surveyArray = req.body.scores;
    var compatibility = 41;
    var match;
    for(i = 0; i < friends.length; i++){
        var difference = 0;
        var tempArray = friends[i].scores;
        for(j = 0; j < tempArray.length; j++) {
            difference = Math.abs(parseInt(tempArray[j]) - parseInt(surveyArray[j])) + difference;
        }
        if(difference < compatibility) {
            compatibility = difference;
            match = friends[i];
        }
    }
    console.log(match);
    friends.push(req.body);
      res.json(match);
  });
}