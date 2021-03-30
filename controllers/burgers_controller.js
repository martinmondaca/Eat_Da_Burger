//import Express, burger.js
var express = require("express");

var router = express.Router();

//importing burger model
var burger = require("../models/burger.js")

router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log(data)
        var burgerObject = {
            burgers: data
        }
        res.render("index", burgerObject)

    })

});

router.post("/api/burger", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, false
    ], function (res) {
        res.json({ id: res.insertId })
    })
});

router.put("api.burger/:id", function (req, res) {
    burger.updateOne
});


//create router and export router
module.exports = router;