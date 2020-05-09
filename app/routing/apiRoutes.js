//GET route with URL /api/friends > display JSON of all possible friends
//POST route with URL /api/friends to handle incoming survey results and compatibility logic

const friends = require("../data/friends.js")
const fs = require("fs")

function apiRoutes(app) {

    app.post("/api/friends", (req, res) => {
        const newCharacter = req.body;
        //this is where you want to put logic for best match
        //2 starting var, lowest diff = 1000 and best match = [], for loop thru friends array (var Diff (for loop thru scores - take diff and loop thru each person, take absolute val))

        console.log(newCharacter.scores)
        console.log(friends[0].scores)

        var differenceObj = {};
        var bestMatch;

        // newCharacter.scores;
        // friends.score[0];
        // ['1', '2', '5', '4', '4','2', '2', '1', '2', '1']
        // ['1', '1', '5', '1','3', '1', '1', '1','5', '1']
        // [0, 1, 0, 3, 1, 1, 1, 0, 3, 0]
        //Step 1 loop over Friends[mario character].scores and do checkdiff to compare against newCharacter.score
        //Step 2 store absolute values in results (diff for each character)
        //Step 3 make object to store difference per each character
        //Step 4 need to loop over stored values (in obj?)
        //Step 5 select "best match" as individual Friend with lowest sum of checkdiff scores

        function checkDiff(friend) {
            let scoreCheck = [];
            for (var i = 0; i < friend.scores.length; i++) {
                scoreCheck.push(Math.abs(parseInt(friend.scores[i]) - parseInt(newCharacter.scores[i])))
            }
            //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
            return scoreCheck.reduce(function (total, currentValue) {
                return total + currentValue;
            }, 0);
            // console.log(scoreCheckBowser);
        }

        friends.forEach(function (currentValue) {
            differenceObj[currentValue.name] = checkDiff(currentValue);
            console.log(differenceObj);

            // let bestMatch = (Math.min(differenceObj.Name));
            // console.log(bestMatch);
            for (var i = 0; currentValue.length; i++) {
                let bestMatch = Math.min(currentValue.scores);
                // return bestMatch.Name;
                console.log(bestMatch.Name)
            }

        })
        friends.push(newCharacter);
        res.send(friends[BestMatch]);
    });
    app.get("/api/friends", (req, res) => {
        return res.json(friends);
    })
}

module.exports = apiRoutes