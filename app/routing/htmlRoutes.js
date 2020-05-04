//GET route to /survey to display survey page
//route to /home for home page

const path = require("path")

function htmlRoutes(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
} 

module.exports = htmlRoutes