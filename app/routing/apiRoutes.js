//GET route with URL /api/friends > display JSON of all possible friends
//POST route with URL /api/friends to handle incoming survey results and compatibility logic

const friends = require("../data/friends.js")
const fs = require("fs")

function apiRoutes(app) {

    app.post("/api/friends", (req, res) => {
        const newFriend = req.body;  
        friends.push(newFriend)  
    })
    app.get("/api/friends", (req, res) => {
        return res.json(friends)
    })
}

module.exports = apiRoutes