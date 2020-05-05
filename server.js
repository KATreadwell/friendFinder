
const express = require("express");
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000

const htmlRoutes = require("./app/routing/htmlRoutes")
const apiRoutes = require("./app/routing/apiRoutes.js")

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//I want to show my backgrounds
app.use(express.static(__dirname +'/app/public'));
// app.get('/', function(req, res, next) {
//     res.sendFile(path.join(__dirname, '/home.html'));
// });

// app.use(express.static("app/public"))

htmlRoutes(app)
apiRoutes(app)

app.listen(PORT, function(){
    console.log("app is listening on http://localhost:" + PORT)
})
