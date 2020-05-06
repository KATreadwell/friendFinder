//GET route with URL /api/friends > display JSON of all possible friends
//POST route with URL /api/friends to handle incoming survey results and compatibility logic

const friends = require("../data/friends.js")
const fs = require("fs")

function apiRoutes(app) {

    app.post("/api/friends", (req, res) => {
        const newCharacter = req.body;  
        //this is where you want to put logic for best match
        //2 starting var, lowest diff = 1000 and best match = [], for loop thru friends array (var Diff (for loop thru scores - take diff and loop thru each person, take absolute val))
        friends.push(newCharacter);  
        res.send(friends[2]);
    })
    app.get("/api/friends", (req, res) => {
        return res.json(friends);
    })
}

module.exports = apiRoutes