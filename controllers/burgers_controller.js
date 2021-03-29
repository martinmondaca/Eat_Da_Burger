//import Express, burger.js
var express = require("express");

var router = express.Router();

//importing burger model
var burger = require("../models/burger.js")

router.get("/", function (req, res) {
    burger.selectAll
});

router.post("/api/burger", function (req, res) {
    burger.insertOne
});

router.put("api.burger/:id", function (req, res) {
    burger.updateOne
});


//create router and export router
module.exports = router;