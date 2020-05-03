const express = require("express");
const path = require("path")

// const htmlRoutes = require("./app/routing/htmlRoutes")
// const apiRoutes = require("./app/routing/apiRoutes.js")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// htmlRoutes(app)
// apiRoutes(app)


app.listen(PORT, function(){
    console.log("app is listening on http://localhost:" + PORT)
})
